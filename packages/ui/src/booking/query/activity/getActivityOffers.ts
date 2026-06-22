import { useQuery } from "@tanstack/react-query";
import { TActivity } from "../../types/activity";
import { TOfferBooking } from "../../types/offerBooking";
import { axiosInstance, axiosApiInstance } from "../axios";

export type ActivityOffersParams = {
  activityId: string;
  locale: string;
};

export type ActivityOffersResponse = TOfferBooking[];

export const getActivityOffers = async (
  token: string,
  params: ActivityOffersParams
): Promise<ActivityOffersResponse> => {
  const { activityId, locale } = params;
  const url = `/v1/activities/${activityId}/offers`;

  return axiosInstance
    .get<ActivityOffersResponse>(url, {
      headers: { Authorization: `Bearer ${token}` },
      params: { locale },
    })
    .then((response) => response.data);
};

const getActivityOffersApi = async (
  params: ActivityOffersParams
): Promise<ActivityOffersResponse> => {
  return axiosApiInstance
    .get<{
      offers: (TOfferBooking & { id: number; name: string })[];
    }>("/activity/offers/", { params })
    .then((response) =>
      response.data.offers
        .map((offer) => ({
          ...offer,
          offerId: offer.id,
          offerLabel: offer.name,
        }))
        .filter((offer) => offer.startingPrice)
    );
};

export const useGetActivityOffers = (
  activity: TActivity,
  options?: Omit<ActivityOffersParams, "activityId">,
  enabled = true
) => {
  const params: ActivityOffersParams = {
    activityId: activity.mappedId,
    locale: options?.locale || "de_CH",
  };

  return useQuery<ActivityOffersResponse, Error>({
    queryKey: ["get", "activity-offers", params],
    queryFn: () => getActivityOffersApi(params),
    staleTime: 1000 * 60 * 5,
    placeholderData: (prev) => prev,
    refetchOnWindowFocus: false,
    enabled,
  });
};
