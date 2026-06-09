import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const fixtureDir = resolve(__dirname, "../src/fixtures");
const gatewayBaseUrl =
  process.env.STORYBOOK_GATEWAY_PROXY_URL ??
  "https://www.swissactivities.com/api/gateway";

const contextParams = {
  locale: "de-CH",
  country: "CH",
};

const overviewRequests = [
  {
    exportName: "gatewayHomeResponse",
    fileName: "gateway-home-response.ts",
    path: "home",
  },
  {
    exportName: "gatewayOverviewActivityTypeResponse",
    fileName: "gateway-overview-activity-type-response.ts",
    path: "activity-types/paragliding",
  },
  {
    exportName: "gatewayOverviewDestinationResponse",
    fileName: "gateway-overview-destination-response.ts",
    path: "destinations/berner-oberland-interlaken",
  },
  {
    exportName: "gatewayOverviewPointOfInterestResponse",
    fileName: "gateway-overview-point-of-interest-response.ts",
    path: "pois/rigi",
  },
  {
    exportName: "gatewayOverviewNonBookableResponse",
    fileName: "gateway-overview-non-bookable-response.ts",
    path: "non-bookable/fireplaces",
  },
];

function toSearchParams(params) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value != null && value !== "") {
      searchParams.set(key, String(value));
    }
  }

  return searchParams;
}

async function fetchGateway(path, params = contextParams) {
  const searchParams = toSearchParams(params);
  const url = `${gatewayBaseUrl.replace(/\/+$/, "")}/${path.replace(
    /^\/+|\/+$/g,
    ""
  )}/?${searchParams}`;
  const response = await fetch(url, {
    headers: {
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.json();
}

function toFixtureSource({ exportName, typeName, value }) {
  return `import type { ${typeName} } from "@swiss-activities/data";

export const ${exportName} = ${JSON.stringify(value, null, 2)} satisfies ${typeName};
`;
}

async function writeFixture({ exportName, fileName, typeName, value }) {
  const filePath = resolve(fixtureDir, fileName);

  await writeFile(
    filePath,
    toFixtureSource({ exportName, typeName, value }),
    "utf8"
  );
  console.log(`updated ${fileName}`);
}

function getFirstGatewayItem(data, predicate) {
  for (const section of data.sections ?? []) {
    for (const item of section.data ?? []) {
      if (predicate(item)) {
        return item;
      }
    }
  }

  return null;
}

async function main() {
  await mkdir(fixtureDir, { recursive: true });

  const overviews = new Map();

  for (const request of overviewRequests) {
    const value = await fetchGateway(request.path);
    overviews.set(request.exportName, value);
    await writeFixture({
      ...request,
      typeName: "TGatewayHome",
      value,
    });
  }

  const activityTypeOverview = overviews.get(
    "gatewayOverviewActivityTypeResponse"
  );
  const activityItem = getFirstGatewayItem(
    activityTypeOverview,
    (item) => item.type === "activity"
  );

  if (!activityItem) {
    throw new Error("No activity item found for detail fixture");
  }

  const activityDetail = await fetchGateway(`activities/${activityItem.id}`);
  await writeFixture({
    exportName: "gatewayDetailActivityResponse",
    fileName: "gateway-detail-activity-response.ts",
    typeName: "TGatewayActivityDetail",
    value: activityDetail,
  });

  const nonBookableOverview = overviews.get("gatewayOverviewNonBookableResponse");
  const nonBookableItem = getFirstGatewayItem(
    nonBookableOverview,
    (item) => item.type === "non-bookable" && item.detailPath
  );

  if (!nonBookableItem) {
    throw new Error("No non-bookable item found for detail fixture");
  }

  const nonBookableDetail = await fetchGateway("detail", {
    ...contextParams,
    path: nonBookableItem.detailPath,
  });
  await writeFixture({
    exportName: "gatewayDetailNonBookableResponse",
    fileName: "gateway-detail-non-bookable-response.ts",
    typeName: "TGatewayNonBookableDetail",
    value: nonBookableDetail,
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
