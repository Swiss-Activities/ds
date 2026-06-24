/**
 * Pure order-confirmation customData assembly + aggregation, extracted from
 * Confirm/Page so the grouping (which was copy-pasted verbatim for the main and
 * related bookings, with ~6 `as any` field-grafts) and the all-cancelled /
 * activity-past / transport predicates are unit-testable (PRD T5/Q3).
 */

export interface ConfirmActivity {
  id: string | number;
  type?: { id?: string } | null;
}

export interface ConfirmReservation {
  tripId?: unknown;
  endsAt?: string | null;
  reservations?: unknown[];
  [key: string]: unknown;
}

export interface CustomDataEntry {
  reservation: ConfirmReservation;
  activity: ConfirmActivity;
}

/** One resolved (booking item × reservation) pair, ready to be grouped. */
export interface ResolvedReservation {
  act: ConfirmActivity;
  res: Record<string, unknown>;
  isCancellable: boolean;
  cancellableUntil: string | null;
  bookingItemId: unknown;
  cancelledAt: unknown;
  offerId: unknown;
  validity: unknown;
}

/**
 * Group resolved reservations by activity: the first reservation for an activity
 * creates the entry (carrying the cancellable/booking-item fields), and later
 * reservations for the same activity append their bare reservation to that
 * entry's `reservations` array. The same assembly both the main and related
 * bookings need.
 */
export function groupCustomData(resolved: ResolvedReservation[]): CustomDataEntry[] {
  const out: CustomDataEntry[] = [];
  for (const entry of resolved) {
    const existing = out.find((e) => e.activity.id === entry.act.id);
    if (existing) {
      if (!existing.reservation.reservations) existing.reservation.reservations = [];
      existing.reservation.reservations.push(entry.res);
    } else {
      out.push({
        reservation: {
          ...entry.res,
          isCancellable: entry.isCancellable,
          cancellableUntil: entry.cancellableUntil,
          bookingItemId: entry.bookingItemId,
          cancelledAt: entry.cancelledAt,
          offerId: entry.offerId,
          validity: entry.validity,
        },
        activity: entry.act,
      });
    }
  }
  return out;
}

/** Any reservation (in the main or a related booking) is a transport trip. */
export function hasTransportBooking(
  customData: CustomDataEntry[],
  related: { customData: CustomDataEntry[] }[],
): boolean {
  const anyTrip = (entries: CustomDataEntry[]) => entries.some((d) => Boolean(d?.reservation?.tripId));
  return anyTrip(customData) || (related ?? []).some((r) => anyTrip(r.customData));
}

/** Every booked activity has already ended (vacuously true when empty — the
 *  original behaviour of `.every` on an empty customData). */
export function isActivityPast(customData: CustomDataEntry[], now: Date): boolean {
  return customData.every(
    (d) => Boolean(d?.reservation?.endsAt) && new Date(d.reservation.endsAt as string) < now,
  );
}

/** Any booked activity is itself a transport type (by content type id). */
export function isTransportActivity(
  customData: CustomDataEntry[],
  transportTypeIds: readonly string[],
): boolean {
  return customData.some((d) => transportTypeIds.includes(d?.activity?.type?.id as string));
}

/** Every booking item is cancelled. */
export function allCancelled(items: Array<{ cancelledAt?: unknown }>): boolean {
  return items.every((e) => Boolean(e?.cancelledAt));
}
