import { useEffect } from "react";
import { GroupedTicket } from ".";
import { useSearchStore } from "../store/search";
import { dataLayerSend } from "../utils/thirdParty/dataLayerSend";

type UseAutoSelectTicketsParams = {
  groupedTickets: GroupedTicket[];
  ticketsAudiences: Record<string, number>;
  hasAutoSelectedTicket: boolean;
  setHasAutoSelectedTicket: (value: boolean) => void;
  incrementTicketAudience: (audience: string) => void;
  onAutoSelect?: () => void;
};

export const useAutoSelectTickets = ({
  groupedTickets,
  ticketsAudiences,
  hasAutoSelectedTicket,
  setHasAutoSelectedTicket,
  incrementTicketAudience,
  onAutoSelect,
}: UseAutoSelectTicketsParams) => {
  const { participants } = useSearchStore((state) => ({
    participants: state.participants,
  }));

  useEffect(() => {
    if (hasAutoSelectedTicket || groupedTickets.length === 0) return;

    const totalTickets = Object.values(ticketsAudiences).reduce(
      (sum, val) => sum + val,
      0
    );

    if (totalTickets === 0) {
      const adultsFromSearch = participants?.adults || 0;
      const childrenFromSearch = participants?.children || 0;

      if (adultsFromSearch > 0) {
        const adultsCategory = groupedTickets.find(
          (t) => t.audience === "adults"
        );
        if (adultsCategory) {
          for (let i = 0; i < adultsFromSearch; i++) {
            incrementTicketAudience("adults");
          }
        }
      }

      if (childrenFromSearch > 0) {
        const childrenCategory = groupedTickets.find(
          (t) => t.audience === "children"
        );
        if (childrenCategory) {
          for (let i = 0; i < childrenFromSearch; i++) {
            incrementTicketAudience("children");
          }
        }
      }

      if (adultsFromSearch === 0 && childrenFromSearch === 0) {
        const adultsCategory = groupedTickets.find(
          (t) => t.audience === "adults"
        );
        if (adultsCategory) {
          incrementTicketAudience("adults");
        }
      }

      if (onAutoSelect) {
        onAutoSelect();
      } else {
        dataLayerSend({ obj: { event: "select_ticket" } });
      }
      setHasAutoSelectedTicket(true);
    }
  }, [
    groupedTickets,
    ticketsAudiences,
    incrementTicketAudience,
    hasAutoSelectedTicket,
    setHasAutoSelectedTicket,
    participants,
  ]);
};
