import type { TOfferBooking } from "./types/offerBooking";

/**
 * Pure booking price math, extracted verbatim from the Total hooks so the
 * branching money logic (offers/tickets/date stages × flowType × categoryType ×
 * tiered minPax/maxPax × per-audience computedPrices matrices) is unit-testable
 * — an off-by-one in tier matching charges the wrong amount (PRD T2/Q2). The
 * hooks are thin wrappers around these.
 */

type TicketSelectionMetadata = {
  audience: string;
  discountType: string | null;
  categoryTypeKey: string | null;
};

export interface DisplayPriceInput {
  offer: TOfferBooking | null;
  originalOffer: TOfferBooking | null | undefined;
  ticketSelections: Record<string, number>;
  ticketSelectionsMetadata: Record<string, TicketSelectionMetadata>;
  availability: { price?: { amount: string } | null } | null;
  active: string;
  categoryType: string | null | undefined;
  flowType: "date-offers" | "offers-date";
}

/**
 * The per-step "from" price shown beside the booking flow. Returns the cheapest
 * adult offer price on the offers step, the selected-tickets price on the
 * tickets step, the availability price on the date/personalized step, and 0
 * otherwise (the total step renders the real sum via computeTotal).
 */
export function computeDisplayPrice({
  offer,
  originalOffer,
  ticketSelections,
  ticketSelectionsMetadata,
  availability,
  active,
  categoryType,
  flowType,
}: DisplayPriceInput): number {
  let offersPrice = 0;
  if (offer?.ticketCategories) {
    const adultNonDiscountTickets = offer.ticketCategories.filter(
      (ticket) => ticket.audience === "adults" && !ticket.discountType,
    );

    if (adultNonDiscountTickets.length === 0) {
      offersPrice = parseFloat(offer?.startingPrice?.amount || "0");
    } else {
      let ticketsToConsider = adultNonDiscountTickets;
      if (categoryType) {
        const filtered = adultNonDiscountTickets.filter(
          (ticket) => ticket.categoryTypeKey === categoryType,
        );
        if (filtered.length > 0) {
          ticketsToConsider = filtered;
        }
      }
      offersPrice = parseFloat(
        ticketsToConsider.reduce((lowest, current) =>
          parseFloat(current.price.amount) < parseFloat(lowest.price.amount) ? current : lowest,
        ).price.amount,
      );
    }
  }
  if (active === "offers") return offersPrice;

  let ticketsPrice = offersPrice;
  if (originalOffer?.tickets) {
    if (Object.keys(ticketSelectionsMetadata).length === 0) {
      const ticket =
        originalOffer.tickets.find((t) => t.audience === "adults") || originalOffer.tickets[0];
      const priceGroup = ticket?.prices?.find(
        (p) => (p.category || null) === (categoryType || null) && (p.discount || null) === null,
      );
      if (priceGroup?.prices?.length) {
        ticketsPrice = Math.min(...priceGroup.prices.map((p) => parseFloat(p.price.amount)));
      } else {
        ticketsPrice = parseFloat(ticket?.minPrice?.amount || "0");
      }
    } else if (flowType === "offers-date") {
      const audienceCounts: Record<string, number> = {};
      Object.keys(ticketSelections).forEach((key) => {
        const audience = key.substring(0, key.lastIndexOf("-"));
        audienceCounts[audience] = (audienceCounts[audience] || 0) + 1;
      });

      ticketsPrice = Object.entries(audienceCounts).reduce((total, [audience, count]) => {
        const ticket = originalOffer.tickets?.find((t) => t.audience === audience);

        const fromMatrix = ticket?.computedPrices?.find((cp) => Number(cp.pax) === count);
        if (fromMatrix) {
          return total + parseFloat(fromMatrix.price.amount);
        }

        return Object.entries(ticketSelections)
          .filter(([key]) => key.startsWith(`${audience}-`))
          .reduce((subTotal, [, ticketCategoryId]) => {
            const tc = originalOffer.ticketCategories?.find(
              (t) => t.ticketCategoryId === Number(ticketCategoryId),
            );
            return subTotal + parseFloat(tc?.price?.amount || "0");
          }, total);
      }, 0);
    } else {
      const audienceCounts: Record<string, number> = {};
      Object.values(ticketSelectionsMetadata).forEach((metadata) => {
        audienceCounts[metadata.audience] = (audienceCounts[metadata.audience] || 0) + 1;
      });

      ticketsPrice = Object.entries(audienceCounts).reduce((total, [audience, count]) => {
        const ticket = originalOffer.tickets?.find((t) => t.audience === audience);
        if (!ticket) return total;

        const metadata = Object.values(ticketSelectionsMetadata).find(
          (m) => m.audience === audience,
        );
        const priceGroup = ticket?.prices?.find(
          (p) =>
            (p.category || null) === (metadata?.categoryTypeKey || categoryType || null) &&
            (p.discount || null) === (metadata?.discountType || null),
        );

        if (priceGroup?.prices?.length) {
          const priceTiers = priceGroup.prices.filter(
            (p) => p.minPax !== null || p.maxPax !== null,
          );

          if (priceTiers.length > 0) {
            const matchingTier = priceTiers.find(
              (tier) =>
                (tier.minPax === null || count >= tier.minPax) &&
                (tier.maxPax === null || count <= tier.maxPax),
            );
            if (matchingTier) {
              return total + parseFloat(matchingTier.price.amount) * count;
            }
          }

          return total + Math.min(...priceGroup.prices.map((p) => parseFloat(p.price.amount))) * count;
        }
        return total;
      }, 0);
    }
  }
  if (active === "tickets") return ticketsPrice;

  let datePrice = ticketsPrice;
  if (availability?.price) {
    datePrice = parseFloat(availability.price.amount);
  }
  if (active === "date" || active === "personalized") return datePrice;

  return 0;
}

/** The booked total: sum of selected ticket counts × their offer price. */
export function computeTotal(offer: TOfferBooking | null, tickets: Record<string, number>): number {
  let total = 0;
  Object.entries(tickets).forEach(([key, value]) => {
    const amount =
      Number(
        offer?.ticketCategories?.find((ticket) => `${ticket.ticketCategoryId}` === `${key}`)?.price
          ?.amount || "0",
      ) * value;
    total = total + amount;
  });
  return total;
}

export interface DepositLine {
  amount: number;
  label: string;
  value: number;
}

/**
 * Per-article refundable deposits, parsed from each booked ticket category's
 * `articleLabel` ("id_label / id2_label2" or a single label) and `articlePrice`
 * (split evenly across the labels). Total = Σ amount × per-article value.
 */
export function computeDeposits(
  offer: TOfferBooking | null,
  tickets: Record<string, number>,
): { deposits: Record<string, DepositLine>; currency: string | undefined; total: number } {
  let currency: string | undefined = "";
  let total = 0;
  const deposits: Record<string, DepositLine> = {};

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
          amount: (deposits[id]?.amount || 0) + (tickets[item.ticketCategoryId] || 0),
          value: Number(item?.articlePrice?.amount) / items.length,
        };
      });
    }
  });

  Object.entries(deposits).forEach(([, value]) => {
    total = total + value.amount * value.value;
  });

  return { deposits, currency, total };
}
