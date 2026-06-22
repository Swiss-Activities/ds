import { useQuery } from "@tanstack/react-query";
import { axiosApiInstanceWithCsrf, axiosInstanceProd } from "../axios";

export interface TicketCategoryQuantity {
  id: number;
  quantity: number;
}

export interface GetPersonalizationFieldsParams {
  tripId: string;
  returnTripId?: string;
  productId: number;
  offerId?: number;
  locale?: string;
  ticketCategories: TicketCategoryQuantity[];
}

export const getPersonalizationFields = async (
  token: string,
  params: GetPersonalizationFieldsParams
) => {
  const { tripId, returnTripId, productId, offerId, locale, ticketCategories } =
    params;

  return axiosInstanceProd
    .post(
      `/v1/transport/personalization_fields`,
      {
        tripId,
        returnTripId,
        productId,
        offerId: offerId || 9726,
        locale: locale || "de_CH",
        ticketCategories,
      },
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    )
    .then((response) => response.data);
};

const getPersonalizationFieldsApi = async (
  params: GetPersonalizationFieldsParams
) => {
  return axiosApiInstanceWithCsrf
    .post(`/transport/personalization-fields/`, params)
    .then((response) => response.data);
};

export const useGetPersonalizationFields = (
  params: GetPersonalizationFieldsParams,
  enabled = true
) => {
  return useQuery({
    queryKey: ["get", "personalization-fields", params],
    queryFn: () => getPersonalizationFieldsApi(params),
    staleTime: 1000 * 60 * 5,
    enabled,
  });
};
