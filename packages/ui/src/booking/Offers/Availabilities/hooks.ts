import { useShallow } from "zustand/react/shallow";
import { useBookingStore } from "../../store";
import type { TActivity } from "../../types/activity";
import type { TOfferBooking } from "../../types/offerBooking";
import { useI18n } from "../../utils/i18n/useI18n";
import { useGetPersonalizationFields } from "../../query/activity/getPersonalizationOptions";

const FETCHING: Record<string, boolean> = {};

export const useAvailabilities = () => {
  const { locale } = useI18n();
  const {
    activity,
    personalizedOptionsCache,
    setAvailabilityStore,
    setPersonalizedOptions,
    setPersonalizedOptionsCache,
  } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      personalizedOptionsCache: state.personalizedOptionsCache,
      setAvailabilityStore: state.setAvailability,
      setPersonalizedOptions: state.setPersonalizedOptions,
      setPersonalizedOptionsCache: state.setPersonalizedOptionsCache,
    }))
  );
  const { mutateAsync: getPersonalizationFields } =
    useGetPersonalizationFields();

  const setAvailability = async (
    availability: TOfferBooking["availabilities"][0],
    act: TActivity | null = activity
  ) => {
    if (FETCHING[availability.availabilityId]) return;

    if (!act) {
      setAvailabilityStore(availability);
      return;
    }

    setAvailabilityStore(availability);

    if (personalizedOptionsCache[availability.availabilityId]) {
      setPersonalizedOptions(
        personalizedOptionsCache[availability.availabilityId]
      );
      return;
    }

    FETCHING[availability.availabilityId] = true;
    const personalizationFields = await getPersonalizationFields({
      activity: act,
      availabilityId: availability.availabilityId,
      locale,
    });
    FETCHING[availability.availabilityId] = false;

    setPersonalizedOptions(personalizationFields);
    setPersonalizedOptionsCache(
      availability.availabilityId,
      personalizationFields
    );

    return personalizationFields;
  };

  return {
    setAvailability,
  };
};
