"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  AppGateway,
  GatewayProvider,
  mapGatewayHomeData,
  type AppGatewayContext,
  type TGatewayFilterConfig,
  type GatewayHomeActivitySectionData,
  type GatewayHomeFeatureBandSectionData,
  type GatewayHomeHeroData,
  type GatewayHomeRegionMapSectionData,
  type GatewayHomeReviewSectionData,
  type GatewayHomeSectionData,
  type TGatewayHome,
  type TGatewayWeatherCardItem,
} from "@swiss-activities/data";
import {
  GatewayFilters,
  GatewayMapResults,
  Icon,
  ProviderIcon,
  SectionActivityGrid,
  SectionFeatureBand,
  SectionGrid,
  SectionHero,
  SectionRegionExplorer,
  SectionReviewGrid,
  SegmentedControl,
  gatewayHomepageHeroFallbackImage,
  renderWeatherIcon,
  type ActivityItem,
} from "@swiss-activities/ui";
import { List, MapPin } from "@swiss-activities/ui/icons";

type GatewayPlaygroundRendererProps = {
  data: TGatewayHome;
  context: AppGatewayContext;
  heroSearch?: ReactNode;
  locale: string;
};

type GatewayPlaygroundPageProps = {
  data: TGatewayHome;
  hero: ReactNode;
  sections: GatewayHomeSectionData[];
};

type GatewayViewMode = "list" | "map";

const HOMEPAGE_CAROUSEL_LAYOUT: Array<3 | 4> = [4, 3, 4, 3, 4];
const homepageHeroFlushClassName = "-mx-2 sm:-mx-4 lg:mx-0";
const sectionSpacingClassName = "pt-8 md:pt-12 lg:pt-16 xl:pt-20";
const playgroundGoogleMapsApiKey =
  import.meta.env.VITE_GOOGLE_MAPS_API_KEY ??
  import.meta.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ??
  "";

const playgroundGatewayLabels = {
  categories: {},
  dateRange: {
    from: "ab",
    until: "bis",
  },
  distanceUnit: "km",
};

const playgroundFilterLabels = {
  filterGroupLess: "Weniger anzeigen",
  filterGroupMore: (remaining: number) => `${remaining} mehr anzeigen`,
  filterGroupNoResults: "Keine Ergebnisse",
  filterGroupSearchPlaceholder: "Suchen",
  selectedFilters: "Angewandte Filter",
};

const playgroundMapLabels = {
  activities: "Aktivitäten",
  noExactResultsTitle: "Keine genauen Treffer",
  noExactResultsDescription:
    "Versuche, einige deiner Filter zu ändern oder zu entfernen oder deinen Suchbereich anzupassen.",
  showNearestResults: "Nächstgelegene Ergebnisse anzeigen",
  resetDate: "Zeitraum zurücksetzen",
};

const getPlaygroundFilterConfig = (
  config: TGatewayFilterConfig
): TGatewayFilterConfig => {
  const itemIds = new Map<string, number>();

  return {
    ...config,
    items: config.items.map((item) => {
      const count = itemIds.get(item.id) ?? 0;
      itemIds.set(item.id, count + 1);

      if (count === 0) {
        return item;
      }

      return {
        ...item,
        id: `${item.id}-${count}`,
      };
    }),
  };
};

const toWeatherDays = (
  days: TGatewayWeatherCardItem[] | null | undefined
) =>
  (days ?? []).map((item) => ({
    id: item.date ?? item.dayFull,
    date: item.date,
    label: item.day,
    low: item.tempMin,
    high: item.tempMax,
    icon: renderWeatherIcon(item.icon),
  }));

const renderImage = (src?: string | null, alt = "") =>
  src ? (
    <img
      src={src}
      alt={alt}
      style={{
        display: "block",
        height: "100%",
        objectFit: "cover",
        width: "100%",
      }}
    />
  ) : null;

const isFilterSection = (
  section: GatewayHomeSectionData
): section is Extract<GatewayHomeSectionData, { component: "filters" }> =>
  section.component === "filters";

const isReviewSection = (
  section: GatewayHomeSectionData
): section is GatewayHomeReviewSectionData => section.component === "reviews";

const isFeatureBandSection = (
  section: GatewayHomeSectionData
): section is GatewayHomeFeatureBandSectionData =>
  section.component === "feature_band";

const isRegionMapSection = (
  section: GatewayHomeSectionData
): section is GatewayHomeRegionMapSectionData =>
  section.component === "region_map";

const isActivityGridSection = (
  section: GatewayHomeSectionData
): section is GatewayHomeActivitySectionData =>
  section.component === "activity_grid";

const isActivityCarouselSection = (
  section: GatewayHomeSectionData
): section is GatewayHomeActivitySectionData =>
  !isFilterSection(section) &&
  !isReviewSection(section) &&
  !isFeatureBandSection(section) &&
  !isRegionMapSection(section) &&
  section.component !== "activity_grid";

const shouldRenderSection = (section: GatewayHomeSectionData) => {
  if (isFilterSection(section)) return true;
  if (isReviewSection(section)) return section.reviews.length > 0;
  if (isFeatureBandSection(section)) return section.items.length > 0;
  if (isRegionMapSection(section)) return section.tiles.length > 0;

  return section.items.length > 0;
};

const shouldUseSectionSpacing = (
  section: GatewayHomeSectionData,
  previousSection: GatewayHomeSectionData | undefined
) => {
  if (isFilterSection(section)) return false;
  if (previousSection && isFilterSection(previousSection)) return false;

  return true;
};

function PlaygroundSection({
  children,
  flush = false,
  spacing = true,
}: {
  children: ReactNode;
  flush?: boolean;
  spacing?: boolean;
}) {
  return (
    <section className={spacing ? sectionSpacingClassName : undefined}>
      <div className="sa-container">
        <div className={flush ? homepageHeroFlushClassName : undefined}>
          {children}
        </div>
      </div>
    </section>
  );
}

function renderGatewayHero(
  hero: GatewayHomeHeroData | null,
  search?: ReactNode
) {
  if (!hero) {
    return null;
  }

  const isSummaryHero = hero.variant === "summary";

  return (
    <section className={isSummaryHero ? "pt-6 sm:pt-8 lg:pt-10" : undefined}>
      <div className="sa-container">
        <div className={isSummaryHero ? undefined : homepageHeroFlushClassName}>
          <SectionHero
            title={hero.title}
            image={renderImage(
              hero.imageUrl ?? gatewayHomepageHeroFallbackImage,
              hero.title
            )}
            days={toWeatherDays(hero.days)}
            unit="°"
            weatherTitle={hero.weatherTitle ?? undefined}
            weatherDescription={hero.weatherDescription ?? undefined}
            search={search}
            variant={hero.variant}
          />
        </div>
      </div>
    </section>
  );
}

const toPreviewActivity = (
  section: GatewayHomeActivitySectionData
): ActivityItem[] =>
  section.items.map(({ itemData }) => ({
    ...itemData,
    type: itemData.type,
  }));

function renderGatewayReviewSection(section: GatewayHomeReviewSectionData) {
  return (
    <PlaygroundSection>
      <SectionReviewGrid
        title={section.title}
        reviews={section.reviews.map((review) => ({
          id: review.id,
          author: review.author,
          countryCode: review.countryCode,
          date: review.date,
          rating: review.rating,
          text: review.text,
          activityPrefix: review.activityPrefix,
          activity: {
            label: review.activityTitle,
            href: "#",
          },
        }))}
      />
    </PlaygroundSection>
  );
}

function renderGatewayFeatureBandSection(
  section: GatewayHomeFeatureBandSectionData
) {
  return (
    <PlaygroundSection>
      <SectionFeatureBand
        title={section.title}
        items={section.items.map((item) => ({
          id: item.id,
          icon: <ProviderIcon icon={item.icon} />,
          title: item.title,
          description: item.description,
        }))}
      />
    </PlaygroundSection>
  );
}

function renderGatewayRegionMapSection(
  section: GatewayHomeRegionMapSectionData
) {
  return (
    <PlaygroundSection>
      <SectionRegionExplorer title={section.title} tiles={section.tiles} />
    </PlaygroundSection>
  );
}

function renderGatewayFilterSection({
  action,
  hideQuickFilters,
  section,
}: {
  action?: ReactNode;
  hideQuickFilters?: boolean;
  section: Extract<GatewayHomeSectionData, { component: "filters" }>;
}) {
  return (
    <PlaygroundSection spacing={false}>
      <GatewayFilters
        action={action}
        className="pb-4"
        desktopDrawer="left"
        hideQuickFilters={hideQuickFilters}
        filters={getPlaygroundFilterConfig(section.filterConfig)}
        labels={playgroundFilterLabels}
      />
    </PlaygroundSection>
  );
}

function renderGatewayActivitySection({
  carouselItemsPerRowLg,
  section,
  useSectionSpacing,
}: {
  carouselItemsPerRowLg?: 3 | 4;
  section: GatewayHomeActivitySectionData;
  useSectionSpacing: boolean;
}) {
  return (
    <PlaygroundSection spacing={useSectionSpacing}>
      {section.component === "activity_grid" ? (
        <SectionGrid title={null} activities={toPreviewActivity(section)} />
      ) : (
        <SectionActivityGrid
          title={section.title}
          activities={toPreviewActivity(section)}
          itemsPerRowLg={carouselItemsPerRowLg}
        />
      )}
    </PlaygroundSection>
  );
}

function renderGatewaySection({
  carouselItemsPerRowLg,
  filterAction,
  hideQuickFilters,
  section,
  useSectionSpacing,
}: {
  carouselItemsPerRowLg?: 3 | 4;
  filterAction?: ReactNode;
  hideQuickFilters?: boolean;
  section: GatewayHomeSectionData;
  useSectionSpacing: boolean;
}) {
  if (section.component === "filters") {
    return renderGatewayFilterSection({
      action: filterAction,
      hideQuickFilters,
      section,
    });
  }

  if (section.component === "reviews") {
    return renderGatewayReviewSection(section);
  }

  if (section.component === "feature_band") {
    return renderGatewayFeatureBandSection(section);
  }

  if (section.component === "region_map") {
    return renderGatewayRegionMapSection(section);
  }

  return renderGatewayActivitySection({
    carouselItemsPerRowLg,
    section,
    useSectionSpacing,
  });
}

function GatewayPlaygroundPage({
  data,
  hero,
  sections,
}: GatewayPlaygroundPageProps) {
  const [viewMode, setViewMode] = useState<GatewayViewMode>("list");
  const visibleSections = sections.filter(shouldRenderSection);
  const filterSection = visibleSections.find(isFilterSection);
  const activityGridSection = visibleSections.find(isActivityGridSection);
  const hasGridSection = Boolean(activityGridSection);
  const canUseMapMode =
    Boolean(activityGridSection) && data.context?.type === "activity-type";
  const effectiveViewMode = canUseMapMode ? viewMode : "list";
  const viewModeOptions = useMemo(
    () => [
      {
        value: "list" as const,
        label: "Liste",
        icon: <Icon icon={List} size="sm" />,
      },
      {
        value: "map" as const,
        label: "Karte",
        icon: <Icon icon={MapPin} size="sm" />,
      },
    ],
    []
  );
  const filterAction = canUseMapMode ? (
    <SegmentedControl
      iconOnly
      onChange={setViewMode}
      options={viewModeOptions}
      size="sm"
      value={viewMode}
    />
  ) : null;
  let activityCarouselIndex = 0;

  return (
    <div>
      {hero}
      {visibleSections.map((section, index) => {
        const carouselItemsPerRowLg = isActivityCarouselSection(section)
          ? HOMEPAGE_CAROUSEL_LAYOUT[
              activityCarouselIndex++ % HOMEPAGE_CAROUSEL_LAYOUT.length
            ]
          : undefined;

        return (
          <div key={`${section.id}-${index}`}>
            {renderGatewaySection({
              carouselItemsPerRowLg,
              filterAction,
              hideQuickFilters: hasGridSection,
              section,
              useSectionSpacing: shouldUseSectionSpacing(
                section,
                visibleSections[index - 1]
              ),
            })}
          </div>
        );
      })}
      {filterSection && activityGridSection ? (
        <GatewayMapResults
          open={canUseMapMode && effectiveViewMode === "map"}
          resetKey={activityGridSection.id}
          activities={toPreviewActivity(activityGridSection)}
          apiKey={playgroundGoogleMapsApiKey}
          filterHeader={renderGatewayFilterSection({
            action: filterAction,
            hideQuickFilters: true,
            section: filterSection,
          })}
          labels={playgroundMapLabels}
          sectionTitle={activityGridSection.title}
        />
      ) : null}
    </div>
  );
}

export function GatewayPlaygroundRenderer({
  context,
  data,
  heroSearch,
  locale,
}: GatewayPlaygroundRendererProps) {
  return (
    <GatewayProvider apiUrl="" gatewayUrl="" locale={locale}>
      <AppGateway<GatewayHomeSectionData, GatewayHomeHeroData>
        apiUrl=""
        gatewayUrl=""
        locale={locale}
        enabled
        initialData={data}
        initialContext={context}
        renderFallbackHero={() => null}
        buildFallbackSections={() => []}
        mapGatewayData={({ data: gatewayData }) => ({
          ...mapGatewayHomeData(gatewayData, {
            locale,
            labels: playgroundGatewayLabels,
            priceLabel: "pro Person",
            fromLabel: "ab",
          }),
        })}
        renderGatewayHero={({ hero }) => renderGatewayHero(hero, heroSearch)}
        renderPage={({ hero, sections }) => (
          <GatewayPlaygroundPage data={data} hero={hero} sections={sections} />
        )}
      />
    </GatewayProvider>
  );
}
