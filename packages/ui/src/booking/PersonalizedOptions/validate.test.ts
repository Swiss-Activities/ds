import { describe, expect, it } from "bun:test";
import type { TOfferBooking } from "../types/offerBooking";
import { validatePersonalizedOptions, validateValue } from "./validate";

const offerWith = (
  cats: Array<{ ticketCategoryId: number; minAge?: number; maxAge?: number }>,
): TOfferBooking =>
  ({
    ticketCategories: cats.map((c) => ({ minAge: 0, maxAge: 0, ...c })),
  }) as unknown as TOfferBooking;

const guestField = { key: "dob", scope: "guest", type: "date", isStrict: true };

describe("validateValue().date — DOB + age gating", () => {
  const date = validateValue().date;

  it("accepts a valid DD.MM.YYYY DOB", () => {
    expect(date("01.01.1990", "2024-01-01")).toBe(true);
  });

  it("rejects empty / wrong-format / future / pre-1900 dates", () => {
    expect(date("", "2024-01-01")).toBe(false);
    expect(date("1990-01-01", "2024-01-01")).toBe(false); // not DD.MM.YYYY
    expect(date("01.01.2100", "2024-01-01")).toBe(false); // future (not before now)
    expect(date("01.01.1800", "2024-01-01")).toBe(false); // before 1900
  });

  it("enforces minAge at the booking date", () => {
    expect(date("01.01.2020", "2024-01-01", 18)).toBe(false); // age 4 < 18
    expect(date("01.01.1990", "2024-01-01", 18)).toBe(true); // age 34 >= 18
  });

  it("enforces maxAge at the booking date (0 means no cap)", () => {
    expect(date("01.01.1950", "2024-01-01", undefined, 50)).toBe(false); // age 74 > 50
    expect(date("01.01.1990", "2024-01-01", undefined, 50)).toBe(true); // age 34 <= 50
    expect(date("01.01.1950", "2024-01-01", undefined, 0)).toBe(true); // 0 = no cap
  });
});

describe("validatePersonalizedOptions — checkout gate", () => {
  const baseInput = {
    options: [guestField],
    reservationFields: [],
    tickets: { 101: 1 },
    values: {},
    ticketAmount: 1,
    offer: offerWith([{ ticketCategoryId: 101 }]),
    date: "2024-01-01",
  };

  it("returns false when there are no options", () => {
    expect(validatePersonalizedOptions({ ...baseInput, options: [] })).toBe(false);
    expect(validatePersonalizedOptions({ ...baseInput, options: undefined })).toBe(false);
  });

  it("validates a complete guest DOB selection", () => {
    expect(
      validatePersonalizedOptions({ ...baseInput, values: { 101: { 0: { dob: "01.01.1990" } } } }),
    ).toBe(true);
  });

  it("fails when a guest value is missing (count < ticketAmount)", () => {
    expect(validatePersonalizedOptions({ ...baseInput, values: {} })).toBe(false);
  });

  it("fails on an empty field value", () => {
    expect(
      validatePersonalizedOptions({ ...baseInput, values: { 101: { 0: { dob: "" } } } }),
    ).toBe(false);
  });

  it("fails an invalid DOB", () => {
    expect(
      validatePersonalizedOptions({ ...baseInput, values: { 101: { 0: { dob: "not-a-date" } } } }),
    ).toBe(false);
  });

  it("requires a reservation-scope field to be present", () => {
    const reservationField = { key: "voucher", scope: "reservation", type: "text", isStrict: true };
    const input = {
      ...baseInput,
      options: [reservationField],
      reservationFields: [reservationField],
      tickets: {},
      ticketAmount: 0,
    };
    expect(validatePersonalizedOptions({ ...input, values: {} })).toBe(false);
    expect(
      validatePersonalizedOptions({ ...input, values: { reservation: { voucher: "ABC" } } }),
    ).toBe(true);
  });
});
