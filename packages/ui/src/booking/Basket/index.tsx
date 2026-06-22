"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { Activity } from "../Activity";
import { Summary } from "../Cart/Summary";
import { useCartStore } from "../Cart/store";
import { ComplementaryActivities } from "../ComplementaryActivity";
import { BottomBar } from "../bottom-bar";
import { CancellationCard, ChatButton, SignUpCard } from "../stubs";
import type { TActivity } from "../types/activity";
import { getPageUrl } from "../utils/content/loaders";
import { useI18n } from "../utils/i18n/useI18n";
import { type Activities, useDataLayer } from "../utils/thirdParty/dataLayerSend";
import { useFeatureFlag } from "../utils/ui/useFeatureFlag";
import { Button, Card, Text } from "@swiss-activities/ui";

export const Basket = () => {
  const { t, locale } = useI18n();
  const { dataLayer } = useDataLayer();
  const hasSentDataLayer = useRef(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const { cart, loadingState } = useCartStore(
    useShallow((state) => ({
      cart: state.cart,
      loadingState: state.loadingState,
    }))
  );
  const reservations = cart?.customData?.length
    ? cart.customData.map((data) => data.reservation)
    : [];
  const basketUrl = getPageUrl("basket", locale);

  const cancellationFlag = useFeatureFlag(
    "cancellation-card-airbnb",
    "NEXT_PUBLIC_CANCELLATION_CARD_VARIANT"
  );

  const cancellationCardActivity = useMemo<TActivity | undefined>(() => {
    const items = cart?.customData ?? [];
    if (!items.length) return undefined;
    const allRefundable = items.every((d) => d.activity?.summary?.cancellation);
    if (!allRefundable) return undefined;
    return items.reduce<TActivity | undefined>((acc, d) => {
      const a = d.activity as TActivity | undefined;
      if (!a?.summary?.cancellation) return acc;
      if (!acc) return a;
      const cur = acc.summary?.cancellationCutOff ?? Infinity;
      const next = a.summary?.cancellationCutOff ?? Infinity;
      return next < cur ? a : acc;
    }, undefined);
  }, [cart]);
  const showCancellationCard =
    cancellationFlag.variant === "test" && !!cancellationCardActivity;

  useEffect(() => {
    if (!cart?.customData?.length) return;
    hasSentDataLayer.current = true;
    dataLayer({
      obj: {
        event: "view_cart",
      },
      activities: Object.values(cart.customData) as unknown as Activities,
    });

    return () => setIsLoadingButton(false);
  }, [cart, dataLayer]);

  const BookingButton = () => {
    return cart.customData?.length ? (
      <Button
        onClick={() => {
          setIsLoadingButton(true);
          dataLayer({
            obj: {
              event: "begin_checkout",
            },
            activities: Object.values(cart.customData) as unknown as Activities,
            timeout: 0,
          });
          setTimeout(() => {
            window.location.href = `${getPageUrl("booking", locale)}`;
          }, 500);
        }}
        type="primary"
        loading={isLoadingButton}
        className="w-full"
        text={t("pages.basket.next")}
      />
    ) : null;
  };

  return (
    <section className="bg-gray-50 pb-16 lg:pb-24">
      <div className="container-tw">
        <div className="grid gap-8 lg:grid-cols-[2fr,1fr] lg:gap-12">
          <div>
            <Text as="h1" size="default" className="mb">
              {t("activity.widget.basket")}
            </Text>
            <div>
              {loadingState === "empty" ||
              (loadingState === "ready" && reservations.length === 0) ? (
                <Card className="flex flex-col items-center justify-center space-y-4 lg:py-8">
                  <Text as="h2" size="lg">
                    {t("pages.basket.empty")}
                  </Text>
                  <Button type="primary" href={getPageUrl("activities", locale)}>
                    {t("pages.basket.explore")}
                  </Button>
                </Card>
              ) : reservations.length >= 1 ? (
                <div className="space-y-4 lg:space-y-6">
                  {Object.values(cart.customData).map((data, index) => {
                    return (
                      <div key={data.activity?.id + index}>
                        <Activity {...{ cart }} item={data} />
                      </div>
                    );
                  })}
                  <ComplementaryActivities type="lg" className="lg:hidden" />
                </div>
              ) : null}
              <SignUpCard className="mt-8 lg:hidden" returnUrl={basketUrl} />
              <div className="flex lg:hidden">
                <ChatButton className="mx-auto mt-8" />
              </div>
            </div>
          </div>
          <div className="hidden lg:block">
            {reservations.length >= 1 && (
              <>
                <Text as="h2" size="default" className="mb">
                  {t("breadcrumbsBasket.stepTwoDescription")}
                </Text>
                <div className="space-y-4">
                  <Card>
                    <Summary
                      {...{ cart, reservations }}
                      className="mb-6"
                      rebate={false}
                      serviceFee={false}
                    />
                    {showCancellationCard ? (
                      <CancellationCard
                        activity={cancellationCardActivity}
                        compact
                        className="mb-3"
                      />
                    ) : null}
                    <BookingButton />
                  </Card>
                  <SignUpCard returnUrl={basketUrl} />
                  <ComplementaryActivities />
                  <div className="flex">
                    <ChatButton className="mx-auto" />
                  </div>
                </div>
              </>
            )}
          </div>
          {reservations.length >= 1 && (
            <BottomBar className="lg:hidden">
              <div className="flex flex-col gap-2">
                {showCancellationCard ? (
                  <CancellationCard activity={cancellationCardActivity} compact />
                ) : null}
                <BookingButton />
              </div>
            </BottomBar>
          )}
        </div>
      </div>
    </section>
  );
};
