import type {
  TGatewayActivityGridSection,
  TGatewayFilterConfig,
  TGatewayFilterStaticSection,
  TGatewayHome,
  TGatewayHomeCarouselSection,
  TGatewayHomeItem,
  TGatewayHomeWeatherCardSection,
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

export const isGatewayActivitySection = (
  section: GatewaySectionLike
): section is TGatewayHomeCarouselSection | TGatewayActivityGridSection =>
  isGatewayCarouselSection(section) || isGatewayActivityGridSection(section);

export const isGatewayWeatherCardSection = (
  section: GatewaySectionLike
): section is TGatewayHomeWeatherCardSection =>
  section.component === "weather_card";

export const isGatewayFilterStaticSection = (
  section: TGatewayStaticSection
): section is TGatewayFilterStaticSection => section.component === "filters";

export const getGatewayStaticFilterConfig = (
  data: Pick<TGatewayHome, "staticSections">
): TGatewayFilterConfig | null => {
  const section = data.staticSections?.find(isGatewayFilterStaticSection);

  if (!section) {
    return null;
  }

  return {
    endpoint: section.endpoint,
    items: section.items,
    groups: section.groups,
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
  }) as Array<TGatewayHomeCarouselSection | TGatewayActivityGridSection>;

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
  const sectionWithAction = section as typeof section & GatewaySectionWithAction;

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
      section as TGatewayHomeCarouselSection | TGatewayActivityGridSection
    ).data) {
      items.set(item.id, item);
    }
  }

  return items;
};
