import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { useBookingStore } from "../store";
import { TActivity } from "../types/activity";
import { useI18n } from "../utils/i18n/useI18n";
import { useGetActivityOffers } from "../query/activity/getActivityOffers";

export const useHasOffersWithDiscounts = () => {
  const { locale } = useI18n();
  const { activity } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
    }))
  );

  const { data: offers } = useGetActivityOffers(activity as TActivity, {
    locale,
  });

  return offers?.some((offer) =>
    offer.ticketCategories.some(
      (ticketCategory) =>
        ticketCategory.discountType !== null &&
        ticketCategory.discountType !== "adults"
    )
  );
};

export const useOriginalOffer = () => {
  const { locale } = useI18n();
  const { activity, offer, flowType } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      offer: state.offer,
      flowType: state.flowType,
    }))
  );

  const { data: offers, isLoading } = useGetActivityOffers(
    activity as TActivity,
    {
      locale,
    },
    flowType === "offers-date"
  );

  const originalOffer = useMemo(() => {
    return offers?.find((o) => o.offerId === offer?.offerId);
  }, [offers, offer]);

  return { originalOffer, isLoading };
};
