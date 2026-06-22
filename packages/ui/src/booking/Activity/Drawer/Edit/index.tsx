import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useShallow } from "zustand/react/shallow";
import { Fallback } from "../../..";
import {
  CancelForm,
  useCancelBookingItem,
} from "../Cancel";
import { BookingButton } from "../../../Button";
import { CartStore } from "../../../Cart/store";
import { useCheckoutStore } from "../../../Checkout/store";
import { useComplementaryStore } from "../../../ComplementaryActivity/store";
import {
  Content as BookingContent,
  ContentShell,
} from "../../../Content";
import { useTransportStore } from "../../../Transport/store";
import { useBooking } from "../../../hooks";
import { useBookingStore } from "../../../store";
import { Button } from "@swiss-activities/ui";
import { Drawer } from "../../../components/Drawer";
import { useDrawerStore } from "../../../store/drawer";
import { I } from "../../../components/I";
import { useSearchStore } from "../../../store/search";
import { useI18n } from "../../../utils/i18n/useI18n";
import { logBookingFlowError } from "../../../utils/log/logBookingFlowError";

type ItemType = CartStore["cart"]["customData"][number];

export const EditButton = ({
  item,
  bookingId,
  className,
  buttonType = "secondary",
  canRebook = false,
}: {
  item: ItemType;
  bookingId?: string;
  className?: string;
  buttonType?: "secondary" | "transparent";
  canRebook?: boolean;
}) => {
  const { t } = useI18n();
  const setOpen = useDrawerStore((state) => state.setOpen);
  const { openBooking } = useBooking();

  const canBeCancelled = item.reservation.isCancellable;
  const isCancelled = item.reservation.cancelledAt;
  const canCancel = canBeCancelled && !isCancelled;
  const hasBoth = canCancel && canRebook;

  const onEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    openBooking({
      activity: item.activity,
      reservation: item.reservation,
      isRebook: true,
      bookingId,
      openHidden: true,
    });
    setOpen("edit-booking");
  };

  const onCancel = (e: React.MouseEvent) => {
    e.stopPropagation();
    setOpen(`edit-activity-${bookingId}-${item?.activity?.id}`);
  };

  const onRebook = (e: React.MouseEvent) => {
    e.stopPropagation();
    openBooking({
      activity: item.activity,
      reservation: item.reservation,
      isRebook: true,
      bookingId,
    });
  };

  if (hasBoth) {
    return (
      <Button
        type={buttonType}
        text={t("pages.confirmation.editBooking")}
        onClick={onEdit}
        className={className}
      />
    );
  }

  if (canCancel) {
    return (
      <Button
        type={buttonType}
        text={t("pages.confirmation.cancel")}
        onClick={onCancel}
        className={className}
      />
    );
  }

  return (
    <Button
      type={buttonType}
      text={t("pages.confirmation.rebook.button")}
      onClick={onRebook}
      className={className}
    />
  );
};

export const EditBookingDrawer = ({
  bookingObject,
}: {
  bookingObject: any;
}) => {
  const { t, locale } = useI18n();
  const [view, setView] = useState<"booking" | "cancel">("booking");
  const cancel = useCancelBookingItem(bookingObject);

  const {
    activity,
    availability,
    flowType,
    reservation,
    setActive,
    setIsReservationLoaded,
    setReservation,
  } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      availability: state.availability,
      flowType: state.flowType,
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

  const canCancel = reservation?.isCancellable && !reservation?.cancelledAt;

  const handleClose = () => {
    setView("booking");
    cancel.reset();
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

  const onCancel = () => {
    if (!reservation?.bookingItemId) return;
    cancel.onCancel(reservation.bookingItemId);
  };

  const bottom =
    view === "cancel" ? (
      <Button
        loading={cancel.isLoading}
        type={cancel.cancelDisabled ? "gray" : "primary"}
        className="w-full"
        onClick={onCancel}
      >
        {t("pages.confirmation.cancel")}
      </Button>
    ) : (
      <div className="grid w-full grid-cols-2 gap-3">
        {canCancel && (
          <Button
            type="secondary"
            text={t("pages.confirmation.cancel")}
            className="w-full"
            onClick={() => setView("cancel")}
          />
        )}
        <BookingButton className={canCancel ? "w-full" : "col-span-2 w-full"} />
      </div>
    );

  return (
    <Drawer
      ident="edit-booking"
      modal
      flush={true}
      bottom={bottom}
      desktopDrawer="right"
      title={
        view === "cancel"
          ? t("pages.confirmation.cancel")
          : t("pages.confirmation.editBooking")
      }
      mobileTitle={false}
      classNameInner="bg-bg"
      onClose={handleClose}
    >
      {view === "cancel" && (
        <ContentShell>
          <Button
            type="secondary"
            size="sm"
            text={t("pages.confirmation.editBooking")}
            icon={<I icon="arrow-left" />}
            onClick={() => setView("booking")}
            className="mb-4"
          />
          <CancelForm
            onReasonChange={cancel.onReasonChange}
            isCustom={cancel.isCustom}
            customReason={cancel.customReason}
            setCustomReason={cancel.setCustomReason}
          />
        </ContentShell>
      )}
      <div className={view === "cancel" ? "hidden" : ""}>
        <ErrorBoundary FallbackComponent={Fallback} onError={handleError}>
          <BookingContent />
        </ErrorBoundary>
      </div>
    </Drawer>
  );
};
