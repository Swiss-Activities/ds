"use client";

import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { cn } from "../utils/cn";
import type { MapCenter, MapProps } from "./map.types";

const DEFAULT_CENTER = { lat: 46.8182, lng: 8.2275 };
const DEFAULT_ZOOM = 8;
const SCRIPT_ID = "swiss-activities-google-map";
const DEFAULT_MAP_OPTIONS: NonNullable<MapProps["options"]> = {
  clickableIcons: false,
  disableDefaultUI: true,
  fullscreenControl: false,
  keyboardShortcuts: false,
  mapTypeControl: false,
  scaleControl: false,
  streetViewControl: false,
  zoomControl: false,
};

function resolveHeight(height: MapProps["height"]) {
  if (typeof height === "number") return `${height}px`;
  return height ?? "520px";
}

function resolveCenter(
  center: MapCenter | undefined,
  markers: MapProps["markers"]
) {
  return center ?? markers?.[0] ?? DEFAULT_CENTER;
}

function MapFallback({
  className,
  fallback,
  height,
}: Pick<MapProps, "className" | "fallback" | "height">) {
  return (
    <div
      className={cn(
        "flex min-h-[320px] items-center justify-center overflow-hidden rounded-lg bg-gray-100",
        className
      )}
      style={{ height: resolveHeight(height) }}
    >
      {fallback ?? null}
    </div>
  );
}

export function Map({
  apiKey,
  center,
  className,
  fallback,
  height,
  markers = [],
  options,
  zoom = DEFAULT_ZOOM,
}: MapProps) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey ?? "",
    id: SCRIPT_ID,
  });

  if (!apiKey || loadError || !isLoaded) {
    return (
      <MapFallback className={className} fallback={fallback} height={height} />
    );
  }

  return (
    <div
      className={cn("overflow-hidden rounded-lg bg-gray-100", className)}
      style={{ height: resolveHeight(height) }}
    >
      <GoogleMap
        center={resolveCenter(center, markers)}
        mapContainerClassName="h-full w-full"
        options={{ ...DEFAULT_MAP_OPTIONS, ...options }}
        zoom={zoom}
      >
        {markers.map((marker) => (
          <MarkerF
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            title={marker.title}
          />
        ))}
      </GoogleMap>
    </div>
  );
}
