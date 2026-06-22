import { useEffect, useMemo, useRef, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../Cart/store";
import { useCheckoutStore } from "./store";
import { useBookingStore } from "../store";
import { PAYMENT_PROVIDER } from "../data/constants/paymentProvider";
import { useAffiliateStore } from "../store/affiliateStore";
import { TBooking } from "../types/booking";
import { getCookie } from "../utils/cookies/getCookie";
import { secureLocalStorage } from "../utils/data/secureLocalStorage";
import { useI18n } from "../utils/i18n/useI18n";
import { checkPhoneNumber } from "../utils/phone/checkPhoneNumber";
import { createCompletePhoneNumber } from "../utils/phone/createCompletePhoneNumber";
import { emailRegex } from "../utils/string/emailRegex";
import { useUser } from "../utils/user/useUser";
import { useCheckout as useCheckoutQuery } from "../query/booking/checkout";

export const useCheckout = () => {
  const { locale } = useI18n();
  const { user } = useUser();
  const { mutateAsync } = useCheckoutQuery();
  const bookingRef = useRef<TBooking | null>(null);

  const { cart } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
    }))
  );

  const handleCheckout = async () => {
    const data = useCheckoutStore.getState().data;
    const relatedBookingId = new URLSearchParams(window.location.search).get(
      "bookingId"
    );

    const booking = await mutateAsync({
      cartId: cart.cartId,
      locale,
      bookingForm: {
        user: {
          givenName: data.fullName,
          familyName: data.lastName,
          email: data.email,
          phone: `+${createCompletePhoneNumber(
            data.phoneNumber,
            data.countryCode
          )}`,
          countryCode: data.countryCode,
        },
        distributorId: user?.distributor?.distributorId,
        ...(user?.distributor?.distributorId && data?.notes
          ? { notes: data.notes }
          : {}),
        ...(relatedBookingId ? { relatedBookingIds: [relatedBookingId] } : {}),
      },
    });

    secureLocalStorage.setItem("guestData_v3", JSON.stringify(data));

    const bookingId = booking.bookingId;
    secureLocalStorage.setItem("bookingId", bookingId);

    bookingRef.current = booking;

    return booking;
  };

  return { handleCheckout, bookingRef };
};

export const useHasContactDataFilledIn = () => {
  const { user } = useUser();
  const { data } = useCheckoutStore(
    useShallow((state) => ({
      data: state.data,
    }))
  );

  const isHaveEmptyFields = Object.keys(data)
    .filter(
      (e) =>
        e !== "country" &&
        e !== "notes" &&
        (!user ? true : e !== "confirmEmail")
    )
    .some((fieldName) => !data[fieldName as keyof typeof data]);

  const isEmailInvalid = data.email && !emailRegex.test(data.email);

  const isEmailMismatch = !user && data.email !== data.confirmEmail;

  const hasContactDataFilledIn = !(
    isHaveEmptyFields ||
    isEmailInvalid ||
    isEmailMismatch ||
    !checkPhoneNumber(
      createCompletePhoneNumber(data.phoneNumber, data.countryCode)
    )
  );

  return { hasContactDataFilledIn };
};

export const useIsFree = () => {
  const { paymentProvider } = usePaymentProvider();
  const { user } = useUser();
  const { cart } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
    }))
  );

  const isFree =
    user?.distributor?.invoiceApproved || cart?.total?.amount === "0.00";
  const showPaymentButton = paymentProvider === "payyo" || isFree;

  return { isFree, showPaymentButton };
};

export const useCheckoutButtonTextOrState = (state = false) => {
  const { t } = useI18n();
  const { hasContactDataFilledIn } = useHasContactDataFilledIn();
  const { isFree } = useIsFree();

  const { dataPayyo } = useCheckoutStore(
    useShallow((state) => ({
      dataPayyo: state.dataPayyo,
    }))
  );

  if (!hasContactDataFilledIn) {
    if (state) return false;
    return t("booking.addMoreInformation");
  }

  if (!isFree && !dataPayyo?.paymentMethod) {
    if (state) return false;
    return t("booking.addPaymentMethod");
  }

  if (state) return true;
  return t("booking.booknow");
};

export const useAffiliateData = () => {
  const [isAffiliate, setIsAffiliate] = useState(false);
  const [affiliateData, setAffiliateData] = useState<{
    affiliateReferralCode: string;
    affiliateLandingPage: string | null;
    affiliateReferrer: string;
  } | null>(null);

  const affiliateLandingPage = useAffiliateStore(
    (state) => state.affiliateLandingPage
  );

  useEffect(() => {
    let id = getCookie("affiliateId");

    if (!id) {
      const url = new URL(window.location.href);
      id =
        url.searchParams.get("ref") ||
        url.searchParams.get("affiliateid") ||
        url.searchParams.get("affiliateId") ||
        "";
    }

    if (id) {
      setIsAffiliate(true);
    }

    setAffiliateData({
      affiliateReferralCode: id,
      affiliateLandingPage: affiliateLandingPage || null,
      affiliateReferrer: document?.referrer || "",
    });
  }, [affiliateLandingPage]);

  return { isAffiliate, affiliateData };
};

export const usePaymentProvider = () => {
  const { user, isLoading } = useUser();

  const paymentProvider = useMemo(() => {
    if (isLoading) return false;

    if (user?.isReseller) {
      return "payyo";
    }

    if (
      user?.email.startsWith("adyen-test") ||
      user?.email.startsWith("test-adyen") ||
      user?.email === "denis.bruch@mailbox.org"
    ) {
      return "adyen";
    }

    return PAYMENT_PROVIDER;
  }, [user, isLoading]);

  return { paymentProvider };
};
