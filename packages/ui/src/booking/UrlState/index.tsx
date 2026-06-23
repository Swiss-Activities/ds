import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useSearchParams } from "../utils/i18n/navigation";
import { useShallow } from "zustand/react/shallow";
import { useAvailabilities } from "../Offers/Availabilities/hooks";
import { usePersonalizedOptions } from "../PersonalizedOptions/hooks";
import { useTickets } from "../Tickets/hooks";
import { useIsReadyToBook } from "../Total/hooks";
import { useUrlObject } from "./hooks";
import { useBooking, usePostReservation } from "../hooks";
import { type BookingStore, useBookingStore } from "../store";
import { Loader as LoaderScreen } from "@swiss-activities/ui";
import { useSearchStore } from "../store/search";
import { DateService } from "../utils/dates/DateService";
import { useI18n } from "../utils/i18n/useI18n";
import { useGetActivity } from "../query/activity/getActivity";
import { useGetAvailabilities } from "../query/activity/getAvailabilities";

export const UrlState = () => {
  useUrlObject();
  const { locale } = useI18n();
  const [hasProcessed, setHasProcessed] = useState(false);
  const [bookingData, setBookingData] = useState<{
    activityId?: string;
    date?: string;
    offerId?: string;
    availabilityId?: string;
    tickets?: any;
    ticketHashes?: any;
    personalizedOptions?: any;
  }>();
  const [level, setLevel] = useState(0);
  const [isDateInPast, setIsDateInPast] = useState(false);
  const searchParams = useSearchParams();
  const { openBooking } = useBooking();
  const { reserve } = usePostReservation();
  const { isReadyToBook } = useIsReadyToBook();
  const { setAvailability } = useAvailabilities();
  const { hasTickets } = useTickets();
  const {
    hasPersonalizedOptions,
    personalizedOptionsValidated,
    personalizedOptionsValues,
    setPersonalizedOptionsValues,
  } = usePersonalizedOptions();

  const {
    isRestore,
    isRestoreError,
    offer,
    setActive,
    setActivity,
    setIsRestore,
    setIsRestoreError,
    setOffer,
    setTickets,
  } = useBookingStore(
    useShallow((state) => ({
      isRestore: state.isRestore,
      isRestoreError: state.isRestoreError,
      offer: state.offer,
      setActive: state.setActive,
      setActivity: state.setActivity,
      setIsRestore: state.setIsRestore,
      setIsRestoreError: state.setIsRestoreError,
      setOffer: state.setOffer,
      setTickets: state.setTickets,
    }))
  );
  const setDate = useSearchStore((state) => state.setDate);

  const { data: activity } = useGetActivity(
    bookingData?.activityId,
    locale,
    isRestore && !!bookingData?.activityId
  );

  const { data: offers } = useGetAvailabilities(
    activity,
    1000,
    locale,
    DateService.formatDate(dayjs().toDate()),
    bookingData?.date as string,
    !!activity
  );

  const setError = () => {
    setTimeout(() => {
      setIsRestoreError(true);
    }, 1000);
  };

  const setActiveOrSetDate = (str: BookingStore["active"]) => {
    if (isDateInPast) {
      setActive("date");
    } else {
      setActive(str);
    }
  };

  useEffect(() => {
    if (!searchParams || hasProcessed) return;
    const bookingObject = searchParams.get("bookingData");
    const isRestore = searchParams.get("bookingRun");
    if (bookingObject) {
      try {
        const parsedObj = JSON.parse(bookingObject);
        if (parsedObj.tickets) {
          parsedObj.tickets = JSON.parse(parsedObj.tickets);
        }
        if (parsedObj.ticketHashes) {
          parsedObj.ticketHashes = JSON.parse(parsedObj.ticketHashes);
        }
        if (parsedObj.personalizedOptions) {
          parsedObj.personalizedOptions = JSON.parse(
            parsedObj.personalizedOptions
          );
        }

        const dateFromUrl = dayjs(parsedObj?.date as string, "YYYY-MM-DD");
        const dateToday = dayjs();
        const isPast = dateToday.isAfter(dateFromUrl);

        if (isPast) {
          parsedObj.date = dateToday.format("YYYY-MM-DD");
          setIsDateInPast(true);
        }

        setBookingData(parsedObj);
        setIsRestore(isRestore === "true");
      } catch {
        setIsRestoreError(true);
      } finally {
        setHasProcessed(true);
      }
    }
  }, [searchParams, hasProcessed]);

  useEffect(() => {
    if (
      !isRestore ||
      !activity?.id ||
      offers?.length === 0 ||
      !bookingData?.date
    ) {
      return;
    }

    setActivity(activity);
    setDate(bookingData?.date as string);
    setLevel(1);
  }, [activity, isRestore, bookingData]);

  useEffect(() => {
    if (level > 1) return;
    if (level === 1) {
      const offer = offers?.find(
        (offer) => `${offer.offerId}` === `${bookingData?.offerId}`
      );
      if (offer) {
        setOffer(offer);

        const availability = offer?.availabilities.find(
          (a) => `${a.availabilityId}` === `${bookingData?.availabilityId}`
        );
        if (availability) {
          setAvailability(availability, activity).then(() => {
            setActiveOrSetDate("tickets");
            setLevel(2);
          });
        } else {
          setActiveOrSetDate("offers");
          setError();
        }
      } else if (offers?.length) {
        setActiveOrSetDate("offers");
        setError();
      }
    }
  }, [offers, level, activity]);

  useEffect(() => {
    if (level > 2) return;
    if (level === 2) {
      if (bookingData?.tickets) {
        setTickets(bookingData.tickets);
        setLevel(3);

        if (hasPersonalizedOptions) {
          setActiveOrSetDate("personalized");
        } else {
          setActiveOrSetDate("total");
        }
      } else {
        setActiveOrSetDate("tickets");
        setError();
      }
    }
  }, [hasPersonalizedOptions, level, offers, offer]);

  useEffect(() => {
    if (level > 3) return;
    if (level === 3) {
      if (!hasTickets) {
        if (bookingData?.ticketHashes) {
          const mappedTickets: Record<string, number> = {};
          Object.entries(
            bookingData.ticketHashes as Record<string, number>
          ).forEach(
            ([hash, amount]) => {
              const ticketCategory = offer?.ticketCategories?.find(
                (ticket) => ticket.ticketCategoryHash === hash
              );
              if (ticketCategory) {
                mappedTickets[ticketCategory.ticketCategoryId] = amount;
              }
            }
          );
          setTickets(mappedTickets);
        }
      }
      setLevel(4);
    }
  }, [level, hasTickets]);

  useEffect(() => {
    if (level > 4) return;
    if (level === 4) {
      if (hasPersonalizedOptions && bookingData?.personalizedOptions) {
        setPersonalizedOptionsValues(bookingData?.personalizedOptions);
      }
      if (
        hasPersonalizedOptions &&
        !personalizedOptionsValidated &&
        personalizedOptionsValues
      ) {
        setError();
      }
      setLevel(5);
    }
  }, [
    hasPersonalizedOptions,
    personalizedOptionsValidated,
    personalizedOptionsValues,
    level,
  ]);

  useEffect(() => {
    if (level === 5) {
      if (isReadyToBook) {
        reserve();
      } else {
        if (!hasTickets) {
          setActiveOrSetDate("tickets");
          setError();
          return;
        }
        if (hasPersonalizedOptions && !personalizedOptionsValidated) {
          setActiveOrSetDate("personalized");
          setError();
        }
      }
    }
  }, [
    level,
    isDateInPast,
    isReadyToBook,
    personalizedOptionsValidated,
    hasPersonalizedOptions,
    hasTickets,
  ]);

  useEffect(() => {
    if (!isRestoreError) return;
    openBooking({ activity });
  }, [isRestoreError]);

  useEffect(() => {
    if (!searchParams?.has("bookingData")) {
      setLevel(0);
    }
  }, [searchParams]);

  if (level >= 1 && !isRestoreError) {
    return <LoaderScreen />;
  }

  return null;
};
