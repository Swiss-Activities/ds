import { useShallow } from "zustand/react/shallow";
import { useBookingStore } from "../store";

export const useTickets = () => {
  const {
    availability,
    date,
    offer,
    tickets: ticketsData,
    flowType,
    ticketSelections,
  } = useBookingStore(
    useShallow((state) => ({
      availability: state.availability,
      date: state.date,
      offer: state.offer,
      tickets: state.tickets,
      flowType: state.flowType,
      ticketSelections: state.ticketSelections,
    }))
  );

  let ticketAmount = 0;
  const tickets: Record<string, number> = {};
  const ticketAudiences: Record<string, number> = {};

  const allFilteredTickets = offer?.ticketCategories
    .filter((ticket) =>
      availability
        ? availability?.ticketCategoryIds.includes(ticket.ticketCategoryId)
        : true
    )
    .filter((ticket) =>
      availability?.capacity ? ticket.occupancy <= availability.capacity : true
    )
    .sort((a, b) =>
      (a?.label?.formatted || "").localeCompare(
        b?.label?.formatted || "",
        undefined,
        {
          numeric: true,
        }
      )
    )
    .sort((a, b) => a.sequenceIndex - b.sequenceIndex);

  let filteredTickets = allFilteredTickets;

  if (flowType === "offers-date" && allFilteredTickets) {
    const seenCombinations = new Set<string>();
    filteredTickets = allFilteredTickets.filter((ticket) => {
      const key = `${ticket.audience}+${ticket.categoryTypeKey}`;
      if (seenCombinations.has(key)) {
        return false;
      }
      seenCombinations.add(key);
      return true;
    });
  }

  Object.entries(ticketsData).forEach(([key, value]) => {
    const ticket = allFilteredTickets?.find(
      (ticket) => `${ticket.ticketCategoryId}` === `${key}`
    );
    if (ticket) {
      tickets[key] = value;
      ticketAmount = ticketAmount + value;

      const categoryAudience = ticket?.audience;
      const categoryDiscountType = ticket?.discountType;
      const categoryType = ticket?.categoryTypeKey;

      if (
        ticketAudiences[
          `${categoryAudience}+${categoryDiscountType}+${categoryType}`
        ]
      ) {
        ticketAudiences[
          `${categoryAudience}+${categoryDiscountType}+${categoryType}`
        ] =
          ticketAudiences[
            `${categoryAudience}+${categoryDiscountType}+${categoryType}`
          ] + 1;
      } else {
        ticketAudiences[
          `${categoryAudience}+${categoryDiscountType}+${categoryType}`
        ] = 1;
      }
    }
  });

  Object.entries(tickets).forEach(([key, value]) => {
    if (!value) {
      delete tickets[key];
    }
  });

  const hasTickets =
    flowType === "offers-date"
      ? Object.keys(ticketSelections).length > 0
      : Object.keys(tickets).length > 0;

  const hasTicketsTransport = Object.keys(ticketsData).length > 0;

  const ticketAudiencesMap: {
    audience: string;
    discountType?: string;
    quantity: number;
  }[] = [];
  Object.entries(ticketAudiences).forEach(([key, value]: [string, number]) => {
    const [audience, discountType, categoryType] = key.split("+");

    const obj = {
      audience,
      quantity: value,
    } as {
      audience: string;
      discountType?: string;
      categoryType?: string;
      quantity: number;
    };

    if (discountType !== "null") {
      obj.discountType = discountType;
    }

    if (categoryType !== "null") {
      obj.categoryType = categoryType;
    }

    ticketAudiencesMap.push(obj);
  });

  return {
    filteredTickets,
    tickets,
    hasTickets,
    hasTicketsTransport,
    ticketAmount,
    ticketAudiences: ticketAudiencesMap,
  };
};
