import dayjs from "dayjs";
import replace from "lodash/replace";
import posthog from "posthog-js";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useCartStore } from "../../Cart/store";
import { useComplementaryStore } from "../../ComplementaryActivity/store";
import { useBookingStore } from "../../store";
import { useFilterStore as filterStore } from "../../store/filter";
import { useSearchStore } from "../../store/search";
import type { TActivity } from "../../types/activity";
import type { TOfferBooking } from "../../types/offerBooking";
import { getOffers } from "../../query/offers/getOffersCapi";

type TDataLayerOffer = TOfferBooking & { contentApiId?: number };

let offers: object[] | boolean = false;

const COMPLEMENTARY_EVENTS = [
  "select_offer",
  "select_ticket",
  "select_date",
  "add_information",
  "add_information_value",
  "add_to_cart",
];

export type Items = {
  [key: string]: string | number | boolean;
}[];

export type Activities = (TActivity & {
  activity: TActivity;
  reservation: {
    startsAt: string;
    endsAt: string;
    ticketReservations: {
      offerId: string;
      reservationId: string;
      cancellableUntil: string;
      offer?: TDataLayerOffer;
      ticketCategory?: TOfferBooking["ticketCategories"][number];
    }[];
  };
})[];

export type DataLayerSendObj = {
  ecommerce?: {
    currency?: string;
    item_list_id?: string;
    item_list_name?: string;
    items?: Items;
    tax?: number;
    transaction_id?: string;
    value?: number;
  };
  customer_state?: "Existing Customer" | "New Customer";
  event?: string;
  filter_results?: number;
  payment_type?: string;
  search_results?: number;
  search_term?: string;
  user_country?: string;
  user_email?: string;
  algolia_query_id?: string;
  event_id?: string;
};

export type DataLayerSendParams = {
  activity?: TActivity;
  activities?: Activities;
  complementaryMap?: Record<string, number>;
  data?: unknown;
  filters?: boolean | { [key: string]: string | string[] };
  index?: number;
  listName?: string;
  noActivities?: boolean;
  obj?: DataLayerSendObj;
  setItems?: boolean;
  timeout?: number;
  useFilterStore?: ReturnType<typeof filterStore>;
  v2?: boolean;
};

const sendDataLayer = ({
  activity,
  activities = [],
  complementaryMap,
  data,
  filters = false,
  index,
  listName = "",
  noActivities = false,
  obj,
  setItems = false,
  timeout = 1000,
  useFilterStore,
  v2 = false,
}: DataLayerSendParams) => {
  try {
    const trigger = async () => {
      if (activities?.length === 0 && !noActivities) {
        activities = [
          v2
            ? useBookingStore.getState().activity
            : activity || useCartStore.getState().activityObject,
        ] as unknown as Activities;
      }

      const items: Items = [];

      const complementaryRef =
        useComplementaryStore.getState().currentReference;
      if (
        !data &&
        obj?.event &&
        COMPLEMENTARY_EVENTS.includes(obj.event) &&
        complementaryRef
      ) {
        const bookingActivity = useBookingStore.getState().activity;
        if (bookingActivity?.dataLayer?.id) {
          const id = bookingActivity.dataLayer.id;
          const title = replace(
            bookingActivity.dataLayer.title || "",
            /[^\w\s\-àáâäçèéêëìíîïñòóôöùúûüÿ]/gi,
            ""
          );
          const brand = bookingActivity.dataLayer.supplier;
          const price = bookingActivity?.summary?.minAdultPrice?.amount
            ? Number(bookingActivity.summary.minAdultPrice.amount)
            : 0;
          const region = bookingActivity.dataLayer.breadcrumbs[0];
          const location = bookingActivity.dataLayer.breadcrumbs[1];
          const type = bookingActivity.dataLayer.type;
          const reservationSystem = bookingActivity.dataLayer.reservationSystem;
          const attribute = bookingActivity.dataLayer.attribute;

          const item: { [key: string]: string | number | boolean } = {
            algolia_item_id: `activity-${id}`,
            item_id: Number(id),
            item_name: title,
            item_brand: brand,
            price,
            item_category: region,
            item_category2: location,
            item_category3: type,
            item_category4: attribute,
            reservation_provider: reservationSystem,
            index: 0,
            complimentary_for_id: complementaryRef.mainActivityId,
            is_complimentary: true,
          };

          if (bookingActivity?.summary?.adStrategy) {
            item.commission_group_code = bookingActivity.summary.adStrategy;
          }

          items.push(item);
        }
      }

      if (!data && activities && items.length === 0) {
        for (const activity of activities) {
          const act = activity?.activity || activity;

          const id = act?.dataLayer?.id;
          if (!id) continue;

          const title = replace(
            act.dataLayer.title || "",
            /[^\w\s\-àáâäçèéêëìíîïñòóôöùúûüÿ]/gi,
            ""
          );
          const brand = act.dataLayer.supplier;
          const price = act?.summary?.minAdultPrice?.amount
            ? Number(act?.summary?.minAdultPrice?.amount)
            : 0;
          const region = act.dataLayer.breadcrumbs[0];
          const location = act.dataLayer.breadcrumbs[1];
          const type = act.dataLayer.type;
          const reservationSystem = act.dataLayer.reservationSystem;
          const attribute = act.dataLayer.attribute;

          let adStrategy = "";
          if (act?.summary?.adStrategy) {
            adStrategy = act.summary.adStrategy;
          }

          const item: {
            [key: string]: string | number | boolean;
          } = {
            algolia_item_id: `activity-${id}`,
            item_id: id,
            item_name: title,
            item_brand: brand,
            price,
            item_category: region,
            item_category2: location,
            item_category3: type,
            item_category4: attribute,
            reservation_provider: reservationSystem,
          };

          if (adStrategy) {
            item.commission_group_code = adStrategy;
          }

          if (index || index === 0) {
            item.index = index;
          }

          if (complementaryMap && id && complementaryMap[id]) {
            item.is_complimentary = true;
            item.complimentary_for_id = complementaryMap[id];
          } else if (obj?.event && COMPLEMENTARY_EVENTS.includes(obj.event)) {
            const complementaryRef =
              useComplementaryStore.getState().currentReference;
            if (complementaryRef) {
              item.is_complimentary = true;
              item.complimentary_for_id = complementaryRef.mainActivityId;
            }
          }

          if (obj?.event === "add_to_cart") {
            window?.ttq?.track("AddToCart");
          }
          if (obj?.event === "begin_checkout") {
            window?.ttq?.track("InitiateCheckout");
          }
          if (obj?.event === "payment_initiate") {
            window?.ttq?.track("PlaceAnOrder");
          }

          if (
            obj?.event &&
            [
              "add_information",
              "add_information_value",
              "add_payment_info",
              "add_shipping_info",
              "add_to_cart",
              "begin_checkout",
              "open_reservation",
              "payment_initiate",
              "purchase",
              "refund",
              "remove_from_cart",
              "reservation_expired",
              "select_date",
              "select_offer",
              "select_ticket",
              "update_cart",
              "view_cart",
            ].includes(obj.event)
          ) {
            const date = v2
              ? useSearchStore.getState().date
              : activity?.reservation?.startsAt;
            const offer: TDataLayerOffer | null | undefined = v2
              ? useBookingStore.getState().offer
              : activity?.reservation?.ticketReservations?.[0]?.offer;
            const guestFields =
              useBookingStore.getState().personalizedOptionsValues;

            item.selected_date = dayjs(date).format("YYYY-MM-DD");

            if (offer?.offerId && !offers) {
              offers = await getOffers("en_CH");
            }

            if (
              offers &&
              offer?.offerId &&
              activity?.reservation?.ticketReservations
            ) {
              Object.entries(activity?.reservation?.ticketReservations).forEach(
                ([key, value], i) => {
                  const ticket: {
                    [key: string]: string | number | boolean;
                  } = {
                    ...item,
                  };

                  const ticketCategory =
                    activity?.reservation?.ticketReservations?.[i]
                      ?.ticketCategory ||
                    offer.ticketCategories.find(
                      (ticketCategory) =>
                        `${ticketCategory.ticketCategoryId}` === `${key}`
                    );

                  ticket.price = Number(
                    ticketCategory?.price?.amount ||
                      (
                        value as unknown as {
                          seatPrice: { amount: number };
                        }
                      )?.seatPrice?.amount ||
                      0
                  );
                  ticket.item_variant = (
                    offers as unknown as {
                      id: string;
                      contentApiId: string;
                      contentApiOfferId: string;
                      label: string;
                    }[]
                  ).find(
                    (e) =>
                      e.id === `${offer.contentApiOfferId}` ||
                      e.id === `${offer.contentApiId}`
                  )?.label as string;
                  ticket.item_variant_id = `${offer.offerId}`;
                  ticket.ticket_category = ticketCategory?.label.formatted as string;
                  if (
                    (
                      value as unknown as {
                        guests: {
                          occupancy: number;
                        };
                      }
                    )?.guests
                  ) {
                    let quantity = 0;
                    (
                      value as unknown as {
                        guests: [];
                      }
                    )?.guests.forEach((guest: { occupancy: number }) => {
                      quantity = quantity + guest.occupancy;
                    });
                    ticket.quantity = quantity;
                  } else {
                    ticket.quantity = value as unknown as number;
                  }
                  ticket.guest_fields = guestFields;

                  items.push(ticket);

                  if (ticketCategory?.articleLabel) {
                    const fee: (typeof items)[0] = {
                      ...ticket,
                    };
                    const feePrice = ticketCategory?.articlePrice?.amount;
                    fee.item_id = `fee_${item.item_id}`;
                    fee.item_name = `[Fee] ${item.item_name}`;
                    fee.quantity = ticketCategory?.articleLabel.split(" / ")
                      .length as number;
                    fee.price = Number(feePrice) / fee.quantity;

                    items.push(fee);
                  }
                }
              );
            } else {
              items.push(item);
            }
          } else {
            items.push(item);
          }
        }
      }

      const grouped = new Map<string, (typeof items)[0]>();
      for (const item of items) {
        const key = `${item.item_id}-${item.ticket_category}-${item.price}-${item.item_variant_id}`;
        const existing = grouped.get(key);
        if (existing) {
          (existing.quantity as number) += (item.quantity as number) || 1;
        } else {
          grouped.set(key, { ...item });
        }
      }
      items.length = 0;
      items.push(...grouped.values());

      const computedValue = items.reduce(
        (sum, item) =>
          sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
        0
      );

      if (data) {
        obj = data;
      } else if (!filters && !setItems) {
        obj = {
          ...obj,
          ecommerce: {
            currency: "CHF",
            value: Math.round(computedValue * 100) / 100,
            ...obj?.ecommerce,
            items,
          },
        };
      } else if (useFilterStore) {
        const order = useFilterStore.getState().sort;

        obj = {
          event: "filter",
          filter_order: order,
          filter_type: "location-type",
          applied_filters: filters,
          list_name: listName,
        } as {
          event: "filter";
        };
      }
      if ((noActivities && !setItems) || filters) delete obj?.ecommerce;

      if (obj) {
        obj.event_id = uuidv4();
      }

      if (
        (process.env.NEXT_PUBLIC_BASE_URL as string).includes("staging") ||
        process.env.NODE_ENV === "development"
      ) {
        console.log("DataLayer: ", obj);

        if (obj?.event) {
          posthog.capture(obj.event, obj);
        }
      } else {
        // No console.log here: the full analytics object carries user_email /
        // user_country and would ship to the browser console in production (Q5).
        window?.dataLayer?.push(obj);

        if (obj?.event) {
          posthog.capture(obj.event, obj);
        }
      }
    };

    setTimeout(
      () =>
        trigger().catch((error) => {
          console.error("Async DataLayer Error: ", error);
        }),
      timeout
    );
  } catch (error) {
    console.error("DataLayer Error: ", error);
  }
};

export { sendDataLayer };

export const useDataLayer = () => {
  const dataLayer = useCallback((params: DataLayerSendParams) => {
    sendDataLayer(params);
  }, []);

  return { dataLayer };
};
