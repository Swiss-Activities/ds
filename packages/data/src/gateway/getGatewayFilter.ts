"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSilentCoordinates } from "../hooks/useSilentCoordinates";
import { useDataConfig } from "../provider";
import { fetchGatewayProxy, normalizeGatewayLocale } from "./client";
import { useGetCountry } from "./getCountry";
import type { TGatewayFilter, TGatewayFilterParams } from "./types";

export type UseGatewayFilterOptions = TGatewayFilterParams & {
  enabled?: boolean;
  retry?: boolean | number;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
  refetchOnReconnect?: boolean;
};

export const getGatewayFilterPath = (endpoint: string) =>
  endpoint
    .replace(/^\/+/, "")
    .replace(/^app\/v1\/+/, "")
    .replace(/^gateway\/+/, "");

export const getGatewayFilter = async (
  apiUrl: string,
  params: TGatewayFilterParams,
  signal?: AbortSignal
): Promise<TGatewayFilter> => {
  const { endpoint, ...queryParams } = params;

  return fetchGatewayProxy<TGatewayFilter>({
    apiUrl,
    path: getGatewayFilterPath(endpoint),
    params: {
      ...queryParams,
      tags: queryParams.tags?.join(","),
    },
    signal,
  });
};

export const useGatewayFilter = ({
  endpoint,
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
}: UseGatewayFilterOptions) => {
  const { apiUrl, locale: configLocale } = useDataConfig();
  const { data: detectedCountry, isFetched: countryFetched } = useGetCountry({
    enabled,
  });
  const { coords, ready: coordsReady } = useSilentCoordinates();
  const resolvedLocale = normalizeGatewayLocale(locale ?? configLocale);
  const resolvedCountry = country ?? detectedCountry ?? undefined;
  const resolvedLat = lat ?? coords?.latitude;
  const resolvedLng = lng ?? coords?.longitude;
  const normalizedTags = tags.filter(Boolean);
  const queryEnabled =
    enabled && Boolean(endpoint) && countryFetched && coordsReady;
  const isPreparing = enabled && (!countryFetched || !coordsReady);

  const params: TGatewayFilterParams = {
    endpoint,
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
      "gateway/app/v1/filter",
      params.endpoint,
      params.locale,
      params.lat,
      params.lng,
      params.country,
      params.page,
      params.perPage,
      params.tags?.join(","),
      params.dev,
    ],
    queryFn: ({ signal }) => getGatewayFilter(apiUrl, params, signal),
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
