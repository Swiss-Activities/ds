import { useMutation } from "@tanstack/react-query";
import { axiosApiInstance, axiosInstanceAuthPatch } from "../axios";

const rebookQuery = async (data: object) => {
  const url = "/booking/rebook/";

  return axiosApiInstance.post(url, data).then((response) => response.data);
};

export const usePostRebook = () => {
  return useMutation({
    mutationKey: ["post", "rebook"],
    mutationFn: (data: object) => rebookQuery(data),
  });
};

export const rebook = async (
  bookingId: string,
  token: string,
  reservation: unknown
) => {
  return axiosInstanceAuthPatch(token)
    .patch(`/bookings/${bookingId}/rebooking`, reservation)
    .then((response) => response.data);
};
