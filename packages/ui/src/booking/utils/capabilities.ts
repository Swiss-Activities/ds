const PLAN_KEY = "sa.plan-access.v1";
const BOOKING_KEY = "sa.booking-access.v1:";
const memory = new Map<string, string>();
const UUID_V4 = /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const bookingIdValid = (id: unknown): id is string => typeof id === "string" && /^[a-z0-9_-]{1,128}$/i.test(id);

/** Device capability, intentionally unrelated to analytics identity. */
export function getPlanToken(): string | undefined {
  if (typeof window === "undefined") return undefined;
  if (memory.has(PLAN_KEY)) return memory.get(PLAN_KEY);
  try {
    const saved = window.localStorage.getItem(PLAN_KEY);
    if (saved && UUID_V4.test(saved)) { memory.set(PLAN_KEY, saved.toLowerCase()); return saved.toLowerCase(); }
    const token = globalThis.crypto.randomUUID();
    memory.set(PLAN_KEY, token);
    window.localStorage.setItem(PLAN_KEY, token);
    return token;
  } catch {
    const token = memory.get(PLAN_KEY) ?? globalThis.crypto.randomUUID();
    memory.set(PLAN_KEY, token);
    return token;
  }
}

export function rememberBookingAccess(value: unknown): void {
  if (!value || typeof value !== "object") return;
  if (Array.isArray(value)) { value.forEach(rememberBookingAccess); return; }
  const entry = value as Record<string, unknown>;
  const id = entry.bookingId ?? entry.id;
  if (typeof window !== "undefined" && bookingIdValid(id) && typeof entry.bookingAccessToken === "string" && entry.bookingAccessToken.length <= 8192) {
    memory.set(BOOKING_KEY + id, entry.bookingAccessToken);
    try { window.sessionStorage.setItem(BOOKING_KEY + id, entry.bookingAccessToken); } catch { /* Current-tab access still works when storage is blocked. */ }
  }
  for (const key of ["booking", "bookings", "results", "data", "items"]) rememberBookingAccess(entry[key]);
}

export function getBookingAccessToken(bookingId: string): string | undefined {
  if (!bookingIdValid(bookingId) || typeof window === "undefined") return undefined;
  const bootstrapped = (window as unknown as { __saBookingAccess?: Record<string, string> }).__saBookingAccess?.[bookingId];
  if (bootstrapped) return bootstrapped;
  if (memory.has(BOOKING_KEY + bookingId)) return memory.get(BOOKING_KEY + bookingId);
  try { return window.sessionStorage.getItem(BOOKING_KEY + bookingId) || undefined; } catch { return undefined; }
}

/** Capture mailed capabilities before router/analytics reads the current URL. */
export function captureBookingAccessFromUrl(): void {
  if (typeof window === "undefined") return;
  const url = new URL(window.location.href);
  const token = url.searchParams.get("bookingAccessToken");
  if (!token) return;
  const id = url.searchParams.get("bookingId") ?? /\/(?:b|booking|bookings)\/([^/]+)/.exec(url.pathname)?.[1];
  rememberBookingAccess({ bookingId: id, bookingAccessToken: token });
  url.searchParams.delete("bookingAccessToken");
  window.history.replaceState(window.history.state, "", url.pathname + url.search + url.hash);
}

export function bookingAccessForRequest(path: string | undefined, body?: unknown): string | undefined {
  if (!path || !path.startsWith("/") || path.startsWith("//") || path.includes("\\")) return undefined;
  let data = body;
  if (typeof data === "string") { try { data = JSON.parse(data); } catch { return undefined; } }
  const id = /\/bookings\/([^/?]+)/.exec(path)?.[1] ?? (data && typeof data === "object" ? (data as Record<string, unknown>).bookingId : undefined);
  return bookingIdValid(id) ? getBookingAccessToken(id) : undefined;
}

/** Only for an intentional ticket link/share; callers must not log the URL. */
export function mobileTicketsUrl(bookingId: string): string {
  const url = new URL(`https://mobiletickets.swissactivities.com/v2/b/${encodeURIComponent(bookingId)}`);
  const token = getBookingAccessToken(bookingId);
  if (token) url.searchParams.set("bookingAccessToken", token);
  return url.toString();
}
