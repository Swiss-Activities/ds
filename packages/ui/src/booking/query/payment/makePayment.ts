import type { PaymentAction, ResultCode } from "@adyen/adyen-web/auto";
import { useMutation } from "@tanstack/react-query";
import { axiosApiInstance } from "../axios";

export type MakePaymentRequest = {
  returnUrl: string;
  paymentMethod: any;
  channel?: string;
  affiliate?: {
    affiliateReferralCode?: string;
    affiliateReferrer?: string | null;
    affiliateLandingPage?: string | null;
    affiliateClickId?: string;
  } | null;
  storePaymentMethod?: boolean;
  authenticationData?: {
    attemptAuthentication: string;
    threeDSRequestData: {
      nativeThreeDS: string;
    };
  };
  browserInfo?: {
    acceptHeader: string;
    colorDepth: number;
    javaEnabled: boolean;
    language: string;
    screenHeight: number;
    screenWidth: number;
    timeZoneOffset: number;
    userAgent: string;
  };
  origin?: string;
  ga4Id?: string | null;
};

export type MakePaymentResponse = {
  paymentAttemptId: string;
  action: PaymentAction;
  resultCode: ResultCode;
  pspReference: string;
  additionalData: string[];
};

const makePayment = async (
  bookingId: string,
  data: MakePaymentRequest
): Promise<MakePaymentResponse> => {
  const url = `/payment/make-payment/`;

  return axiosApiInstance
    .post<MakePaymentResponse>(url, {
      bookingId,
      ...data,
    })
    .then((response) => {
      return response.data;
    });
};

export const useMakePayment = () => {
  return useMutation({
    mutationFn: ({
      bookingId,
      data,
      locale,
    }: {
      bookingId: string;
      data: MakePaymentRequest;
      locale: string;
    }) => makePayment(bookingId, data),
  });
};
