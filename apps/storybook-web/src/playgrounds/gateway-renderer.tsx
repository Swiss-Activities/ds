import type { ReactNode } from "react";
import {
  AppGateway,
  GatewayProvider,
  applyGatewayFilterSelection,
  getGatewayStaticFilterConfig,
  isGatewayActivitySection,
  isGatewayFeatureBandSection,
  isGatewayHeroSection,
  isGatewayRegionMapSection,
  isGatewayReviewSection,
  isGatewayWeatherCardSection,
  toGatewayActivityItemData,
  toGatewayRegionMapTiles,
  toGatewayReviewItems,
  type AppGatewayContext,
  type TGatewayActivityCardItem,
  type TGatewayFilterConfig,
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

const toPreviewActivity = (
  item: TGatewayActivityCardItem,
  locale: string
): ActivityItem => {
  const activity = toGatewayActivityItemData(item, {
    locale,
    labels: playgroundGatewayLabels,
    priceLabel: "pro Person",
    fromLabel: "ab",
  });

  return {
    ...activity,
    type: activity.type,
  };
};

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

function renderGatewayHero(data: TGatewayHome) {
  const staticHero = data.staticSections?.find(
    (section) => section.component === "hero"
  );
  const weatherCard = data.sections.find(isGatewayWeatherCardSection);
  const hero = data.sections.find(isGatewayHeroSection);

  if (staticHero) {
    return (
      <div className="sa-container py-6">
        <SectionHero
          title={staticHero.title}
          image={renderImage(staticHero.imageUrl, staticHero.title)}
          variant={staticHero.variant ?? "centered_title"}
        />
      </div>
    );
  }

  if (weatherCard) {
    return (
      <div className="sa-container py-6">
        <SectionHero
          title={weatherCard.title}
          image={renderImage(
            weatherCard.imageUrl ?? gatewayHomepageHeroFallbackImage,
            weatherCard.title
          )}
          days={toWeatherDays(weatherCard.data)}
          unit="°"
          weatherTitle={weatherCard.title}
          weatherDescription={weatherCard.data[0]?.description}
          variant="image_summary"
        />
      </div>
    );
  }

  if (hero) {
    return (
      <div className="sa-container py-6">
        <SectionHero
          title={hero.text}
          days={toWeatherDays(hero.forecast?.data)}
          unit="°"
          weatherTitle={hero.forecast?.title}
          weatherDescription={hero.forecast?.data[0]?.description}
          variant="summary"
        />
      </div>
    );
  }

  return null;
}

function renderGatewaySections(data: TGatewayHome, locale: string) {
  const filterConfig = getGatewayStaticFilterConfig(data);
  const sections: ReactNode[] = [];

  if (filterConfig) {
    sections.push(
      <div key="gateway-filters" className="sa-container py-4">
        <GatewayFilters
          filters={applyGatewayFilterSelection(
            getPlaygroundFilterConfig(filterConfig),
            {
              destination: null,
              tags: [],
            }
          )}
          labels={playgroundFilterLabels}
        />
      </div>
    );
  }

  data.sections.forEach((section, sectionIndex) => {
    const sectionKey = `${section.id}-${sectionIndex}`;

    if (isGatewayHeroSection(section) || isGatewayWeatherCardSection(section)) {
      return;
    }

    if (isGatewayReviewSection(section)) {
      sections.push(
        <div key={sectionKey} className="sa-container">
          <SectionReviewGrid
            title={section.title}
            reviews={toGatewayReviewItems(section.data, locale).map(
              (review) => ({
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
              })
            )}
            className="py-6"
          />
        </div>
      );
      return;
    }

    if (isGatewayFeatureBandSection(section)) {
      sections.push(
        <div key={sectionKey} className="sa-container">
          <SectionFeatureBand
            title={section.title}
            items={section.data.map((item) => ({
              id: item.id,
              icon: <ProviderIcon icon={item.icon} />,
              title: item.title,
              description: item.description,
            }))}
            className="py-6"
          />
        </div>
      );
      return;
    }

    if (isGatewayRegionMapSection(section)) {
      sections.push(
        <div key={sectionKey} className="sa-container">
          <SectionRegionExplorer
            title={section.title}
            tiles={toGatewayRegionMapTiles(section.data)}
            className="py-6"
          />
        </div>
      );
      return;
    }

    if (!isGatewayActivitySection(section)) {
      return;
    }

    sections.push(
      <div key={sectionKey} className="sa-container">
        <SectionActivityGrid
          title={section.title}
          className="py-6"
          activities={section.data.map((item) =>
            toPreviewActivity(item, locale)
          )}
        />
      </div>
    );
  });

  return sections;
}

export function GatewayPlaygroundRenderer({
  context,
  data,
  locale,
}: GatewayPlaygroundRendererProps) {
  return (
    <GatewayProvider apiUrl="" gatewayUrl="" locale={locale}>
      <AppGateway<ReactNode, ReactNode>
        apiUrl=""
        gatewayUrl=""
        locale={locale}
        enabled
        initialData={data}
        initialContext={context}
        renderFallbackHero={() => null}
        buildFallbackSections={() => []}
        mapGatewayData={({ data: gatewayData }) => ({
          hero: renderGatewayHero(gatewayData),
          sections: renderGatewaySections(gatewayData, locale),
        })}
        renderGatewayHero={({ hero }) => hero}
        renderPage={({ hero, sections }) => (
          <>
            {hero}
            {sections}
          </>
        )}
      />
    </GatewayProvider>
  );
}
