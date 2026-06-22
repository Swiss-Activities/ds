import { useQuery } from "@tanstack/react-query";
import type { TransportPlaceRef, TransportTrip } from "../../types/transport";
import { axiosApiInstanceWithCsrf, axiosInstanceProd } from "../axios";

interface GetTripsParams {
  departureTime?: string;
  arrivalTime?: string;
  origin?: TransportPlaceRef;
  destination?: TransportPlaceRef;
  vias?: TransportPlaceRef[];
  trainTypes?: string[];
  excludeTransport?: boolean;
  notVias?: TransportPlaceRef[];
  transferLimit?: number;
}

export const getTrips = async (params: GetTripsParams, token: string) => {
  return axiosInstanceProd
    .post<{ trips: TransportTrip[] }>(`/v1/transport/trips`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data.trips);
};

const getTripsApi = async (params: GetTripsParams) => {
  return axiosApiInstanceWithCsrf
    .post<{ trips: TransportTrip[] }>(`/transport/trips/`, params)
    .then((response) => response.data.trips);
};

export const useGetTrips = (params: GetTripsParams, enabled = true) => {
  const hasValidRefs = Boolean(params.origin && params.destination);

  return useQuery({
    queryKey: ["get", "trips", params],
    queryFn: () => getTripsApi(params),
    staleTime: 1000 * 60 * 5,
    enabled: enabled && hasValidRefs,
  });
};
