import { describe, expect, it } from "bun:test";
import { getGatewayFeedPath, getGatewayFeedQueryParams } from "./feed";
import type { TGatewayFeedParams } from "./types";

const params = (p: Partial<TGatewayFeedParams>): TGatewayFeedParams => p as TGatewayFeedParams;

/**
 * Pins the feed-path + query-param mapping the SSG early-fetch script and the
 * render worker depend on (entry-server precomputes `getGatewayFeedPath` — a
 * wrong path 404s the feed and silently defeats the early fetch). PRD T10.
 */
describe("getGatewayFeedPath", () => {
  it("activities-overview wins over every other facet", () => {
    expect(getGatewayFeedPath(params({ activitiesOverview: true, destination: "x", poi: "y" }))).toBe(
      "activities-overview",
    );
  });

  it("maps destination-overview combinations", () => {
    expect(getGatewayFeedPath(params({ destinationOverview: "interlaken", activityType: "paragliding" }))).toBe(
      "destinations/interlaken/activity-types/paragliding",
    );
    expect(getGatewayFeedPath(params({ destinationOverview: "interlaken", attribute: "hund" }))).toBe(
      "destinations/interlaken/attributes/hund",
    );
    expect(getGatewayFeedPath(params({ destinationOverview: "interlaken" }))).toBe(
      "destinations/interlaken/overview",
    );
  });

  it("maps each single-facet feed and falls back to home", () => {
    expect(getGatewayFeedPath(params({ attribute: "hund" }))).toBe("attributes/hund");
    expect(getGatewayFeedPath(params({ activityType: "paragliding" }))).toBe("activity-types/paragliding");
    expect(getGatewayFeedPath(params({ nonBookable: "museums" }))).toBe("non-bookable/museums");
    expect(getGatewayFeedPath(params({ poi: "jungfraujoch" }))).toBe("pois/jungfraujoch");
    expect(getGatewayFeedPath(params({ destination: "zermatt" }))).toBe("destinations/zermatt");
    expect(getGatewayFeedPath(params({ region: "wallis" }))).toBe("regions/wallis");
    expect(getGatewayFeedPath(params({}))).toBe("home");
  });

  it("encodes slug segments", () => {
    expect(getGatewayFeedPath(params({ poi: "a/b c" }))).toBe("pois/a%2Fb%20c");
  });
});

describe("getGatewayFeedQueryParams", () => {
  it("adds date only for date-supporting feeds (home/destination/activities-overview)", () => {
    expect(getGatewayFeedQueryParams(params({ locale: "de-CH", date: "2026-07-01" }))).toMatchObject({
      date: "2026-07-01",
    });
    expect(
      getGatewayFeedQueryParams(params({ locale: "de-CH", date: "2026-07-01", activityType: "x" })).date,
    ).toBeUndefined();
    expect(
      getGatewayFeedQueryParams(params({ locale: "de-CH", date: "2026-07-01", poi: "y" })).date,
    ).toBeUndefined();
  });

  it("adds view only alongside an activity type", () => {
    expect(getGatewayFeedQueryParams(params({ locale: "de-CH", activityType: "x", view: "grid" }))).toMatchObject(
      { view: "grid" },
    );
    expect(getGatewayFeedQueryParams(params({ locale: "de-CH", view: "grid" })).view).toBeUndefined();
  });

  it("includes the context params", () => {
    expect(getGatewayFeedQueryParams(params({ locale: "en-CH", country: "CH", lat: 46.5, lng: 7.8 }))).toMatchObject(
      { locale: "en-CH", country: "CH", lat: 46.5, lng: 7.8 },
    );
  });
});
