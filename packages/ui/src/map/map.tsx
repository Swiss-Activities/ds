"use client";

import {
  GoogleMap,
  OverlayView,
  OverlayViewF,
  useJsApiLoader,
} from "@react-google-maps/api";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentType,
} from "react";
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
  X,
} from "../icons";
import type { LucideProps } from "../icons";
import { ActivityCard } from "../activity-card";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import type { MapBounds, MapCenter, MapPoint, MapProps } from "./map.types";

const DEFAULT_CENTER = { lat: 46.8182, lng: 8.2275 };
const DEFAULT_ZOOM = 8;
const SCRIPT_ID = "swiss-activities-google-map";
const MARKER_OFFSET = (width: number, height: number) => ({
  x: -(width / 2),
  y: -height,
});
const MARKER_COLLISION_PADDING = 6;
const MARKER_ICON_SIZE = { height: 36, width: 36 };
const MARKER_PRICE_SIZE = { height: 30, width: 88 };
const POPUP_EDGE_PADDING = 12;
const POPUP_GAP = 10;
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

function toMapBounds(bounds: google.maps.LatLngBounds): MapBounds {
  const northEast = bounds.getNorthEast();
  const southWest = bounds.getSouthWest();

  return {
    east: northEast.lng(),
    north: northEast.lat(),
    south: southWest.lat(),
    west: southWest.lng(),
  };
}

function getMapSize(map: google.maps.Map | null) {
  const container = map?.getDiv();

  if (!container) {
    return null;
  }

  return {
    height: container.clientHeight,
    width: container.clientWidth,
  };
}

function getMarkerSize(marker: MapPoint) {
  return marker.priceLabel ? MARKER_PRICE_SIZE : MARKER_ICON_SIZE;
}

function getMarkerRect(
  marker: MapPoint,
  bounds: MapBounds,
  size: { height: number; width: number }
) {
  const longitudeSpan =
    bounds.east >= bounds.west
      ? bounds.east - bounds.west
      : 360 - bounds.west + bounds.east;
  const latitudeSpan = bounds.north - bounds.south;

  if (longitudeSpan <= 0 || latitudeSpan <= 0) {
    return null;
  }

  const longitudeOffset =
    marker.lng >= bounds.west
      ? marker.lng - bounds.west
      : 360 - bounds.west + marker.lng;
  const markerSize = getMarkerSize(marker);
  const x = (longitudeOffset / longitudeSpan) * size.width;
  const y = ((bounds.north - marker.lat) / latitudeSpan) * size.height;

  return {
    bottom: y + MARKER_COLLISION_PADDING,
    left: x - markerSize.width / 2 - MARKER_COLLISION_PADDING,
    right: x + markerSize.width / 2 + MARKER_COLLISION_PADDING,
    top: y - markerSize.height - MARKER_COLLISION_PADDING,
  };
}

function getPopupOffset({
  bounds,
  marker,
  popup,
  size,
}: {
  bounds: MapBounds | null;
  marker: MapPoint;
  popup: { height: number; width: number };
  size: { height: number; width: number } | null;
}) {
  const markerSize = getMarkerSize(marker);
  const fallbackOffset = {
    x: -(popup.width / 2),
    y: -(popup.height + markerSize.height + POPUP_GAP),
  };

  if (!bounds || !size) {
    return fallbackOffset;
  }

  const rect = getMarkerRect(marker, bounds, size);

  if (!rect) {
    return fallbackOffset;
  }

  const markerCenterX = (rect.left + rect.right) / 2;
  let x = -(popup.width / 2);
  const popupLeft = markerCenterX + x;
  const popupRight = popupLeft + popup.width;

  if (popupLeft < POPUP_EDGE_PADDING) {
    x += POPUP_EDGE_PADDING - popupLeft;
  } else if (popupRight > size.width - POPUP_EDGE_PADDING) {
    x -= popupRight - (size.width - POPUP_EDGE_PADDING);
  }

  const hasRoomAbove = rect.top >= popup.height + POPUP_GAP;

  return {
    x,
    y: hasRoomAbove
      ? -(popup.height + markerSize.height + POPUP_GAP)
      : POPUP_GAP,
  };
}

function overlapsRect(
  a: NonNullable<ReturnType<typeof getMarkerRect>>,
  b: NonNullable<ReturnType<typeof getMarkerRect>>
) {
  return (
    a.left < b.right &&
    a.right > b.left &&
    a.top < b.bottom &&
    a.bottom > b.top
  );
}

function getDeclutteredMarkers({
  activeMarkerId,
  bounds,
  markers,
  selectedMarkerId,
  size,
}: {
  activeMarkerId?: string | null;
  bounds: MapBounds | null;
  markers: MapPoint[];
  selectedMarkerId?: string | null;
  size: { height: number; width: number } | null;
}) {
  if (!bounds || !size) {
    return markers;
  }

  const visibleMarkers: MapPoint[] = [];
  const visibleRects: Array<NonNullable<ReturnType<typeof getMarkerRect>>> = [];
  const priorityMarkerIds = [activeMarkerId, selectedMarkerId].filter(
    Boolean
  ) as string[];
  const sortedMarkers = priorityMarkerIds.length
    ? [...markers].sort((a, b) => {
        const priorityA = priorityMarkerIds.indexOf(a.id);
        const priorityB = priorityMarkerIds.indexOf(b.id);

        if (priorityA === -1 && priorityB === -1) return 0;
        if (priorityA === -1) return 1;
        if (priorityB === -1) return -1;
        return priorityA - priorityB;
      })
    : markers;

  sortedMarkers.forEach((marker) => {
    const rect = getMarkerRect(marker, bounds, size);

    if (!rect) {
      visibleMarkers.push(marker);
      return;
    }

    const isPriority = priorityMarkerIds.includes(marker.id);

    if (
      !isPriority &&
      visibleRects.some((visibleRect) => overlapsRect(rect, visibleRect))
    ) {
      return;
    }

    visibleMarkers.push(marker);
    visibleRects.push(rect);
  });

  return visibleMarkers;
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

function MapMarker({
  isActive,
  marker,
  onClick,
}: {
  isActive?: boolean;
  marker: MapPoint;
  onClick: () => void;
}) {
  if (marker.priceLabel) {
    return (
      <div
        aria-label={marker.title}
        onClick={(event) => {
          event.stopPropagation();
          onClick();
        }}
        className={cn(
          "cursor-pointer rounded-full border px-3 py-1.5 text-[13px] font-bold leading-none shadow-[0_5px_8px_rgba(0,0,0,0.16)] transition-colors duration-150 hover:border-gray-950 hover:bg-gray-950 hover:text-white",
          isActive
            ? "border-gray-950 bg-gray-950 text-white"
            : "border-gray-300 bg-white text-gray-950"
        )}
      >
        {marker.priceLabel}
      </div>
    );
  }

  return (
    <div
      aria-label={marker.title}
      onClick={(event) => {
        event.stopPropagation();
        onClick();
      }}
      className={cn(
        "flex size-9 cursor-pointer items-center justify-center rounded-full border shadow-[0_5px_8px_rgba(0,0,0,0.16)] transition-colors duration-150 hover:border-gray-950 hover:bg-gray-950 hover:text-white",
        isActive
          ? "border-gray-950 bg-gray-950 text-white"
          : "border-gray-300 bg-white text-gray-950"
      )}
    >
      <Icon
        icon={resolveMarkerIcon(marker)}
        size="sm"
        strokeWidth={2.2}
      />
    </div>
  );
}

function MapMarkerPopup({
  marker,
  onClose,
}: {
  marker: MapPoint;
  onClose: () => void;
}) {
  const card = marker.card ?? {
    image: null,
    title: marker.title,
    type: marker.type ?? "non-bookable",
  };

  return (
    <div className="relative w-[280px] max-w-[calc(100vw-2rem)] rounded-xl border border-gray-950 bg-white shadow-[0_10px_24px_rgba(0,0,0,0.2)]">
      <button
        type="button"
        aria-label="Close"
        onClick={(event) => {
          event.stopPropagation();
          onClose();
        }}
        className="absolute right-2 top-2 z-10 flex size-8 items-center justify-center rounded-full bg-white text-gray-950 shadow-sm transition hover:bg-gray-950 hover:text-white"
      >
        <Icon icon={X} size="sm" />
      </button>
      <ActivityCard
        {...card}
        className="border-none shadow-none"
      />
    </div>
  );
}

export function Map({
  activeMarkerId,
  apiKey,
  center,
  className,
  fallback,
  height,
  markers = [],
  onBoundsChange,
  options,
  recenterKey,
  zoom = DEFAULT_ZOOM,
}: MapProps) {
  const mapRef = useRef<google.maps.Map | null>(null);
  const [selectedMarkerId, setSelectedMarkerId] = useState<string | null>(null);
  const [mapBounds, setMapBounds] = useState<MapBounds | null>(null);
  const [mapSize, setMapSize] = useState<{
    height: number;
    width: number;
  } | null>(null);
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: apiKey ?? "",
    id: SCRIPT_ID,
  });
  const emitBoundsChange = useCallback(() => {
    const bounds = mapRef.current?.getBounds();

    if (!bounds) {
      return;
    }

    const nextBounds = toMapBounds(bounds);

    setMapBounds(nextBounds);
    setMapSize(getMapSize(mapRef.current));
    onBoundsChange?.(nextBounds);
  }, [onBoundsChange]);
  const visibleMarkers = useMemo(
    () =>
      getDeclutteredMarkers({
        activeMarkerId,
        bounds: mapBounds,
        markers,
        selectedMarkerId,
        size: mapSize,
      }),
    [activeMarkerId, mapBounds, mapSize, markers, selectedMarkerId]
  );
  const selectedMarker = useMemo(
    () => markers.find((marker) => marker.id === selectedMarkerId) ?? null,
    [markers, selectedMarkerId]
  );

  useEffect(() => {
    if (
      selectedMarkerId &&
      !markers.some((marker) => marker.id === selectedMarkerId)
    ) {
      setSelectedMarkerId(null);
    }
  }, [markers, selectedMarkerId]);

  useEffect(() => {
    if (!mapRef.current || recenterKey === undefined) {
      return;
    }

    mapRef.current.panTo(resolveCenter(center, markers));
  }, [center, markers, recenterKey]);

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
        onIdle={emitBoundsChange}
        onLoad={(map) => {
          mapRef.current = map;
          emitBoundsChange();
        }}
        onUnmount={() => {
          mapRef.current = null;
        }}
        onClick={() => setSelectedMarkerId(null)}
        options={{ ...DEFAULT_MAP_OPTIONS, ...options }}
        zoom={zoom}
      >
        {visibleMarkers.map((marker) => (
          <OverlayViewF
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={MARKER_OFFSET}
            zIndex={
              marker.id === activeMarkerId || marker.id === selectedMarkerId
                ? 30
                : marker.priceLabel
                  ? 20
                  : 10
            }
          >
            <MapMarker
              marker={marker}
              isActive={
                marker.id === activeMarkerId || marker.id === selectedMarkerId
              }
              onClick={() => setSelectedMarkerId(marker.id)}
            />
          </OverlayViewF>
        ))}
        {selectedMarker ? (
          <OverlayViewF
            key={`popup-${selectedMarker.id}`}
            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
            mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            getPixelPositionOffset={(width, height) =>
              getPopupOffset({
                bounds: mapBounds,
                marker: selectedMarker,
                popup: { height, width },
                size: mapSize,
              })
            }
            zIndex={40}
          >
            <MapMarkerPopup
              marker={selectedMarker}
              onClose={() => setSelectedMarkerId(null)}
            />
          </OverlayViewF>
        ) : null}
      </GoogleMap>
    </div>
  );
}
