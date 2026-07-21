import { describe, expect, it } from "bun:test";
import { resolveAffiliateAttribution } from "./resolveAffiliateAttribution";

describe("resolveAffiliateAttribution", () => {
  it("schickt bei Query + sa_click nur den Query-Code, nicht beide Quellen", () => {
    expect(
      resolveAffiliateAttribution("zdy0mtn2", "clk_a1b2", "altpartner")
    ).toEqual({
      affiliateReferralCode: "zdy0mtn2",
      affiliateClickId: undefined,
    });
  });

  it("leert den Referral-Code nie, wenn ein sa_click vorliegt", () => {
    expect(resolveAffiliateAttribution("", "clk_a1b2", "altpartner")).toEqual({
      affiliateReferralCode: "altpartner",
      affiliateClickId: "clk_a1b2",
    });
  });

  it("schickt die Klick-ID auch ohne jeden Referral-Code mit", () => {
    expect(resolveAffiliateAttribution("", "clk_a1b2", "")).toEqual({
      affiliateReferralCode: "",
      affiliateClickId: "clk_a1b2",
    });
  });

  it("lässt ohne sa_click das alte Cookie gewinnen (heutiges Prod-Verhalten)", () => {
    expect(
      resolveAffiliateAttribution("zdy0mtn2", "", "altpartner")
    ).toEqual({
      affiliateReferralCode: "altpartner",
      affiliateClickId: undefined,
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

  it("verwirft Junk-Query-Werte statt sie gewinnen zu lassen", () => {
    for (const junk of ["0", "1", "NaN", "null", "undefined", "a b", "x"]) {
      expect(resolveAffiliateAttribution(junk, "clk_a1b2", "altpartner")).toEqual({
        affiliateReferralCode: "altpartner",
        affiliateClickId: "clk_a1b2",
      });
      expect(resolveAffiliateAttribution(junk, "", "altpartner")).toEqual({
        affiliateReferralCode: "altpartner",
        affiliateClickId: undefined,
      });
    }
  });

  it("akzeptiert numerische Affiliate-IDs des Widget-Pfads", () => {
    expect(resolveAffiliateAttribution("120345", "clk_a1b2", "altpartner")).toEqual({
      affiliateReferralCode: "120345",
      affiliateClickId: undefined,
    });
  });
});
