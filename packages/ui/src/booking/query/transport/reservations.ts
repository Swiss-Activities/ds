import { useMutation } from "@tanstack/react-query";
import { axiosApiInstanceWithCsrf, axiosInstanceProd } from "../axios";

export interface PostTransportReservationParams {
  productId: number;
  [key: string]: any;
}

export const postTransportReservation = async (
  token: string,
  data: PostTransportReservationParams
) => {
  return axiosInstanceProd
    .post(`/v1/transport/reservations`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((response) => response.data);
};

const postTransportReservationApi = async (
  data: PostTransportReservationParams
) => {
  return axiosApiInstanceWithCsrf
    .post(`/transport/reservations/`, data)
    .then((response) => response.data);
};

export const usePostTransportReservation = () => {
  return useMutation({
    mutationKey: ["post", "transport", "reservation"],
    mutationFn: (data: PostTransportReservationParams) =>
      postTransportReservationApi(data),
  });
};
