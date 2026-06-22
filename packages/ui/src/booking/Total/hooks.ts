import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { useOriginalOffer } from "../OffersV2/hooks";
import { usePersonalizedOptions } from "../PersonalizedOptions/hooks";
import { useTickets } from "../Tickets/hooks";
import { useTransportStore } from "../Transport/store";
import { useBookingStore } from "../store";
import { useSearchStore } from "../store/search";
import type { TOfferBooking } from "../types/offerBooking";

type TicketCategory = TOfferBooking["ticketCategories"][number];
type Ticket = NonNullable<TOfferBooking["tickets"]>[number];
type PriceGroup = Ticket["prices"][number];
type PriceTier = PriceGroup["prices"][number];

export const useTotal = () => {
  const { total: depositsTotal } = useDeposits();
  const { offer, tickets } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
      tickets: state.tickets,
    }))
  );

  let total = 0;

  Object.entries(tickets).forEach(([key, value]) => {
    const amount =
      Number(
        offer?.ticketCategories?.find(
          (ticket) => `${ticket.ticketCategoryId}` === `${key}`
        )?.price?.amount || "0"
      ) * value;

    total = total + amount;
  });

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

  const price = useMemo(() => {
    let offersPrice = 0;
    if (offer?.ticketCategories) {
      const adultNonDiscountTickets = offer.ticketCategories.filter(
        (ticket) => ticket.audience === "adults" && !ticket.discountType
      );

      if (adultNonDiscountTickets.length === 0) {
        offersPrice = parseFloat(offer?.startingPrice?.amount || "0");
      } else {
        let ticketsToConsider = adultNonDiscountTickets;
        if (categoryType) {
          const filtered = adultNonDiscountTickets.filter(
            (ticket) => ticket.categoryTypeKey === categoryType
          );
          if (filtered.length > 0) {
            ticketsToConsider = filtered;
          }
        }
        offersPrice = parseFloat(
          ticketsToConsider.reduce(
            (lowest: TicketCategory, current: TicketCategory) =>
              parseFloat(current.price.amount) < parseFloat(lowest.price.amount)
                ? current
                : lowest
          ).price.amount
        );
      }
    }
    if (active === "offers") return offersPrice;

    let ticketsPrice = offersPrice;
    if (originalOffer?.tickets) {
      if (Object.keys(ticketSelectionsMetadata).length === 0) {
        const ticket =
          originalOffer.tickets.find((t) => t.audience === "adults") ||
          originalOffer.tickets[0];
        const priceGroup = ticket?.prices?.find(
          (p) =>
            (p.category || null) === (categoryType || null) &&
            (p.discount || null) === null
        );
        if (priceGroup?.prices?.length) {
          ticketsPrice = Math.min(
            ...priceGroup.prices.map((p) => parseFloat(p.price.amount))
          );
        } else {
          ticketsPrice = parseFloat(ticket?.minPrice?.amount || "0");
        }
      } else if (flowType === "offers-date") {
        const audienceCounts: Record<string, number> = {};
        Object.keys(ticketSelections).forEach((key) => {
          const audience = key.substring(0, key.lastIndexOf("-"));
          audienceCounts[audience] = (audienceCounts[audience] || 0) + 1;
        });

        ticketsPrice = Object.entries(audienceCounts).reduce(
          (total, [audience, count]) => {
            const ticket = originalOffer.tickets?.find(
              (t) => t.audience === audience
            );

            const fromMatrix = ticket?.computedPrices?.find(
              (cp) => Number(cp.pax) === count
            );
            if (fromMatrix) {
              return total + parseFloat(fromMatrix.price.amount);
            }

            return Object.entries(ticketSelections)
              .filter(([key]) => key.startsWith(`${audience}-`))
              .reduce((subTotal, [, ticketCategoryId]) => {
                const tc = originalOffer.ticketCategories?.find(
                  (t) => t.ticketCategoryId === Number(ticketCategoryId)
                );
                return subTotal + parseFloat(tc?.price?.amount || "0");
              }, total);
          },
          0
        );
      } else {
        const audienceCounts: Record<string, number> = {};
        Object.values(ticketSelectionsMetadata).forEach((metadata) => {
          audienceCounts[metadata.audience] =
            (audienceCounts[metadata.audience] || 0) + 1;
        });

        ticketsPrice = Object.entries(audienceCounts).reduce(
          (total, [audience, count]) => {
            const ticket = originalOffer.tickets?.find(
              (t) => t.audience === audience
            );
            if (!ticket) return total;

            const metadata = Object.values(ticketSelectionsMetadata).find(
              (m) => m.audience === audience
            );
            const priceGroup = ticket?.prices?.find(
              (p) =>
                (p.category || null) ===
                  (metadata?.categoryTypeKey || categoryType || null) &&
                (p.discount || null) === (metadata?.discountType || null)
            );

            if (priceGroup?.prices?.length) {
              const priceTiers = priceGroup.prices.filter(
                (p) => p.minPax !== null || p.maxPax !== null
              );

              if (priceTiers.length > 0) {
                const matchingTier = priceTiers.find(
                  (tier) =>
                    (tier.minPax === null || count >= tier.minPax) &&
                    (tier.maxPax === null || count <= tier.maxPax)
                );
                if (matchingTier) {
                  return total + parseFloat(matchingTier.price.amount) * count;
                }
              }

              return (
                total +
                Math.min(
                  ...priceGroup.prices.map((p) => parseFloat(p.price.amount))
                ) *
                  count
              );
            }
            return total;
          },
          0
        );
      }
    }
    if (active === "tickets") return ticketsPrice;

    let datePrice = ticketsPrice;
    if (availability?.price) {
      datePrice = parseFloat(availability.price.amount);
    }
    if (active === "date" || active === "personalized") return datePrice;

    return 0;
  }, [
    originalOffer,
    ticketSelections,
    ticketSelectionsMetadata,
    availability,
    active,
    offer,
    categoryType,
    flowType,
  ]);

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
  let currency: string | undefined = "";
  let total = 0;

  const deposits: {
    [key: string]: {
      amount: number;
      label: string;
      value: number;
    };
  } = {};

  offer?.ticketCategories.forEach((item) => {
    if (tickets[item.ticketCategoryId] && item?.articleLabel) {
      const items = item?.articleLabel.split(" / ");

      currency = item?.articlePrice?.currency;

      if (items.length === 1) {
        if (deposits[items[0]]) {
          deposits[items[0]].amount += tickets[item.ticketCategoryId] || 0;
        } else {
          deposits[items[0]] = {
            label: items[0],
            amount: tickets[item.ticketCategoryId] || 0,
            value: Number(item?.articlePrice?.amount) / items.length,
          };
        }
        return;
      }

      items.forEach((label: string) => {
        const [id, value] = label.split("_");

        deposits[id] = {
          label: value,
          amount:
            (deposits[id]?.amount || 0) + (tickets[item.ticketCategoryId] || 0),
          value: Number(item?.articlePrice?.amount) / items.length,
        };
      });
    }
  });

  Object.entries(deposits).forEach(([key, value]) => {
    total = total + value.amount * value.value;
  });

  return { deposits, currency, total };
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
