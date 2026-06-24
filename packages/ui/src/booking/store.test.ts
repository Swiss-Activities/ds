import { beforeEach, describe, expect, it } from "bun:test";
import { useBookingStore } from "./store";

/**
 * Pins the index-keyed ticket reducers in the booking store — the
 * `${audience}-${index}` selection bookkeeping where an off-by-one corrupts the
 * cart (PRD T3). zustand stores are driven directly via getState()/actions; no
 * React, no DOM. This is also the first executable test in `packages/ui`, so it
 * doubles as the proof the bun:test runner is wired (PRD T1).
 */

beforeEach(() => {
  // reset() returns the store to a known baseline so cases don't bleed.
  useBookingStore.getState().reset();
});

describe("booking store — ticket audience reducers", () => {
  it("increments an audience count up from zero", () => {
    const s = useBookingStore.getState();
    s.incrementTicketAudience("adult");
    s.incrementTicketAudience("adult");
    expect(useBookingStore.getState().ticketsAudiences.adult).toBe(2);
  });

  it("decrements but never goes below zero", () => {
    useBookingStore.getState().decrementTicketAudience("adult");
    expect(useBookingStore.getState().ticketsAudiences.adult).toBe(0);
  });

  it("derives the tickets count map outside the offers-date flow", () => {
    const s = useBookingStore.getState();
    s.setFlowType("date-offers");
    s.setTicketSelection("adult-0", 305);
    s.setTicketSelection("adult-1", 305);
    s.setTicketSelection("child-0", 306);
    const { tickets } = useBookingStore.getState();
    expect(tickets[305]).toBe(2);
    expect(tickets[306]).toBe(1);
  });

  it("does NOT rebuild the tickets map in the offers-date flow", () => {
    const s = useBookingStore.getState();
    s.setFlowType("offers-date");
    s.setTicketSelection("adult-0", 305);
    expect(useBookingStore.getState().tickets).toEqual({});
  });

  it("reindexes higher selections down by one when a middle participant is removed", () => {
    const s = useBookingStore.getState();
    s.setFlowType("date-offers");
    s.setTicketAudienceAmount("adult", 3);
    const meta = { audience: "adult", discountType: null, categoryTypeKey: null };
    s.setTicketSelection("adult-0", 101, meta);
    s.setTicketSelection("adult-1", 102, meta);
    s.setTicketSelection("adult-2", 103, meta);

    // Remove the middle participant: adult-2's selection shifts down to adult-1.
    s.removeParticipant("adult", 1);

    const state = useBookingStore.getState();
    expect(state.ticketsAudiences.adult).toBe(2);
    expect(state.ticketSelections["adult-0"]).toBe(101);
    expect(state.ticketSelections["adult-1"]).toBe(103);
    expect(state.ticketSelections["adult-2"]).toBeUndefined();
    // metadata reindexes alongside the selection key
    expect(state.ticketSelectionsMetadata["adult-1"]?.audience).toBe("adult");
    expect(state.ticketSelectionsMetadata["adult-2"]).toBeUndefined();
  });

  it("prunes selections at or above the new count on decrement", () => {
    const s = useBookingStore.getState();
    s.setFlowType("date-offers");
    s.setTicketAudienceAmount("adult", 2);
    s.setTicketSelection("adult-0", 101);
    s.setTicketSelection("adult-1", 102);

    s.decrementTicketAudience("adult"); // newAmount 1 → drop index >= 1

    const state = useBookingStore.getState();
    expect(state.ticketsAudiences.adult).toBe(1);
    expect(state.ticketSelections["adult-0"]).toBe(101);
    expect(state.ticketSelections["adult-1"]).toBeUndefined();
    expect(state.tickets).toEqual({ 101: 1 });
  });
});
