import { useShallow } from "zustand/react/shallow";
import { Activities } from "../../Cart/Activities";
import { Summary } from "../../Cart/Summary";
import { useCartStore } from "../../Cart/store";
import { PaymentButton } from "../Form/PaymentButton";
import { Rebate } from "./Rebate";
import { TosText } from "../TosText";
import {
  useIsFree,
  usePaymentProvider,
} from "../hooks";
import { Button } from "@swiss-activities/ui";
import { getPageUrl } from "../../utils/content/loaders";
import { useI18n } from "../../utils/i18n/useI18n";

export const Sidebar = () => {
  const { t, locale } = useI18n();

  const { showPaymentButton } = useIsFree();
  const { paymentProvider } = usePaymentProvider();

  const { cart, loadingState } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
      loadingState: state.loadingState,
    }))
  );

  return (
    <>
      <Activities />
      {loadingState === "ready" && (
        <>
          <div className="my-5 h-px w-full bg-gray-200" />
          <Summary
            {...{ cart }}
            reservations={cart.customData.map((data) => data.reservation)}
          />
          <div className="mt-4 h-px w-full bg-gray-200" />
          <Rebate />
          {paymentProvider === "payyo" ? (
            <div>
              <div className="mb-4 h-px w-full bg-gray-200" />
              <TosText className="mt-1" />
            </div>
          ) : (
            <div className="-mt-4" />
          )}
        </>
      )}
      {loadingState === "empty" ? (
        <Button
          type="primary"
          href={getPageUrl("activities", locale)}
          className="w-full"
        >
          {t("pages.basket.explore")}
        </Button>
      ) : loadingState === "ready" && showPaymentButton ? (
        <PaymentButton className="mt-4 hidden lg:flex" id="booking-button" />
      ) : null}
    </>
  );
};
