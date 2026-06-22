import { useEffect, useRef } from "react";
import { useTransportStoreLocal } from "./store";
import { useGetPlaces } from "../query/transport/places";

type Coordinates = {
  latitude: number;
  longitude: number;
};

export const useMeetingPointPrefill = (
  coordinates?: Coordinates,
  enabled = true
) => {
  const to = useTransportStoreLocal((state) => state.to);
  const setToPlace = useTransportStoreLocal((state) => state.setToPlace);
  const hasInitialized = useRef(false);

  const hasCoords =
    !!coordinates && coordinates.latitude !== 0 && coordinates.longitude !== 0;

  const { data: places, isLoading } = useGetPlaces(
    { coordinates: hasCoords ? coordinates : undefined },
    enabled && hasCoords && !to && !hasInitialized.current
  );

  useEffect(() => {
    if (places && places.length > 0 && !hasInitialized.current) {
      const firstPlace = places[0];
      setToPlace(firstPlace.ref, firstPlace.name);
      hasInitialized.current = true;
    }
  }, [places, setToPlace]);

  return { isLoading: isLoading && !hasInitialized.current };
};
