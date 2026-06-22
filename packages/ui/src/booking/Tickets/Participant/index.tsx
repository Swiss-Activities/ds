import { ReactNode } from "react";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../../Card";
import { Participant as P } from "../../Participants";
import { useBookingStore } from "../../store";
import { TOfferBooking } from "../../types/offerBooking";
import { dataLayerSend } from "../../utils/thirdParty/dataLayerSend";

export const Participant = ({
  children,
  padding,
  ticket,
}: {
  children?: ReactNode;
  padding?: boolean;
  ticket: TOfferBooking["ticketCategories"][number];
}) => {
  const { availability, tickets, setTickets } = useBookingStore(
    useShallow((state) => ({
      availability: state.availability,
      tickets: state.tickets,
      setTickets: state.setTickets,
    }))
  );

  const priceFormatted =
    ticket?.distributorNetPrice?.formatted || ticket.price.formatted;

  const title = ticket?.label?.audience || "";
  let subtitle =
    ticket?.label?.formatted ||
    ""
      .replace(`${ticket?.label?.audience || ""} `, "")
      .replace("(", "")
      .replace(")", "");

  const currentTicket = tickets?.[ticket.ticketCategoryId];
  const currentTicketAmount = currentTicket || 0;

  const isMaxOccupancy =
    (currentTicketAmount >= (availability?.capacity as number) &&
      availability?.capacity !== null) ||
    (ticket?.maxOccupancy
      ? currentTicketAmount >= ticket.maxOccupancy
      : currentTicketAmount === 99);

  const amount = (plus = true) =>
    ticket?.occupancy <= 1 ||
    (plus
      ? currentTicketAmount >= ticket?.occupancy
      : currentTicketAmount > ticket?.occupancy)
      ? 1
      : ticket.occupancy;

  const handleMinusChange = () => {
    setTickets({
      ...tickets,
      [ticket.ticketCategoryId]: currentTicketAmount - amount(false),
    });
    dataLayerSend({
      obj: {
        event: "select_ticket",
      },
    });
  };

  const handlePlusChange = () => {
    setTickets({
      ...tickets,
      [ticket.ticketCategoryId]: currentTicketAmount + amount(),
    });
    dataLayerSend({
      obj: {
        event: "select_ticket",
      },
    });
  };

  return (
    <Card id={`ticket-${ticket.ticketCategoryId}`}>
      <P
        {...{ title, padding }}
        price={`${priceFormatted}${
          ticket?.distributorNetPrice?.amount
            ? ` (${ticket.price.formatted})`
            : ""
        }`}
        subtitle={title === subtitle ? "" : subtitle}
        onClickMinus={handleMinusChange}
        onClickPlus={handlePlusChange}
        amount={`${currentTicketAmount}`}
        plusDisabled={isMaxOccupancy}
        minusDisabled={!currentTicket}
      />
      {children}
    </Card>
  );
};
