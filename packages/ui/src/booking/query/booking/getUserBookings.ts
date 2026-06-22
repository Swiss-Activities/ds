import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { axiosApiInstance } from "../axios";

type GetUserBookingsParams = {
  time: "all" | "upcoming" | "past";
  status: "all" | "booked" | "cancelled";
  page: number;
  itemsPerPage: number;
  locale: string;
};

type Paging = {
  page: number;
  itemsPerPage: number;
  totalCount: number;
};

type GetUserBookingsResponse = {
  bookings: any[];
  paging: Paging;
};

const getUserBookings = async (
  params: GetUserBookingsParams
): Promise<GetUserBookingsResponse> => {
  const url = `/booking/user-bookings/?time=${params.time}&status=${params.status}&page=${params.page}&itemsPerPage=${params.itemsPerPage}&locale=${params.locale}`;

  return axiosApiInstance
    .get<GetUserBookingsResponse>(url)
    .then((response) => response.data);
};

export const useGetUserBookings = (
  params: GetUserBookingsParams,
  enabled = true
) => {
  return useQuery({
    queryKey: ["get", "user-bookings", params],
    queryFn: () => getUserBookings(params),
    enabled,
    retry: false,
    placeholderData: keepPreviousData,
  });
};
