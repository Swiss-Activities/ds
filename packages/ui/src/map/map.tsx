"use client";

import {
  GoogleMap,
  OverlayView,
  OverlayViewF,
  useJsApiLoader,
} from "@react-google-maps/api";
import type { ComponentType } from "react";
import {
  Binoculars,
  Castle,
  Flame,
  Landmark,
  MapPin,
  Mountain,
  Store,
  Ticket,
  Trees,
} from "../icons";
import type { LucideProps } from "../icons";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import type { MapCenter, MapPoint, MapProps } from "./map.types";

const DEFAULT_CENTER = { lat: 46.8182, lng: 8.2275 };
const DEFAULT_ZOOM = 8;
const SCRIPT_ID = "swiss-activities-google-map";
const MARKER_OFFSET = (width: number, height: number) => ({
  x: -(width / 2),
  y: -height,
});
const SA_MAP_STYLES: google.maps.MapTypeStyle[] = [
  {
    elementType: "geometry",
    stylers: [{ color: "#f4f1ea" }],
  },
  {
    elementType: "labels.icon",
    stylers: [{ visibility: "off" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#73716c" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#f7f5ef" }],
  },
  {
    featureType: "administrative",
    elementType: "geometry.stroke",
    stylers: [{ color: "#d7d3c8" }],
  },
  {
    featureType: "administrative.land_parcel",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "administrative.neighborhood",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "landscape.man_made",
    elementType: "geometry",
    stylers: [{ color: "#f0ede6" }],
  },
  {
    featureType: "landscape.natural",
    elementType: "geometry",
    stylers: [{ color: "#e9f3dc" }],
  },
  {
    featureType: "poi",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#d8efc7" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#ffffff" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#dedbd2" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#8b8982" }],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#fefefe" }],
  },
  {
    featureType: "road.local",
    elementType: "labels",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "transit",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#cfe8f3" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#78919b" }],
  },
];
const DEFAULT_MAP_OPTIONS: NonNullable<MapProps["options"]> = {
  clickableIcons: false,
  disableDefaultUI: true,
  fullscreenControl: false,
  gestureHandling: "greedy",
  keyboardShortcuts: false,
  mapTypeControl: false,
  scaleControl: false,
  scrollwheel: true,
  streetViewControl: false,
  styles: SA_MAP_STYLES,
  zoomControl: false,
};
const categoryMarkerIcons: Record<string, ComponentType<LucideProps>> = {
  "castles-ruins": Castle,
  exhibitions: Store,
  fireplaces: Flame,
  museums: Landmark,
  parks: Trees,
  playgrounds: Trees,
  viewpoints: Mountain,
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

function resolveMarkerIcon(marker: MapPoint) {
  if (marker.type === "activity") return Ticket;
  if (marker.type === "point-of-interest") return Binoculars;
  if (marker.category) return categoryMarkerIcons[marker.category] ?? MapPin;
  return MapPin;
}

function MapMarker({ marker }: { marker: MapPoint }) {
  if (marker.priceLabel) {
    return (
      <div
        aria-label={marker.title}
        className="cursor-pointer rounded-full border border-gray-300 bg-white px-3 py-1.5 text-[13px] font-bold leading-none text-gray-950 shadow-[0_5px_8px_rgba(0,0,0,0.16)] transition-colors duration-150 hover:border-primary hover:bg-primary hover:text-white"
      >
        {marker.priceLabel}
      </div>
    );
  }

  return (
    <div
      aria-label={marker.title}
      className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-gray-300 bg-white text-gray-950 shadow-[0_5px_8px_rgba(0,0,0,0.16)] transition-colors duration-150 hover:border-primary hover:bg-primary hover:text-white"
    >
      <Icon
        icon={resolveMarkerIcon(marker)}
        size="sm"
        strokeWidth={2.2}
      />
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
          <OverlayViewF
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={MARKER_OFFSET}
            zIndex={marker.priceLabel ? 20 : 10}
          >
            <MapMarker marker={marker} />
          </OverlayViewF>
        ))}
      </GoogleMap>
    </div>
  );
}
