import { useQuery } from "@tanstack/react-query";
import { TransportTrip } from "../../types/transport";
import { axiosApiInstanceWithCsrf, axiosInstanceProd } from "../axios";

interface GetReturnTripParams {
  tripId?: string;
  viaIds?: string[];
  trainTypes?: string[];
  excludeTransport?: boolean;
  notViaIds?: string[];
  transferLimit?: number;
}

export const getReturnTrip = async (
  params: GetReturnTripParams,
  token: string
) => {
  return axiosInstanceProd
    .post<{ trips: TransportTrip[] }>(`/v1/transport/return_trip`, params, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data.trips);
};

const getReturnTripApi = async (params: GetReturnTripParams) => {
  return axiosApiInstanceWithCsrf
    .post<{ trips: TransportTrip[] }>(`/transport/return-trip/`, params)
    .then((response) => response.data.trips);
};

export const useGetReturnTrip = (
  params: GetReturnTripParams,
  enabled = true
) => {
  return useQuery({
    queryKey: ["get", "return_trip", params],
    queryFn: () => getReturnTripApi(params),
    staleTime: 1000 * 60 * 5,
    enabled,
  });
};
