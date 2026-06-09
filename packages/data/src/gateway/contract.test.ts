import { describe, expect, test } from "bun:test";
import { mapGatewayHomeData } from "../adapters/gatewayHome";
import {
  assertGatewayDetailContract,
  assertGatewayHomeContract,
  GATEWAY_DETAIL_CONTRACT_VERSION,
  GATEWAY_HOME_CONTRACT_VERSION,
} from "./contract";
import {
  GATEWAY_CONTRACT_FIXTURE_VERSION,
  gatewayDetailFixtures,
  gatewayHomeFixtures,
} from "../test/fixtures/gatewayContractFixtures";

const labels = {
  categories: {
    fireplaces: "Fireplaces",
  },
  dateRange: {
    from: "from",
    until: "until",
  },
  distanceUnit: "km",
};

const mapOptions = {
  locale: "de_CH",
  labels,
  priceLabel: "pro Person",
  fromLabel: "ab",
  getPillarPathHref: (path?: string | null) =>
    path ? `/?personalized=true&path=${encodeURIComponent(path)}` : null,
};

describe("gateway contract fixtures", () => {
  test("pin the expected contract versions", () => {
    expect(GATEWAY_HOME_CONTRACT_VERSION).toBe("gateway-home-v1");
    expect(GATEWAY_DETAIL_CONTRACT_VERSION).toBe("gateway-detail-v1");
    expect(GATEWAY_CONTRACT_FIXTURE_VERSION).toBe(GATEWAY_HOME_CONTRACT_VERSION);
  });

  test("match the home/feed contract", () => {
    for (const [name, fixture] of Object.entries(gatewayHomeFixtures)) {
      expect(() => assertGatewayHomeContract(fixture), name).not.toThrow();
    }
  });

  test("map through the shared DS adapter", () => {
    for (const [name, fixture] of Object.entries(gatewayHomeFixtures)) {
      const mapped = mapGatewayHomeData(fixture, mapOptions);
      expect(mapped.hero, `${name} hero`).toBeTruthy();
      expect(mapped.sections.length, `${name} sections`).toBeGreaterThan(0);
    }
  });

  test("match the detail contract", () => {
    for (const [name, fixture] of Object.entries(gatewayDetailFixtures)) {
      expect(() => assertGatewayDetailContract(fixture), name).not.toThrow();
    }
  });
});
