import { useQuery } from "@tanstack/react-query";
import { axiosApiInstance } from "../axios";

const ACTIVITY_CACHE: Record<string, unknown> = {};

export const getActivity = async (id: string, locale: string) => {
  if (!id) {
    return null;
  }

  if (id === "undefined") {
    return null;
  }

  if (ACTIVITY_CACHE[`${id}-${locale}`]) {
    return ACTIVITY_CACHE[`${id}-${locale}`];
  }

  return axiosApiInstance(`/activity/${id}-${locale}/`).then((response) => {
    ACTIVITY_CACHE[`${id}-${locale}`] = response.data;
    return response.data;
  });
};

export const useGetActivity = (
  activityId: string | undefined,
  locale: string,
  enabled = true
) => {
  return useQuery({
    queryKey: ["get", "api/activity", activityId, locale],
    queryFn: () => getActivity(`${activityId}`, locale),
    staleTime: Infinity,
    enabled,
  });
};
