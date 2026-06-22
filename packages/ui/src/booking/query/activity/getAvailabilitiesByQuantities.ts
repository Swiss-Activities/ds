import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";
import { TOfferBooking } from "../../types/offerBooking";
import { useDistributorId } from "../../utils/user/useDistributorId";
import { axiosInstance, axiosApiInstance } from "../axios";

export type AvailabilitiesByQuantitiesParams = {
  locale: string;
  offerIds: number[];
  ticketCategoryQuantities: {
    audience: string;
    quantity: number;
    discountType?: string;
    categoryType?: string;
  }[];
  date: string;
  distributorId?: string | null;
};

type AvailabilitiesByQuantitiesResponse = {
  results: TOfferBooking[];
};

const filterAvailabilities = (offers: TOfferBooking[]): TOfferBooking[] => {
  return offers
    .map((offer) => ({
      ...offer,
      availabilities: offer.availabilities.filter((availability) => {
        const { cutoff } = availability;
        const now = dayjs();
        return !now.isAfter(dayjs(cutoff));
      }),
    }))
    .filter((offer) => offer.availabilities.length > 0);
};

export const getAvailabilitiesByQuantities = async (
  token: string,
  params: AvailabilitiesByQuantitiesParams
): Promise<TOfferBooking[]> => {
  const url = `/v1/activities/availabilities-by-quantities`;

  return axiosInstance
    .post<AvailabilitiesByQuantitiesResponse>(url, params, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => filterAvailabilities(response.data.results));
};

const getAvailabilitiesByQuantitiesApi = async (
  params: AvailabilitiesByQuantitiesParams
): Promise<TOfferBooking[]> => {
  return axiosApiInstance
    .post<TOfferBooking[]>("/activity/availabilities-by-quantities/", params)
    .then((response) => filterAvailabilities(response.data));
};

export const useGetAvailabilitiesByQuantities = (
  locale: string,
  offerIds: number[],
  ticketCategoryQuantities: {
    audience: string;
    quantity: number;
    discountType?: string;
    categoryType?: string;
  }[],
  date: string | null,
  enabled = true
) => {
  const distributorId = useDistributorId();

  const params: AvailabilitiesByQuantitiesParams = {
    locale,
    offerIds,
    ticketCategoryQuantities,
    date: date as string,
    distributorId,
  };

  return useQuery({
    queryKey: [
      "get",
      "availabilities-by-quantities",
      locale,
      offerIds,
      ticketCategoryQuantities,
      date,
      distributorId,
    ],
    queryFn: () => getAvailabilitiesByQuantitiesApi(params),
    staleTime: 1000 * 60 * 5,
    enabled: enabled && !!date && offerIds.length > 0,
  });
};
