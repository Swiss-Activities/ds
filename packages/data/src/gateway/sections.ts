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

export const isGatewayCarouselSection = (
  section: GatewaySectionLike
): section is TGatewayHomeCarouselSection => section.component === "carousel";

export const isGatewayActivityGridSection = (
  section: GatewaySectionLike
): section is TGatewayActivityGridSection =>
  section.component === "activity_grid";

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
  selectedValues: string[]
): TGatewayFilterConfig => {
  const selectedSet = new Set(selectedValues.filter(Boolean));
  const labels = new Map<string, string>();

  for (const group of config.groups) {
    for (const option of group.options) {
      labels.set(option.value, option.label);
    }
  }

  return {
    endpoint: config.endpoint,
    items: Array.from(selectedSet).map((value) => ({
      id: `tag:${value}`,
      label: labels.get(value) ?? formatGatewayFilterValue(value),
      kind: "removable",
      param: "tags",
      value,
    })),
    groups: config.groups.map((group) => ({
      ...group,
      options: group.options.map((option) => ({
        ...option,
        selected: selectedSet.has(option.value),
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
