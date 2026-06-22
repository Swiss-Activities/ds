import { useQuery } from "@tanstack/react-query";

const TRACE_URL = "https://www.swissactivities.com/cdn-cgi/trace";

export const getCountry = async (): Promise<string | null> => {
  const response = await fetch(TRACE_URL);
  const text = await response.text();
  const match = text.match(/^loc=(.*)$/m);
  return match ? match[1].trim() : null;
};

export const useGetCountry = () => {
  return useQuery({
    queryKey: ["get", "gateway/country"],
    queryFn: getCountry,
    staleTime: Infinity,
    retry: false,
  });
};
