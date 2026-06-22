import { useQuery } from "@tanstack/react-query";
import type { TActivity } from "../../types/activity";
import { useDistributorId } from "../../utils/user/useDistributorId";
import type { MonthlyAvailability } from "./getMonthlyAvailabilities";
import { axiosInstance, axiosApiInstance } from "../axios";

export type MonthlyDates = MonthlyAvailability;

export type MonthlyDatesParams = {
  activityId: number;
  locale: string;
  year: number | null;
  month: number | null;
  offerIds: number[];
  distributorId?: string | null;
  ticketCategoryQuantities: {
    audience: string;
    discountType?: string;
    quantity: number;
  }[];
};

export const getMonthlyDates = async (
  token: string,
  params: MonthlyDatesParams
): Promise<MonthlyDates> => {
  const url = `/v1/activities/monthly-dates`;

  return axiosInstance
    .post<MonthlyDates>(url, params, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => response.data);
};

const getMonthlyDatesApi = async (
  params: MonthlyDatesParams
): Promise<MonthlyDates> => {
  return axiosApiInstance
    .post("/activity/monthly-dates/", params)
    .then((response) => response.data);
};

export const useGetMonthlyDates = (
  activity: TActivity,
  locale: string,
  year: number | null,
  month: number | null,
  offerIds: number[],
  ticketCategoryQuantities: {
    audience: string;
    discountType?: string;
    quantity: number;
  }[],
  enabled: boolean = true
) => {
  const distributorId = useDistributorId();

  const params: MonthlyDatesParams = {
    activityId: Number(activity.mappedId),
    locale,
    year,
    month,
    offerIds,
    distributorId,
    ticketCategoryQuantities,
  };

  return useQuery<MonthlyDates, Error>({
    queryKey: [
      "get",
      "monthly-dates",
      activity.mappedId,
      locale,
      year,
      month,
      offerIds,
      distributorId,
      ticketCategoryQuantities,
    ],
    queryFn: () => getMonthlyDatesApi(params),
    staleTime: 1000 * 60 * 5,
    enabled,
  });
};
