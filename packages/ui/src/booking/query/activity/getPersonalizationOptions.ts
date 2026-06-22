import { useMutation } from "@tanstack/react-query";
import { TActivity } from "../../types/activity";
import { axiosInstance } from "../axios";

const getGetPersonalizationFields = async (
  activity: TActivity,
  availabilityId: string,
  locale: string
) => {
  const url = `/activities/${activity.mappedId}/availabilities/${availabilityId}/personalization_fields`;

  return axiosInstance
    .get(url, {
      params: { locale },
    })
    .then((response) => response.data?.fields || []);
};

export const useGetPersonalizationFields = () => {
  return useMutation({
    mutationKey: ["get", "personalization_fields"],
    mutationFn: (data: {
      activity: TActivity;
      availabilityId: string;
      locale: string;
    }) =>
      getGetPersonalizationFields(
        data.activity,
        data.availabilityId,
        data.locale
      ),
  });
};
