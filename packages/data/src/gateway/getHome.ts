"use client";

import { useQuery } from "@tanstack/react-query";
import { useSilentCoordinates } from "../hooks/useSilentCoordinates";
import { useDataConfig } from "../provider";
import {
  fetchGatewayDirect,
  fetchGatewayProxy,
  normalizeGatewayLocale,
} from "./client";
import { useGetCountry } from "./getCountry";
import type { TGatewayHome, TGatewayHomeParams } from "./types";

const fetchHome = async (
  apiUrl: string,
  params: TGatewayHomeParams
): Promise<TGatewayHome> => {
  return fetchGatewayProxy<TGatewayHome>({
    apiUrl,
    path: "home",
    params,
  });
};

export const getHome = async (
  gatewayUrl: string,
  params: TGatewayHomeParams
): Promise<TGatewayHome> => {
  return fetchGatewayDirect<TGatewayHome>({
    gatewayUrl,
    path: "/app/v1/home",
    params,
  });
};

export const useGetHome = ({
  enabled = true,
  retry = 3,
  retryOnMount = true,
  refetchOnWindowFocus = true,
  refetchOnReconnect = true,
}: {
  enabled?: boolean;
  retry?: boolean | number;
  retryOnMount?: boolean;
  refetchOnWindowFocus?: boolean;
  refetchOnReconnect?: boolean;
} = {}) => {
  const { apiUrl, locale } = useDataConfig();
  const { data: country, isFetched: countryFetched } = useGetCountry();
  const { coords, ready: coordsReady } = useSilentCoordinates();

  const queryEnabled = enabled && countryFetched && coordsReady;
  const isPreparing = enabled && (!countryFetched || !coordsReady);

  const params: TGatewayHomeParams = {
    locale: normalizeGatewayLocale(locale),
    ...(country ? { country } : {}),
    ...(coords ? { lat: coords.latitude, lng: coords.longitude } : {}),
  };

  const query = useQuery({
    queryKey: [
      "get",
      "gateway/app/v1/home",
      params.locale,
      params.lat,
      params.lng,
      params.country,
      params.dev,
    ],
    queryFn: () => fetchHome(apiUrl, params),
    staleTime: Infinity,
    enabled: queryEnabled,
    retry,
    retryOnMount,
    refetchOnWindowFocus,
    refetchOnReconnect,
  });

  return {
    ...query,
    isLoading: isPreparing || query.isLoading,
  };
};
