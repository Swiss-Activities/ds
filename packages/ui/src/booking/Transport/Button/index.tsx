import { useShallow } from "zustand/react/shallow";
import { usePersonalizedOptions } from "../../PersonalizedOptions/hooks";
import { PriceDisplay } from "../../PriceDisplay";
import { useTickets } from "../../Tickets/hooks";
import { useCanCheckout } from "../../Total/hooks";
import {
  useProductPrice,
  isClassUpgradeProduct,
  isChildOnlyProduct,
} from "../Products/hooks";
import {
  useTickets as useTicketsTransport,
  useTransportTotalDisplay,
  useProductsTicketCategories,
} from "../Tickets/hooks";
import { useTrips } from "../queries";
import { useTransportStore } from "../store";
import { sendTransportEvent } from "../tracking";
import { usePostReservation } from "../../hooks";
import { useBookingStore } from "../../store";
import { Button } from "@swiss-activities/ui";
import { ChatButton } from "../../stubs";
import { Skeleton } from "@swiss-activities/ui";
import { useI18n } from "../../utils/i18n/useI18n";
import { useGetTripDetails } from "../../query/transport/trip";

export const BookingTransportButton = () => {
  const { t, locale } = useI18n();
  const {
    active,
    setActive,
    selectedProductId,
    selectedUpgradeIds,
    markStepAsVisited,
  } = useTransportStore(
    useShallow((state) => ({
      active: state.active,
      setActive: state.setActive,
      selectedProductId: state.selectedProductId,
      selectedUpgradeIds: state.selectedUpgradeIds,
      markStepAsVisited: state.markStepAsVisited,
    }))
  );
  const { personalizedOptionsValidated } = usePersonalizedOptions();
  const { canCheckoutTransport } = useCanCheckout();
  const { hasTicketsTransport } = useTickets();
  const { reserve, isPending, isSuccess } = usePostReservation("transport");
  const { reservation, isCheckout, isInlineCheckout } = useBookingStore(
    useShallow((state) => ({
      reservation: state.reservation,
      isCheckout: state.isCheckout,
      isInlineCheckout: state.isInlineCheckout,
    }))
  );
  const { isLoading: isLoadingTickets, data: ticketCategories } =
    useTicketsTransport();
  const { price: ticketPrice, total, prefix } = useTransportTotalDisplay();
  const { isLoading: isLoadingProducts } = useProductsTicketCategories();
  const hasProductSelected = selectedProductId !== null;

  const { selectedTrip } = useTrips();
  const tripId = selectedTrip?.tripId || selectedTrip?.id || "";
  const { data: detailedTrip, isLoading: isLoadingTripDetails } =
    useGetTripDetails({ tripId, locale }, !!tripId);
  const hasTripDetailsLoaded = !!detailedTrip?.returnTripId;

  const { productPrice } = useProductPrice();
  const { products } = useProductsTicketCategories();

  const lowestAdultPrice = (() => {
    if (active === "products") {
      if (isLoadingProducts) return null;
      if (products.length === 0) return null;

      const mainProducts = products.filter(
        (p) => !isClassUpgradeProduct(p) && !isChildOnlyProduct(p)
      );
      if (mainProducts.length === 0) return null;

      let lowestPrice: number | null = null;
      mainProducts.forEach((product) => {
        product.ticketCategories?.forEach((tc) => {
          if (
            tc.categoryType === "2nd_class" &&
            tc.price &&
            parseFloat(tc.price.amount) > 0
          ) {
            const price = parseFloat(tc.price.amount);
            if (lowestPrice === null || price < lowestPrice) {
              lowestPrice = price;
            }
          }
        });
      });

      const childProducts = products.filter((p) => isChildOnlyProduct(p));
      let childrenTotal = 0;
      childProducts.forEach((child) => {
        child.ticketCategories?.forEach((tc) => {
          if (tc.categoryType === "2nd_class" && tc.price) {
            childrenTotal += parseFloat(tc.price.amount);
          }
        });
      });

      return lowestPrice !== null ? lowestPrice + childrenTotal : null;
    }

    if (!selectedTrip?.ticketCategories) return null;

    const adultTickets = selectedTrip.ticketCategories.filter(
      (ticket) =>
        ticket.audience === "adults" &&
        ticket.discountType === "sbb_half_fare" &&
        ticket.categoryType === "2nd_class" &&
        ticket.price &&
        parseFloat(ticket.price.amount) > 0
    );
    if (adultTickets.length === 0) return null;
    return parseFloat(
      adultTickets.reduce((lowest, current) => {
        const currentPrice = parseFloat(current.price?.amount || "0");
        const lowestPrice = parseFloat(lowest.price?.amount || "0");
        return currentPrice < lowestPrice ? current : lowest;
      }).price?.amount || "0"
    );
  })();

  const displayPrice = hasProductSelected ? productPrice : lowestAdultPrice;

  const getContent = () => {
    if (canCheckoutTransport) {
      return isInlineCheckout
        ? t("booking.booknow")
        : t("activity.widget.basketAdd");
    }

    if (active === "trip") {
      return t("Transport.button.confirmTrip");
    }

    if (active === "tickets") {
      if (!hasTicketsTransport) {
        return t("activity.widget.titleTickets");
      }
      return t("Transport.button.confirmTravelers");
    }

    if (active === "products") {
      return t("general.chooseSelection");
    }

    return t("general.chooseSelection");
  };

  const getType = () => {
    if (reservation && isLoadingTickets) {
      return "gray";
    }

    if (active === "trip" && (isLoadingTripDetails || !hasTripDetailsLoaded)) {
      return "gray";
    }

    if (active === "tickets" && !hasTicketsTransport) {
      return "gray";
    }

    if (active === "products" && (isLoadingProducts || !hasProductSelected)) {
      return "gray";
    }

    if (active === "personalized" && !personalizedOptionsValidated) {
      return "gray";
    }

    return "primary";
  };

  const handleClick = () => {
    if (active === "trip" && hasTripDetailsLoaded) {
      markStepAsVisited("tickets");
      setActive("tickets");
      sendTransportEvent("transport_confirm_trip");
      return;
    }

    if (active === "tickets" && hasTicketsTransport) {
      markStepAsVisited("products");
      setActive("products");
      sendTransportEvent("transport_confirm_travelers", {
        quantity: Object.values(
          useTransportStore.getState().ticketsAudiences
        ).reduce((a, b) => a + b, 0),
      });
      return;
    }

    if (active === "products" && hasProductSelected) {
      markStepAsVisited("personalized");
      setActive("personalized");
      sendTransportEvent("transport_confirm_product", {
        item_category3: products.find((p) => p.id === selectedProductId)?.title,
        price: productPrice,
      });
      return;
    }

    if (canCheckoutTransport) {
      reserve();
      return;
    }
  };

  return (
    <div className="flex w-full flex-col gap-2.5">
      <div className="relative flex items-center justify-between">
        <ChatButton iconOnly />
        <div className="relative flex">
          {(isLoadingTickets && ticketCategories.length === 0) ||
          (active === "products" && isLoadingProducts) ? (
            <div className="h-4 w-20 animate-pulse rounded bg-gray-200" />
          ) : (
            <div className="relative w-max">
              <PriceDisplay
                price={displayPrice}
                from={!hasProductSelected}
                prefix={hasProductSelected || prefix}
                total={hasProductSelected || total}
              />
            </div>
          )}
        </div>
      </div>
      {!isCheckout && (
        <Button
          id="booking-button"
          type={getType()}
          className="w-full"
          onClick={handleClick}
          loading={
            isPending || isSuccess || !!(reservation && isLoadingTickets)
          }
        >
          {getContent()}
        </Button>
      )}
    </div>
  );
};
