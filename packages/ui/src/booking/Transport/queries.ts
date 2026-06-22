import { useMemo, useState, useCallback, useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { useTransportStoreLocal } from "./store";
import { useBookingStore } from "../store";
import type { TransportPlaceRef, TransportTrip } from "../types/transport";
import { useI18n } from "../utils/i18n/useI18n";
import { axiosApiInstanceWithCsrf } from "../query/axios";
import { useGetTripDetails } from "../query/transport/trip";
import { useGetTrips } from "../query/transport/trips";

const formatLocalDateTime = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
};

export const useTrips = () => {
  const { locale } = useI18n();
  const {
    calendarDate,
    time,
    direction,
    from,
    to,
    vias,
    selectedTripId,
    trips: storedTrips,
    addTrips,
  } = useTransportStoreLocal(
    useShallow((state) => ({
      calendarDate: state.calendarDate,
      time: state.time,
      direction: state.direction,
      from: state.from,
      to: state.to,
      vias: state.vias,
      selectedTripId: state.selectedTripId,
      trips: state.trips,
      addTrips: state.addTrips,
    }))
  );

  const { reservation } = useBookingStore(
    useShallow((state) => ({
      reservation: state.reservation,
    }))
  );

  const { data: sinlgeTrip, isLoading: isLoadingSingleTrip } = useTrip(
    reservation?.tripId || "",
    locale
  );

  const [earlierTrips, setEarlierTrips] = useState<TransportTrip[]>([]);
  const [laterTrips, setLaterTrips] = useState<TransportTrip[]>([]);
  const [isLoadingEarlier, setIsLoadingEarlier] = useState(false);
  const [isLoadingLater, setIsLoadingLater] = useState(false);
  const [hasNoMoreEarlier, setHasNoMoreEarlier] = useState(false);
  const [hasNoMoreLater, setHasNoMoreLater] = useState(false);

  const baseQueryParams = useMemo(() => {
    const combinedDateTime = new Date(calendarDate);
    combinedDateTime.setHours(time.getHours(), time.getMinutes(), 0, 0);

    const validVias = vias.filter((v): v is TransportPlaceRef => v !== null);

    return {
      localDateTime: formatLocalDateTime(combinedDateTime),
      origin: from,
      destination: to,
      vias: validVias.length > 0 ? validVias : undefined,
    };
  }, [calendarDate, time, from, to, vias]);

  const [debouncedParams, setDebouncedParams] = useState(baseQueryParams);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedParams(baseQueryParams);
    }, 500);
    return () => clearTimeout(timer);
  }, [baseQueryParams]);

  useEffect(() => {
    setEarlierTrips([]);
    setLaterTrips([]);
    setHasNoMoreEarlier(false);
    setHasNoMoreLater(false);
  }, [from, to, vias, calendarDate, time, direction]);

  const hasValidParams = Boolean(from && to);

  const queryParams = useMemo(() => {
    if (direction === "from") {
      return {
        departureTime: debouncedParams.localDateTime,
        origin: debouncedParams.origin ?? undefined,
        destination: debouncedParams.destination ?? undefined,
        vias: debouncedParams.vias,
      };
    } else {
      return {
        arrivalTime: debouncedParams.localDateTime,
        origin: debouncedParams.origin ?? undefined,
        destination: debouncedParams.destination ?? undefined,
        vias: debouncedParams.vias,
      };
    }
  }, [debouncedParams, direction]);

  const {
    data: mainTrips,
    isLoading,
    error,
  } = useGetTrips(queryParams, hasValidParams);

  const allTrips = useMemo(() => {
    const trips = [...earlierTrips, ...(mainTrips || []), ...laterTrips];
    const uniqueTrips = trips.filter(
      (trip, index, self) =>
        index ===
        self.findIndex((t) => (t.tripId || t.id) === (trip.tripId || trip.id))
    );
    return uniqueTrips.sort(
      (a, b) =>
        new Date(a.start.time).getTime() - new Date(b.start.time).getTime()
    );
  }, [earlierTrips, mainTrips, laterTrips]);

  useEffect(() => {
    if (allTrips.length > 0) {
      addTrips(allTrips);
    }
  }, [allTrips, addTrips]);

  const loadEarlierTrips = useCallback(async () => {
    if (!allTrips.length || isLoadingEarlier || hasNoMoreEarlier) return;

    const earliestTrip = allTrips[0];
    const earliestTime = new Date(earliestTrip.start.time);
    earliestTime.setMinutes(earliestTime.getMinutes() - 1);

    setIsLoadingEarlier(true);
    try {
      const response = await axiosApiInstanceWithCsrf.post<{
        trips: TransportTrip[];
      }>("/transport/trips/", {
        arrivalTime: formatLocalDateTime(earliestTime),
        origin: baseQueryParams.origin,
        destination: baseQueryParams.destination,
        vias: baseQueryParams.vias,
      });
      if (response.data.trips && response.data.trips.length > 0) {
        setEarlierTrips((prev) => [...response.data.trips, ...prev]);
      } else {
        setHasNoMoreEarlier(true);
      }
    } catch {
      setHasNoMoreEarlier(true);
    } finally {
      setIsLoadingEarlier(false);
    }
  }, [allTrips, isLoadingEarlier, hasNoMoreEarlier, baseQueryParams]);

  const loadLaterTrips = useCallback(async () => {
    if (!allTrips.length || isLoadingLater || hasNoMoreLater) return;

    const latestTrip = allTrips[allTrips.length - 1];
    const latestTime = new Date(latestTrip.start.time);
    latestTime.setMinutes(latestTime.getMinutes() + 1);

    setIsLoadingLater(true);
    try {
      const response = await axiosApiInstanceWithCsrf.post<{
        trips: TransportTrip[];
      }>("/transport/trips/", {
        departureTime: formatLocalDateTime(latestTime),
        origin: baseQueryParams.origin,
        destination: baseQueryParams.destination,
        vias: baseQueryParams.vias,
      });
      if (response.data.trips && response.data.trips.length > 0) {
        setLaterTrips((prev) => [...prev, ...response.data.trips]);
      } else {
        setHasNoMoreLater(true);
      }
    } catch {
      setHasNoMoreLater(true);
    } finally {
      setIsLoadingLater(false);
    }
  }, [allTrips, isLoadingLater, hasNoMoreLater, baseQueryParams]);

  const selectedTrip = useMemo(() => {
    if (reservation) {
      if (sinlgeTrip && reservation.tripId && !isLoadingSingleTrip) {
        return sinlgeTrip;
      }
    }

    if (selectedTripId) {
      return storedTrips[selectedTripId];
    }

    return undefined;
  }, [
    selectedTripId,
    reservation,
    sinlgeTrip,
    isLoadingSingleTrip,
    storedTrips,
  ]);

  return {
    trips: allTrips,
    isLoading: isLoading || isLoadingSingleTrip,
    error,
    hasValidParams,
    selectedTrip,
    loadEarlierTrips,
    loadLaterTrips,
    isLoadingEarlier,
    isLoadingLater,
    hasNoMoreEarlier,
    hasNoMoreLater,
  };
};

export const useTrip = (tripId: string, locale?: string) => {
  return useGetTripDetails({ tripId, locale }, Boolean(tripId));
};
