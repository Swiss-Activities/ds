import {
  useTransportStore,
  useTransportStoreLocal,
} from "./store";
import { sendDataLayer } from "../utils/thirdParty/dataLayerSend";

const getBaseItem = () => {
  const local = useTransportStoreLocal.getState();
  const store = useTransportStore.getState();
  const trip = local.selectedTripId
    ? local.trips[local.selectedTripId]
    : undefined;

  const adultHalfFare = trip?.ticketCategories?.find(
    (tc) =>
      tc.audience === "adults" &&
      tc.discountType === "sbb_half_fare" &&
      tc.categoryType === "2nd_class" &&
      tc.price &&
      parseFloat(tc.price.amount) > 0
  );

  const totalPassengers = Object.values(store.ticketsAudiences).reduce(
    (a, b) => a + b,
    0
  );

  let ticketAudiences: Record<string, number> | undefined;
  if (totalPassengers) {
    ticketAudiences = {};
    const tcMap = new Map(
      (trip?.ticketCategories || []).map((tc) => [tc.ticketCategoryId, tc])
    );
    Object.values(store.ticketSelections).forEach((ticketCategoryId) => {
      const tc = tcMap.get(ticketCategoryId);
      const audience = tc?.audience || "unknown";
      const discount = tc?.discountType || "no_discount";
      const key = `${audience}_${discount}`;
      ticketAudiences![key] = (ticketAudiences![key] || 0) + 1;
    });
  }

  return {
    item_id: local.selectedTripId || undefined,
    item_name: `${local.fromValue} → ${local.toValue}`,
    item_brand: trip?.transportationType?.[0]?.name,
    item_category: "transport",
    item_category2: store.tripType,
    price: adultHalfFare ? parseFloat(adultHalfFare.price.amount) : undefined,
    quantity: totalPassengers || undefined,
    ticket_audiences: ticketAudiences,
    departure_time: trip?.start?.time,
    arrival_time: trip?.end?.time,
    duration_minutes: trip?.duration,
    transfers: trip?.transfers,
    via: trip?.via || undefined,
    platform: trip?.start?.platform,
  };
};

export const sendTransportEvent = (
  event: string,
  extra?: Record<string, any>
) => {
  const base = getBaseItem();

  sendDataLayer({
    data: {
      event,
      ecommerce: {
        items: [{ ...base, ...extra }],
      },
    },
    timeout: 0,
  });
};
