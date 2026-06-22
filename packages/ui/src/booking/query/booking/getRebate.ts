import { useMutation } from "@tanstack/react-query";
import { TRebateResponse } from "../../types/rebate";
import { axiosInstance } from "../axios";

export const getRebate = async (
  rebateId: string,
  cartId: string,
  email?: string
): Promise<TRebateResponse> => {
  let url = `/rebates/${rebateId}/${cartId}`;

  if (email) {
    url += `?email=${email}`;
  }

  return axiosInstance.get(url).then((response) => response.data);
};

export const useGetRebate = () => {
  return useMutation({
    mutationKey: ["get", "rebates"],
    mutationFn: (data: { rebateId: string; cartId: string; email?: string }) =>
      getRebate(data.rebateId, data.cartId, data?.email),
  });
};
