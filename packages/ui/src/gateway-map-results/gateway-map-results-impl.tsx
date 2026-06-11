"use client";

import {
  Suspense,
  lazy,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { Button } from "../button";
import type { MapBounds, MapCenter, MapPoint } from "../map";
import { MapResultsApp } from "../map-results-app";
import { SectionGrid } from "../section-grid";
import { cn } from "../utils/cn";
import type { ActivityItem } from "../section-activity-grid";
import type { GatewayMapResultsProps } from "./gateway-map-results.types";

const GatewayResultsMap = lazy(() =>
  import("../map").then((module) => ({ default: module.Map }))
);

const getGatewayMapMarkers = (activities: ActivityItem[]) =>
  activities.reduce<MapPoint[]>((markers, activity) => {
    if (!activity.mapPoint) {
      return markers;
    }

    markers.push({
      ...activity.mapPoint,
      card: {
        image: activity.image,
        images: activity.images,
        title: activity.title,
        type: activity.type,
        subtitle: activity.subtitle,
        category: activity.category,
        dateRange: activity.dateRange,
        distance: activity.distance,
        meta: activity.meta,
        score: activity.score,
        reviewCount: activity.reviewCount,
        priceLabel: activity.priceLabel,
        price: activity.price,
        pending: activity.pending,
        renderImage: activity.renderImage,
        render: activity.render,
      },
    });

    return markers;
  }, []);

const getGatewayMapCenter = (markers: MapPoint[]) => {
  const firstMarker = markers[0];

  return firstMarker
    ? {
        lat: firstMarker.lat,
        lng: firstMarker.lng,
      }
    : undefined;
};

const isPointInMapBounds = (
  point: MapPoint | null | undefined,
  bounds: MapBounds | null
) => {
  if (!bounds) {
    return true;
  }

  if (!point) {
    return false;
  }

  const isInLatitudeRange =
    point.lat >= bounds.south && point.lat <= bounds.north;
  const isInLongitudeRange =
    bounds.west <= bounds.east
      ? point.lng >= bounds.west && point.lng <= bounds.east
      : point.lng >= bounds.west || point.lng <= bounds.east;

  return isInLatitudeRange && isInLongitudeRange;
};

const getMapBoundsCenter = (bounds: MapBounds | null): MapCenter | null => {
  if (!bounds) {
    return null;
  }

  const lng =
    bounds.west <= bounds.east
      ? (bounds.west + bounds.east) / 2
      : ((bounds.west + bounds.east + 360) / 2) % 360;

  return {
    lat: (bounds.north + bounds.south) / 2,
    lng: lng > 180 ? lng - 360 : lng,
  };
};

const getDistanceScore = (a: MapCenter, b: MapCenter) => {
  const latDiff = a.lat - b.lat;
  const lngDiff = a.lng - b.lng;

  return latDiff * latDiff + lngDiff * lngDiff;
};

const getNearestGatewayMapCenter = (
  markers: MapPoint[],
  bounds: MapBounds | null,
  fallbackCenter: MapCenter | undefined
): MapCenter | undefined => {
  const referenceCenter = getMapBoundsCenter(bounds) ?? fallbackCenter;

  if (!referenceCenter) {
    return markers[0];
  }

  return markers.reduce<MapPoint | undefined>((nearest, marker) => {
    if (!nearest) {
      return marker;
    }

    return getDistanceScore(marker, referenceCenter) <
      getDistanceScore(nearest, referenceCenter)
      ? marker
      : nearest;
  }, undefined);
};

const getDenseGatewayMapCenter = (
  markers: MapPoint[]
): MapCenter | undefined =>
  markers.reduce<{ count: number; marker: MapPoint } | null>((best, marker) => {
    const count = markers.filter(
      (candidate) => getDistanceScore(marker, candidate) <= 0.25
    ).length;

    if (!best || count > best.count) {
      return { count, marker };
    }

    return best;
  }, null)?.marker ?? markers[0];

export default function GatewayMapResultsImpl({
  action,
  activities,
  apiKey,
  className,
  filterHeader,
  labels,
  loading = false,
  open,
  resetKey,
  sectionTitle,
  onResetDate,
  ...props
}: GatewayMapResultsProps) {
  const [mapBounds, setMapBounds] = useState<MapBounds | null>(null);
  const [mapCenterOverride, setMapCenterOverride] = useState<
    MapCenter | undefined
  >();
  const [mapRecenterKey, setMapRecenterKey] = useState(0);
  const [hoveredMapPointId, setHoveredMapPointId] = useState<string | null>(
    null
  );
  const [canRenderMap, setCanRenderMap] = useState(false);
  const mapMarkers = useMemo(
    () => getGatewayMapMarkers(activities),
    [activities]
  );
  const mapCenter = useMemo(
    () => getGatewayMapCenter(mapMarkers),
    [mapMarkers]
  );
  const resolvedMapCenter = mapCenterOverride ?? mapCenter;
  const visibleMapActivities = useMemo(
    () =>
      activities.filter((activity) =>
        isPointInMapBounds(activity.mapPoint, mapBounds)
      ),
    [activities, mapBounds]
  );
  const recenterMap = useCallback((center: MapCenter | undefined) => {
    if (!center) {
      return;
    }

    setMapCenterOverride({ lat: center.lat, lng: center.lng });
    setMapRecenterKey(Date.now());
  }, []);
  const handleShowNearestResults = useCallback(() => {
    recenterMap(getNearestGatewayMapCenter(mapMarkers, mapBounds, mapCenter));
  }, [mapBounds, mapCenter, mapMarkers, recenterMap]);
  const handleResetDate = useCallback(() => {
    recenterMap(getDenseGatewayMapCenter(mapMarkers) ?? mapCenter);
    onResetDate?.();
  }, [mapCenter, mapMarkers, onResetDate, recenterMap]);
  const shouldShowMapNoResults =
    !loading && activities.length > 0 && visibleMapActivities.length === 0;
  const mobileSheetTitle = `${visibleMapActivities.length} ${labels.activities}`;

  useEffect(() => {
    setCanRenderMap(true);
  }, []);

  const renderMapActivities = (gridClassName?: string) =>
    shouldShowMapNoResults ? (
      <div
        className={cn(
          "rounded-lg border border-solid border-gray-200 bg-white p-6 shadow-sm",
          gridClassName
        )}
      >
        <h2 className="text-xl font-semibold text-gray-950">
          {labels.noExactResultsTitle}
        </h2>
        <p className="mt-2 max-w-md text-sm leading-relaxed text-gray-600">
          {labels.noExactResultsDescription}
        </p>
        <div className="mt-5 flex flex-wrap gap-3">
          <Button
            type="primary"
            text={labels.showNearestResults}
            onClick={handleShowNearestResults}
          />
          <Button
            type="secondary"
            text={labels.resetDate}
            onClick={handleResetDate}
          />
        </div>
      </div>
    ) : (
      <SectionGrid
        title={null}
        action={action}
        activities={visibleMapActivities}
        loading={loading}
        itemsPerRowLg="auto-fill"
        className={gridClassName}
        onActivityHover={(activity) =>
          setHoveredMapPointId(activity?.mapPoint?.id ?? null)
        }
      />
    );

  return (
    <MapResultsApp
      open={open}
      resetKey={resetKey}
      aria-label={String(sectionTitle)}
      role="dialog"
      className={className}
      header={filterHeader}
      desktopList={renderMapActivities()}
      map={
        <Suspense fallback={null}>
          {canRenderMap ? (
            <GatewayResultsMap
              activeMarkerId={hoveredMapPointId}
              apiKey={apiKey}
              center={resolvedMapCenter}
              className="rounded-none"
              markers={mapMarkers}
              onBoundsChange={setMapBounds}
              recenterKey={mapRecenterKey}
              height="100%"
              zoom={10}
            />
          ) : null}
        </Suspense>
      }
      mobileList={renderMapActivities()}
      mobileTitle={mobileSheetTitle}
      {...props}
    />
  );
}
