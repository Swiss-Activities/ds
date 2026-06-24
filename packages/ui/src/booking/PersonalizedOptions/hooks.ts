import dayjs from "dayjs";
import { useShallow } from "zustand/react/shallow";
import { useTickets } from "../Tickets/hooks";
import { useBookingStore } from "../store";
import { useDrawerStore } from "../store/drawer";
import { useSearchStore } from "../store/search";
import type { TOfferBooking } from "../types/offerBooking";
import type { TPersonalizedOption } from "../types/personalizedOptions";
import type { TReservation } from "../types/reservation";
import { DateService } from "../utils/dates/DateService";
import { useI18n } from "../utils/i18n/useI18n";
import { useUser } from "../utils/user/useUser";
import { useTransportStoreLocal } from "../Transport/store";
import { validatePersonalizedOptions, validateValue } from "./validate";

// Re-exported so existing importers (PersonalizedOptions/Inputs) keep working.
export { validateValue };

export const useGetDateToCheckPersonalizedOptions = () => {
  const date = useSearchStore((state) => state.date);
  const dateBooking = useBookingStore((state) => state.date);
  const isOpen = useDrawerStore((state) => state.isOpen);
  const isBookingOpen = isOpen.includes("booking-modal");

  return (
    isBookingOpen
      ? dateBooking || date
      : useTransportStoreLocal.getState().calendarDate
        ? DateService.formatDate(
            dayjs(useTransportStoreLocal.getState().calendarDate).toDate()
          )
        : date
  ) as string;
};

export const usePersonalizedOptions = () => {
  const { t } = useI18n();
  const { user } = useUser();
  const {
    offer,
    personalizedOptions: personalizedOptionsState,
    personalizedOptionsValidated,
    personalizedOptionsValues,
    setPersonalizedOptionsValidated,
    setPersonalizedOptionsValues: setPersonalizedOptionsVals,
  } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
      personalizedOptions: state.personalizedOptions,
      personalizedOptionsValidated: state.personalizedOptionsValidated,
      personalizedOptionsValues: state.personalizedOptionsValues,
      setPersonalizedOptionsValidated: state.setPersonalizedOptionsValidated,
      setPersonalizedOptionsValues: state.setPersonalizedOptionsValues,
    }))
  );
  const date = useGetDateToCheckPersonalizedOptions();
  const { tickets: ticketsState, ticketAmount } = useTickets();

  const personalizedOptions = personalizedOptionsState.filter(
    (field: { isStrict: boolean }) => (user?.isReseller ? true : field.isStrict)
  ) as TPersonalizedOption[];

  const setPersonalizedOptionsValues = (
    personalizedOptionsValues: {
      [x: string]: ArrayLike<unknown> | { [s: string]: unknown };
      reservation: TReservation;
    },
    optionsData?:
      | TOfferBooking["availabilities"][0]["personalizationFields"]
      | undefined,
    ticketsData?: { [x: string]: number }
  ) => {
    const options = (optionsData || personalizedOptions)?.filter(
      (field: { isStrict: boolean }) => (user?.isReseller ? true : field.isStrict)
    );
    const tickets = ticketsData || ticketsState;

    if (!options?.length) return false;

    const isValid = validatePersonalizedOptions({
      options,
      reservationFields: personalizedOptions,
      tickets,
      values: personalizedOptionsValues,
      ticketAmount,
      offer,
      date,
    });

    setPersonalizedOptionsValidated(isValid);
    setPersonalizedOptionsVals(personalizedOptionsValues);
  };

  const personalizedOptionsString = () => {
    let hasInfo = false;
    let string = t("general.informationPlural");

    if (Object.values(personalizedOptionsValues?.reservation || []).length) {
      Object.entries(personalizedOptionsValues.reservation).forEach(
        ([key, value]) => {
          const option = personalizedOptions?.find(
            (option) => option.key === key
          );

          if (option?.options) {
            let selectedOption = option.options.find((e) => e.key === value);
            if (option?.label && selectedOption?.label) {
              if (!hasInfo) {
                string = `${option.label}: ${selectedOption.label}`;
                hasInfo = true;
              } else {
                string += `, ${option.label}: ${selectedOption.label}`;
              }
            }
          }
        }
      );
    }

    return string;
  };

  const hasPersonalizedOptions = personalizedOptions?.length;

  return {
    hasPersonalizedOptions,
    personalizedOptions,
    personalizedOptionsString,
    personalizedOptionsValidated,
    personalizedOptionsValues,
    setPersonalizedOptionsValues,
  };
};
