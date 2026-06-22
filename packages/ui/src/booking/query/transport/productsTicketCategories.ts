import { useQuery } from "@tanstack/react-query";
import { TransportTicketCategory } from "../../types/transport";
import { axiosApiInstanceWithCsrf, axiosInstanceProd } from "../axios";

export interface ProductTicketCategoryInput {
  id: number;
  quantity: number;
}

export interface GetProductsTicketCategoriesParams {
  tripId: string;
  returnTripId?: string;
  offerId?: number;
  locale?: string;
  ticketCategories: ProductTicketCategoryInput[];
  directions?: string[];
}

export interface ProductWithTicketCategories {
  id: number;
  title: string;
  description: string;
  qualityOfService: string[];
  ticketCategories: TransportTicketCategory[];
}

export interface ProductsTicketCategoriesResponse {
  products: ProductWithTicketCategories[];
}

export const getProductsTicketCategories = async (
  token: string,
  params: GetProductsTicketCategoriesParams
) => {
  return axiosInstanceProd
    .post<ProductsTicketCategoriesResponse>(
      `/v1/transport/products/ticket_categories`,
      params,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((response) => response.data);
};

const getProductsTicketCategoriesApi = async (
  params: GetProductsTicketCategoriesParams
) => {
  return axiosApiInstanceWithCsrf
    .post<ProductsTicketCategoriesResponse>(
      `/transport/products-ticket-categories/`,
      params
    )
    .then((response) => response.data);
};

export const useGetProductsTicketCategories = (
  params: GetProductsTicketCategoriesParams,
  enabled = true
) => {
  return useQuery({
    queryKey: ["get", "products-ticket-categories", params],
    queryFn: () => getProductsTicketCategoriesApi(params),
    staleTime: 1000 * 60 * 5,
    enabled,
  });
};
