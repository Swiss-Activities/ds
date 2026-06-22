import { TReservation } from "../../types/reservation";

export const useDeposits = ({
  reservations,
}: {
  reservations: TReservation[];
}) => {
  let currency = "";
  let total = 0;

  const obj: Record<string, { label: string; amount: number; value: number }> =
    {};

  const reservationGetter = (res: TReservation) => {
    res.ticketReservations.forEach((item) => {
      if (item?.ticketCategory?.articleLabel) {
        const items = item?.ticketCategory?.articleLabel.split(" / ");

        currency = item?.ticketCategory?.articlePrice?.currency as string;

        if (items.length === 1) {
          if (obj[items[0]]) {
            obj[items[0]].amount += item.guests.length;
          } else {
            obj[items[0]] = {
              label: items[0],
              amount: item.guests.length,
              value:
                Number(item?.ticketCategory?.articlePrice?.amount) /
                items.length,
            };
          }
          return;
        }

        items.forEach((label) => {
          const [id, value] = label.split("_");

          obj[id] = {
            label: value,
            amount: (obj[id]?.amount || 0) + item.guests.length,
            value:
              Number(item?.ticketCategory?.articlePrice?.amount) / items.length,
          };

          total = total + obj[id].amount * obj[id].value;
        });
      }
    });
  };

  if (reservations) {
    Object.values(reservations).forEach((res) => reservationGetter(res));
  }

  return { obj, currency, total };
};
