import { useEffect, useRef } from "react";
import { AdyenCheckout, Dropin, SubmitData } from "@adyen/adyen-web/auto";
import "@adyen/adyen-web/styles/adyen.css";
import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../../Cart/store";
import { TosText } from "../../TosText";
import {
  useAffiliateData,
  useCheckout,
  useHasContactDataFilledIn,
} from "../../hooks";
import { useCheckoutStore } from "../../store";
import { useBookingStore } from "../../../store";
import { useDrawerStore } from "../../../store/drawer";
import { Skeleton } from "@swiss-activities/ui";
import i18n from "../../../data/i18n";
import { TBooking } from "../../../types/booking";
import { getPageUrl } from "../../../utils/content/loaders";
import { getGaCookie } from "../../../utils/cookies/getCookie";
import { cn } from "../../../utils/css/cn";
import { useWidget } from "../../../utils/env/useWidget";
import { useI18n } from "../../../utils/i18n/useI18n";
import { Activities, dataLayerSend } from "../../../utils/thirdParty/dataLayerSend";
import { useUser } from "../../../utils/user/useUser";
import { useGetPaymentMethods } from "../../../query/payment/getPaymentMethods";
import { useMakePayment } from "../../../query/payment/makePayment";
import { useMakePaymentDetails } from "../../../query/payment/makePaymentDetails";
import { useValidateApplePayMerchant } from "../../../query/payment/validateApplePayMerchant";

export const PaymentAdyen = () => {
  const { locale } = useI18n();
  const { user, isLoading: userIsLoading } = useUser();
  const adyenLocale = i18n.mapLocaleToAdyen(locale);
  const checkoutRef = useRef<any>(null);
  const dropinRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const openDrawer = useDrawerStore((state) => state.setOpen);
  const { handleCheckout, bookingRef } = useCheckout();
  const { isAffiliate, affiliateData } = useAffiliateData();

  const { mutateAsync: validateApplePayMerchant } =
    useValidateApplePayMerchant();

  const { data } = useCheckoutStore(
    useShallow((state) => ({
      data: state.data,
    }))
  );

  const { cart, cartLoadingState } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
      cartLoadingState: state.loadingState,
    }))
  );

  const {
    data: paymentMethodsData,
    isLoading,
    error,
  } = useGetPaymentMethods(
    cart.cartId || "",
    user?.countryCode || data.countryCode,
    "Web",
    !!cart.cartId && !userIsLoading && !!(user?.countryCode || data.countryCode)
  );

  const { mutateAsync: makePayment } = useMakePayment();
  const { mutateAsync: makePaymentDetails } = useMakePaymentDetails();
  const isWidget = useWidget();

  const { hasContactDataFilledIn } = useHasContactDataFilledIn();

  const getRedirectUrl = (booking: TBooking) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const relatedBookingId = new URLSearchParams(window.location.search).get(
      "bookingId"
    );
    const targetBookingId = relatedBookingId || booking.bookingId;
    return `${baseUrl}${getPageUrl("confirm", locale)}?bookingId=${targetBookingId}${isWidget ? "&widget=true" : ""}`;
  };

  const handlePayment = async (booking: TBooking, state: SubmitData) => {
    const successReturnUrl = getRedirectUrl(booking);

    dataLayerSend({
      obj: {
        event: "payment_initiate",
        payment_type: state.data.paymentMethod?.type || "unknown",
      },
      activities: cart?.customData as unknown as Activities,
      timeout: 0,
    });

    return await makePayment({
      bookingId: booking.bookingId,
      data: {
        paymentMethod: state.data.paymentMethod,
        returnUrl: successReturnUrl,
        affiliate: isAffiliate && affiliateData ? affiliateData : null,
        storePaymentMethod: state.data.storePaymentMethod || false,
        authenticationData: {
          attemptAuthentication: "always",
          threeDSRequestData: {
            nativeThreeDS: "preferred",
          },
        },
        browserInfo: state.data.browserInfo,
        origin: (state.data as any).origin,
        ga4Id: getGaCookie(),
      },
      locale,
    });
  };

  const handleRedirect = async (booking: TBooking) => {
    window.location.href = getRedirectUrl(booking);
  };

  useEffect(() => {
    (async () => {
      if (
        !paymentMethodsData?.paymentMethods ||
        !containerRef.current ||
        userIsLoading
      ) {
        return;
      }

      const amountInCents = Math.round(
        parseFloat(cart.total?.amount || "10.00") * 100
      );

      try {
        const checkout = await AdyenCheckout({
          clientKey: process.env.NEXT_PUBLIC_ADYEN_CLIENT_KEY,
          environment: process.env.NEXT_PUBLIC_ADYEN_CLIENT_KEY?.startsWith(
            "test"
          )
            ? "test"
            : "live",
          paymentMethodsResponse: paymentMethodsData,
          locale: adyenLocale,
          countryCode: user?.countryCode || data.countryCode,
          amount: {
            currency: "CHF",
            value: amountInCents,
          },

          onSubmit: async (state, _, actions) => {
            try {
              console.log("state", state);
              const booking = await handleCheckout();
              const result = await handlePayment(booking, state);

              if (!result?.resultCode) {
                actions.reject();
                return;
              }

              const { resultCode, action } = result;

              actions.resolve({
                resultCode,
                action: (action as any)?.length === 0 ? undefined : action,
              });
            } catch (error) {
              openDrawer("checkout-error");
              actions.reject();
            }
          },

          onAdditionalDetails: async (state, _, actions) => {
            try {
              const result = await makePaymentDetails({
                bookingId: bookingRef?.current?.bookingId || "",
                data: {
                  ...state.data.details,
                  paymentData: null,
                },
                locale,
              });

              if (!result.resultCode) {
                actions.reject();
                return;
              }

              const { resultCode, action, order, donationToken } =
                result as any;

              actions.resolve({
                resultCode,
                action,
                order,
                donationToken,
              });
            } catch (error) {
              console.error("onSubmit", error);
              actions.reject();
            }
          },

          onPaymentCompleted: () => {
            if (!bookingRef?.current) return;
            handleRedirect(bookingRef?.current);
          },
          onPaymentFailed: () => {
            openDrawer("checkout-error");
          },
          onError: () => {
            // openDrawer("checkout-error");
          },
        });

        checkoutRef.current = checkout;

        if (dropinRef.current) {
          dropinRef.current.unmount();
        }

        const dropin = new Dropin(checkout, {
          instantPaymentTypes: ["applepay", "googlepay", "paywithgoogle"],
          openFirstPaymentMethod: false,
          onSelect(paymentMethod) {
            dataLayerSend({
              obj: {
                event: "add_payment_info",
                payment_type: paymentMethod?.props?.type || "unknown",
              },
              activities: cart.customData as unknown as Activities,
            });
          },
          paymentMethodsConfiguration: {
            applepay: {
              onValidateMerchant: async (resolve, reject, validationUrl) => {
                try {
                  const response = await validateApplePayMerchant({
                    validationUrl,
                  });
                  resolve(response);
                } catch (error) {
                  console.error("Apple Pay validation failed:", error);
                  reject();
                }
              },
            },
            card: {
              enableStoreDetails: true,
              challengeWindowSize: "05",
            },
          },
        });

        if (containerRef.current) {
          dropin.mount(containerRef.current);
          dropinRef.current = dropin;
        }
      } catch (error) {}
    })();

    return () => {
      if (dropinRef.current) {
        dropinRef.current.unmount();
      }
    };
  }, [
    paymentMethodsData,
    adyenLocale,
    cart,
    data.countryCode,
    user,
    userIsLoading,
  ]);

  if (isLoading || cartLoadingState === "loading") {
    return <Skeleton loading={true} size="lg" amount={1} className="h-32" />;
  }

  if (
    error ||
    !paymentMethodsData?.paymentMethods ||
    cart?.reservations?.length === 0 ||
    !cart
  ) {
    return null;
  }

  return (
    <div
      className={cn({
        "pointer-events-none opacity-50": !hasContactDataFilledIn,
      })}
    >
      <TosText className="mb-4" />
      <div ref={containerRef} className="adyen-dropin" />
    </div>
  );
};
