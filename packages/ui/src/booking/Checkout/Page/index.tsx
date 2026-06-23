"use client";

import { useEffect } from "react";
import { BreadcrumbsBasket } from "../../BreadcrumbsBasket";
import { Card } from "../../Card";
import { useCartStore } from "../../Cart/store";
import { CheckoutBottomBar } from "../BottomBar";
import { CustomerIo } from "../CustomerIo";
import { CheckoutError } from "../Error";
import { FormBooking } from "../Form";
import { Sidebar } from "../Sidebar";
import { useI18n } from "../../utils/i18n/useI18n";
import { Text } from "@swiss-activities/ui";

export const CheckoutPage = () => {
  const { t, locale } = useI18n();
  const initCart = useCartStore((state) => state.init);

  // The web renderer reaches /buchung/ via a full navigation (not an SPA route),
  // so the cart store is fresh here and must be re-initialised — unlike the
  // legacy Next page, which inherited an already-loaded cart from the basket.
  useEffect(() => {
    initCart(locale, false);
  }, [initCart, locale]);

  return (
    <section className="bg-bg pb-16 lg:pb-24">
      <BreadcrumbsBasket active={2} />
      <div className="sa-container grid grid-cols-1 gap-8 lg:grid-cols-[2fr_1fr] lg:gap-12 xl:gap-24">
        <div className="lg:col-start-1 lg:row-start-1">
          <div className="mb">
            <Text as="h2" size="default" className="mb-0.5">
              {t("booking.personalTitle")}
            </Text>
            <Text className="mb-3 text-sm">{t("booking.personalSubtitle")}</Text>
          </div>
          <Card size="lg">
            <FormBooking />
          </Card>
        </div>
        <div className="lg:sticky lg:top-6 lg:h-max">
          <Text as="h2" size="default" className="mb">
            {t("booking.youBook")}
          </Text>
          <div className="space-y-8">
            <Card size="lg">
              <Sidebar />
            </Card>
          </div>
        </div>
      </div>
      <CheckoutBottomBar />
      <CheckoutError />
      <CustomerIo />
    </section>
  );
};
