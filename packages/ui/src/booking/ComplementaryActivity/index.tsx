import { useEffect, useMemo, useRef } from "react";
import { ImageCard, Text } from "@swiss-activities/ui";
import dayjs from "dayjs";
import { useShallow } from "zustand/react/shallow";
import { useComplementaryStore } from "./store";
import { useBooking } from "../hooks";
import { useBookingStore } from "../store";
import { Button } from "@swiss-activities/ui";
import { I } from "../components/I";
import { StaticImage } from "../components/StaticImage";
import { useSearchStore } from "../store/search";
import type { TBooking } from "../types/booking";
import type { TCart } from "../types/cart";
import { cn } from "../utils/css/cn";
import { secureLocalStorage } from "../utils/data/secureLocalStorage";
import { DateService } from "../utils/dates/DateService";
import { useI18n } from "../utils/i18n/useI18n";
import { useDataLayer } from "../utils/thirdParty/dataLayerSend";
import { useGetActivity } from "../query/activity/getActivity";
import { useGetCart } from "../query/booking/getCart";

type ComplementaryActivityProps = {
  booking?: TBooking;
  index: number;
  item: TCart["reservations"][0]["complementaryReferences"][0];
  mainActivityId: number;
  mainOfferId: number;
  type: "md" | "lg";
};

const ComplimentaryActivity = ({
  booking,
  index,
  item,
  mainActivityId,
  mainOfferId,
  type,
}: ComplementaryActivityProps) => {
  const { dataLayer } = useDataLayer();
  const { t, locale } = useI18n();
  const { data: cart } = useGetCart(
    secureLocalStorage.getItem("cartId") as string
  );
  let [_, setDate] = useSearchStore((state) => [state.date, state.setDate]);
  const { data: activity, isLoading: isLoadingActivity } = useGetActivity(
    `${item.complementary_capi_activity_id}`,
    locale
  );
  const { reset } = useBookingStore(
    useShallow((state) => ({
      reset: state.reset,
    }))
  );
  const { setCurrentReference } = useComplementaryStore(
    useShallow((state) => ({
      setCurrentReference: state.setCurrentReference,
    }))
  );

  const { openBooking } = useBooking();

  const handleClick = () => {
    const id = activity?.dataLayer?.id;
    const price = activity?.summary?.minAdultPrice?.amount
      ? Number(activity.summary.minAdultPrice.amount)
      : 0;

    const item: { [key: string]: string | number | boolean } = {
      algolia_item_id: `activity-${id}`,
      item_id: Number(id),
      item_name: activity?.dataLayer?.title || "",
      item_brand: activity?.dataLayer?.supplier || "",
      price,
      item_category: activity?.dataLayer?.breadcrumbs?.[0] || "",
      item_category2: activity?.dataLayer?.breadcrumbs?.[1] || "",
      item_category3: activity?.dataLayer?.type || "",
      item_category4: activity?.dataLayer?.attribute || "",
      reservation_provider: activity?.dataLayer?.reservationSystem || "",
      index,
      complimentary_for_id: mainActivityId,
      is_complimentary: true,
    };
    if (activity?.summary?.adStrategy) {
      item.commission_group_code = activity.summary.adStrategy;
    }

    dataLayer({
      data: {
        event: "select_item",
        ecommerce: {
          item_list_id: "complimentary_checkout",
          item_list_name: "Complimentary offers in checkout",
          items: [item],
        },
      },
      timeout: 0,
    });

    setCurrentReference({
      mainActivityId,
      mainOfferId,
      complementaryActivityId: Number(item.complementary_activity_id),
      complementaryOfferId: Number(item.complementary_offer_id),
    });

    if (booking || cart?.reservations[0].startsAt) {
      const date = DateService.formatDate(
        dayjs(
          booking ? booking?.items[0].startsAt : cart?.reservations[0].startsAt
        ).toDate()
      );
      setDate(date);
    }
    reset({
      offerId: Number(item.complementary_offer_id),
      active: "offers",
    });
    openBooking({
      activity,
      skipBookNow: true,
    });
  };

  if (isLoadingActivity) return;

  return (
    <ImageCard
      image={<StaticImage src={activity?.teaser_image.url} fill />}
      button={
        <Button
          icon={<I icon="plus" />}
          text={t("general.addTicket")}
          size="sm"
          type="white"
          onClick={handleClick}
          className={cn("mt-auto", {
            "sm:m-auto sm:w-max": type === "lg",
          })}
        />
      }
      className={cn("shadow-lg", {
        "[&>div:last-child]:sm:grid [&>div:last-child]:sm:grid-cols-2 [&>div:last-child]:sm:items-center [&>div:last-child]:sm:justify-center [&>div:last-child]:sm:gap-8 [&>div:last-child]:lg:gap-16":
          type === "lg",
      })}
    >
      <Text size="default" bold className="text-white">
        {item.text}
      </Text>
    </ImageCard>
  );
};

type ComplementaryItemWithContext = {
  item: TCart["reservations"][0]["complementaryReferences"][0];
  mainActivityId: number;
  mainOfferId: number;
};

export const ComplementaryActivities = ({
  booking,
  className,
  type = "md",
}: {
  booking?: TBooking;
  className?: string;
  type?: "md" | "lg";
}) => {
  const { dataLayer } = useDataLayer();
  const { locale } = useI18n();
  const hasSentViewItemList = useRef(false);
  const { data: cart } = useGetCart(
    booking ? "" : (secureLocalStorage.getItem("cartId") as string)
  );

  const complimentaryItems = useMemo(() => {
    const items: ComplementaryItemWithContext[] = [];

    if (!cart?.reservations && !booking?.items) return items;

    (booking ? booking.items : cart ? cart.reservations : []).forEach(
      (reservation) => {
        const mainActivityId = booking
          ? (reservation as TBooking["items"][0]).relatedIds?.activity_id
          : (reservation as TCart["reservations"][0]).activityId;
        const mainOfferId = booking
          ? (reservation as TBooking["items"][0]).relatedIds?.offer_id
          : (reservation as TCart["reservations"][0]).offerId;

        (reservation?.complementaryReferences || []).forEach((ref) => {
          items.push({
            item: ref,
            mainActivityId,
            mainOfferId,
          });
        });
      }
    );

    return items;
  }, [cart, booking]);

  const firstActivityId =
    complimentaryItems[0]?.item.complementary_capi_activity_id;
  const { data: firstActivity } = useGetActivity(
    firstActivityId ? `${firstActivityId}` : "",
    locale
  );

  useEffect(() => {
    if (
      complimentaryItems.length === 0 ||
      hasSentViewItemList.current ||
      type !== "md" ||
      !firstActivity
    )
      return;

    const items = complimentaryItems.map((itemData, index) => {
      const id = firstActivity?.dataLayer?.id;
      const item: { [key: string]: string | number | boolean } = {
        algolia_item_id: `activity-${id}`,
        item_id: Number(id),
        item_name: firstActivity?.dataLayer?.title || "",
        item_brand: firstActivity?.dataLayer?.supplier || "",
        price: firstActivity?.summary?.minAdultPrice?.amount
          ? Number(firstActivity.summary.minAdultPrice.amount)
          : 0,
        item_category: firstActivity?.dataLayer?.breadcrumbs?.[0] || "",
        item_category2: firstActivity?.dataLayer?.breadcrumbs?.[1] || "",
        item_category3: firstActivity?.dataLayer?.type || "",
        item_category4: firstActivity?.dataLayer?.attribute || "",
        reservation_provider: firstActivity?.dataLayer?.reservationSystem || "",
        index,
        complimentary_for_id: itemData.mainActivityId,
        is_complimentary: true,
      };
      if (firstActivity?.summary?.adStrategy) {
        item.commission_group_code = firstActivity.summary.adStrategy;
      }
      return item;
    });

    dataLayer({
      data: {
        event: "view_item_list",
        ecommerce: {
          item_list_id: "complimentary_checkout",
          item_list_name: "Complimentary offers in checkout",
          items,
        },
      },
      timeout: 0,
    });

    hasSentViewItemList.current = true;
  }, [complimentaryItems, type, firstActivity]);

  if (complimentaryItems.length === 0) {
    return null;
  }

  const bookingIsPast = booking
    ? dayjs(booking?.items?.[0]?.startsAt).isBefore(dayjs())
    : false;

  if (bookingIsPast) {
    return null;
  }

  return (
    <div className={cn("space-y-4", className)}>
      {complimentaryItems.map((itemData, index) => {
        return (
          <ComplimentaryActivity
            booking={booking}
            index={index}
            item={itemData.item}
            key={itemData.item.complementary_activity_id}
            mainActivityId={itemData.mainActivityId}
            mainOfferId={itemData.mainOfferId}
            type={type}
          />
        );
      })}
    </div>
  );
};
