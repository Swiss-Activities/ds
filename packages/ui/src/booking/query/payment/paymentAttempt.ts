import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../axios";

type PaymentAttemptRequest = {
  affiliate: {
    affiliateReferralCode: string;
    affiliateReferrer: string | null;
    affiliateLandingPage: string | null;
    affiliateClickId?: string;
  } | null;
  channelId: string | null;
  failureReturnUrl: string;
  language: string;
  paymentMethod: string | null;
  successReturnUrl: string;
  activePaymentAgreement?: boolean;
  paymentAgreementId?: string | null;
  ga4Id?: string | null;
};

type PaymentAttemptResponse = {
  [key: string]: any;
};

const postPaymentAttempt = async (
  bookingId: string,
  data: PaymentAttemptRequest
): Promise<PaymentAttemptResponse> => {
  return axiosInstance
    .post(`/bookings/${bookingId}/payment_attempts`, data)
    .then((response) => response.data);
};

export const usePostPaymentAttempt = () => {
  return useMutation({
    mutationFn: ({
      bookingId,
      data,
      locale,
    }: {
      bookingId: string;
      data: PaymentAttemptRequest;
      locale: string;
    }) => postPaymentAttempt(bookingId, data),
  });
};
