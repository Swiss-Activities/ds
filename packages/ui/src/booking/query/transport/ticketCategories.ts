import { useQuery } from "@tanstack/react-query";
import { TransportOfferTicketCategories } from "../../types/transport";
import { axiosApiInstanceWithCsrf, axiosInstanceProd } from "../axios";

export interface GetOfferTicketCategoriesParams {
  offerId?: number;
  locale?: string;
  quality?: "1st_class" | "2nd_class";
}

export const getOfferTicketCategories = async (
  token: string,
  params: GetOfferTicketCategoriesParams
) => {
  const { offerId = 9726, locale, quality } = params;

  return axiosInstanceProd
    .get<TransportOfferTicketCategories>(
      `/v1/transport/offers/ticket_categories`,
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          offerId,
          locale,
          ...(quality ? { quality } : {}),
        },
      }
    )
    .then((response) => response.data);
};

const getOfferTicketCategoriesApi = async (
  params: GetOfferTicketCategoriesParams
) => {
  const { offerId = 9726, locale, quality } = params;
  return axiosApiInstanceWithCsrf
    .get<TransportOfferTicketCategories>(`/transport/ticket-categories/`, {
      params: {
        offerId,
        locale,
        ...(quality ? { quality } : {}),
      },
    })
    .then((response) => response.data);
};

export const useGetOfferTicketCategories = (
  params: GetOfferTicketCategoriesParams,
  enabled = true
) => {
  return useQuery({
    queryKey: ["get", "offer-ticket-categories", params],
    queryFn: () => getOfferTicketCategoriesApi(params),
    staleTime: 1000 * 60 * 5,
    enabled,
  });
};
