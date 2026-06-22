import { axiosApiInstance, axiosInstanceAuthPatch } from "../axios";

export const cancelBookingItem = async (
  bookingId: string,
  token: string,
  reason: string
) => {
  return axiosInstanceAuthPatch(token)
    .patch(`/booking_items/${bookingId}/cancel`, {
      cancellationNote: reason,
    })
    .then((response) => response.data);
};
export const cancelBookingItemApi = async (
  bookingId: string,
  reason: string
) => {
  return axiosApiInstance.post("/booking/cancel/", {
    bookingId,
    reason,
  });
};
