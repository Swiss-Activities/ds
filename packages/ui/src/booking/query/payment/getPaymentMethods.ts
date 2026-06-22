import { useQuery } from "@tanstack/react-query";
import { TUser } from "../../types/user";
import { useUser } from "../../utils/user/useUser";
import { axiosApiInstance } from "../axios";

export type PaymentMethod = {
  brands?: string[];
  name: string;
  type: string;
};

export type PaymentMethodsResponse = {
  paymentMethods: PaymentMethod[];
};

const getPaymentMethods = async (
  cartId: string,
  countryCode: string,
  channel: string = "Web",
  user: TUser
): Promise<PaymentMethodsResponse> => {
  let url = `/payment/payment-methods/?cartId=${cartId}&countryCode=${countryCode}&channel=${channel}`;

  if (user) {
    url += `&user=${user.email}`;
  }

  return axiosApiInstance.get<PaymentMethodsResponse>(url).then((response) => {
    return response.data;
  });
};

export const useGetPaymentMethods = (
  cartId: string,
  countryCode: string,
  channel: string = "Web",
  enabled: boolean = true
) => {
  const { user } = useUser();

  return useQuery({
    queryKey: ["get", "payment-methods", cartId, countryCode, channel],
    queryFn: () => getPaymentMethods(cartId, countryCode, channel, user),
    staleTime: 0,
    gcTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    enabled: enabled && !!cartId && !!countryCode,
  });
};
