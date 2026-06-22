import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../Card";
import { Activities } from "../Cart/Activities";
import { useCartStore } from "../Cart/store";
import { BackButton } from "./BackButton";
import { FormBooking } from "./Form";
import { useI18n } from "../utils/i18n/useI18n";

export const Checkout = () => {
  const { locale } = useI18n();
  const { initCart } = useCartStore(
    useShallow((state) => ({
      initCart: state.init,
    }))
  );

  useEffect(() => {
    initCart(locale, false);
  }, []);

  return (
    <div className="mt-4 space-y-6 lg:mt-0">
      <BackButton />
      <Card size="lg">
        <Activities />
      </Card>
      <Card size="lg">
        <FormBooking />
      </Card>
    </div>
  );
};
