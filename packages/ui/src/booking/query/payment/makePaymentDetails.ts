import { useMutation } from "@tanstack/react-query";
import { axiosApiInstance } from "../axios";

export type MakePaymentDetailsResponse = {
  paymentAttemptId: string;
  resultCode: string;
  pspReference: string;
  additionalData: string[];
};

const makePaymentDetails = async (
  bookingId: string,
  data: any
): Promise<MakePaymentDetailsResponse> => {
  const url = `/payment/make-payment-details/`;

  return axiosApiInstance
    .post<MakePaymentDetailsResponse>(url, {
      bookingId,
      ...data,
    })
    .then((response) => {
      return response.data;
    });
};

export const useMakePaymentDetails = () => {
  return useMutation({
    mutationFn: ({
      bookingId,
      data,
      locale,
    }: {
      bookingId: string;
      data: any;
      locale: string;
    }) => makePaymentDetails(bookingId, data),
  });
};
