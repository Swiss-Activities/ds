import { useQuery } from "@tanstack/react-query";
import type { TReservation } from "../../types/reservation";
import { axiosInstance } from "../axios";

export const getReservation = async (reservationId: string | undefined) => {
  const url = `/reservations/${reservationId}`;

  return axiosInstance.get<TReservation>(url).then((response) => {
    return response.data;
  });
};

export const useGetReservation = (reservationId: string, enabled = true) => {
  return useQuery({
    queryKey: ["get", "reservation", reservationId],
    queryFn: () => getReservation(reservationId),
    staleTime: Infinity,
    enabled,
  });
};
