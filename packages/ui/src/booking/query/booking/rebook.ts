import { useMutation } from "@tanstack/react-query";
import { axiosInstancePatch } from "../axios";

const rebookQuery = async (data: { bookingId: string | null; reservation: unknown }) => {
  return axiosInstancePatch
    .patch(`/bookings/${data.bookingId}/rebooking`, data.reservation)
    .then((response) => response.data);
};

export const usePostRebook = () => {
  return useMutation({
    mutationKey: ["post", "rebook"],
    mutationFn: (data: { bookingId: string | null; reservation: unknown }) =>
      rebookQuery(data),
  });
};
