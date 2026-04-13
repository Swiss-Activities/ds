"use client";

import { useQuery } from "@tanstack/react-query";
import { useDataConfig } from "../provider";

export const getCountry = async (traceUrl: string): Promise<string | null> => {
  const response = await fetch(traceUrl);
  const text = await response.text();
  const match = text.match(/^loc=(.*)$/m);
  return match ? match[1].trim() : null;
};

export const useGetCountry = () => {
  const { traceUrl } = useDataConfig();

  return useQuery({
    queryKey: ["get", "gateway/country"],
    queryFn: () => getCountry(traceUrl!),
    staleTime: Infinity,
    retry: false,
    enabled: !!traceUrl,
  });
};
