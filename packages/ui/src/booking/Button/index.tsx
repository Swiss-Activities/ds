import dayjs from "dayjs";
import { useShallow } from "zustand/react/shallow";
import { CancellationCard } from "../stubs";
import { useAvailabilitiesByQuantities } from "../Calendar/BookingCalendarV2/hooks";
import { useCheckoutButtonTextOrState } from "../Checkout/hooks";
import { useCheckoutStore } from "../Checkout/store";
import { usePersonalizedOptions } from "../PersonalizedOptions/hooks";
import { PriceDisplay } from "../PriceDisplay";
import { useTickets } from "../Tickets/hooks";
import {
  useCanCheckout,
  useCanGoToTotal,
  useTotalDisplay,
} from "../Total/hooks";
import { usePostReservation } from "../hooks";
import { useBookingStore } from "../store";
import { Button, type ButtonProps } from "@swiss-activities/ui";
import { ChatButton } from "../stubs";
import { useSearchStore } from "../store/search";
import { Skeleton } from "@swiss-activities/ui";
import { useAffiliateStore } from "../store/affiliateStore";
import type { TActivity } from "../types/activity";
import { cn } from "../utils/css/cn";
import { DateService } from "../utils/dates/DateService";
import { toISO } from "../utils/dates/toISO";
import { useChat } from "../utils/env/useChat";
import { useI18n } from "../utils/i18n/useI18n";
import { useDataLayer } from "../utils/thirdParty/dataLayerSend";
import { useFeatureFlag } from "../utils/ui/useFeatureFlag";
import { useGetActivityOffers } from "../query/activity/getActivityOffers";

type BookingButtonProps = ButtonProps;

export const BookingButton = (props: BookingButtonProps) => {
  const { dataLayer } = useDataLayer();
  const isChat = useChat();
  const { t, locale } = useI18n();
  const {
    activity,
    active,
    availability,
    dateBooking,
    dates,
    flowType,
    isCheckout,
    isInlineCheckout,
    isLoading,
    isRebook,
    offer,
    personalizedOptionsCache,
    reservation,
    setActive,
    setIsLoading,
    setWidgetTab,
    widgetTab,
  } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      active: state.active,
      availability: state.availability,
      dateBooking: state.date,
      dates: state.dates,
      flowType: state.flowType,
      isCheckout: state.isCheckout,
      isInlineCheckout: state.isInlineCheckout,
      isLoading: state.isLoading,
      isRebook: state.isRebook,
      offer: state.offer,
      personalizedOptionsCache: state.personalizedOptionsCache,
      reservation: state.reservation,
      setActive: state.setActive,
      setIsLoading: state.setIsLoading,
      setWidgetTab: state.setWidgetTab,
      widgetTab: state.widgetTab,
    }))
  );

  const { isLoading: isLoadingOffers } = useGetActivityOffers(
    activity as TActivity,
    { locale },
    flowType === "offers-date"
  );
  const { isLoading: isLoadingAvailabilities } =
    useAvailabilitiesByQuantities();
  const { isLoadingCheckout } = useCheckoutStore(
    useShallow((state) => ({
      isLoadingCheckout: state.isLoading,
    }))
  );
  const { widgetData } = useAffiliateStore(
    useShallow((state) => ({
      widgetData: state.data,
    }))
  );

  const cancellationFlag = useFeatureFlag(
    "cancellation-card-airbnb",
    "NEXT_PUBLIC_CANCELLATION_CARD_VARIANT"
  );
  const { personalizedOptions, personalizedOptionsValidated } =
    usePersonalizedOptions();
  const { hasTickets } = useTickets();
  const { canCheckout } = useCanCheckout();
  const { canGoToTotal } = useCanGoToTotal();
  const { price, total, from, prefix } = useTotalDisplay();
  const { reserve, isPending, isSuccess } = usePostReservation();
  const [date, setDate] = useSearchStore((state) => [
    state.date,
    state.setDate,
  ]);
  const checkoutButtonText = useCheckoutButtonTextOrState();

  const shouldContinueToOffers =
    flowType === "date-offers" ? active === "date" || !date : false;
  const hasCorrectDate =
    (dates?.[date as string] && dates?.[date as string]?.price !== null) ||
    (!date &&
      dates?.[(date as string) || dayjs().format("YYYY-MM-DD")] &&
      dates?.[(date as string) || dayjs().format("YYYY-MM-DD")]?.price !==
        null);
  const hasCorrectAvailability =
    flowType === "offers-date"
      ? true
      : offer?.availabilities
          .map((availability) => availability.availabilityId)
          .includes(availability?.availabilityId as string);
  const hasToWaitForPersonalizedOptionsLoading =
    flowType === "offers-date"
      ? active === "date" &&
        dateBooking &&
        availability &&
        !personalizedOptionsCache?.[availability?.availabilityId || ""]
      : active === "tickets" &&
        hasTickets &&
        !personalizedOptionsCache?.[availability?.availabilityId || ""];

  const today = DateService.formatDate(dayjs(new Date()).toDate());

  const getContent = () => {
    if (isCheckout) return checkoutButtonText;

    if (canCheckout) {
      if (isRebook) {
        return t("pages.confirmation.rebook.button");
      }
      if (reservation) {
        return t("pages.basket.update");
      }
      return t("activity.widget.basketAdd");
    }

    if (active === "date") {
      if (flowType === "offers-date") {
        if (offer?.availabilities && offer?.availabilities?.length >= 2) {
          return t("activity.widget.confirmDateTime");
        }
        return t("activity.widget.confirmDate");
      } else {
        if (!hasCorrectDate) {
          return t("general.dateChoose");
        }
      }
    }

    if (shouldContinueToOffers) {
      return `${toISO((date || today) as string, { date: true })} ${t(
        "activity.widget.choose"
      )}`;
    }

    if (active === "offers") {
      if (flowType === "offers-date") {
        return t("activity.widget.confirmOffer");
      }
      if (!offer?.offerId) {
        return t("activity.widget.titleTime");
      }
      if (!hasCorrectAvailability) {
        return t("activity.widget.offerTimeSelect");
      }
    }

    if (active === "tickets") {
      if (flowType === "offers-date") {
        return t("activity.widget.confirmTickets");
      }
      if (!hasTickets) {
        return t("activity.widget.titleTickets");
      }
    }

    if (active === "personalized") {
      if (flowType === "offers-date") {
        return t("activity.widget.basketAdd");
      }
    }

    return t("general.chooseSelection");
  };

  const getType = () => {
    if (
      (widgetData?.widgetShowNavigation || isChat) &&
      widgetTab === "activity"
    ) {
      return "primary";
    }

    let type: ButtonProps["type"] = "primary";

    if (
      flowType === "date-offers" &&
      active === "date" &&
      !hasCorrectDate &&
      !isRebook
    ) {
      type = "instruction";
    }

    if (active === "offers" && !offer?.offerId) {
      type = "instruction";
    }

    if (active === "offers" && !hasCorrectAvailability) {
      type = "instruction";
    }

    if (active === "tickets" && !hasTickets) {
      type = "instruction";
    }

    if (flowType === "offers-date" && active === "date" && !availability) {
      type = "instruction";
    }

    if (active === "personalized" && !personalizedOptionsValidated) {
      type = "instruction";
    }

    if (type === "instruction" && flowType === "offers-date") {
      return "gray";
    }

    return type;
  };

  const onClick = () => {
    if (
      (widgetData?.widgetShowNavigation || isChat) &&
      widgetTab === "activity"
    ) {
      setWidgetTab("booking");
      return;
    }

    if (
      isLoading ||
      hasToWaitForPersonalizedOptionsLoading ||
      isLoadingCheckout
    ) {
      return;
    }

    if (isCheckout) {
      setIsLoading(true);
      return;
    }

    if (canCheckout) {
      reserve();
      return;
    }

    setWidgetTab("booking");

    if (shouldContinueToOffers) {
      setActive("offers");
      if (!date) setDate(today);
      dataLayer({
        obj: {
          event: "select_date",
        },
      });
    }
    if (active === "offers" && offer?.offerId && !isRebook) {
      setActive("tickets");
    }

    if (flowType === "offers-date" && active === "tickets" && hasTickets) {
      setActive("date");
      return;
    }

    if (
      (active === (flowType === "offers-date" ? "date" : "tickets") ||
        isRebook) &&
      hasTickets
    ) {
      if (personalizedOptions?.length) {
        setActive("personalized");
        dataLayer({
          obj: {
            event: "add_information",
          },
        });
      }
    }

    if (canGoToTotal) {
      setActive("total");
    }
  };

  // console.log("isLoadingCheckout", isLoadingCheckout);
  // console.log("isPending", isPending);
  // console.log("isSuccess", isSuccess && !isInlineCheckout);
  // console.log("isLoading", isLoading);
  // console.log("hasToWait", hasToWaitForPersonalizedOptionsLoading);

  return (
    <div
      className={cn("flex w-full flex-col gap-2", {
        invisible: active === "trash",
      })}
    >
      {flowType === "offers-date" && (
        <div className="relative flex items-center justify-between">
          <ChatButton iconOnly />
          <div className="relative flex">
            <div className="relative w-max">
              <PriceDisplay
                {...{
                  price,
                  from,
                  prefix,
                  total,
                }}
                size="lg"
              />
            </div>
            <Skeleton loading={isLoadingOffers} full />
          </div>
        </div>
      )}
      {cancellationFlag.variant === "test" && flowType !== "offers-date" ? (
        <CancellationCard
          activity={activity as TActivity | undefined}
          inline
        />
      ) : null}
      <div className="relative">
        <Button
          id="booking-button"
          className="w-full font-semibold"
          type={getType()}
          onClick={onClick}
          loading={
            !!(
              isLoadingCheckout ||
              isPending ||
              (isSuccess && !isInlineCheckout) ||
              (isLoading && !isInlineCheckout) ||
              hasToWaitForPersonalizedOptionsLoading ||
              (isLoadingAvailabilities && active === "date")
            )
          }
          {...(isCheckout ? { form: "booking", submit: true } : {})}
          {...props}
        >
          {props.children || getContent()}
        </Button>
        {flowType === "offers-date" && (
          <Skeleton loading={isLoadingOffers} full />
        )}
      </div>
    </div>
  );
};
