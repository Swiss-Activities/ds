import { useQuery } from "@tanstack/react-query";
import { TActivity } from "../../types/activity";
import { useDistributorId } from "../../utils/user/useDistributorId";
import { axiosInstance } from "../axios";

export type MonthlyAvailability = {
  [key: string]: {
    price: string | null;
    capacity: string;
  };
};

type MonthlyAvailabilityParams = {
  year: number;
  month: number;
  distributorId: string | null;
};

const getMonthlyAvailabilities = async (
  activity: TActivity,
  data: MonthlyAvailabilityParams
): Promise<MonthlyAvailability> => {
  const url = `/activities/${activity.mappedId}/monthly-availabilities`;

  return axiosInstance
    .get<MonthlyAvailability>(url, {
      params: data,
    })
    .then((response) => response.data);
};

export const useGetMonthlyAvailabilities = (
  activity: TActivity,
  year: number,
  month: number
) => {
  const distributorId = useDistributorId();

  return useQuery<MonthlyAvailability, Error>({
    queryKey: [
      "get",
      "monthly-availabilities",
      activity.mappedId,
      year,
      month,
      distributorId,
    ],
    queryFn: () =>
      getMonthlyAvailabilities(activity, { year, month, distributorId }),
    staleTime: 1000 * 60 * 5,
  });
};
