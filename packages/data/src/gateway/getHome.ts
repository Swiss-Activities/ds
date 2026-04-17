"use client";

import { useQuery } from "@tanstack/react-query";
import { useDataConfig } from "../provider";
import { useGetCountry } from "./getCountry";
import { useSilentCoordinates } from "../hooks/useSilentCoordinates";
import type { TGatewayHome, TGatewayHomeParams } from "./types";

const normalizeLocale = (locale?: string | null) =>
  locale ? locale.replace("_", "-") : undefined;

const fetchHome = async (
  apiUrl: string,
  params: TGatewayHomeParams
): Promise<TGatewayHome> => {
  const searchParams = new URLSearchParams();
  const locale = normalizeLocale(params.locale);
  if (locale) searchParams.set("locale", locale);
  if (params.lat != null) searchParams.set("lat", String(params.lat));
  if (params.lng != null) searchParams.set("lng", String(params.lng));
  if (params.country) searchParams.set("country", params.country);

  const response = await fetch(
    `${apiUrl}/gateway/home/?${searchParams.toString()}`
  );
  if (!response.ok) throw new Error(`Gateway error: ${response.status}`);
  return response.json();
};

export const getHome = async (
  gatewayUrl: string,
  params: TGatewayHomeParams
): Promise<TGatewayHome> => {
  const searchParams = new URLSearchParams();
  const locale = normalizeLocale(params.locale);
  if (locale) searchParams.set("locale", locale);
  if (params.lat != null) searchParams.set("lat", String(params.lat));
  if (params.lng != null) searchParams.set("lng", String(params.lng));
  if (params.country) searchParams.set("country", params.country);

  const response = await fetch(
    `${gatewayUrl}/app/v1/home?${searchParams.toString()}`,
    {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  );
  if (!response.ok) throw new Error(`Gateway error: ${response.status}`);
  return response.json();
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
    locale: normalizeLocale(locale),
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
