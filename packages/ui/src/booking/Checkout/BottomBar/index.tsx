import { useShallow } from "zustand/react/shallow";
import { useCartStore } from "../../Cart/store";
import { PaymentButton } from "../Form/PaymentButton";
import { useIsFree } from "../hooks";
import { BottomBar } from "../../bottom-bar";
import { Button } from "@swiss-activities/ui";
import { Skeleton } from "@swiss-activities/ui";
import { getPageUrl } from "../../utils/content/loaders";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";

export const CheckoutBottomBar = () => {
  const { t, locale } = useI18n();

  const { showPaymentButton } = useIsFree();

  const { loadingState } = useCartStore(
    useShallow((state) => ({
      loadingState: state.loadingState,
    }))
  );

  if (!showPaymentButton) return null;

  return (
    <BottomBar className={cn("grid-cols-1fr grid gap-2 lg:hidden")}>
      {loadingState === "loading" ? (
        <Skeleton
          loading={loadingState === "loading"}
          amount={1}
          classNameItems="!h-[58px]"
          className="col-span-1"
        />
      ) : loadingState === "empty" ? (
        <Button
          type="primary"
          href={getPageUrl("activities", locale)}
          className="col-span-1 w-full"
        >
          {t("pages.basket.explore")}
        </Button>
      ) : (
        <PaymentButton type="sm" id="booking-button-mobile" />
      )}
    </BottomBar>
  );
};
