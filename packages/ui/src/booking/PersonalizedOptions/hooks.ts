import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
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

dayjs.extend(customParseFormat);

export const validateValue = () => {
  return {
    date: (
      value: any,
      dateFromBooking: string,
      minAge?: number,
      maxAge?: number | null
    ) => {
      if (!value) return false;

      const isValid = dayjs(
        value,
        ["DD.MM.YYYY", "DD/MM/YYYY"],
        true
      ).isValid();

      if (!isValid) return false;

      const dateFromDob = dayjs(value, ["DD.MM.YYYY", "DD/MM/YYYY"]);
      const dateFromBookingObj = dayjs(dateFromBooking, "YYYY-MM-DD");
      const ageAtBooking = dateFromBookingObj.diff(dateFromDob, "years");

      if (
        !dateFromDob.isAfter("1900-01-01") ||
        !dateFromDob.isBefore(dayjs())
      ) {
        return false;
      }

      if (minAge !== undefined || maxAge !== undefined) {
        if (minAge !== undefined && ageAtBooking < minAge) return false;
        if (
          maxAge !== undefined &&
          maxAge !== null &&
          ageAtBooking > maxAge &&
          maxAge !== 0
        ) {
          return false;
        }
      }

      return true;
    },
  };
};

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
    let isValid = true;

    const options = (optionsData || personalizedOptions)?.filter(
      (field: { isStrict: boolean }) =>
        user?.isReseller ? true : field.isStrict
    );
    const tickets = ticketsData || ticketsState;

    if (!options?.length) return false;

    const reservationFieldsLength = options.filter(
      (e: { scope: string }) => e.scope === "reservation"
    ).length;
    const guestFieldsLength = options.filter(
      (e: { scope: string }) => e.scope === "guest"
    ).length;

    const slicedPersonalizedOptionsValues: {
      [key: string]: any;
    } = [];

    if (personalizedOptionsValues?.reservation) {
      slicedPersonalizedOptionsValues.push(
        // @ts-ignore
        ...Object.values({
          item: {
            ...personalizedOptionsValues?.reservation,
            isReservation: true,
          },
        })
      );
    }

    tickets &&
      Object.entries(tickets).forEach(([key, value]) => {
        if (value === 0 || !personalizedOptionsValues?.[key]) return;

        const sliced = Object.values(personalizedOptionsValues[key]).slice(
          0,
          value as any
        );
        slicedPersonalizedOptionsValues.push(...sliced);
      });

    if (
      reservationFieldsLength + (guestFieldsLength !== 0 ? 1 : 0) >
      slicedPersonalizedOptionsValues.filter((e: any) => !e.isReservation)
        .length +
        (slicedPersonalizedOptionsValues.filter(
          (e: any) => e.isReservation
        )?.[0]
          ? Object.keys(
              slicedPersonalizedOptionsValues.filter(
                (e: any) => e.isReservation
              )?.[0]
            ).filter((e) => e !== "isReservation").length
          : 0)
    ) {
      isValid = false;
    }

    Object.values(slicedPersonalizedOptionsValues).forEach((item) => {
      if (
        Object.values(item).length !== guestFieldsLength &&
        !item.isReservation
      ) {
        isValid = false;
      }

      Object.entries(item).forEach(([k, v]) => {
        if (k === "dob") {
          if (!validateValue().date(v, date)) {
            isValid = false;
          }
        }

        if (v === "") {
          isValid = false;
        }
      });
    });

    if (
      guestFieldsLength !== 0 &&
      Object.values(
        slicedPersonalizedOptionsValues.filter((e: any) => !e.isReservation)
      ).length < ticketAmount
    ) {
      isValid = false;
    }

    personalizedOptions
      .filter((e) => e.scope === "reservation")
      .forEach((option) => {
        const reservationField = slicedPersonalizedOptionsValues.find(
          (e: any) => e[option.key]
        );
        if (!reservationField) {
          isValid = false;
        }
      });

    slicedPersonalizedOptionsValues
      .filter((e: any) => e.isReservation)
      .forEach((item: any) => {
        const { isReservation, ...rest } = item;
        Object.entries(rest).forEach(([k, v]) => {
          const reservationField = personalizedOptions.find((e) => e.key === k);
          if (reservationField && reservationField?.type === "option") {
            if (!reservationField?.options?.find((e) => e.key === v)) {
              isValid = false;
            }
          }
        });
      });

    let guestCount = -1;
    Object.entries(tickets)
      .filter(([_, v]) => v !== 0)
      .forEach(([id, v]) => {
        return Array.from({ length: v as number }).map((_, index) => {
          const ticketCategory = offer?.ticketCategories.find(
            (e) => `${e.ticketCategoryId}` === `${Number(id)}`
          );
          guestCount = guestCount + 1;

          const dob = slicedPersonalizedOptionsValues.filter(
            (e: any) => !e.isReservation
          )?.[guestCount]?.dob;

          if (dob) {
            const minAge = ticketCategory?.minAge;
            const maxAge = ticketCategory?.maxAge || null;
            const isValidDate = validateValue().date(dob, date, minAge, maxAge);
            if (!isValidDate) {
              isValid = false;
            }
          }
        });
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
