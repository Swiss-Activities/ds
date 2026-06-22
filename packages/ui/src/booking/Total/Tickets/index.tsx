import { useShallow } from "zustand/react/shallow";
import { useTickets } from "../../Tickets/hooks";
import { useBookingStore } from "../../store";
import { Text } from "@swiss-activities/ui";

export const Tickets = () => {
  const { tickets, hasTickets } = useTickets();
  const { offer } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
    }))
  );

  return hasTickets ? (
    <div className="space-y-1.5">
      {Object.entries(tickets).map(([ticketCategoryId, amount]) => {
        const ticketCat = offer?.ticketCategories.find(
          (e) => String(e.ticketCategoryId) === String(ticketCategoryId)
        );

        return (
          tickets[ticketCategoryId] >= 1 && (
            <div
              key={`summary-${ticketCategoryId}`}
              className="grid grid-cols-[auto,1fr,auto] gap-2"
            >
              <Text className="text-xs text-black lg:text-sm">
                {ticketCat?.maxOccupancy === null && ticketCat?.occupancy >= 2
                  ? tickets?.[ticketCategoryId] * ticketCat?.occupancy
                  : tickets?.[ticketCategoryId]}{" "}
                × {ticketCat?.label?.formatted}
              </Text>
              <Text className="text-xs font-medium text-black lg:text-sm">
                {ticketCat?.price?.currency +
                  " " +
                  (
                    tickets?.[ticketCategoryId] *
                    Number(
                      ticketCat?.distributorNetPrice?.amount ||
                        ticketCat?.price?.amount
                    )
                  )
                    .toFixed(2)
                    .replace(".00", "")}
              </Text>
            </div>
          )
        );
      })}
    </div>
  ) : null;
};
