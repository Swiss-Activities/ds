import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import type { TOfferBooking } from "../types/offerBooking";

dayjs.extend(customParseFormat);

/**
 * Checkout-gating validation for personalized options, extracted from
 * usePersonalizedOptions so the DOB age-gating + required-field-count rules are
 * unit-testable (a regression silently (un)blocks booking — PRD T4). Pure: all
 * inputs are passed in. `values` stays loosely typed for now (the store field is
 * `any`; tightening it is TS5).
 */

/** DOB validity + age-at-booking gating against a ticket's minAge/maxAge. */
export const validateValue = () => {
  return {
    date: (value: any, dateFromBooking: string, minAge?: number, maxAge?: number | null) => {
      if (!value) return false;

      const isValid = dayjs(value, ["DD.MM.YYYY", "DD/MM/YYYY"], true).isValid();

      if (!isValid) return false;

      const dateFromDob = dayjs(value, ["DD.MM.YYYY", "DD/MM/YYYY"]);
      const dateFromBookingObj = dayjs(dateFromBooking, "YYYY-MM-DD");
      const ageAtBooking = dateFromBookingObj.diff(dateFromDob, "years");

      if (!dateFromDob.isAfter("1900-01-01") || !dateFromDob.isBefore(dayjs())) {
        return false;
      }

      if (minAge !== undefined || maxAge !== undefined) {
        if (minAge !== undefined && ageAtBooking < minAge) return false;
        if (maxAge !== undefined && maxAge !== null && ageAtBooking > maxAge && maxAge !== 0) {
          return false;
        }
      }

      return true;
    },
  };
};

type PersonalizationField = {
  key: string;
  scope: string;
  type: string;
  isStrict: boolean;
  options?: { key: string; label: string }[];
};

export interface ValidatePersonalizedOptionsInput {
  /** The fields being validated (availability personalizationFields, or the
   *  store's strict-filtered personalizedOptions). */
  options: PersonalizationField[] | undefined;
  /** The store's reservation-scope reference fields. */
  reservationFields: PersonalizationField[];
  tickets: Record<string, number>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any -- store field is `any` (TS5)
  values: any;
  ticketAmount: number;
  offer: TOfferBooking | null;
  date: string;
}

export function validatePersonalizedOptions({
  options,
  reservationFields,
  tickets,
  values,
  ticketAmount,
  offer,
  date,
}: ValidatePersonalizedOptionsInput): boolean {
  let isValid = true;

  if (!options?.length) return false;

  const reservationFieldsLength = options.filter((e) => e.scope === "reservation").length;
  const guestFieldsLength = options.filter((e) => e.scope === "guest").length;

  const slicedPersonalizedOptionsValues: Record<string, unknown>[] = [];

  if (values?.reservation) {
    slicedPersonalizedOptionsValues.push(
      ...Object.values({
        item: {
          ...values.reservation,
          isReservation: true,
        },
      }),
    );
  }

  if (tickets) {
    Object.entries(tickets).forEach(([key, value]) => {
      if (value === 0 || !values?.[key]) return;
      const sliced = Object.values(values[key]).slice(0, value) as Record<string, unknown>[];
      slicedPersonalizedOptionsValues.push(...sliced);
    });
  }

  const reservationItems = slicedPersonalizedOptionsValues.filter((e) => e.isReservation);
  const guestItems = slicedPersonalizedOptionsValues.filter((e) => !e.isReservation);

  if (
    reservationFieldsLength + (guestFieldsLength !== 0 ? 1 : 0) >
    guestItems.length +
      (reservationItems[0]
        ? Object.keys(reservationItems[0]).filter((e) => e !== "isReservation").length
        : 0)
  ) {
    isValid = false;
  }

  slicedPersonalizedOptionsValues.forEach((item) => {
    if (Object.values(item).length !== guestFieldsLength && !item.isReservation) {
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

  if (guestFieldsLength !== 0 && guestItems.length < ticketAmount) {
    isValid = false;
  }

  reservationFields
    .filter((e) => e.scope === "reservation")
    .forEach((option) => {
      const reservationField = slicedPersonalizedOptionsValues.find((e) => e[option.key]);
      if (!reservationField) {
        isValid = false;
      }
    });

  reservationItems.forEach((item) => {
    const { isReservation, ...rest } = item;
    void isReservation;
    Object.entries(rest).forEach(([k, v]) => {
      const reservationField = reservationFields.find((e) => e.key === k);
      if (reservationField && reservationField?.type === "option") {
        if (!reservationField?.options?.find((e) => e.key === v)) {
          isValid = false;
        }
      }
    });
  });

  let guestCount = -1;
  Object.entries(tickets)
    .filter(([, v]) => v !== 0)
    .forEach(([id, v]) => {
      return Array.from({ length: v }).map(() => {
        const ticketCategory = offer?.ticketCategories.find(
          (e) => `${e.ticketCategoryId}` === `${Number(id)}`,
        );
        guestCount = guestCount + 1;

        const dob = guestItems[guestCount]?.dob;

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

  return isValid;
}
