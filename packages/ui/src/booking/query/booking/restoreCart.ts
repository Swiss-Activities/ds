import { useMutation } from "@tanstack/react-query";
import { axiosInstancePatch } from "../axios";
import { getBooking } from "./getBooking";

export const restoreCart = async (bookingId: string) => {
  const booking = await getBooking(bookingId);

  if (booking?.items?.[0]?.reservations?.[0]?.confirmedAt) {
    return false;
  }

  return axiosInstancePatch
    .get(`/bookings/${bookingId}/restore_cart`)
    .then((response) => response.data);
};

export const useRestoreCart = () => {
  return useMutation({
    mutationFn: (bookingId: string) => restoreCart(bookingId),
  });
};
