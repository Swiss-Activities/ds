import type { TGatewayRegionMapItem } from "../gateway/types";

export type GatewayRegionMapTileData = {
  id: string;
  label: string;
  code: string;
  name: string;
  count: number;
  active: boolean;
  disabled: boolean;
  pathSlug: string | null;
  tone: "low" | "mid" | "high";
};

const gatewayRegionExplorerIdsBySlug: Record<string, string> = {
  "aargau-region": "region-aargau",
  "basel-region": "region-basel",
  "bern-region": "region-bern",
  "fribourg-region": "region-fribourg",
  "geneva-region": "region-genf",
  "graubunden-region": "region-graubuenden",
  "jura-three-lakes-region": "region-jura-und-drei-seen-land",
  "lake-geneva-region": "region-genfersee",
  "lucerne-region-lake-lucerne": "region-luzern-vierwaldstaettersee",
  "region-aargau": "region-aargau",
  "region-basel": "region-basel",
  "region-bern": "region-bern",
  "region-eastern-switzerland-liechtenstein": "region-ostschweiz-lichtenstein",
  "region-fribourg": "region-fribourg",
  "region-genf": "region-genf",
  "region-genfersee": "region-genfersee",
  "region-graubuenden": "region-graubuenden",
  "region-jura-und-drei-seen-land": "region-jura-und-drei-seen-land",
  "region-luzern-vierwaldstaettersee": "region-luzern-vierwaldstaettersee",
  "region-ostschweiz-lichtenstein": "region-ostschweiz-lichtenstein",
  "region-tessin": "region-tessin",
  "region-wallis": "region-wallis",
  "region-zuerich": "region-zuerich",
  "ticino-region": "region-tessin",
  "valais-region": "region-wallis",
  "zurich-region": "region-zuerich",
};

const gatewayRegionCodesBySlug: Record<string, string> = {
  "aargau-region": "AG",
  "basel-region": "BS",
  "bern-region": "BE",
  "fribourg-region": "FR",
  "geneva-region": "GE",
  "graubunden-region": "GR",
  "jura-three-lakes-region": "JU",
  "lake-geneva-region": "VD",
  "lucerne-region-lake-lucerne": "LU",
  "region-aargau": "AG",
  "region-basel": "BS",
  "region-bern": "BE",
  "region-eastern-switzerland-liechtenstein": "SG",
  "region-fribourg": "FR",
  "region-genf": "GE",
  "region-genfersee": "VD",
  "region-graubuenden": "GR",
  "region-jura-und-drei-seen-land": "JU",
  "region-luzern-vierwaldstaettersee": "LU",
  "region-ostschweiz-lichtenstein": "SG",
  "region-tessin": "TI",
  "region-wallis": "VS",
  "region-zuerich": "ZH",
  "ticino-region": "TI",
  "valais-region": "VS",
  "zurich-region": "ZH",
};

const gatewayRegionCodesByTitle: Record<string, string> = {
  aargau: "AG",
  basel: "BS",
  bern: "BE",
  fribourg: "FR",
  genf: "GE",
  genfersee: "VD",
  graubünden: "GR",
  graubuenden: "GR",
  jura: "JU",
  luzern: "LU",
  ostschweiz: "SG",
  tessin: "TI",
  wallis: "VS",
  zürich: "ZH",
  zuerich: "ZH",
};

export const getGatewayRegionSlug = (item: TGatewayRegionMapItem) => {
  if (item.slug) {
    return item.slug;
  }

  if (!item.path) {
    return null;
  }

  return item.path.split("/").filter(Boolean).pop() ?? null;
};

export const getGatewayRegionPathSlug = (item: TGatewayRegionMapItem) =>
  item.path?.split("/").filter(Boolean).pop() ?? getGatewayRegionSlug(item);

const getGatewayRegionExplorerId = (slug: string | null) =>
  slug ? gatewayRegionExplorerIdsBySlug[slug] : undefined;

const isGatewayRegionActive = ({
  item,
  pathSlug,
  regionExplorerId,
  selectedRegion,
  slug,
}: {
  item: TGatewayRegionMapItem;
  pathSlug: string | null;
  regionExplorerId: string | undefined;
  selectedRegion?: string | null;
  slug: string | null;
}) =>
  Boolean(
    selectedRegion &&
      [slug, pathSlug, regionExplorerId, item.id].some(
        (value) => value === selectedRegion
      )
  );

const getGatewayRegionCode = (
  item: TGatewayRegionMapItem,
  slug: string | null
) => {
  if (slug && gatewayRegionCodesBySlug[slug]) {
    return gatewayRegionCodesBySlug[slug];
  }

  const normalizedTitle = item.title
    .replace(/^region\s+/i, "")
    .toLocaleLowerCase("de-CH");

  const match = Object.entries(gatewayRegionCodesByTitle).find(([key]) =>
    normalizedTitle.includes(key)
  );

  return match?.[1] ?? item.title.slice(0, 2).toUpperCase();
};

const getGatewayRegionTone = (count: number) => {
  if (count >= 200) {
    return "high" as const;
  }

  if (count >= 80) {
    return "mid" as const;
  }

  return "low" as const;
};

export const toGatewayRegionMapTiles = (
  items: TGatewayRegionMapItem[],
  {
    selectedRegion,
  }: {
    selectedRegion?: string | null;
  } = {}
): GatewayRegionMapTileData[] =>
  items.map((item) => {
    const slug = getGatewayRegionSlug(item);
    const pathSlug = getGatewayRegionPathSlug(item);
    const regionExplorerId = getGatewayRegionExplorerId(slug);
    const count = item.numberOfActivities ?? 0;
    const code = getGatewayRegionCode(item, slug);

    return {
      id: regionExplorerId ?? slug ?? item.id,
      label: code,
      code,
      name: item.title,
      count,
      active: isGatewayRegionActive({
        item,
        pathSlug,
        regionExplorerId,
        selectedRegion,
        slug,
      }),
      disabled: !pathSlug,
      pathSlug,
      tone: getGatewayRegionTone(count),
    };
  });
