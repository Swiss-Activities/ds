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
  ProviderIcon,
  SectionActivityGrid,
  SectionFeatureBand,
  SectionHero,
  SectionRegionExplorer,
  SectionReviewGrid,
  gatewayHomepageHeroFallbackImage,
  renderWeatherIcon,
  type ActivityItem,
} from "@swiss-activities/ui";

type GatewayPlaygroundRendererProps = {
  data: TGatewayHome;
  context: AppGatewayContext;
  locale: string;
};

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

function renderGatewayHero(hero: GatewayHomeHeroData | null) {
  if (!hero) {
    return null;
  }

  return (
    <div className="sa-container py-6">
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
        variant={hero.variant}
      />
    </div>
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
    <div className="sa-container">
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
        className="py-6"
      />
    </div>
  );
}

function renderGatewayFeatureBandSection(
  section: GatewayHomeFeatureBandSectionData
) {
  return (
    <div className="sa-container">
      <SectionFeatureBand
        title={section.title}
        items={section.items.map((item) => ({
          id: item.id,
          icon: <ProviderIcon icon={item.icon} />,
          title: item.title,
          description: item.description,
        }))}
        className="py-6"
      />
    </div>
  );
}

function renderGatewayRegionMapSection(
  section: GatewayHomeRegionMapSectionData
) {
  return (
    <div className="sa-container">
      <SectionRegionExplorer
        title={section.title}
        tiles={section.tiles}
        className="py-6"
      />
    </div>
  );
}

function renderGatewayActivitySection(section: GatewayHomeActivitySectionData) {
  return (
    <div className="sa-container">
      <SectionActivityGrid
        title={section.title}
        className="py-6"
        activities={toPreviewActivity(section)}
      />
    </div>
  );
}

function renderGatewaySection(section: GatewayHomeSectionData) {
  if (section.component === "filters") {
    return (
      <div className="sa-container py-4">
        <GatewayFilters
          filters={getPlaygroundFilterConfig(section.filterConfig)}
          labels={playgroundFilterLabels}
        />
      </div>
    );
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

  return renderGatewayActivitySection(section);
}

export function GatewayPlaygroundRenderer({
  context,
  data,
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
        renderGatewayHero={({ hero }) => renderGatewayHero(hero)}
        renderPage={({ hero, sections }) => (
          <>
            {hero}
            {sections.map((section, index) => (
              <div key={`${section.id}-${index}`}>
                {renderGatewaySection(section)}
              </div>
            ))}
          </>
        )}
      />
    </GatewayProvider>
  );
}
