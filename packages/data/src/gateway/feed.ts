"use client";

import { useQuery } from "@tanstack/react-query";
import { useSilentCoordinates } from "../hooks/useSilentCoordinates";
import {
  fetchGatewayDirect,
  fetchGatewayProxy,
  getGatewayContextParams,
  normalizeGatewayLocale,
  type GatewayParams,
} from "./client";
import { getCountry } from "./getCountry";
import type { TGatewayFeedParams, TGatewayHome } from "./types";

const defaultTraceUrl = "https://www.swissactivities.com/cdn-cgi/trace";

export type UseGatewayFeedOptions = TGatewayFeedParams & {
  apiUrl: string;
  traceUrl?: string;
  enabled?: boolean;
  retry?: boolean | number;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
  refetchOnReconnect?: boolean;
};

export const getGatewayFeedPath = ({
  destination,
  activityType,
  nonBookable,
  poi,
  region,
}: Pick<
  TGatewayFeedParams,
  "destination" | "activityType" | "nonBookable" | "poi" | "region"
>) => {
  if (activityType) {
    return `activity-types/${encodeURIComponent(activityType)}`;
  }

  if (nonBookable) {
    return `non-bookable/${encodeURIComponent(nonBookable)}`;
  }

  if (poi) {
    return `pois/${encodeURIComponent(poi)}`;
  }

  if (destination) {
    return `destinations/${encodeURIComponent(destination)}`;
  }

  if (region) {
    return `regions/${encodeURIComponent(region)}`;
  }

  return "home";
};

export const getGatewayFeedDirectPath = (params: TGatewayFeedParams) => {
  return `/app/v1/${getGatewayFeedPath(params)}`;
};

export const getGatewayFeedQueryParams = (
  params: TGatewayFeedParams
): GatewayParams => {
  const supportsDate =
    !params.activityType &&
    !params.nonBookable &&
    !params.poi &&
    !params.region;

  return {
    ...getGatewayContextParams(params),
    ...(supportsDate && params.date ? { date: params.date } : {}),
    ...(params.dev ? { dev: params.dev } : {}),
  };
};

export const getGatewayFeed = async (
  apiUrl: string,
  params: TGatewayFeedParams,
  signal?: AbortSignal
): Promise<TGatewayHome> => {
  return fetchGatewayProxy<TGatewayHome>({
    apiUrl,
    path: getGatewayFeedPath(params),
    params: getGatewayFeedQueryParams(params),
    signal,
  });
};

export const getGatewayFeedDirect = async (
  gatewayUrl: string,
  params: TGatewayFeedParams,
  signal?: AbortSignal
): Promise<TGatewayHome> => {
  return fetchGatewayDirect<TGatewayHome>({
    gatewayUrl,
    path: getGatewayFeedDirectPath(params),
    params: getGatewayFeedQueryParams(params),
    signal,
  });
};

export const useGatewayFeed = ({
  apiUrl,
  traceUrl = defaultTraceUrl,
  locale,
  lat,
  lng,
  country,
  destination,
  activityType,
  nonBookable,
  poi,
  region,
  date,
  dev,
  enabled = true,
  retry = 3,
  staleTime = Infinity,
  refetchOnWindowFocus = true,
  refetchOnReconnect = true,
}: UseGatewayFeedOptions) => {
  const { coords, ready: coordsReady } = useSilentCoordinates();
  const countryQuery = useQuery({
    queryKey: ["get", "gateway/country", traceUrl],
    queryFn: () => getCountry(traceUrl),
    staleTime: Infinity,
    retry: false,
    enabled: enabled && Boolean(traceUrl),
  });
  const countryFetched = !enabled || countryQuery.isFetched;
  const resolvedLocale = normalizeGatewayLocale(locale);
  const resolvedCountry = country ?? countryQuery.data ?? undefined;
  const resolvedLat = lat ?? coords?.latitude;
  const resolvedLng = lng ?? coords?.longitude;
  const contextReady = countryFetched && coordsReady;
  const queryEnabled = enabled && contextReady && Boolean(apiUrl);
  const isPreparing = enabled && !contextReady;

  const params: TGatewayFeedParams = {
    ...getGatewayContextParams({
      locale: resolvedLocale,
      country: resolvedCountry,
      lat: resolvedLat,
      lng: resolvedLng,
    }),
    ...(destination ? { destination } : {}),
    ...(activityType ? { activityType } : {}),
    ...(nonBookable ? { nonBookable } : {}),
    ...(poi ? { poi } : {}),
    ...(region ? { region } : {}),
    ...(date ? { date } : {}),
    ...(dev ? { dev } : {}),
  };

  const query = useQuery({
    queryKey: [
      "get",
      "gateway/app/v1/feed",
      params.locale,
      params.lat,
      params.lng,
      params.country,
      params.destination,
      params.activityType,
      params.nonBookable,
      params.poi,
      params.region,
      params.date,
      params.dev,
    ],
    queryFn: ({ signal }) => getGatewayFeed(apiUrl, params, signal),
    staleTime,
    enabled: queryEnabled,
    retry,
    refetchOnWindowFocus,
    refetchOnReconnect,
  });

  return {
    ...query,
    context: {
      locale: resolvedLocale,
      country: resolvedCountry ?? null,
      lat: resolvedLat ?? null,
      lng: resolvedLng ?? null,
      destination: destination ?? null,
      activityType: activityType ?? null,
      nonBookable: nonBookable ?? null,
      poi: poi ?? null,
      region: region ?? null,
      date: date ?? null,
    },
    contextReady,
    isPreparing,
    isLoading: isPreparing || query.isLoading,
  };
};
