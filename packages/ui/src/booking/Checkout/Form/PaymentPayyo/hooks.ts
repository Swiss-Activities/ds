import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../../Cart/store";
import {
  useAffiliateData,
  useCheckout,
  useHasContactDataFilledIn,
  useIsFree,
} from "../../hooks";
import { useCheckoutStore } from "../../store";
import { useBookingStore } from "../../../store";
import { useDrawerStore } from "../../../store/drawer";
import { getPageUrl } from "../../../utils/content/loaders";
import { getGaCookie } from "../../../utils/cookies/getCookie";
import { useWidget } from "../../../utils/env/useWidget";
import { useI18n } from "../../../utils/i18n/useI18n";
import { Activities, dataLayerSend } from "../../../utils/thirdParty/dataLayerSend";
import { scrollToTarget } from "../../../utils/ui/scrollToTarget";
import { useUser } from "../../../utils/user/useUser";
import { usePostPaymentAttempt } from "../../../query/payment/paymentAttempt";

export const usePayyo = () => {
  const { locale } = useI18n();
  const { user } = useUser();
  const isWidget = useWidget();
  const { handleCheckout } = useCheckout();
  const { isFree } = useIsFree();
  const { isAffiliate, affiliateData } = useAffiliateData();
  const { mutateAsync: paymentAttempt } = usePostPaymentAttempt();
  const { hasContactDataFilledIn } = useHasContactDataFilledIn();
  const openDrawer = useDrawerStore((state) => state.setOpen);

  const { isInlineCheckout } = useBookingStore(
    useShallow((state) => ({
      isInlineCheckout: state.isInlineCheckout,
    }))
  );

  const { dataPayyo, hasImportant, hasImportantChecked, setIsLoading } =
    useCheckoutStore(
      useShallow((state) => ({
        dataPayyo: state.dataPayyo,
        hasImportant: state.hasImportant,
        hasImportantChecked: state.hasImportantChecked,
        setIsLoading: state.setIsLoading,
      }))
    );

  const { cart } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
    }))
  );

  const handlePayment = async () => {
    if (!hasContactDataFilledIn) {
      return;
    }

    if (!dataPayyo.paymentMethod && !isFree) {
      scrollToTarget("#payment-methods");
      return;
    }

    if (hasImportant && !hasImportantChecked) {
      scrollToTarget("#important-agree");
      return;
    }

    setIsLoading(true);
    const booking = await handleCheckout();
    const url = new URL(window.location.href);
    const returnUrl = url.searchParams.get("returnUrl");
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const successReturnUrl = `${baseUrl}${getPageUrl(
      "confirm",
      locale
    )}?bookingId=${booking.bookingId}${isWidget ? "&widget=true" : ""}`;
    const failureReturnUrl = isInlineCheckout
      ? window.location.href
      : returnUrl || `${baseUrl}${getPageUrl("booking", locale)}`;

    dataLayerSend({
      obj: {
        event: "payment_initiate",
        payment_type: dataPayyo.paymentMethod,
      },
      activities: cart.customData as unknown as Activities,
      timeout: 0,
    });
    await paymentAttempt({
      locale,
      bookingId: booking.bookingId,
      data: {
        activePaymentAgreement: dataPayyo.paymentMethodSaveCard,
        affiliate: isAffiliate && affiliateData ? affiliateData : null,
        channelId: user?.distributor?.invoiceApproved
          ? user?.distributor?.channelId
          : null,
        failureReturnUrl: failureReturnUrl,
        language: locale,
        paymentAgreementId: dataPayyo?.paymentMethodCardId || null,
        paymentMethod: dataPayyo?.paymentMethod || null,
        successReturnUrl,
        ga4Id: getGaCookie(),
      },
    })
      .then((payment) => {
        if (payment && payment.redirectUrl) {
          window.location.href = payment.redirectUrl;
        }
      })
      .catch((err) => {
        if (err?.response?.status === 422) {
          window.location.href = successReturnUrl;
          return;
        }
        openDrawer("checkout-error");
        setIsLoading(false);
      });
  };

  return { handlePayment };
};
