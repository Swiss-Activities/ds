import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../axios";

export const getBooking = async (id: string) => {
  return axiosInstance
    .get(`/bookings/${id}`)
    .then((response) => response.data)
    .catch((err) => console.log("error ===", err));
};

export const useGetBooking = (id: string) => {
  return useQuery({
    queryKey: ["get", "bookings", id],
    queryFn: () => getBooking(id),
    enabled: !!id,
    retry: false,
  });
};
