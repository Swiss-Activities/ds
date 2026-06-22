"use client";

import { UrlState } from "./UrlState";
import { ErrorBoundary } from "react-error-boundary";
import { useShallow } from "zustand/react/shallow";
import { BookingButton } from "./Button";
import { useCheckoutStore } from "./Checkout/store";
import { useComplementaryStore } from "./ComplementaryActivity/store";
import { Content } from "./Content";
import { useTransportStore } from "./Transport/store";
import { WidgetCloseListener } from "./WidgetCloseListener";
import { useBookingStore } from "./store";
import { Drawer } from "./components/Drawer";
import { useSearchStore } from "./store/search";
import { Text } from "@swiss-activities/ui";
import { useI18n } from "./utils/i18n/useI18n";
import { logBookingFlowError } from "./utils/log/logBookingFlowError";

export const Fallback = () => {
  const { t } = useI18n();

  return (
    <Text className="p-8 text-center">{t("activity.widget.error500")}</Text>
  );
};

export const Booking = () => {
  const { t, locale } = useI18n();
  const {
    activity,
    availability,
    flowType,
    isCheckout,
    reservation,
    setActive,
    setIsReservationLoaded,
    setReservation,
  } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      availability: state.availability,
      flowType: state.flowType,
      isCheckout: state.isCheckout,
      reservation: state.reservation,
      setActive: state.setActive,
      setIsReservationLoaded: state.setIsReservationLoaded,
      setReservation: state.setReservation,
    }))
  );
  const { resetCheckout } = useCheckoutStore(
    useShallow((state) => ({
      resetCheckout: state.reset,
    }))
  );
  const resetComplementary = useComplementaryStore((state) => state.reset);
  const resetTransport = useTransportStore((state) => state.reset);
  const date = useSearchStore((state) => state.date);
  const handleClose = () => {
    if (flowType === "date-offers") {
      setActive("date");
    }
    setReservation(null);
    setIsReservationLoaded(false);
    const url = new URL(window.location.href);
    url.searchParams.delete("bookingData");
    url.searchParams.delete("bookingRun");
    window.history.replaceState({}, "", url.href);
    resetCheckout();
    resetComplementary();
    resetTransport();
  };

  const handleError = () => {
    logBookingFlowError({
      activity,
      availability,
      date,
      locale,
      message: "The booking flow component has crashed.",
      reservation,
      combined: true,
    });
  };

  return (
    <>
      <Drawer
        ident="booking-modal"
        modal
        flush={true}
        bottom={<BookingButton />}
        bottomLarge={flowType === "offers-date"}
        desktopDrawer="right"
        title={t(
          isCheckout
            ? "breadcrumbsBasket.stepTwoDescription"
            : "general.activityBook"
        )}
        mobileTitle={false}
        classNameInner="bg-bg"
        onClose={handleClose}
      >
        <ErrorBoundary FallbackComponent={Fallback} onError={handleError}>
          <Content />
        </ErrorBoundary>
      </Drawer>
      <WidgetCloseListener />
      <UrlState />
    </>
  );
};
