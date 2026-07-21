/** Präzedenz der Affiliate-Attribution beim Checkout (Contract §3):
 *  URL-Query > Cookie `sa_click` > Cookie `affiliateId` — **erste nicht-leere
 *  gewinnt**, es geht also immer nur EINE Quelle in den Payload.
 *
 *  Zwei Eigenschaften, die hier bewusst so und nicht anders sind:
 *
 *  1. `affiliateReferralCode` wird NIE geleert. booking-api steigt bei leerem
 *     Referral-Code aus (`BookingPart::callTapfiliate`, `empty(...)` → return),
 *     bevor es die Klick-ID überhaupt ansieht — ein geleerter Code kostet die
 *     komplette Conversion.
 *  2. Die Präzedenz-Umkehr (Query schlägt altes Cookie) wirkt erst, wenn ein
 *     `sa_click` existiert, also erst nachdem der `/r/:code`-Redirect live ist.
 *     Ohne `sa_click` — heutiger Produktionszustand — bleibt das Verhalten
 *     exakt wie vorher (altes Cookie zuerst). Das ist das Gate anstelle eines
 *     Env-Flags: der Client hat keine Flag-Infrastruktur, und der Redirect ist
 *     genau die Rollout-Stufe, an der die Umkehr hängen soll.
 */

/** Der Query-Parameter ist beliebig vom Besucher setzbar und wird nirgends
 *  geprüft (die Code-Prüfung aus Contract §2 greift nur im Redirect, den dieser
 *  Pfad umgeht). In der Live-Erfassung stecken `0`, `1`, `NaN`, `null`,
 *  `?testtest` — ohne Guard schlägt so ein Wert eine gültige Cookie-Attribution.
 *  ponytail: reiner Format-/Plausibilitätsguard, über echte Gültigkeit
 *  entscheidet serverseitig die Code-Registry (unbekannt → keine Attribution).
 */
const JUNK = new Set(["null", "undefined", "nan", "false", "true", "none"]);

const isPlausibleCode = (value: string) =>
  /^[A-Za-z0-9_-]{4,64}$/.test(value) && !JUNK.has(value.toLowerCase());
// ponytail: rein numerische Werte werden NICHT verworfen — der Widget-Pfad
// schickt heute Tapfiliate-Affiliate-IDs statt Codes, die numerisch sein können.
// Die belegten Zahlen-Junkwerte (`0`, `1`) fallen bereits über die Mindestlänge.

export const resolveAffiliateAttribution = (
  queryId: string,
  clickId: string,
  legacyCookieId: string
) => {
  const query = isPlausibleCode(queryId) ? queryId : "";

  // Kein sa_click: Verhalten wie bisher (altes Cookie zuerst), keine Klick-ID.
  if (!clickId) {
    return {
      affiliateReferralCode: legacyCookieId || query,
      affiliateClickId: undefined,
    };
  }

  // Frischer Query-Parameter gewinnt — dann darf die Klick-ID eines fremden
  // Partners nicht mitfahren, sonst löst der Shim die Conversion über sie auf.
  if (query) {
    return { affiliateReferralCode: query, affiliateClickId: undefined };
  }

  // sa_click gewinnt: Klick-ID mitschicken, den alten Code additiv daneben
  // stehen lassen (siehe 1.) — serverseitig überstimmt die Klick-ID ihn.
  return {
    affiliateReferralCode: legacyCookieId,
    affiliateClickId: clickId,
  };
};
