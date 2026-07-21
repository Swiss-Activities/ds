/** Präzedenz der Affiliate-Attribution beim Checkout: URL-Query > Cookie
 *  `sa_click` > Cookie `affiliateId` (erste nicht-leere gewinnt).
 *
 *  Ein `sa_click` (`clk_…`) ist kein Referral-Code, sondern die opake Klick-ID,
 *  die serverseitig selbst auf den Affiliate auflöst — liegt sie vor, ist das
 *  alte `affiliateId`-Cookie als Quelle tot und wird nicht mehr mitgeschickt.
 */
export const resolveAffiliateAttribution = (
  queryId: string,
  clickId: string,
  legacyCookieId: string
) => ({
  affiliateReferralCode: queryId || (clickId ? "" : legacyCookieId),
  affiliateClickId: clickId || undefined,
});
