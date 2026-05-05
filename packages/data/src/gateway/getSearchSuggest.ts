"use client";

import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { useSilentCoordinates } from "../hooks/useSilentCoordinates";
import { useDataConfig } from "../provider";
import { fetchGatewayProxy, normalizeGatewayLocale } from "./client";
import { useGetCountry } from "./getCountry";
import type {
  TGatewaySearchSuggest,
  TGatewaySearchSuggestParams,
} from "./types";

export type UseSearchSuggestOptions = TGatewaySearchSuggestParams & {
  enabled?: boolean;
  retry?: boolean | number;
  staleTime?: number;
  refetchOnWindowFocus?: boolean;
  refetchOnReconnect?: boolean;
};

export const getSearchSuggest = async (
  apiUrl: string,
  params: TGatewaySearchSuggestParams,
  signal?: AbortSignal
): Promise<TGatewaySearchSuggest> => {
  return fetchGatewayProxy<TGatewaySearchSuggest>({
    apiUrl,
    path: "search/suggest",
    params,
    signal,
  });
};

export const useSearchSuggest = ({
  q,
  locale,
  lat,
  lng,
  country,
  dev,
  enabled = true,
  retry = false,
  staleTime = 30_000,
  refetchOnWindowFocus = false,
  refetchOnReconnect = true,
}: UseSearchSuggestOptions = {}) => {
  const { apiUrl, locale: configLocale } = useDataConfig();
  const { data: detectedCountry, isFetched: countryFetched } = useGetCountry({
    enabled,
  });
  const { coords, ready: coordsReady } = useSilentCoordinates();
  const resolvedLocale = normalizeGatewayLocale(locale ?? configLocale);
  const resolvedCountry = country ?? detectedCountry ?? undefined;
  const resolvedLat = lat ?? coords?.latitude;
  const resolvedLng = lng ?? coords?.longitude;
  const query = q?.trim() || undefined;
  const queryEnabled = enabled && countryFetched && coordsReady;
  const isPreparing = enabled && (!countryFetched || !coordsReady);

  const params: TGatewaySearchSuggestParams = {
    ...(query ? { q: query } : {}),
    ...(resolvedLocale ? { locale: resolvedLocale } : {}),
    ...(resolvedCountry ? { country: resolvedCountry } : {}),
    ...(resolvedLat != null ? { lat: resolvedLat } : {}),
    ...(resolvedLng != null ? { lng: resolvedLng } : {}),
    ...(dev ? { dev } : {}),
  };

  const result = useQuery({
    queryKey: [
      "get",
      "gateway/app/v1/search/suggest",
      params.q,
      params.locale,
      params.lat,
      params.lng,
      params.country,
      params.dev,
    ],
    queryFn: ({ signal }) => getSearchSuggest(apiUrl, params, signal),
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
