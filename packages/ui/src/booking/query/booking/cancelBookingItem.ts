import { axiosInstancePatch } from "../axios";

export const cancelBookingItemApi = async (
  bookingId: string,
  reason: string
) => {
  return axiosInstancePatch.patch(`/booking_items/${bookingId}/cancel`, {
    cancellationNote: reason,
  });
};
