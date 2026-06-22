import { useMemo, useEffect, useRef, Fragment } from "react";
import { ChevronUp, ChevronDown, Loader2 } from "lucide-react";
import { useDate } from "../../utils/date/useDate";
import { useShallow } from "zustand/react/shallow";
import { Trip } from "./Trip";
import { useTrips } from "../queries";
import { useTransportStoreLocal } from "../store";
import { Text } from "@swiss-activities/ui";
import { TransportTrip } from "../../types/transport";
import { Button } from "@swiss-activities/ui";
import { useI18n } from "../../utils/i18n/useI18n";
import { useDataLayer } from "../../utils/thirdParty/dataLayerSend";

let lastViewItemListKey = "";

type GroupedTrips = {
  dateKey: string;
  dateLabel: string;
  trips: TransportTrip[];
};

type ResultsProps = {
  bookingDate?: string;
  walkingDurationSeconds?: number;
};

export const Results = ({
  bookingDate,
  walkingDurationSeconds,
}: ResultsProps) => {
  const { dataLayer } = useDataLayer();
  const { t } = useI18n();
  const { getDateKey, formatDate } = useDate();
  const {
    calendarDate,
    fromValue,
    toValue,
    from,
    to,
    viaValues,
    direction,
    time,
  } = useTransportStoreLocal(
    useShallow((state) => ({
      calendarDate: state.calendarDate,
      fromValue: state.fromValue,
      toValue: state.toValue,
      from: state.from,
      to: state.to,
      viaValues: state.viaValues,
      direction: state.direction,
      time: state.time,
    }))
  );
  const {
    trips,
    hasValidParams,
    isLoading,
    error,
    loadEarlierTrips,
    loadLaterTrips,
    isLoadingEarlier,
    isLoadingLater,
    hasNoMoreEarlier,
    hasNoMoreLater,
  } = useTrips();

  const viewTimerRef = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => {
    if (!trips || trips.length === 0 || isLoading) return;
    const key = `${from?.ref ?? ""}-${to?.ref ?? ""}-${direction}-${calendarDate.toISOString()}-${time.getHours()}:${time.getMinutes()}`;
    if (key === lastViewItemListKey) return;
    lastViewItemListKey = key;

    if (viewTimerRef.current) clearTimeout(viewTimerRef.current);
    viewTimerRef.current = setTimeout(() => {
      dataLayer({
        data: {
          event: "transport_view_item_list",
          search_term: `${fromValue} → ${toValue}`,
          search_results: trips.length,
          transport_from: fromValue,
          transport_to: toValue,
          transport_via: viaValues.filter(Boolean).join(", ") || undefined,
          transport_date: calendarDate.toISOString().split("T")[0],
          transport_time: `${String(time.getHours()).padStart(2, "0")}:${String(time.getMinutes()).padStart(2, "0")}`,
          transport_direction: direction,
          ecommerce: {
            item_list_id: "transport_search",
            item_list_name: "Transport Search",
            items: trips.map((trip, index) => ({
              item_id: trip.tripId || trip.id,
              item_name: `${fromValue} → ${toValue}`,
              item_category: "transport",
              index,
              departure_time: trip.start?.time,
              arrival_time: trip.end?.time,
              duration_minutes: trip.duration,
              transfers: trip.transfers,
            })),
          },
        },
        timeout: 0,
      });
    }, 2000);

    return () => {
      if (viewTimerRef.current) clearTimeout(viewTimerRef.current);
    };
  }, [trips, isLoading, from, to, direction, calendarDate, time]);

  const canLoadEarlier = useMemo(() => {
    if (!trips || trips.length === 0) return false;
    if (hasNoMoreEarlier) return false;
    return true;
  }, [trips, hasNoMoreEarlier]);

  const canLoadLater = useMemo(() => {
    if (!trips || trips.length === 0) return false;
    if (hasNoMoreLater) return false;
    return true;
  }, [trips, hasNoMoreLater]);

  const groupedTrips = useMemo((): GroupedTrips[] => {
    if (!trips || trips.length === 0) return [];

    const groups: Map<string, GroupedTrips> = new Map();

    trips.forEach((trip) => {
      const dateKey = getDateKey(trip.start.time);

      if (!groups.has(dateKey)) {
        const dateLabel = formatDate(trip.start.time);

        groups.set(dateKey, {
          dateKey,
          dateLabel,
          trips: [],
        });
      }

      groups.get(dateKey)!.trips.push(trip);
    });

    return Array.from(groups.values());
  }, [trips, getDateKey, formatDate]);

  const hasMultipleDays = groupedTrips.length > 1;

  return (
    <div className="flex flex-col gap-7">
      <div className="mx-auto w-full max-w-screen-sm">
        {!hasValidParams ? (
          <Text>{t("Transport.selectOriginDestination")}</Text>
        ) : isLoading ? (
          <Text>{t("Transport.loadingTrips")}</Text>
        ) : error ? (
          <Text className="text-red-500">
            {t("Transport.errorLoadingTrips")}
          </Text>
        ) : trips && trips.length > 0 ? (
          <div className="mx-auto grid max-w-screen-sm grid-cols-1">
            <div>
              <Text size="md2" className="mb">
                {t("Transport.tripResults")}
              </Text>
            </div>
            <div className="space-y-4">
              {trips && trips.length > 0 && canLoadEarlier && (
                <Button
                  variant="card"
                  size="card"
                  className="w-full justify-center gap-2"
                  onClick={loadEarlierTrips}
                  disabled={isLoadingEarlier}
                >
                  {isLoadingEarlier ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <ChevronUp size={16} />
                  )}
                  {t("Transport.earlierTrips")}
                </Button>
              )}
              {groupedTrips.map((group) => (
                <Fragment key={group.dateKey}>
                  {hasMultipleDays && (
                    <Text
                      size="sm"
                      className="pt-2 font-semibold text-gray-700"
                    >
                      {group.dateLabel}
                    </Text>
                  )}
                  {group.trips.map((trip, index) => {
                    const isAllDay = (() => {
                      if (!bookingDate) return false;
                      const parsed = new Date(bookingDate);
                      return (
                        parsed.getHours() === 0 &&
                        parsed.getMinutes() === 0 &&
                        parsed.getSeconds() === 0
                      );
                    })();

                    const isPast = (() => {
                      if (isAllDay || !bookingDate || !trip.end?.time)
                        return false;
                      const eventTime = new Date(bookingDate).getTime();
                      const arrivalTime = new Date(trip.end.time).getTime();
                      const walkingMs = (walkingDurationSeconds || 0) * 1000;
                      return arrivalTime + walkingMs > eventTime;
                    })();

                    const prevTrip = group.trips[index - 1];
                    const prevIsPast = (() => {
                      if (
                        isAllDay ||
                        !prevTrip ||
                        !bookingDate ||
                        !prevTrip.end?.time
                      )
                        return false;
                      const eventTime = new Date(bookingDate).getTime();
                      const arrivalTime = new Date(prevTrip.end.time).getTime();
                      const walkingMs = (walkingDurationSeconds || 0) * 1000;
                      return arrivalTime + walkingMs > eventTime;
                    })();

                    const showSeparator = isPast && !prevIsPast;

                    return (
                      <Fragment key={trip.tripId || trip.id}>
                        {showSeparator && (
                          <Text size="xs" className="pt-2 text-gray-500">
                            {t("Transport.tooLateForActivity")}
                          </Text>
                        )}
                        <Trip
                          trip={trip}
                          bookingDate={bookingDate}
                          walkingDurationSeconds={walkingDurationSeconds}
                        />
                      </Fragment>
                    );
                  })}
                </Fragment>
              ))}
              {trips && trips.length > 0 && canLoadLater && (
                <Button
                  variant="card"
                  size="card"
                  className="w-full justify-center gap-2"
                  onClick={loadLaterTrips}
                  disabled={isLoadingLater}
                >
                  {isLoadingLater ? (
                    <Loader2 size={16} className="animate-spin" />
                  ) : (
                    <ChevronDown size={16} />
                  )}
                  {t("Transport.laterTrips")}
                </Button>
              )}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
