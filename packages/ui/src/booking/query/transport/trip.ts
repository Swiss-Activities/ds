import { useQuery } from "@tanstack/react-query";
import type { TransportTrip } from "../../types/transport";
import { axiosApiInstanceWithCsrf, axiosInstanceProd } from "../axios";

export interface GetTripParams {
  tripId: string;
  offerId?: number;
  locale?: string;
  ticketCategoryIds?: number[];
}

export const getTrip = async (params: GetTripParams, token: string) => {
  const { tripId, ...queryParams } = params;
  return axiosInstanceProd
    .get<TransportTrip>(`/v1/transport/trips/${tripId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: queryParams,
    })
    .then((response) => response.data);
};

const getTripApi = async (params: GetTripParams) => {
  const { tripId, ...queryParams } = params;
  return axiosApiInstanceWithCsrf
    .get<{ trip: TransportTrip }>(`/transport/trips/${tripId}`, {
      params: queryParams,
    })
    .then((response) => response.data.trip);
};

export const useGetTripDetails = (params: GetTripParams, enabled = true) => {
  return useQuery({
    queryKey: [
      "get",
      "trip",
      params.tripId,
      params.locale,
      params.offerId,
      params.ticketCategoryIds,
    ],
    queryFn: () => getTripApi(params),
    staleTime: 1000 * 60 * 5,
    enabled: enabled && !!params.tripId,
  });
};
