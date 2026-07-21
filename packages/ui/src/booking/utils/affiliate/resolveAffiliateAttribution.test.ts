import { describe, expect, it } from "bun:test";
import { resolveAffiliateAttribution } from "./resolveAffiliateAttribution";

describe("resolveAffiliateAttribution", () => {
  it("lässt den frischen Query-Parameter gegen beide Cookies gewinnen", () => {
    expect(resolveAffiliateAttribution("zdy0mtn2", "clk_a1b2", "altpartner")).toEqual({
      affiliateReferralCode: "zdy0mtn2",
      affiliateClickId: "clk_a1b2",
    });
  });

  it("verwirft das alte affiliateId-Cookie, wenn ein sa_click vorliegt", () => {
    expect(resolveAffiliateAttribution("", "clk_a1b2", "altpartner")).toEqual({
      affiliateReferralCode: "",
      affiliateClickId: "clk_a1b2",
    });
  });

  it("fällt ohne Query und ohne sa_click auf das alte Cookie zurück (Dual-Run)", () => {
    expect(resolveAffiliateAttribution("", "", "altpartner")).toEqual({
      affiliateReferralCode: "altpartner",
      affiliateClickId: undefined,
    });
  });

  it("meldet ohne jede Quelle keine Attribution", () => {
    expect(resolveAffiliateAttribution("", "", "")).toEqual({
      affiliateReferralCode: "",
      affiliateClickId: undefined,
    });
  });
});
