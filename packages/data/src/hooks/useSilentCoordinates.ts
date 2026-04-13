"use client";

import { useEffect, useState } from "react";
import { useGeolocation } from "./useGeolocation";

type Coords = { latitude: number; longitude: number } | null;

export const useSilentCoordinates = () => {
  const { getCurrentPosition } = useGeolocation();
  const [coords, setCoords] = useState<Coords>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const finish = (c: Coords) => {
      if (cancelled) return;
      setCoords(c);
      setReady(true);
    };

    if (
      typeof window === "undefined" ||
      !window.isSecureContext ||
      !navigator.geolocation ||
      !navigator.permissions
    ) {
      finish(null);
      return;
    }

    navigator.permissions
      .query({ name: "geolocation" })
      .then((result) => {
        if (cancelled) return;
        if (result.state !== "granted") {
          finish(null);
          return;
        }
        getCurrentPosition()
          .then((c) => finish(c))
          .catch(() => finish(null));
      })
      .catch(() => finish(null));

    return () => {
      cancelled = true;
    };
  }, []);

  return { coords, ready };
};
