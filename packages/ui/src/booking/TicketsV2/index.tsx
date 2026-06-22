import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { useOriginalOffer } from "../OffersV2/hooks";
import { TicketSelector } from "../TicketSelector";
import {
  GroupedTicket,
  TicketCategoryItem,
} from "../TicketSelector";
import { useAutoSelectTickets } from "../TicketSelector/hooks";
import { Title } from "../Title";
import { useBookingStore } from "../store";
import { useI18n } from "../utils/i18n/useI18n";
import { dataLayerSend } from "../utils/thirdParty/dataLayerSend";

export const TicketsV2 = () => {
  const { t } = useI18n();
  const {
    offer: selectedOffer,
    ticketsAudiences,
    incrementTicketAudience,
    decrementTicketAudience,
    removeParticipant,
    ticketSelections,
    setTicketSelection,
    ticketClassSelections,
    setTicketClassSelection,
    categoryType,
    hasAutoSelectedTicket,
    setHasAutoSelectedTicket,
    showDiscountedTickets,
    setShowDiscountedTickets,
  } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
      ticketsAudiences: state.ticketsAudiences,
      incrementTicketAudience: state.incrementTicketAudience,
      decrementTicketAudience: state.decrementTicketAudience,
      removeParticipant: state.removeParticipant,
      ticketSelections: state.ticketSelections,
      setTicketSelection: state.setTicketSelection,
      ticketClassSelections: state.ticketClassSelections || {},
      setTicketClassSelection: state.setTicketClassSelection,
      categoryType: state.categoryType,
      hasAutoSelectedTicket: state.hasAutoSelectedTicket,
      setHasAutoSelectedTicket: state.setHasAutoSelectedTicket,
      showDiscountedTickets: state.showDiscountedTickets,
      setShowDiscountedTickets: state.setShowDiscountedTickets,
    }))
  );

  const { originalOffer } = useOriginalOffer();

  const offer = originalOffer || selectedOffer;

  const handleIncrementAudience = (audience: string) => {
    const currentAmount = ticketsAudiences[audience] || 0;
    const ticket = groupedTickets.find((t) => t.audience === audience);
    const minPax = ticket?.minPax || 1;

    if (currentAmount === 0 && minPax > 1) {
      for (let i = 0; i < minPax; i++) {
        incrementTicketAudience(audience);
      }
    } else {
      incrementTicketAudience(audience);
    }
    dataLayerSend({ obj: { event: "select_ticket" } });
  };

  const handleDecrementAudience = (audience: string) => {
    const currentAmount = ticketsAudiences[audience] || 0;
    const ticket = groupedTickets.find((t) => t.audience === audience);
    const minPax = ticket?.minPax || 1;

    if (currentAmount <= minPax) {
      for (let i = 0; i < currentAmount; i++) {
        decrementTicketAudience(audience);
      }
    } else {
      decrementTicketAudience(audience);
    }
    dataLayerSend({ obj: { event: "select_ticket" } });
  };

  const handleRemoveParticipant = (audience: string, index: number) => {
    removeParticipant(audience, index);
    dataLayerSend({ obj: { event: "select_ticket" } });
  };

  const handleSetTicketSelection = (key: string, ticketCategoryId: number) => {
    const selectedTicket = offer?.ticketCategories.find(
      (t) => t.ticketCategoryId === ticketCategoryId
    );

    setTicketSelection(key, ticketCategoryId, {
      audience: selectedTicket?.audience || "",
      discountType: selectedTicket?.discountType || null,
      categoryTypeKey: selectedTicket?.categoryTypeKey || null,
    });
    dataLayerSend({ obj: { event: "select_ticket" } });
  };

  const groupedTickets = useMemo<GroupedTicket[]>(() => {
    if (!offer?.tickets || !offer?.ticketCategories) return [];

    return offer.tickets.map((ticket) => {
      let relevantTicketCategoryIds: number[];

      if (categoryType) {
        const category = ticket.categories.find(
          (c) => c.value === categoryType
        );
        relevantTicketCategoryIds = category?.ticketCategoryIds || [];
      } else if (ticket.categories.length > 0) {
        relevantTicketCategoryIds = ticket.categories.flatMap(
          (c) => c.ticketCategoryIds
        );
      } else {
        relevantTicketCategoryIds = ticket.prices.flatMap((p) =>
          p.prices.map((pp) => pp.ticketCategoryId)
        );
      }

      const getPaxLabel = () => {
        const { minPax, maxPax } = ticket;
        if (minPax && maxPax) return ` (${minPax}-${maxPax})`;
        if (minPax) return ` (min. ${minPax})`;
        if (maxPax) return ` (max. ${maxPax})`;
        return "";
      };

      const children = offer.ticketCategories
        .filter((tc) => relevantTicketCategoryIds.includes(tc.ticketCategoryId))
        .filter((tc) => tc.isVisible !== false)
        .map((tc) => ({
          ...tc,
          label: {
            ...tc.label,
            audience: `${ticket.label.audience}${getPaxLabel()}`,
          },
        })) as unknown as TicketCategoryItem[];

      const priceTiers = ticket.prices
        .flatMap((p) => p.prices)
        .filter((p) => p.minPax !== null || p.maxPax !== null)
        .map((p) => ({
          minPax: p.minPax,
          maxPax: p.maxPax,
          price: p.price,
        }));

      const amount = ticketsAudiences[ticket.audience] || 0;

      const getPriceDisplay = () => {
        if (ticket.computedPrices?.length && amount > 0) {
          const fromMatrix = ticket.computedPrices.find(
            (cp) => Number(cp.pax) === amount
          );
          if (fromMatrix) {
            return {
              price: parseFloat(fromMatrix.price.amount),
              isTotal: true,
              useFrom: false,
              showPrefix: true,
            };
          }
        }

        if (priceTiers.length > 0) {
          if (amount > 0) {
            const matchingTier = priceTiers.find(
              (tier) =>
                (tier.minPax === null || amount >= tier.minPax) &&
                (tier.maxPax === null || amount <= tier.maxPax)
            );
            if (matchingTier) {
              return {
                price: parseFloat(matchingTier.price.amount) * amount,
                isTotal: true,
                useFrom: true,
                showPrefix: true,
              };
            }
          }
          if (ticket.minPrice) {
            return {
              price: parseFloat(ticket.minPrice.amount),
              isTotal: false,
              useFrom: true,
              showPrefix: false,
            };
          }
        }
        return undefined;
      };

      return {
        audience: ticket.audience,
        minAge: ticket.minAge,
        maxAge: ticket.maxAge ?? undefined,
        minPax: ticket.minPax,
        maxPax: ticket.maxPax,
        priceDisplay: getPriceDisplay(),
        children,
      };
    });
  }, [offer?.tickets, offer?.ticketCategories, categoryType, ticketsAudiences]);

  useAutoSelectTickets({
    groupedTickets,
    ticketsAudiences,
    hasAutoSelectedTicket,
    setHasAutoSelectedTicket,
    incrementTicketAudience,
  });

  useEffect(() => {
    groupedTickets.forEach((ticketCategory) => {
      const amount = ticketsAudiences[ticketCategory.audience] || 0;
      const children = ticketCategory.children as any[];

      if (!categoryType) {
        const has1stClass = children.some(
          (t) => t.categoryTypeKey === "1st_class"
        );
        const has2ndClass = children.some(
          (t) => t.categoryTypeKey === "2nd_class"
        );

        const hasAnyClass = has1stClass || has2ndClass;

        let selectedClass = ticketClassSelections[ticketCategory.audience];

        if (hasAnyClass && !selectedClass) {
          selectedClass = has2ndClass ? "2nd_class" : "1st_class";
          setTicketClassSelection?.(ticketCategory.audience, selectedClass);
        }
      }

      const nonDiscountedTickets = children.filter(
        (t) => !t.discountType && parseFloat(t.price?.amount) > 0
      );

      const ticketToSelect =
        nonDiscountedTickets.length > 0
          ? nonDiscountedTickets.reduce((lowest, current) => {
              return parseFloat(current.price?.amount) <
                parseFloat(lowest.price?.amount)
                ? current
                : lowest;
            })
          : children[0];

      if (ticketToSelect) {
        for (let i = 0; i < amount; i++) {
          const key = `${ticketCategory.audience}-${i}`;
          if (!ticketSelections[key]) {
            setTicketSelection(key, ticketToSelect.ticketCategoryId, {
              audience: ticketToSelect.audience,
              discountType: ticketToSelect.discountType ?? null,
              categoryTypeKey: ticketToSelect.categoryTypeKey ?? null,
            });
          }
        }
      }
    });
  }, [
    ticketsAudiences,
    groupedTickets,
    ticketSelections,
    ticketClassSelections,
    setTicketSelection,
    setTicketClassSelection,
    categoryType,
  ]);

  return (
    <div>
      <Title>{t("activity.widget.titleParticipants")}</Title>
      <TicketSelector
        ticketCategories={groupedTickets}
        ticketsAudiences={ticketsAudiences}
        ticketSelections={ticketSelections}
        ticketClassSelections={categoryType ? {} : ticketClassSelections}
        showDiscountedTickets={showDiscountedTickets}
        onToggleDiscountedTickets={setShowDiscountedTickets}
        onIncrementAudience={handleIncrementAudience}
        onDecrementAudience={handleDecrementAudience}
        onRemoveParticipant={handleRemoveParticipant}
        onSetTicketSelection={handleSetTicketSelection}
        hideClassPicker
      />
    </div>
  );
};
