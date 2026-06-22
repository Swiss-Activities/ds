import { useEffect, useMemo, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { useAvailabilities } from "../../Offers/Availabilities/hooks";
import { useBookingStore } from "../../store";
import { useI18n } from "../../utils/i18n/useI18n";
import { useGetAvailabilitiesByQuantities } from "../../query/activity/getAvailabilitiesByQuantities";

export const useTicketAudiencesForQuery = () => {
  const { ticketSelectionsMetadata } = useBookingStore(
    useShallow((state) => ({
      ticketSelectionsMetadata: state.ticketSelectionsMetadata,
    }))
  );

  const ticketAudiencesForQuery = useMemo(() => {
    const grouped: Record<
      string,
      {
        audience: string;
        discountType: string | null;
        categoryTypeKey: string | null;
        quantity: number;
      }
    > = {};

    Object.values(ticketSelectionsMetadata).forEach((metadata) => {
      const groupKey = `${metadata.audience}+${metadata.discountType}+${metadata.categoryTypeKey}`;

      if (!grouped[groupKey]) {
        grouped[groupKey] = {
          audience: metadata.audience,
          discountType: metadata.discountType,
          categoryTypeKey: metadata.categoryTypeKey,
          quantity: 0,
        };
      }
      grouped[groupKey].quantity += 1;
    });

    return Object.values(grouped).map((item) => {
      const obj: {
        audience: string;
        quantity: number;
        discountType?: string;
        categoryType?: string;
      } = {
        audience: item.audience,
        quantity: item.quantity,
      };

      if (item.discountType) {
        obj.discountType = item.discountType;
      }

      if (item.categoryTypeKey) {
        obj.categoryType = item.categoryTypeKey;
      }

      return obj;
    });
  }, [ticketSelectionsMetadata]);

  return { ticketAudiencesForQuery };
};

export const useAvailabilitiesByQuantities = () => {
  const { locale } = useI18n();
  const {
    offer,
    availability,
    date,
    flowType,
    setOffer,
    personalizedOptionsCache,
  } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
      availability: state.availability,
      date: state.date,
      flowType: state.flowType,
      setOffer: state.setOffer,
      personalizedOptionsCache: state.personalizedOptionsCache,
    }))
  );
  const { setAvailability } = useAvailabilities();
  const { ticketAudiencesForQuery } = useTicketAudiencesForQuery();

  const { data: offers, isLoading: isLoadingAvailabilities } =
    useGetAvailabilitiesByQuantities(
      locale,
      offer?.offerId ? [offer.offerId] : [],
      ticketAudiencesForQuery,
      date,
      !!date && !!offer?.offerId && flowType === "offers-date"
    );

  const [debouncedLoading, setDebouncedLoading] = useState(true);

  useEffect(() => {
    if (isLoadingAvailabilities) {
      setDebouncedLoading(true);
      return;
    }

    const timeout = setTimeout(() => {
      setDebouncedLoading(false);
    }, 500);

    return () => clearTimeout(timeout);
  }, [isLoadingAvailabilities]);

  useEffect(() => {
    if (!offers || !offer) return;

    const offerFromAvailabilities = offers.find(
      (off) => off.offerId === offer.offerId
    );

    if (!offerFromAvailabilities) return;

    if (offerFromAvailabilities.availabilities.length === 1) {
      setAvailability(offerFromAvailabilities.availabilities[0]);
    } else if (offerFromAvailabilities.availabilities.length > 0) {
      if (availability?.startsAt) {
        const currentTime = availability.startsAt.slice(11, 16);
        const matchingAvailability =
          offerFromAvailabilities.availabilities.find(
            (a) => a.startsAt.slice(11, 16) === currentTime
          );
        setAvailability(
          matchingAvailability || offerFromAvailabilities.availabilities[0]
        );
      } else {
        setAvailability(offerFromAvailabilities.availabilities[0]);
      }
    }

    setOffer(offerFromAvailabilities);
  }, [offers, offer, date, setAvailability, setOffer]);

  const isLoading =
    debouncedLoading ||
    (availability?.availabilityId &&
      !personalizedOptionsCache?.[availability.availabilityId]);

  return { offers, isLoading };
};
