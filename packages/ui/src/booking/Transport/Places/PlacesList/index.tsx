import { useState, useEffect, useRef } from "react";
import { useIsFetching } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";
import { PlaceItem } from "../PlaceItem";
import { useTransportStoreLocal } from "../../store";
import { Loader } from "@swiss-activities/ui";
import { TransportPlace } from "../../../types/transport";
import { useDebounce } from "../../../utils/data/useDebounce";
import { useI18n } from "../../../utils/i18n/useI18n";
import { dataLayerSend } from "../../../utils/thirdParty/dataLayerSend";
import { useGeolocation } from "../../../utils/ui/useGeolocation";
import { useGetPlaces } from "../../../query/transport/places";

type PlacesListProps = {
  viaIndex?: number;
};

export const PlacesList = ({ viaIndex = 0 }: PlacesListProps) => {
  const { t } = useI18n();
  const {
    fromValue,
    toValue,
    viaValues,
    fromFocused,
    toFocused,
    viaFocusedIndex,
    setFromPlace,
    setToPlace,
    setViaPlace,
  } = useTransportStoreLocal(
    useShallow((state) => ({
      fromValue: state.fromValue,
      toValue: state.toValue,
      viaValues: state.viaValues,
      fromFocused: state.fromFocused,
      toFocused: state.toFocused,
      viaFocusedIndex: state.viaFocusedIndex,
      setFromPlace: state.setFromPlace,
      setToPlace: state.setToPlace,
      setViaPlace: state.setViaPlace,
    }))
  );

  const activeField = fromFocused
    ? "from"
    : toFocused
      ? "to"
      : viaFocusedIndex !== null
        ? "via"
        : null;
  const activeViaIndex = viaFocusedIndex;
  const { isAvailable, isDenied, getCurrentPosition } = useGeolocation();
  const [currentCoordinates, setCurrentCoordinates] = useState<{
    longitude: number;
    latitude: number;
  } | null>(null);
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [locationError, setLocationError] = useState(false);

  const viaValue =
    activeViaIndex !== null ? viaValues[activeViaIndex] || "" : "";

  const debouncedFromValue = useDebounce(fromValue, 300);
  const debouncedToValue = useDebounce(toValue, 300);
  const debouncedViaValue = useDebounce(viaValue, 300);

  const { data: fromPlaces } = useGetPlaces(
    {
      search: debouncedFromValue,
    },
    debouncedFromValue.length > 0 && fromFocused && !currentCoordinates
  );

  const { data: toPlaces } = useGetPlaces(
    {
      search: debouncedToValue,
    },
    debouncedToValue.length > 0 && toFocused && !currentCoordinates
  );

  const { data: viaPlaces } = useGetPlaces(
    {
      search: debouncedViaValue,
    },
    debouncedViaValue.length > 0 &&
      activeViaIndex !== null &&
      !currentCoordinates
  );

  const {
    data: currentLocationPlaces,
    isFetched: isLocationPlacesFetched,
    error: locationPlacesError,
  } = useGetPlaces(
    {
      coordinates: currentCoordinates!,
    },
    Boolean(currentCoordinates)
  );

  useEffect(() => {
    if (!currentCoordinates || !isLocationPlacesFetched) return;

    if (locationPlacesError) {
      setCurrentCoordinates(null);
      setLocationError(true);
      return;
    }

    if (currentLocationPlaces && currentLocationPlaces.length > 0) {
      const firstPlace = currentLocationPlaces[0];
      const displayName = firstPlace.name;

      if (activeField === "from") {
        setFromPlace(firstPlace.ref, displayName);
        sendSelectEvent("from", displayName, "geolocation");
      } else if (activeField === "to") {
        setToPlace(firstPlace.ref, displayName);
        sendSelectEvent("to", displayName, "geolocation");
      } else if (activeField === "via" && activeViaIndex !== null) {
        setViaPlace(activeViaIndex, firstPlace.ref, displayName);
        sendSelectEvent(
          `via_${activeViaIndex + 1}`,
          displayName,
          "geolocation"
        );
      }

      setCurrentCoordinates(null);
    } else {
      setCurrentCoordinates(null);
    }
  }, [
    currentLocationPlaces,
    currentCoordinates,
    isLocationPlacesFetched,
    locationPlacesError,
    activeField,
    activeViaIndex,
    setFromPlace,
    setToPlace,
    setViaPlace,
  ]);

  const places =
    activeField === "from"
      ? fromPlaces
      : activeField === "to"
        ? toPlaces
        : viaPlaces;

  const searchValue =
    activeField === "from"
      ? fromValue
      : activeField === "to"
        ? toValue
        : viaValue;

  const debouncedSearchValue =
    activeField === "from"
      ? debouncedFromValue
      : activeField === "to"
        ? debouncedToValue
        : debouncedViaValue;

  const globalFetching = useIsFetching({ queryKey: ["get", "places"] });
  const isSearchLoading =
    searchValue.length > 0 &&
    debouncedSearchValue.length > 0 &&
    globalFetching > 0;
  const isLoading =
    isSearchLoading || isLoadingLocation || Boolean(currentCoordinates);

  const lastSearchTermRef = useRef<Record<string, string>>({});
  const searchTimerRef = useRef<Record<string, ReturnType<typeof setTimeout>>>(
    {}
  );
  const pendingSearchRef = useRef<Record<string, () => void>>({});

  const sendSearchEvent = (
    field: string,
    term: string,
    resultCount: number
  ) => {
    if (lastSearchTermRef.current[field] === term) return;
    lastSearchTermRef.current[field] = term;

    const fire = () => {
      dataLayerSend({
        data: {
          event: `transport_search_${field}`,
          search_term: term,
          search_results: resultCount,
        },
        noActivities: true,
        timeout: 0,
      });
      delete pendingSearchRef.current[field];
    };

    if (searchTimerRef.current[field])
      clearTimeout(searchTimerRef.current[field]);
    pendingSearchRef.current[field] = fire;
    searchTimerRef.current[field] = setTimeout(fire, 2000);
  };

  const flushPendingSearch = (field: string) => {
    if (searchTimerRef.current[field]) {
      clearTimeout(searchTimerRef.current[field]);
      delete searchTimerRef.current[field];
    }
    if (pendingSearchRef.current[field]) {
      pendingSearchRef.current[field]();
    }
  };

  useEffect(() => {
    if (fromFocused && debouncedFromValue && fromPlaces) {
      sendSearchEvent("from", debouncedFromValue, fromPlaces.length);
    }
  }, [fromPlaces, debouncedFromValue, fromFocused]);

  useEffect(() => {
    if (toFocused && debouncedToValue && toPlaces) {
      sendSearchEvent("to", debouncedToValue, toPlaces.length);
    }
  }, [toPlaces, debouncedToValue, toFocused]);

  useEffect(() => {
    if (activeViaIndex !== null && debouncedViaValue && viaPlaces) {
      sendSearchEvent(
        `via_${activeViaIndex + 1}`,
        debouncedViaValue,
        viaPlaces.length
      );
    }
  }, [viaPlaces, debouncedViaValue, activeViaIndex]);

  const sendSelectEvent = (
    field: string,
    name: string,
    source: "search" | "geolocation" = "search"
  ) => {
    flushPendingSearch(field);
    dataLayerSend({
      data: {
        event: `transport_search_${field}_select`,
        search_term: name,
        search_source: source,
      },
      noActivities: true,
      timeout: 0,
    });
  };

  const handlePlaceSelect = (place: TransportPlace) => {
    if (activeField === "from") {
      setFromPlace(place.ref, place.name);
      sendSelectEvent("from", place.name);
    } else if (activeField === "to") {
      setToPlace(place.ref, place.name);
      sendSelectEvent("to", place.name);
    } else if (activeField === "via" && activeViaIndex !== null) {
      setViaPlace(activeViaIndex, place.ref, place.name);
      sendSelectEvent(`via_${activeViaIndex + 1}`, place.name);
    }
  };

  const handleCurrentLocationSelect = async () => {
    try {
      setIsLoadingLocation(true);
      setLocationError(false);
      const coordinates = await getCurrentPosition();
      setCurrentCoordinates(coordinates);
    } catch (error) {
      console.error("Error getting location:", error);
      setLocationError(true);
    } finally {
      setIsLoadingLocation(false);
    }
  };

  if (!activeField) return null;

  const hasPlaces = places && places.length > 0;
  const shouldShowPopup = activeField === "from" || hasPlaces || isLoading;

  if (!shouldShowPopup) return null;

  return (
    <div
      className="absolute -start-px top-full z-50 h-max max-h-[300px] w-[calc(100%+2px)] overflow-y-auto rounded-b-lg border border-solid border-gray-200 bg-white py-2 shadow-lg lg:start-0 lg:w-[calc(100%+1px)]"
      onMouseDown={(e) => e.preventDefault()}
    >
      <div className="flex flex-col">
        {isLoading && (
          <div className="flex items-center justify-center py-4">
            <Loader size="sm" />
          </div>
        )}
        {!isLoading && isAvailable && activeField === "from" && (
          <PlaceItem
            name={
              locationError
                ? t("Transport.locationError")
                : isDenied
                  ? t("Transport.locationDisabled")
                  : t("general.currentLocation")
            }
            isCurrentLocation
            onClick={
              isDenied || locationError
                ? undefined
                : handleCurrentLocationSelect
            }
            disabled={isDenied || locationError}
          />
        )}
        {!isLoading &&
          ((fromValue && fromFocused) ||
            (toValue && toFocused) ||
            (viaValue && activeViaIndex !== null)) &&
          places?.map((place) => (
            <PlaceItem
              key={place.id}
              name={place.name}
              onClick={() => handlePlaceSelect(place)}
            />
          ))}
      </div>
    </div>
  );
};
