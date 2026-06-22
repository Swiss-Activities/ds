import { useQuery } from "@tanstack/react-query";
import { axiosApiInstanceWithCsrf } from "../axios";

interface DirectionsParams {
  origin: { lat: number; lng: number };
  destination: { lat: number; lng: number };
  mode: "walking" | "driving";
}

interface DirectionsResult {
  distance: { text: string; value: number } | null;
  duration: { text: string; value: number } | null;
}

const getDirections = async (params: DirectionsParams) => {
  return axiosApiInstanceWithCsrf
    .post<DirectionsResult>(`/transport/directions/`, params)
    .then((response) => response.data);
};

export const useGetDirections = (
  params: DirectionsParams | null,
  enabled = true
) => {
  return useQuery({
    queryKey: ["get", "directions", params],
    queryFn: () => getDirections(params!),
    staleTime: 1000 * 60 * 30,
    enabled: enabled && params !== null,
  });
};
