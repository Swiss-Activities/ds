import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { TicketSelector } from "../../TicketSelector";
import { useAutoSelectTickets } from "../../TicketSelector/hooks";
import { Title } from "../../Title";
import { useTickets } from "./hooks";
import { useTransportStore } from "../store";
import { sendTransportEvent } from "../tracking";
import { Skeleton } from "@swiss-activities/ui";
import { useI18n } from "../../utils/i18n/useI18n";

export const Tickets = () => {
  const { t } = useI18n();
  const { data: ticketCategories, isLoading } = useTickets();
  const {
    ticketsAudiences,
    incrementTicketAudience,
    decrementTicketAudience,
    removeParticipant,
    ticketSelections,
    setTicketSelection,
    ticketClassSelections,
    setTicketClassSelection,
    hasAutoSelectedTicket,
    setHasAutoSelectedTicket,
    showDiscountedTickets,
    setShowDiscountedTickets,
  } = useTransportStore(
    useShallow((state) => ({
      ticketsAudiences: state.ticketsAudiences,
      incrementTicketAudience: state.incrementTicketAudience,
      decrementTicketAudience: state.decrementTicketAudience,
      removeParticipant: state.removeParticipant,
      ticketSelections: state.ticketSelections,
      setTicketSelection: state.setTicketSelection,
      ticketClassSelections: state.ticketClassSelections,
      setTicketClassSelection: state.setTicketClassSelection,
      hasAutoSelectedTicket: state.hasAutoSelectedTicket,
      setHasAutoSelectedTicket: state.setHasAutoSelectedTicket,
      showDiscountedTickets: state.showDiscountedTickets,
      setShowDiscountedTickets: state.setShowDiscountedTickets,
    }))
  );

  const sendTicketEvent = () => {
    setTimeout(() => sendTransportEvent("transport_select_ticket"), 0);
  };

  const handleIncrementAudience = (audience: string) => {
    incrementTicketAudience(audience);
    sendTicketEvent();
  };

  const handleDecrementAudience = (audience: string) => {
    decrementTicketAudience(audience);
    sendTicketEvent();
  };

  const handleRemoveParticipant = (audience: string, index: number) => {
    removeParticipant(audience, index);
    sendTicketEvent();
  };

  const handleSetTicketSelection = (key: string, ticketCategoryId: number) => {
    setTicketSelection(key, ticketCategoryId);
    sendTicketEvent();
  };

  useAutoSelectTickets({
    groupedTickets: ticketCategories,
    ticketsAudiences,
    hasAutoSelectedTicket,
    setHasAutoSelectedTicket,
    incrementTicketAudience,
    onAutoSelect: () => sendTransportEvent("transport_select_ticket"),
  });

  useEffect(() => {
    ticketCategories.forEach((ticketCategory) => {
      const amount = ticketsAudiences[ticketCategory.audience] || 0;

      const has2ndClass = ticketCategory.children.some(
        (t) => t.categoryType === "2nd_class"
      );

      if (!ticketClassSelections[ticketCategory.audience]) {
        const defaultClass = has2ndClass ? "2nd_class" : "1st_class";
        setTicketClassSelection(ticketCategory.audience, defaultClass);
      }

      const selectedClass =
        ticketClassSelections[ticketCategory.audience] ||
        (has2ndClass ? "2nd_class" : "1st_class");

      const classFilteredTickets = ticketCategory.children.filter(
        (t) => t.categoryType === selectedClass
      );

      const nonDiscountedTickets = classFilteredTickets.filter(
        (t) => !t.discountType && t.price && parseFloat(t.price.amount) > 0
      );

      const ticketToSelect =
        nonDiscountedTickets.length > 0
          ? nonDiscountedTickets.reduce((lowest, current) => {
              const currentPrice = parseFloat(current.price?.amount || "0");
              const lowestPrice = parseFloat(lowest.price?.amount || "0");
              return currentPrice < lowestPrice ? current : lowest;
            })
          : classFilteredTickets[0];

      if (ticketToSelect) {
        for (let i = 0; i < amount; i++) {
          const key = `${ticketCategory.audience}-${i}`;
          if (!ticketSelections[key]) {
            setTicketSelection(key, ticketToSelect.ticketCategoryId);
          }
        }
      }
    });
  }, [
    ticketsAudiences,
    ticketCategories,
    ticketSelections,
    ticketClassSelections,
    setTicketSelection,
    setTicketClassSelection,
  ]);

  return (
    <div>
      <Skeleton loading={isLoading} amount={3} />
      {ticketCategories && ticketCategories.length > 0 && (
        <>
          <Title>{t("Transport.selectTravelers")}</Title>
          <TicketSelector
            ticketCategories={ticketCategories}
            ticketsAudiences={ticketsAudiences}
            ticketSelections={ticketSelections}
            ticketClassSelections={ticketClassSelections}
            showDiscountedTickets={showDiscountedTickets}
            onToggleDiscountedTickets={setShowDiscountedTickets}
            onIncrementAudience={handleIncrementAudience}
            onDecrementAudience={handleDecrementAudience}
            onRemoveParticipant={handleRemoveParticipant}
            onSetTicketSelection={handleSetTicketSelection}
            forceFrom
            hideClassPicker
          />
        </>
      )}
    </div>
  );
};
