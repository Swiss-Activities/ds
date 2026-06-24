import { describe, expect, it } from "bun:test";
import { computeDeposits, computeDisplayPrice, computeTotal, isPriceVisible } from "./pricing";
import type { TOfferBooking } from "./types/offerBooking";

const price = (amount: string, currency = "CHF") => ({
  amount,
  currency,
  formatted: `${currency} ${amount}`,
});

/** Minimal offer carrying only the fields the price math reads (the rest of
 *  TOfferBooking is irrelevant to these pure functions). */
function makeOffer(parts: {
  startingPrice?: string;
  ticketCategories?: Array<Record<string, unknown>>;
  tickets?: Array<Record<string, unknown>>;
}): TOfferBooking {
  return {
    startingPrice: price(parts.startingPrice ?? "0"),
    ticketCategories: parts.ticketCategories ?? [],
    tickets: parts.tickets,
  } as unknown as TOfferBooking;
}

const adult = (id: number, amount: string, extra: Record<string, unknown> = {}) => ({
  ticketCategoryId: id,
  audience: "adults",
  discountType: null,
  categoryTypeKey: "",
  price: price(amount),
  ...extra,
});

const base = {
  offer: null,
  originalOffer: null,
  ticketSelections: {},
  ticketSelectionsMetadata: {},
  availability: null,
  active: "offers",
  categoryType: null,
  flowType: "date-offers" as const,
};

describe("computeDisplayPrice — offers stage", () => {
  it("takes the cheapest adult non-discounted ticket", () => {
    const offer = makeOffer({
      ticketCategories: [adult(1, "50"), adult(2, "30"), { ...adult(3, "10"), audience: "children" }],
    });
    expect(computeDisplayPrice({ ...base, offer, active: "offers" })).toBe(30);
  });

  it("falls back to startingPrice when there is no adult non-discounted ticket", () => {
    const offer = makeOffer({
      startingPrice: "99",
      ticketCategories: [{ ...adult(1, "20"), discountType: "youth" }],
    });
    expect(computeDisplayPrice({ ...base, offer, active: "offers" })).toBe(99);
  });

  it("filters to the selected categoryType when that yields candidates", () => {
    const offer = makeOffer({
      ticketCategories: [
        adult(1, "80", { categoryTypeKey: "1st_class" }),
        adult(2, "40", { categoryTypeKey: "2nd_class" }),
      ],
    });
    expect(computeDisplayPrice({ ...base, offer, active: "offers", categoryType: "2nd_class" })).toBe(
      40,
    );
  });
});

describe("computeDisplayPrice — tickets stage", () => {
  it("no metadata: min of the matching price group", () => {
    const originalOffer = makeOffer({
      tickets: [
        {
          audience: "adults",
          minPrice: price("99"),
          prices: [{ category: "", discount: null, prices: [{ price: price("25") }, { price: price("20") }] }],
        },
      ],
    });
    expect(computeDisplayPrice({ ...base, originalOffer, active: "tickets" })).toBe(20);
  });

  it("no metadata, no price group: minPrice fallback", () => {
    const originalOffer = makeOffer({
      tickets: [{ audience: "adults", minPrice: price("77"), prices: [] }],
    });
    expect(computeDisplayPrice({ ...base, originalOffer, active: "tickets" })).toBe(77);
  });

  it("offers-date: uses the computedPrices matrix for the audience count", () => {
    const originalOffer = makeOffer({
      tickets: [{ audience: "adults", computedPrices: [{ pax: 2, price: price("45") }] }],
    });
    expect(
      computeDisplayPrice({
        ...base,
        originalOffer,
        active: "tickets",
        flowType: "offers-date",
        ticketSelections: { "adults-0": 101, "adults-1": 102 },
        ticketSelectionsMetadata: { "adults-0": { audience: "adults", discountType: null, categoryTypeKey: null } },
      }),
    ).toBe(45);
  });

  it("offers-date: sums ticketCategory prices when no matrix entry matches", () => {
    const originalOffer = makeOffer({
      tickets: [{ audience: "adults", computedPrices: [] }],
      ticketCategories: [adult(101, "12"), adult(102, "13")],
    });
    expect(
      computeDisplayPrice({
        ...base,
        originalOffer,
        active: "tickets",
        flowType: "offers-date",
        ticketSelections: { "adults-0": 101, "adults-1": 102 },
        ticketSelectionsMetadata: { "adults-0": { audience: "adults", discountType: null, categoryTypeKey: null } },
      }),
    ).toBe(25);
  });

  it("date-offers: picks the minPax/maxPax tier × count", () => {
    const originalOffer = makeOffer({
      tickets: [
        {
          audience: "adults",
          prices: [
            {
              category: "",
              discount: null,
              prices: [
                { minPax: 1, maxPax: 1, price: price("30") },
                { minPax: 2, maxPax: 4, price: price("25") },
              ],
            },
          ],
        },
      ],
    });
    expect(
      computeDisplayPrice({
        ...base,
        originalOffer,
        active: "tickets",
        flowType: "date-offers",
        ticketSelectionsMetadata: {
          "adults-0": { audience: "adults", discountType: null, categoryTypeKey: null },
          "adults-1": { audience: "adults", discountType: null, categoryTypeKey: null },
        },
      }),
    ).toBe(50); // tier 2..4 = 25 × count 2
  });
});

describe("computeDisplayPrice — date stage + fallthrough", () => {
  it("date/personalized: uses the availability price", () => {
    const availability = { price: price("123") };
    expect(computeDisplayPrice({ ...base, availability, active: "date" })).toBe(123);
    expect(computeDisplayPrice({ ...base, availability, active: "personalized" })).toBe(123);
  });

  it("returns 0 on the total step (the real sum is computeTotal)", () => {
    expect(computeDisplayPrice({ ...base, active: "total" })).toBe(0);
  });
});

describe("computeTotal", () => {
  it("sums selected counts × their offer ticket price", () => {
    const offer = makeOffer({ ticketCategories: [adult(101, "50"), adult(102, "20")] });
    expect(computeTotal(offer, { 101: 2, 102: 3 })).toBe(160);
  });
  it("ignores ticket keys absent from the offer", () => {
    const offer = makeOffer({ ticketCategories: [adult(101, "50")] });
    expect(computeTotal(offer, { 999: 4 })).toBe(0);
  });
});

describe("isPriceVisible", () => {
  it("renders free (0) and any concrete price; hides only null/undefined", () => {
    expect(isPriceVisible(0)).toBe(true); // PRD Q7 — free items must render
    expect(isPriceVisible(50)).toBe(true);
    expect(isPriceVisible(null)).toBe(false);
    expect(isPriceVisible(undefined)).toBe(false);
  });
});

describe("computeDeposits", () => {
  it("single-label deposit: amount × per-article value", () => {
    const offer = makeOffer({
      ticketCategories: [adult(101, "0", { articleLabel: "Deposit", articlePrice: price("10") })],
    });
    const { deposits, currency, total } = computeDeposits(offer, { 101: 2 });
    expect(currency).toBe("CHF");
    expect(deposits.Deposit).toEqual({ label: "Deposit", amount: 2, value: 10 });
    expect(total).toBe(20);
  });

  it("multi-label deposit: splits the article price across labels", () => {
    const offer = makeOffer({
      ticketCategories: [adult(101, "0", { articleLabel: "a_AAA / b_BBB", articlePrice: price("20") })],
    });
    const { deposits, total } = computeDeposits(offer, { 101: 3 });
    expect(deposits.a).toEqual({ label: "AAA", amount: 3, value: 10 });
    expect(deposits.b).toEqual({ label: "BBB", amount: 3, value: 10 });
    expect(total).toBe(60); // (3×10) + (3×10)
  });

  it("ignores categories with no booked tickets or no articleLabel", () => {
    const offer = makeOffer({
      ticketCategories: [
        adult(101, "0", { articleLabel: "Deposit", articlePrice: price("10") }),
        adult(102, "0", { articleLabel: null }),
      ],
    });
    const { total } = computeDeposits(offer, { 102: 5 });
    expect(total).toBe(0);
  });
});
