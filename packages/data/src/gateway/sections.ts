import type {
  TGatewayActivityGridSection,
  TGatewayActivityCarouselSection,
  TGatewayFeatureBandSection,
  TGatewayFilterConfig,
  TGatewayFilterStaticSection,
  TGatewayHome,
  TGatewayHomeCarouselSection,
  TGatewayHomeHeroSection,
  TGatewayHomeItem,
  TGatewayHomeWeatherCardSection,
  TGatewayRegionMapSection,
  TGatewayReviewCarouselSection,
  TGatewayStaticSection,
} from "./types";

type GatewaySectionLike = {
  component: string;
};

type GatewaySectionWithAction = {
  actionPath?: string | null;
  href?: string | null;
  path?: string | null;
  url?: string | null;
};

type GatewaySectionWithAlternates<TAlternate> = {
  alternates?: TAlternate[];
};

type GatewayGridPageStateLike<TItem> = {
  pages: Record<number, TItem[]>;
};

export type GatewayPillarSelection = {
  type: "activity-types" | "non-bookable";
  value: string;
};

export const isGatewayCarouselSection = (
  section: GatewaySectionLike
): section is TGatewayHomeCarouselSection => section.component === "carousel";

export const isGatewayActivityGridSection = (
  section: GatewaySectionLike
): section is TGatewayActivityGridSection =>
  section.component === "activity_grid" ||
  section.component === "non_bookable_grid";

export const isGatewayReviewSection = (
  section: GatewaySectionLike
): section is TGatewayReviewCarouselSection => {
  if (!isGatewayCarouselSection(section)) {
    return false;
  }

  const data = (section as TGatewayHomeCarouselSection).data;

  return (
    Array.isArray(data) &&
    data.length > 0 &&
    data.every((item) => item.type === "review")
  );
};

export const isGatewayActivitySection = (
  section: GatewaySectionLike
): section is TGatewayActivityCarouselSection | TGatewayActivityGridSection =>
  isGatewayActivityGridSection(section) ||
  (isGatewayCarouselSection(section) && !isGatewayReviewSection(section));

export const isGatewayWeatherCardSection = (
  section: GatewaySectionLike
): section is TGatewayHomeWeatherCardSection =>
  section.component === "weather_card";

export const isGatewayHeroSection = (
  section: GatewaySectionLike
): section is TGatewayHomeHeroSection => section.component === "hero";

export const isGatewayFeatureBandSection = (
  section: GatewaySectionLike
): section is TGatewayFeatureBandSection =>
  section.component === "feature_band";

export const isGatewayRegionMapSection = (
  section: GatewaySectionLike
): section is TGatewayRegionMapSection => section.component === "region_map";

export const isGatewayFilterStaticSection = (
  section: TGatewayStaticSection
): section is TGatewayFilterStaticSection => section.component === "filters";

export const getGatewayStaticFilterSection = (
  data: Pick<TGatewayHome, "staticSections">
): TGatewayFilterStaticSection | null =>
  data.staticSections?.find(isGatewayFilterStaticSection) ?? null;

export const getGatewayStaticFilterConfig = (
  data: Pick<TGatewayHome, "staticSections">
): TGatewayFilterConfig | null => {
  const section = getGatewayStaticFilterSection(data);

  if (!section) {
    return null;
  }

  return {
    endpoint: section.endpoint,
    items: section.items,
    groups: section.groups,
  };
};

export const applyGatewayFilterSelection = (
  config: TGatewayFilterConfig,
  selection:
    | string[]
    | {
        destination?: string | null;
        tags?: string[];
      }
): TGatewayFilterConfig => {
  const selectedTags = Array.isArray(selection)
    ? selection
    : (selection.tags ?? []);
  const selectedDestination = Array.isArray(selection)
    ? null
    : (selection.destination ?? null);
  const selectedSet = new Set(selectedTags.filter(Boolean));
  const labels = new Map<string, string>();
  let selectedDestinationLabel: string | null = null;

  for (const group of config.groups) {
    for (const option of group.options) {
      if (group.param === "destination") {
        if (option.value === selectedDestination) {
          selectedDestinationLabel = option.label;
        }
      } else {
        labels.set(option.value, option.label);
      }
    }
  }

  return {
    endpoint: config.endpoint,
    items: [
      ...Array.from(selectedSet).map((value) => ({
        id: `tag:${value}`,
        label: labels.get(value) ?? formatGatewayFilterValue(value),
        kind: "removable" as const,
        param: "tags",
        value,
      })),
      ...(selectedDestination
        ? [
            {
              id: `destination:${selectedDestination}`,
              label:
                selectedDestinationLabel ??
                formatGatewayFilterValue(selectedDestination),
              kind: "removable" as const,
              param: "destination",
              value: selectedDestination,
            },
          ]
        : []),
    ],
    groups: config.groups.map((group) => ({
      ...group,
      options: group.options.map((option) => ({
        ...option,
        selected:
          group.param === "destination"
            ? option.value === selectedDestination
            : group.param === "tags"
              ? selectedSet.has(option.value)
              : option.selected,
      })),
    })),
  };
};

export const getGatewaySearchResultsSummary = (data: {
  sections?: unknown[];
}) => {
  const activitySections = (data.sections ?? []).filter((section) => {
    return (
      section &&
      typeof section === "object" &&
      isGatewayActivitySection(section as GatewaySectionLike)
    );
  }) as Array<TGatewayActivityCarouselSection | TGatewayActivityGridSection>;

  return {
    moduleCount: activitySections.length,
    resultCount: activitySections.reduce(
      (count, section) => count + section.data.length,
      0
    ),
  };
};

export const getGatewaySectionActionHref = (
  section: TGatewayHomeCarouselSection | TGatewayHomeWeatherCardSection
) => {
  const sectionWithAction = section as typeof section &
    GatewaySectionWithAction;

  return (
    sectionWithAction.actionPath ||
    sectionWithAction.path ||
    sectionWithAction.href ||
    sectionWithAction.url ||
    null
  );
};

export const getGatewaySectionPillarPath = (
  section: object
) => {
  const sectionWithPillar = section as { pillarPath?: string | null };

  if (typeof sectionWithPillar.pillarPath !== "string") {
    return null;
  }

  return sectionWithPillar.pillarPath;
};

export const getGatewaySectionAlternates = <
  TAlternate extends { pillarPath?: string | null },
>(
  section: GatewaySectionWithAlternates<TAlternate>,
  getPillarPathHref: (pillarPath?: string | null) => string | null
) =>
  section.alternates?.map((alternate) => ({
    ...alternate,
    href: getPillarPathHref(alternate.pillarPath),
  }));

export const getGatewayPillarSelection = (
  pillarPath?: string | null
): GatewayPillarSelection | null => {
  if (!pillarPath) {
    return null;
  }

  const parts = pillarPath.split("?")[0]?.split("/").filter(Boolean) ?? [];
  const resourceIndex = parts.findIndex(
    (part) => part === "activity-types" || part === "non-bookable"
  );

  if (resourceIndex < 0) {
    return null;
  }

  const value = parts[resourceIndex + 1];

  if (!value) {
    return null;
  }

  return {
    type: parts[resourceIndex] as GatewayPillarSelection["type"],
    value: decodeURIComponent(value),
  };
};

export const getGatewayGridPageStateItems = <TItem>(
  state?: GatewayGridPageStateLike<TItem>
) =>
  Object.entries(state?.pages ?? {})
    .sort(([a], [b]) => Number(a) - Number(b))
    .flatMap(([, items]) => items);

export const getGatewayGridPageScrollIndex = <TItem>({
  baseCount,
  page,
  pages,
}: {
  baseCount: number;
  page: number;
  pages: Record<number, TItem[]>;
}) =>
  baseCount +
  Object.entries(pages).reduce((count, [pageNumber, items]) => {
    return Number(pageNumber) < page ? count + items.length : count;
  }, 0);

export const getValidGatewayPage = (page: number | null | undefined) =>
  Number.isFinite(page) && page && page > 1 ? page : 1;

export const getGatewayInitialDataPath = ({
  activityType,
  nonBookable,
  poi,
  destination,
  region,
}: {
  activityType?: string | null;
  nonBookable?: string | null;
  poi?: string | null;
  destination?: string | null;
  region?: string | null;
}) => {
  if (activityType) {
    return `/app/v1/activity-types/${encodeURIComponent(activityType)}`;
  }

  if (nonBookable) {
    return `/app/v1/non-bookable/${encodeURIComponent(nonBookable)}`;
  }

  if (poi) {
    return `/app/v1/pois/${encodeURIComponent(poi)}`;
  }

  if (destination) {
    return `/app/v1/destinations/${encodeURIComponent(destination)}`;
  }

  if (region) {
    return `/app/v1/regions/${encodeURIComponent(region)}`;
  }

  return "/app/v1/home";
};

export const supportsGatewayDateParam = (path: string) =>
  path === "/app/v1/home" || path.startsWith("/app/v1/destinations/");

export const collectGatewayItemsById = (data: {
  sections?: unknown[];
}): Map<string, TGatewayHomeItem> => {
  const items = new Map<string, TGatewayHomeItem>();

  for (const section of data.sections ?? []) {
    if (!section || typeof section !== "object") {
      continue;
    }

    if (!isGatewayActivitySection(section as GatewaySectionLike)) {
      continue;
    }

    for (const item of (
      section as TGatewayActivityCarouselSection | TGatewayActivityGridSection
    ).data) {
      items.set(item.id, item);
    }
  }

  return items;
};

function formatGatewayFilterValue(value: string) {
  return value
    .replace(/[_:-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
