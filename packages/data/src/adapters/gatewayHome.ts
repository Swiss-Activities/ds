import {
  applyGatewayFilterSelection,
  getGatewaySectionActionHref,
  getGatewaySectionAlternates,
  getGatewaySectionPillarPath,
  getGatewayStaticFilterConfig,
  getGatewayStaticFilterSection,
  isGatewayActivityGridSection,
  isGatewayActivitySection,
  isGatewayCarouselSection,
  isGatewayFeatureBandSection,
  isGatewayHeroSection,
  isGatewayRegionMapSection,
  isGatewaySuggestedTypesSection,
  isGatewayReviewSection,
  isGatewayWeatherCardSection,
} from "../gateway/sections";
import type {
  TGatewayActivityCardItem,
  TGatewayActivityGridSection,
  TGatewayActivityCarouselSection,
  TGatewayFeatureBandItem,
  TGatewayFeatureBandSection,
  TGatewayFilterConfig,
  TGatewayHome,
  TGatewayHomeSection,
  TGatewayRegionMapSection,
  TGatewaySuggestedTypesSection,
  TGatewayReviewCarouselSection,
  TGatewaySectionAlternate,
  TGatewayWeatherCardItem,
} from "../gateway/types";
import {
  toGatewayActivityItemData,
  type GatewayActivityItemData,
  type GatewayActivityItemLabels,
} from "./gatewayActivityItem";
import {
  toGatewayRegionMapTiles,
  type GatewayRegionMapTileData,
} from "./gatewayRegionMap";
import {
  toGatewayReviewItems,
  type GatewayReviewItemData,
} from "./gatewayReviewItem";

export type GatewayHomeSelection = {
  activityType?: string | null;
  destination?: string | null;
  nonBookable?: string | null;
  poi?: string | null;
  region?: string | null;
};

export type GatewayHomeHeroData = {
  id: string;
  moduleIndex: number;
  variant?: "localized" | "summary" | "centered_title" | "image_summary";
  title: string;
  imageUrl?: string | null;
  days?: TGatewayWeatherCardItem[];
  weatherDescription?: string | null;
  weatherTitle?: string | null;
};

export type GatewayHomeFilterSectionData = {
  id: string;
  component: "filters";
  filterConfig: TGatewayFilterConfig;
};

export type GatewayHomeReviewSectionData = {
  id: string;
  component: "reviews";
  title: string;
  moduleIndex: number;
  reviews: GatewayReviewItemData[];
  rawSection: TGatewayReviewCarouselSection;
};

export type GatewayHomeFeatureBandSectionData = {
  id: string;
  component: "feature_band";
  title?: string | null;
  moduleIndex: number;
  items: TGatewayFeatureBandItem[];
  rawSection: TGatewayFeatureBandSection;
};

export type GatewayHomeRegionMapSectionData = {
  id: string;
  component: "region_map";
  title: string;
  moduleIndex: number;
  tiles: GatewayRegionMapTileData[];
  rawSection: TGatewayRegionMapSection;
};

export type GatewayHomeSuggestedTypesSectionData = {
  id: string;
  component: "suggested_types";
  title: string;
  moduleIndex: number;
  items: Array<{
    id: string;
    title: string;
    imageUrl: string | null;
    href: string | null;
  }>;
  rawSection: TGatewaySuggestedTypesSection;
};

export type GatewayHomeActivitySectionItemData = {
  item: TGatewayActivityCardItem;
  itemData: GatewayActivityItemData;
  cardIndex: number;
};

export type GatewayHomeActivitySectionData = {
  id: string;
  component: "carousel" | "activity_grid";
  title: string;
  moduleIndex: number;
  titlePillarPath: string | null;
  actionHref: string | null;
  alternates?: Array<TGatewaySectionAlternate & { href: string | null }>;
  items: GatewayHomeActivitySectionItemData[];
  pagination?: TGatewayActivityGridSection["meta"]["pagination"];
  rawSection: TGatewayActivityCarouselSection | TGatewayActivityGridSection;
};

export type GatewayHomeSectionData =
  | GatewayHomeFilterSectionData
  | GatewayHomeReviewSectionData
  | GatewayHomeFeatureBandSectionData
  | GatewayHomeRegionMapSectionData
  | GatewayHomeSuggestedTypesSectionData
  | GatewayHomeActivitySectionData;

export type GatewayHomeData = {
  hero: GatewayHomeHeroData | null;
  sections: GatewayHomeSectionData[];
  shouldUseFallbackHero: boolean;
};

type GatewayHomeFilterSelection = {
  destination?: string | null;
  tags?: string[];
};

type MapGatewayHomeDataOptions = {
  locale: string;
  labels: GatewayActivityItemLabels;
  priceLabel: string;
  fromLabel: string;
  selection?: GatewayHomeSelection;
  selectedRegion?: string | null;
  filterConfig?: TGatewayFilterConfig | null;
  filterSelection?: GatewayHomeFilterSelection;
  sourceSections?: TGatewayHomeSection[];
  getPillarPathHref?: (pillarPath?: string | null) => string | null;
};

const hasGatewayContextType = (data: TGatewayHome, type: string) =>
  data.context?.type === type;

const isActivityTypeHeroContext = (data: TGatewayHome) =>
  hasGatewayContextType(data, "activity-type") ||
  hasGatewayContextType(data, "non-bookable") ||
  hasGatewayContextType(data, "region") ||
  hasGatewayContextType(data, "point-of-interest");

const shouldUseActivityTypeHero = (
  data: TGatewayHome,
  selection?: GatewayHomeSelection
) =>
  Boolean(
    selection?.activityType ||
      selection?.nonBookable ||
      selection?.region ||
      selection?.poi ||
      isActivityTypeHeroContext(data)
  );

const shouldUseDestinationHero = (
  data: TGatewayHome,
  selection?: GatewayHomeSelection
) =>
  Boolean(selection?.destination || hasGatewayContextType(data, "destination"));

export const toGatewayWeatherHero = (
  data: Pick<TGatewayHome, "sections">
): GatewayHomeHeroData | null => {
  const sectionIndex = (data.sections ?? []).findIndex(
    isGatewayWeatherCardSection
  );
  const section = sectionIndex >= 0 ? data.sections?.[sectionIndex] : undefined;

  if (!section || !isGatewayWeatherCardSection(section)) {
    return null;
  }

  return {
    id: section.id,
    moduleIndex: sectionIndex,
    title: section.title,
    imageUrl: section.imageUrl ?? null,
    days: section.data,
  };
};

export const toGatewayDestinationImageHero = (
  data: Pick<TGatewayHome, "sections">
): GatewayHomeHeroData | null => {
  const sectionIndex = (data.sections ?? []).findIndex(
    isGatewayWeatherCardSection
  );
  const section = sectionIndex >= 0 ? data.sections?.[sectionIndex] : undefined;

  if (!section || !isGatewayWeatherCardSection(section)) {
    return null;
  }

  const currentForecast = section.data[0];

  return {
    id: section.id,
    moduleIndex: sectionIndex,
    variant: "image_summary",
    title: section.title,
    imageUrl: section.imageUrl ?? null,
    days: section.data,
    weatherDescription: currentForecast?.description || null,
    weatherTitle: section.title,
  };
};

export const toGatewaySummaryHero = (
  data: Pick<TGatewayHome, "sections">
): GatewayHomeHeroData | null => {
  const sectionIndex = (data.sections ?? []).findIndex(isGatewayHeroSection);
  const section = sectionIndex >= 0 ? data.sections?.[sectionIndex] : undefined;

  if (!section || !isGatewayHeroSection(section)) {
    return null;
  }

  const forecastDays = section.forecast?.data ?? [];
  const currentForecast = forecastDays[0];

  return {
    id: section.id,
    moduleIndex: sectionIndex,
    variant: "summary",
    title: section.text,
    days: forecastDays,
    weatherDescription: currentForecast?.description || null,
    weatherTitle: section.forecast?.title ?? null,
  };
};

export const toGatewayStaticHero = (
  data: Pick<TGatewayHome, "context" | "staticSections">
): GatewayHomeHeroData | null => {
  const heroSection = data.staticSections?.find(
    (section) => section.component === "hero"
  );

  if (heroSection) {
    return {
      id: heroSection.id,
      moduleIndex: 0,
      variant:
        heroSection.variant ??
        (data.context?.type === "region" ||
        data.context?.type === "non-bookable" ||
        data.context?.type === "point-of-interest"
          ? "centered_title"
          : "localized"),
      title: heroSection.title,
      imageUrl: heroSection.imageUrl ?? null,
    };
  }

  if (!isActivityTypeHeroContext(data as TGatewayHome)) {
    return null;
  }

  return {
    id: `${data.context?.type}:${data.context?.id ?? "unknown"}`,
    moduleIndex: 0,
    variant: "centered_title",
    title: data.context?.title ?? "",
    imageUrl: data.context?.imageUrl ?? null,
  };
};

export const toGatewayHomeHero = (
  data: TGatewayHome,
  selection?: GatewayHomeSelection
): GatewayHomeHeroData | null => {
  if (shouldUseActivityTypeHero(data, selection)) {
    return toGatewayStaticHero(data);
  }

  if (shouldUseDestinationHero(data, selection)) {
    // Website overview payloads ship a static hero; the app destination feed
    // builds an image hero from its weather_card section instead.
    return toGatewayStaticHero(data) ?? toGatewayDestinationImageHero(data);
  }

  return toGatewaySummaryHero(data) ?? toGatewayWeatherHero(data);
};

const toGatewayHomeActivitySection = (
  section: TGatewayActivityCarouselSection | TGatewayActivityGridSection,
  {
    fromLabel,
    getPillarPathHref,
    labels,
    locale,
    moduleIndex,
    priceLabel,
  }: {
    fromLabel: string;
    getPillarPathHref?: (pillarPath?: string | null) => string | null;
    labels: GatewayActivityItemLabels;
    locale: string;
    moduleIndex: number;
    priceLabel: string;
  }
): GatewayHomeActivitySectionData => {
  const component = isGatewayActivityGridSection(section)
    ? ("activity_grid" as const)
    : ("carousel" as const);
  const titlePillarPath = getGatewaySectionPillarPath(section);

  return {
    id: section.id,
    component,
    title: section.title,
    moduleIndex,
    titlePillarPath,
    actionHref: isGatewayCarouselSection(section)
      ? getGatewaySectionActionHref(section)
      : null,
    alternates: getGatewaySectionAlternates(
      section,
      getPillarPathHref ?? (() => null)
    ),
    items: section.data.map((item, cardIndex) => ({
      item,
      itemData: toGatewayActivityItemData(item, {
        locale,
        labels,
        priceLabel,
        fromLabel,
      }),
      cardIndex,
    })),
    pagination: isGatewayActivityGridSection(section)
      ? section.meta.pagination
      : undefined,
    rawSection: section,
  };
};

export const mapGatewayHomeSections = (
  data: TGatewayHome,
  {
    filterConfig,
    filterSelection,
    fromLabel,
    getPillarPathHref,
    labels,
    locale,
    priceLabel,
    selectedRegion,
    sourceSections,
  }: MapGatewayHomeDataOptions
): GatewayHomeSectionData[] => {
  const sections: GatewayHomeSectionData[] = [];
  const staticFilterSection = getGatewayStaticFilterSection(data);
  const resolvedFilterConfig =
    filterConfig === undefined ? getGatewayStaticFilterConfig(data) : filterConfig;

  if (resolvedFilterConfig) {
    sections.push({
      id: staticFilterSection?.id ?? "gateway_filters",
      component: "filters",
      filterConfig: applyGatewayFilterSelection(resolvedFilterConfig, {
        destination: filterSelection?.destination ?? null,
        tags: filterSelection?.tags ?? [],
      }),
    });
  }

  (sourceSections ?? data.sections).forEach((section, moduleIndex) => {
    if (isGatewayHeroSection(section) || isGatewayWeatherCardSection(section)) {
      return;
    }

    if (isGatewayReviewSection(section)) {
      sections.push({
        id: section.id,
        component: "reviews",
        title: section.title,
        moduleIndex,
        reviews: toGatewayReviewItems(section.data, locale),
        rawSection: section,
      });

      return;
    }

    if (isGatewayFeatureBandSection(section)) {
      sections.push({
        id: section.id,
        component: "feature_band",
        title: section.title,
        moduleIndex,
        items: section.data,
        rawSection: section,
      });

      return;
    }

    if (isGatewaySuggestedTypesSection(section)) {
      sections.push({
        id: section.id,
        component: "suggested_types",
        title: section.title,
        moduleIndex,
        items: section.data.map((item) => ({
          id: item.id,
          title: item.title,
          imageUrl: item.imageUrl ?? null,
          // Public permalink only — the app href is an /app/v1 path.
          href: item.webPath ?? null,
        })),
        rawSection: section,
      });

      return;
    }

    if (isGatewayRegionMapSection(section)) {
      sections.push({
        id: section.id,
        component: "region_map",
        title: section.title,
        moduleIndex,
        tiles: toGatewayRegionMapTiles(section.data, { selectedRegion }),
        rawSection: section,
      });

      return;
    }

    if (!isGatewayActivitySection(section)) {
      return;
    }

    sections.push(
      toGatewayHomeActivitySection(section, {
        fromLabel,
        getPillarPathHref,
        labels,
        locale,
        moduleIndex,
        priceLabel,
      })
    );
  });

  return sections;
};

export const mapGatewayHomeData = (
  data: TGatewayHome,
  options: MapGatewayHomeDataOptions
): GatewayHomeData => {
  const hero = toGatewayHomeHero(data, options.selection);

  return {
    hero,
    sections: mapGatewayHomeSections(data, options),
    shouldUseFallbackHero: !hero,
  };
};
