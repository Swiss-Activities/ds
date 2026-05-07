"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSilentCoordinates } from "../hooks/useSilentCoordinates";
import { useDataConfig } from "../provider";
import { fetchGatewayProxy, normalizeGatewayLocale } from "./client";
import { useGetCountry } from "./getCountry";
import type {
  TGatewayActivityTypeFilter,
  TGatewayActivityTypeFilterParams,
} from "./types";

export type UseActivityTypeFilterOptions = TGatewayActivityTypeFilterParams & {
  enabled?: boolean;
  retry?: boolean | number;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
  refetchOnReconnect?: boolean;
};

export const getActivityTypeFilter = async (
  apiUrl: string,
  params: TGatewayActivityTypeFilterParams,
  signal?: AbortSignal
): Promise<TGatewayActivityTypeFilter> => {
  const { activityType, ...queryParams } = params;

  return fetchGatewayProxy<TGatewayActivityTypeFilter>({
    apiUrl,
    path: `activity-types/${encodeURIComponent(activityType)}/filter`,
    params: {
      ...queryParams,
      tags: queryParams.tags?.join(","),
    },
    signal,
  });
};

export const useActivityTypeFilter = ({
  activityType,
  locale,
  lat,
  lng,
  country,
  page = 1,
  perPage = 20,
  tags = [],
  dev,
  enabled = true,
  retry = false,
  staleTime = 30_000,
  refetchOnWindowFocus = false,
  refetchOnReconnect = true,
}: UseActivityTypeFilterOptions) => {
  const { apiUrl, locale: configLocale } = useDataConfig();
  const { data: detectedCountry, isFetched: countryFetched } = useGetCountry({
    enabled,
  });
  const { coords, ready: coordsReady } = useSilentCoordinates();
  const resolvedLocale = normalizeGatewayLocale(locale ?? configLocale);
  const resolvedCountry = country ?? detectedCountry ?? undefined;
  const resolvedLat = lat ?? coords?.latitude;
  const resolvedLng = lng ?? coords?.longitude;
  const queryEnabled =
    enabled && Boolean(activityType) && countryFetched && coordsReady;
  const isPreparing = enabled && (!countryFetched || !coordsReady);
  const normalizedTags = tags.filter(Boolean);

  const params: TGatewayActivityTypeFilterParams = {
    activityType,
    ...(resolvedLocale ? { locale: resolvedLocale } : {}),
    ...(resolvedCountry ? { country: resolvedCountry } : {}),
    ...(resolvedLat != null ? { lat: resolvedLat } : {}),
    ...(resolvedLng != null ? { lng: resolvedLng } : {}),
    page,
    perPage,
    ...(normalizedTags.length > 0 ? { tags: normalizedTags } : {}),
    ...(dev ? { dev } : {}),
  };

  const result = useQuery({
    queryKey: [
      "get",
      "gateway/app/v1/activity-types/filter",
      params.activityType,
      params.locale,
      params.lat,
      params.lng,
      params.country,
      params.page,
      params.perPage,
      params.tags?.join(","),
      params.dev,
    ],
    queryFn: ({ signal }) => getActivityTypeFilter(apiUrl, params, signal),
    enabled: queryEnabled,
    retry,
    staleTime,
    refetchOnWindowFocus,
    refetchOnReconnect,
    placeholderData: keepPreviousData,
  });

  return {
    ...result,
    isLoading: isPreparing || result.isLoading,
  };
};
