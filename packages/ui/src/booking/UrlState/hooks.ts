import { useShallow } from "zustand/react/shallow";
import { usePersonalizedOptions } from "../PersonalizedOptions/hooks";
import { useBookingStore } from "../store";
import { useSearchStore } from "../store/search";
import { getPageUrl } from "../utils/content/loaders";
import { useI18n } from "../utils/i18n/useI18n";

export const useUrlObject = () => {
  const { locale } = useI18n();
  const pageUrl = getPageUrl("basket", locale);
  const [date] = useSearchStore((state) => [state.date]);
  const { activity, availability, offer, tickets } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      availability: state.availability,
      offer: state.offer,
      tickets: state.tickets,
    }))
  );
  const {
    personalizedOptionsValues,
    hasPersonalizedOptions,
    personalizedOptionsValidated,
  } = usePersonalizedOptions();

  const getHrefWithObjString = () => {
    const obj: Record<string, string | number | Record<string, number>> = {};
    if (date) {
      obj.date = date;
    }
    if (activity) {
      obj.activityId = activity.id;
    }
    if (availability?.availabilityId) {
      obj.availabilityId = availability.availabilityId;
    }
    if (offer?.offerId) {
      obj.offerId = offer.offerId;
    }
    if (Object.values(tickets).length) {
      obj.tickets = JSON.stringify(tickets);

      const ticketHashes: Record<string, number> = {};
      Object.entries(tickets).forEach(([key, value]) => {
        const hash = offer?.ticketCategories.find(
          (e) => `${e?.ticketCategoryId}` === `${key}`
        )?.ticketCategoryHash;
        if (hash) {
          ticketHashes[hash] = value;
        }
      });
      obj.ticketHashes = JSON.stringify(ticketHashes);
    }
    if (hasPersonalizedOptions && personalizedOptionsValidated) {
      obj.personalizedOptions = JSON.stringify(personalizedOptionsValues);
    }

    const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}${pageUrl}`);
    url.searchParams.set("bookingData", JSON.stringify(obj));
    url.searchParams.set("bookingRun", "true");

    return url.toString();
  };

  return { getHrefWithObjString };
};
