import { useEffect, useRef } from "react";
import type { CountryCode } from "libphonenumber-js";
import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../Cart/store";
import { ImportantAgree } from "./ImportantAgree";
import { PaymentAdyen } from "./PaymentAdyen";
import { PaymentPayyo } from "./PaymentPayyo";
import { usePayyo } from "./PaymentPayyo/hooks";
import {
  useHasContactDataFilledIn,
  useIsFree,
  usePaymentProvider,
} from "../hooks";
import { useCheckout } from "../hooks";
import { useAffiliateData } from "../hooks";
import {
  defaultData,
  useCheckoutStore,
} from "../store";
import { useBookingStore } from "../../store";
import { Form } from "../../components/Form";
import { Input } from "../../components/Form/Input";
import { Phone } from "../../components/Form/Phone";
import { Textarea } from "../../components/Form/Textarea";
import { I } from "../../components/I";
import { SignUpCard } from "../../stubs";
import { Text } from "@swiss-activities/ui";
import type { TBooking } from "../../types/booking";
import { getPageUrl } from "../../utils/content/loaders";
import { cn } from "../../utils/css/cn";
import { secureLocalStorage } from "../../utils/data/secureLocalStorage";
import { useWidget } from "../../utils/env/useWidget";
import { useI18n } from "../../utils/i18n/useI18n";
import { type Activities, useDataLayer } from "../../utils/thirdParty/dataLayerSend";
import { scrollToTarget } from "../../utils/ui/scrollToTarget";
import { useUser } from "../../utils/user/useUser";
import { useMakePayment } from "../../query/payment/makePayment";

export const FormBooking = () => {
  const { dataLayer } = useDataLayer();
  const { t, locale } = useI18n();
  const booking = getPageUrl("booking", locale);
  const hasFilled = useRef(false);
  const hasSetData = useRef(false);
  const { handlePayment: handlePayyoPayment } = usePayyo();
  const { hasContactDataFilledIn } = useHasContactDataFilledIn();
  const { isFree } = useIsFree();
  const { user, isLoading } = useUser();
  const { paymentProvider } = usePaymentProvider();
  const { handleCheckout } = useCheckout();
  const { mutateAsync: makePayment } = useMakePayment();
  const { isAffiliate, affiliateData } = useAffiliateData();
  const isWidget = useWidget();

  const { cart, cartLoadingState } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
      cartLoadingState: state.loadingState,
    }))
  );

  const { data, setData, isLoadingCheckout, setIsLoadingCheckout } =
    useCheckoutStore(
      useShallow((state) => ({
        data: state.data,
        setData: state.setData,
        isLoadingCheckout: state.isLoading,
        setIsLoadingCheckout: state.setIsLoading,
      }))
    );

  const onInput = (e: any, name = "") => {
    let value: string;

    if (e?.target) {
      name = e.target.name;
      value = e.target.value;
    } else {
      value = e;
    }

    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const emailsMatch = data.email === data.confirmEmail;
  const showEmailError = !user && data.confirmEmail && !emailsMatch;

  const getRedirectUrl = (booking: TBooking) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const relatedBookingId = new URLSearchParams(window.location.search).get(
      "bookingId"
    );
    const targetBookingId = relatedBookingId || booking.bookingId;
    return `${baseUrl}${getPageUrl("confirm", locale)}?bookingId=${targetBookingId}${isWidget ? "&widget=true" : ""}`;
  };

  const scrollToFirstInvalidField = () => {
    const bookingForm = document.getElementById("booking") as HTMLFormElement;
    if (!bookingForm) return;

    const firstInvalidField = bookingForm.querySelector(
      ":invalid"
    ) as HTMLElement;
    if (firstInvalidField) {
      scrollToTarget(firstInvalidField);
      firstInvalidField.focus();
    }
  };

  const handleSubmit = async () => {
    if (isFree && (!user || user?.isCustomer)) {
      setIsLoadingCheckout(true);
      const booking = await handleCheckout();
      const successReturnUrl = getRedirectUrl(booking);

      dataLayer({
        obj: {
          event: "payment_initiate",
          payment_type: "free",
        },
        activities: cart?.customData as unknown as Activities,
        timeout: 0,
      });

      return await makePayment({
        bookingId: booking.bookingId,
        data: {
          returnUrl: successReturnUrl,
          affiliate: isAffiliate && affiliateData ? affiliateData : null,
          paymentMethod: [null],
        },
        locale,
      }).catch((error) => {
        if (error?.response?.data?.statusCode === 422) {
          window.location.href = successReturnUrl;
          return;
        }
      });
    }

    if (paymentProvider === "payyo") {
      handlePayyoPayment();
    }

    setTimeout(() => {
      scrollToFirstInvalidField();
    }, 100);
  };

  useEffect(() => {
    if (isLoading || hasSetData.current) return;

    if (user && user?.isCustomer) {
      setData({
        countryCode: user.countryCode as CountryCode,
        email: user.email,
        confirmEmail: user.email,
        fullName: user.givenName,
        lastName: user.familyName,
        phoneNumber: user.phone,
      });
    } else {
      let guestData = JSON.parse(
        secureLocalStorage.getItem("guestData_v3") || "{}"
      );

      const url = new URL(window.location.href);
      const guestDataString = url.searchParams?.get("guestData");
      let parsed = {};
      if (guestDataString) {
        try {
          parsed = JSON.parse(guestDataString);
        } catch {}
      }

      const mergedData = { ...defaultData, ...guestData, ...parsed };
      setData(mergedData);
    }

    hasSetData.current = true;
  }, [isLoading, user]);

  useEffect(() => {
    if (
      !hasContactDataFilledIn ||
      hasFilled.current ||
      !cart?.customData ||
      cart?.customData?.length === 0
    ) {
      return;
    }
    dataLayer({
      obj: {
        event: "add_shipping_info",
      },
      activities: cart.customData as unknown as Activities,
    });
    hasFilled.current = true;
  }, [hasContactDataFilledIn, cart]);

  return (
    <Form
      id="booking"
      onSubmit={handleSubmit}
      className={cn("transition duration-100 ease-in", {
        "pointer-events-none opacity-50": isLoadingCheckout,
      })}
    >
      <div>
        <Text size="default" className="mb-4">
          {t("booking.mainGuest")}
        </Text>
        <div className="space-y-3">
          <Input
            {...{ isLoading }}
            title={t("booking.fullName")}
            name="fullName"
            required
            row
            onInput={onInput}
            value={data.fullName}
            disabled={user && user?.isCustomer}
            showSkeleton
          />
          <Input
            {...{ isLoading }}
            title={t("booking.lastName")}
            name="lastName"
            required
            row
            onInput={onInput}
            value={data.lastName}
            disabled={user && user?.isCustomer}
            showSkeleton
          />
          <Input
            {...{ isLoading }}
            title={t("booking.email")}
            name="email"
            type="email"
            required
            row
            onInput={onInput}
            value={data.email}
            disabled={user && user?.isCustomer}
            showSkeleton
          />
          {!user && !isLoading && (
            <Input
              {...{ isLoading }}
              outerError
              title={`${t("booking.email")} (${t("general.confirm")})`}
              name="confirmEmail"
              type="email"
              required
              row
              onInput={onInput}
              value={data.confirmEmail}
              showSkeleton
              errors={showEmailError ? t("general.emailsDontMatch") : false}
            />
          )}
          <Phone
            {...{ isLoading }}
            row
            title={t("booking.phoneNumber")}
            required
            onInput={(e) => {
              onInput(e.countryCode, "countryCode");
              onInput(e.phoneNumber, "phoneNumber");
            }}
            value={data}
            disabled={user && user?.isCustomer}
            showSkeleton
          />
          {user?.isReseller && (
            <Textarea
              name="notes"
              title={t("general.notes")}
              onInput={onInput}
              value={data.notes}
            />
          )}
        </div>
      </div>
      <SignUpCard returnUrl={booking} inline />
      <ImportantAgree />
      {cart?.reservations?.length &&
      !isFree &&
      !isLoading &&
      cartLoadingState === "ready" ? (
        <div id="payment-methods">
          <Text as="h2" size="default" className="mb-1 mt-3">
            {t("booking.cardDetails")}
          </Text>
          <div className="mb-3 flex text-green-600">
            <I icon="lock-keyhole" className="relative top-1 me-2 shrink-0" />
            <Text className="text-green-600">{t("booking.paymentSecure")}</Text>
          </div>
          {paymentProvider === "adyen" ? (
            <PaymentAdyen />
          ) : paymentProvider === "payyo" ? (
            <PaymentPayyo />
          ) : null}
        </div>
      ) : null}
    </Form>
  );
};
