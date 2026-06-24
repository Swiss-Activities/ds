import { describe, expect, it } from "bun:test";
import { toActivityCardItem } from "./website-gateway";

/**
 * Pins the locale-URL + price fallbacks in the activity card mapper (PRD TS8).
 * getString returns "" on a miss, so the old `??` chains were dead code — a
 * non-de-CH card whose localized url was missing rendered with no link.
 */
const activity = (urls: Record<string, string>, startingPrice?: unknown) => ({
  id: 42,
  info: { title: "Test Activity" },
  teaser_image: { url: "https://img/x.jpg" },
  urls,
  summary: startingPrice !== undefined ? { startingPrice } : {},
  rating: { average_rating: 4.5, num_ratings: 10 },
  location: { title: "Zürich" },
});

describe("toActivityCardItem — locale URL + price fallback", () => {
  it("falls back to the de_CH url when the localized url is missing", () => {
    const item = toActivityCardItem(activity({ de_CH: "/de/aktivitaet/" }), "en_CH");
    expect(item?.path).toBe("/de/aktivitaet/");
  });

  it("uses the localized url when present", () => {
    const item = toActivityCardItem(activity({ de_CH: "/de/x/", en_CH: "/en/x/" }), "en_CH");
    expect(item?.path).toBe("/en/x/");
  });

  it("path is null when no url exists for any locale", () => {
    const item = toActivityCardItem(activity({}), "en_CH");
    expect(item?.path).toBeNull();
  });

  it("falls back to the formatted number price when the formatted string is missing", () => {
    const item = toActivityCardItem(activity({ de_CH: "/x/" }, 50), "de_CH");
    expect(item?.priceFormatted).toBe("CHF 50");
  });

  it("prefers the preformatted price string when present", () => {
    const item = toActivityCardItem(activity({ de_CH: "/x/" }, { formatted: "CHF 49.90" }), "de_CH");
    expect(item?.priceFormatted).toBe("CHF 49.90");
  });
});
