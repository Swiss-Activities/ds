import { useMutation } from "@tanstack/react-query";
import { axiosApiInstanceWithCsrf } from "../axios";

interface ValidateApplePayMerchantRequest {
  validationUrl: string;
}

interface ValidateApplePayMerchantResponse {
  merchantSession: any;
}

const validateApplePayMerchant = async (
  data: ValidateApplePayMerchantRequest
): Promise<ValidateApplePayMerchantResponse> => {
  const response = await axiosApiInstanceWithCsrf.post(
    "/payment/validate-apple-pay-merchant/",
    data
  );
  return response.data;
};

export const useValidateApplePayMerchant = () => {
  return useMutation({
    mutationFn: validateApplePayMerchant,
    onError: (error) => {
      console.error("Apple Pay merchant validation failed:", error);
    },
  });
};
