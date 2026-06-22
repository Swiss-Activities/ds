import { useShallow } from "zustand/react/shallow";
import { useBookingStore } from "../store";
import { toISO } from "../utils/dates/toISO";

export const useTime = () => {
  const { availability } = useBookingStore(
    useShallow((state) => ({
      availability: state.availability,
    }))
  );

  const time =
    availability?.validity !== "all-day" && availability?.startsAt
      ? toISO(availability.startsAt, {
          time: true,
        })
      : null;

  return { time };
};
