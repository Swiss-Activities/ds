import { afterEach, beforeEach, describe, expect, it } from "bun:test";
import { bookingAccessForRequest, captureBookingAccessFromUrl, getBookingAccessToken, getPlanToken, mobileTicketsUrl, rememberBookingAccess } from "./capabilities";

const originalWindow = globalThis.window;
let session: Map<string, string>;
let local: Map<string, string>;
let replaced = "";
const storage = (map: Map<string, string>) => ({ getItem: (k: string) => map.get(k) ?? null, setItem: (k: string, v: string) => map.set(k, v) });
beforeEach(() => {
  session = new Map(); local = new Map(); replaced = "";
  globalThis.window = { sessionStorage: storage(session), localStorage: storage(local), location: { href: "https://www.swissactivities.com/confirm?bookingId=test-1&bookingAccessToken=synthetic-1&locale=de" }, history: { state: null, replaceState: (_a: unknown, _b: unknown, url: string) => { replaced = url; } } } as unknown as Window & typeof globalThis;
});
afterEach(() => { globalThis.window = originalWindow; });
describe("booking and device capabilities", () => {
  it("stores checkout and own-booking response shapes, scoped to each booking", () => {
    rememberBookingAccess({ booking: { bookingId: "test-2", bookingAccessToken: "synthetic-2" } });
    rememberBookingAccess({ results: [{ bookingId: "test-3", bookingAccessToken: "synthetic-3" }] });
    expect(getBookingAccessToken("test-2")).toBe("synthetic-2");
    expect(getBookingAccessToken("test-3")).toBe("synthetic-3");
    expect(getBookingAccessToken("unknown")).toBeUndefined();
    expect(getBookingAccessToken("../../outside")).toBeUndefined();
  });
  it("captures secure ticket URLs and removes credentials without removing locale", () => {
    captureBookingAccessFromUrl();
    expect(getBookingAccessToken("test-1")).toBe("synthetic-1");
    expect(replaced).toBe("/confirm?bookingId=test-1&locale=de");
  });
  it("adds request proof for matching paths or bodies, never external targets", () => {
    rememberBookingAccess({ bookingId: "request-1", bookingAccessToken: "synthetic-request" });
    expect(bookingAccessForRequest("/bookings/request-1/tickets_data")).toBe("synthetic-request");
    expect(bookingAccessForRequest("/booking/summary/", JSON.stringify({bookingId:"request-1"}))).toBe("synthetic-request");
    for (const url of ["https://example.com/bookings/request-1", "//example.com/bookings/request-1", "/\\example.com/bookings/request-1", "/bookings/another"]) expect(bookingAccessForRequest(url)).toBeUndefined();
  });
  it("generates a stable independent random device proof and intentional ticket links", () => {
    const proof = getPlanToken();
    expect(proof).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    expect(getPlanToken()).toBe(proof);
    rememberBookingAccess({ bookingId: "share-1", bookingAccessToken: "synthetic-share" });
    expect(new URL(mobileTicketsUrl("share-1")).searchParams.get("bookingAccessToken")).toBe("synthetic-share");
    expect(new URL(mobileTicketsUrl("unknown")).search).toBe("");
  });
  it("never retains server-rendered credentials in process memory", () => {
    globalThis.window = undefined as unknown as Window & typeof globalThis;
    rememberBookingAccess({ bookingId: "server-1", bookingAccessToken: "must-not-cache" });
    expect(getBookingAccessToken("server-1")).toBeUndefined();
    expect(getPlanToken()).toBeUndefined();
  });
  it("keeps current-tab access when browser storage is blocked", () => {
    Object.defineProperty(window, "sessionStorage", { get() { throw new Error("blocked"); } });
    rememberBookingAccess({ bookingId: "blocked-1", bookingAccessToken: "synthetic-blocked" });
    expect(getBookingAccessToken("blocked-1")).toBe("synthetic-blocked");
  });
});
