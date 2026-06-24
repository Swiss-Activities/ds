import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { useOriginalOffer } from "../OffersV2/hooks";
import { usePersonalizedOptions } from "../PersonalizedOptions/hooks";
import { useTickets } from "../Tickets/hooks";
import { useTransportStore } from "../Transport/store";
import { useBookingStore } from "../store";
import { useSearchStore } from "../store/search";
import { computeDeposits, computeDisplayPrice, computeTotal } from "../pricing";

export const useTotal = () => {
  const { total: depositsTotal } = useDeposits();
  const { offer, tickets } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
      tickets: state.tickets,
    }))
  );

  const total = computeTotal(offer, tickets);

  return {
    total: total.toFixed(2),
    totalWithDeposits: (total + depositsTotal).toFixed(2),
  };
};

export const useTotalDisplay = () => {
  const {
    ticketSelections,
    tickets,
    ticketSelectionsMetadata,
    availability,
    activity,
    active,
    offer,
    categoryType,
    flowType,
  } = useBookingStore(
    useShallow((state) => ({
      ticketSelections: state.ticketSelections,
      tickets: state.tickets,
      ticketSelectionsMetadata: state.ticketSelectionsMetadata,
      availability: state.availability,
      activity: state.activity,
      active: state.active,
      offer: state.offer,
      categoryType: state.categoryType,
      flowType: state.flowType,
    }))
  );
  const { originalOffer, isLoading: isLoadingOffers } = useOriginalOffer();

  const price = useMemo(
    () =>
      computeDisplayPrice({
        offer,
        originalOffer,
        ticketSelections,
        ticketSelectionsMetadata,
        availability,
        active,
        categoryType,
        flowType,
      }),
    [
      originalOffer,
      ticketSelections,
      ticketSelectionsMetadata,
      availability,
      active,
      offer,
      categoryType,
      flowType,
    ]
  );

  const total = useMemo(() => {
    if (availability?.price) {
      return true;
    }

    if (
      Object.keys(tickets).length > 0 ||
      Object.keys(ticketSelections).length > 0
    ) {
      return true;
    }

    return false;
  }, [ticketSelections, tickets, availability]);

  const from = useMemo(() => {
    if (availability?.price) {
      return false;
    }

    return activity?.summary?.dynamicPrice;
  }, [activity, availability]);

  const prefix = useMemo(() => {
    if (isLoadingOffers || !originalOffer) return false;

    return originalOffer.ticketCategories?.every((t) => t.occupancy === 1);
  }, [isLoadingOffers, originalOffer]);

  return {
    price,
    total,
    from,
    prefix,
  };
};

export const useDeposits = () => {
  const { offer, tickets } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
      tickets: state.tickets,
    }))
  );

  return computeDeposits(offer, tickets);
};

export const useIsReadyToBook = () => {
  const { dateBooking, flowType, offer, availability } = useBookingStore(
    useShallow((state) => ({
      active: state.active,
      availability: state.availability,
      dateBooking: state.date,
      flowType: state.flowType,
      offer: state.offer,
    }))
  );
  const { hasTickets, hasTicketsTransport } = useTickets();
  const { hasPersonalizedOptions, personalizedOptionsValidated } =
    usePersonalizedOptions();
  const [date] = useSearchStore((state) => [state.date]);

  const isReadyToBook =
    (flowType === "offers-date" ? dateBooking : date) &&
    offer?.offerId &&
    availability?.availabilityId &&
    hasTickets &&
    (hasPersonalizedOptions ? personalizedOptionsValidated : true);

  const isReadyToBookTransport =
    offer?.offerId && hasTicketsTransport && personalizedOptionsValidated;

  return { isReadyToBook, isReadyToBookTransport };
};

export const useCanCheckout = () => {
  const { active, flowType } = useBookingStore(
    useShallow((state) => ({
      active: state.active,
      flowType: state.flowType,
    }))
  );
  const { active: activeTransport } = useTransportStore(
    useShallow((state) => ({
      active: state.active,
    }))
  );
  const { isReadyToBook, isReadyToBookTransport } = useIsReadyToBook();

  const canCheckout =
    (active === "total" ||
      (flowType === "offers-date" &&
        (active === "date" || active === "personalized"))) &&
    isReadyToBook;
  const canCheckoutTransport =
    activeTransport === "personalized" && isReadyToBookTransport;

  return { canCheckout, canCheckoutTransport };
};

export const useCanGoToTotal = () => {
  const { active, isRebook, flowType } = useBookingStore(
    useShallow((state) => ({
      active: state.active,
      flowType: state.flowType,
      isRebook: state.isRebook,
    }))
  );
  const { isReadyToBook } = useIsReadyToBook();
  const { hasPersonalizedOptions } = usePersonalizedOptions();

  const canGoToTotal =
    flowType === "offers-date"
      ? false
      : isRebook ||
        ((active === "personalized" ||
          (active === "tickets" && !hasPersonalizedOptions)) &&
          isReadyToBook);

  return { canGoToTotal };
};
