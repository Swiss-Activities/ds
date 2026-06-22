import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios";

const postReservation = async (data: object) => {
  const url = "/reservations";

  return axiosInstance.post(url, data).then((response) => response.data);
};

export const usePostReservation = () => {
  return useMutation({
    mutationKey: ["post", "reservation"],
    mutationFn: (data: object) => postReservation(data),
  });
};
