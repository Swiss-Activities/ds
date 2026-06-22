import { useLayoutEffect } from "react";
import dayjs from "dayjs";
import { useShallow } from "zustand/react/shallow";
import { useAvailabilities } from "./Availabilities/hooks";
import { Offer } from "./Offer";
import { Title } from "../Title";
import { useBookingStore } from "../store";
import { useSearchStore } from "../store/search";
import { Skeleton } from "@swiss-activities/ui";
import { TOfferBooking } from "../types/offerBooking";
import { DateService } from "../utils/dates/DateService";
import { toISO } from "../utils/dates/toISO";
import { useI18n } from "../utils/i18n/useI18n";
import { useGetAvailabilities } from "../query/activity/getAvailabilities";
import { useOffersCapi } from "../query/offers/getOffersCapi";

export const Offers = () => {
  const { t, locale } = useI18n();
  const { activity, availability, offer, isRebook, setOffer, offerId } =
    useBookingStore(
      useShallow((state) => ({
        activity: state.activity,
        availability: state.availability,
        isRebook: state.isRebook,
        offer: state.offer,
        offerId: state.offerId,
        setOffer: state.setOffer,
      }))
    );
  const { setAvailability } = useAvailabilities();
  const [date] = useSearchStore((state) => [state.date]);

  if (!activity || !date) return null;

  const { data: offers, isLoading } = useGetAvailabilities(
    activity,
    1000,
    locale,
    DateService.formatDate(dayjs().toDate()),
    date,
    true
  );

  const { isLoading: isLoadingOffersCapi } = useOffersCapi();

  useLayoutEffect(() => {
    if (!offer?.offerId && !offerId) return;
    if (offer?.offerId && offerId) return;
    const updatedOffer = offers?.find((o) =>
      offerId ? o.offerId === offerId : o?.offerId === offer?.offerId
    ) as TOfferBooking;
    if (!updatedOffer) return;
    if (updatedOffer.availabilities.length === 1) {
      setAvailability(updatedOffer.availabilities[0]);
    } else {
      if (
        !offer?.availabilities.find(
          (a) => a.availabilityId === availability?.availabilityId
        )
      ) {
        const startingTimes = updatedOffer.availabilities.map((a) =>
          toISO(a.startsAt, {
            time: true,
          })
        );
        const availabilityIndex = startingTimes.indexOf(
          toISO(availability?.startsAt as string, {
            time: true,
          })
        );
        if (availabilityIndex !== -1) {
          setAvailability(updatedOffer.availabilities[availabilityIndex]);
        }
      }
    }
    setOffer(updatedOffer);
  }, [offers, offer, availability, offerId]);

  return (
    <div>
      <Title>{t("activity.widget.titleTime")}</Title>
      <Skeleton loading={isLoading} />
      {offers ? (
        <div className="space-y-3">
          {offers
            .sort((a, b) => a.sequenceIndex - b.sequenceIndex)
            .filter((o) => (isRebook ? o.offerId === offer?.offerId : true))
            .map((offer) => (
              <Offer {...offer} key={offer.offerId} />
            ))}
        </div>
      ) : null}
    </div>
  );
};
