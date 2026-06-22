import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios";

const deleteReservation = async (reservationId: string) => {
  const url = `/reservations/${reservationId}`;

  return axiosInstance.delete(url);
};

export const useDeleteReservation = () => {
  return useMutation({
    mutationKey: ["delete", "reservation"],
    mutationFn: (data: { reservationId: string }) =>
      deleteReservation(data.reservationId),
  });
};
