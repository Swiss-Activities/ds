import { describe, expect, it } from "bun:test";
import {
  allCancelled,
  type CustomDataEntry,
  groupCustomData,
  hasTransportBooking,
  isActivityPast,
  isTransportActivity,
  type ResolvedReservation,
} from "./customData";

const resolved = (
  actId: string,
  reservationId: string,
  extra: Partial<ResolvedReservation> = {},
): ResolvedReservation => ({
  act: { id: actId },
  res: { reservationId },
  isCancellable: true,
  cancellableUntil: "2030-01-01",
  bookingItemId: "bi",
  cancelledAt: null,
  offerId: 1,
  validity: null,
  ...extra,
});

const entry = (over: { tripId?: unknown; endsAt?: string; typeId?: string }): CustomDataEntry => ({
  reservation: { tripId: over.tripId, endsAt: over.endsAt },
  activity: { id: "x", type: over.typeId ? { id: over.typeId } : undefined },
});

describe("groupCustomData", () => {
  it("creates one entry per activity, appending repeat reservations", () => {
    const out = groupCustomData([resolved("A", "r1"), resolved("A", "r2"), resolved("B", "r3")]);
    expect(out).toHaveLength(2);
    const a = out.find((e) => e.activity.id === "A");
    expect(a?.reservation.reservationId).toBe("r1"); // first carries the base fields
    expect(a?.reservation.isCancellable).toBe(true);
    expect(a?.reservation.reservations).toEqual([{ reservationId: "r2" }]); // bare repeat
    const b = out.find((e) => e.activity.id === "B");
    expect(b?.reservation.reservations).toBeUndefined();
  });

  it("grafts the cancellable/booking-item fields onto the first reservation only", () => {
    const out = groupCustomData([resolved("A", "r1", { cancelledAt: "2024-01-01", offerId: 9 })]);
    expect(out[0].reservation.cancelledAt).toBe("2024-01-01");
    expect(out[0].reservation.offerId).toBe(9);
  });
});

describe("aggregation predicates", () => {
  it("hasTransportBooking: a trip in the main or a related booking", () => {
    expect(hasTransportBooking([entry({})], [])).toBe(false);
    expect(hasTransportBooking([entry({ tripId: "t1" })], [])).toBe(true);
    expect(hasTransportBooking([entry({})], [{ customData: [entry({ tripId: "t2" })] }])).toBe(true);
  });

  it("isActivityPast: every endsAt before now (vacuously true when empty)", () => {
    const now = new Date("2024-06-01");
    expect(isActivityPast([], now)).toBe(true);
    expect(isActivityPast([entry({ endsAt: "2024-01-01" })], now)).toBe(true);
    expect(isActivityPast([entry({ endsAt: "2025-01-01" })], now)).toBe(false);
    expect(isActivityPast([entry({})], now)).toBe(false); // missing endsAt → not past
  });

  it("isTransportActivity: any activity type id in the transport set", () => {
    const ids = ["136", "130", "70"];
    expect(isTransportActivity([entry({ typeId: "999" })], ids)).toBe(false);
    expect(isTransportActivity([entry({ typeId: "130" })], ids)).toBe(true);
    expect(isTransportActivity([entry({})], ids)).toBe(false);
  });

  it("allCancelled: every item cancelled", () => {
    expect(allCancelled([{ cancelledAt: "x" }, { cancelledAt: "y" }])).toBe(true);
    expect(allCancelled([{ cancelledAt: "x" }, { cancelledAt: null }])).toBe(false);
    expect(allCancelled([])).toBe(true); // vacuous
  });
});
