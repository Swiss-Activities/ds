import { useQuery } from "@tanstack/react-query";
import { TCart } from "../../types/cart";
import { axiosInstance } from "../axios";

export const getCart = async (cartId: string | null) => {
  const url = `/carts/${cartId}`;

  return axiosInstance.get<TCart>(url).then((response) => {
    return response.data;
  });
};

export const useGetCart = (cartId: string | null) => {
  return useQuery({
    queryKey: ["get", "carts", cartId],
    queryFn: () => getCart(cartId),
    staleTime: 0,
    enabled: !!cartId,
    retry: false,
  });
};
