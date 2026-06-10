"use client";

import { useMemo, useState, type ReactNode } from "react";
import { mapGatewayHomeData } from "../adapters/gatewayHome";
import type {
  GatewayHomeActivitySectionData,
  GatewayHomeFeatureBandSectionData,
  GatewayHomeHeroData,
  GatewayHomeRegionMapSectionData,
  GatewayHomeReviewSectionData,
  GatewayHomeSectionData,
} from "../adapters/gatewayHome";
import { toGatewayActivityItemData } from "../adapters/gatewayActivityItem";
import { AppGateway, type AppGatewayContext } from "../app-gateway";
import { GatewayProvider } from "../gateway-provider";
import type {
  TGatewayActivityCardItem,
  TGatewayActivityDetail,
  TGatewayFilterConfig,
  TGatewayHome,
  TGatewayNonBookableDetail,
  TGatewayWeatherCardItem,
} from "../gateway/types";
import {
  GatewayFilters,
  GatewayMapResults,
  Icon,
  ProviderIcon,
  SectionActivityGrid,
  SectionFeatureBand,
  SectionGrid,
  SectionHero,
  SectionNonBookable,
  SectionProduct,
  SectionRegionExplorer,
  SectionReviewGrid,
  SectionReviews,
  SegmentedControl,
  Website,
  WebsiteLanguageSelect,
  gatewayHomepageHeroFallbackImage,
  renderWeatherIcon,
  type ActivityItem,
  type NonBookableFactItem,
  type ProductInfoListItem,
  type SectionReviewsLabels,
  type SectionReviewsReview,
  type SiteFooterProps,
  type SiteHeaderProps,
  type WebsiteLanguageSelectProps,
  type WebsiteProps,
} from "@swiss-activities/ui";
import {
  WebsiteGatewaySearch,
  type WebsiteGatewaySearchProps,
} from "./website-search";
import {
  Clock3,
  Cloud,
  List,
  MapPin,
  Star,
} from "@swiss-activities/ui/icons";

type UnknownRecord = Record<string, unknown>;
type ImageValue = { src: string; alt?: string };
type GatewayViewMode = "list" | "map";

export type WebsiteGatewayOverviewPageType =
  | "home"
  | "overview-activity-type"
  | "overview-destination"
  | "overview-non-bookable"
  | "overview-point-of-interest";

export type WebsiteGatewayDetailPageType =
  | "detail-activity"
  | "detail-non-bookable";

export type WebsiteGatewayOverviewPage = {
  type: WebsiteGatewayOverviewPageType;
  data: TGatewayHome;
  context?: AppGatewayContext;
  slug?: string | null;
};

export type WebsiteGatewayDetailActivityPage = {
  type: "detail-activity";
  id: string;
  detail: TGatewayActivityDetail;
  context?: AppGatewayContext;
};

export type WebsiteGatewayDetailNonBookablePage = {
  type: "detail-non-bookable";
  id: string;
  detail: TGatewayNonBookableDetail;
  context?: AppGatewayContext;
};

export type WebsiteGatewayPage =
  | WebsiteGatewayOverviewPage
  | WebsiteGatewayDetailActivityPage
  | WebsiteGatewayDetailNonBookablePage;

export type WebsiteGatewayContentRendererProps = {
  apiUrl?: string;
  data: TGatewayHome;
  context?: AppGatewayContext;
  gatewayUrl?: string;
  googleMapsApiKey?: string;
  heroSearch?: ReactNode;
  locale: string;
};

export type WebsiteGatewayPageContentProps = {
  apiUrl?: string;
  gatewayUrl?: string;
  googleMapsApiKey?: string;
  heroSearch?: ReactNode;
  locale?: string;
  page: WebsiteGatewayPage;
};

export type WebsiteGatewayPageRendererProps = Omit<
  WebsiteProps,
  "footer" | "gateway" | "header"
> & {
  apiUrl?: string;
  footer?: SiteFooterProps;
  gatewayUrl?: string;
  googleMapsApiKey?: string;
  header?: SiteHeaderProps;
  heroSearch?: ReactNode;
  /** Rendered as WebsiteLanguageSelect in the header and footer slots. */
  language?: WebsiteLanguageSelectProps;
  locale?: string;
  page: WebsiteGatewayPage;
  /** Rendered as WebsiteGatewaySearch in the hero search slot. */
  search?: Omit<WebsiteGatewaySearchProps, "locale" | "mode">;
  traceUrl?: string;
};

const HOMEPAGE_CAROUSEL_LAYOUT: Array<3 | 4> = [4, 3, 4, 3, 4];
const homepageHeroFlushClassName = "-mx-2 sm:-mx-4 lg:mx-0";
const sectionSpacingClassName = "pt-8 md:pt-12 lg:pt-16 xl:pt-20";

const gatewayLabels = {
  categories: {},
  dateRange: {
    from: "ab",
    until: "bis",
  },
  distanceUnit: "km",
};

const filterLabels = {
  filterGroupLess: "Weniger anzeigen",
  filterGroupMore: (remaining: number) => `${remaining} mehr anzeigen`,
  filterGroupNoResults: "Keine Ergebnisse",
  filterGroupSearchPlaceholder: "Suchen",
  selectedFilters: "Angewandte Filter",
};

const mapLabels = {
  activities: "Aktivitäten",
  noExactResultsTitle: "Keine genauen Treffer",
  noExactResultsDescription:
    "Versuche, einige deiner Filter zu ändern oder zu entfernen oder deinen Suchbereich anzupassen.",
  showNearestResults: "Nächstgelegene Ergebnisse anzeigen",
  resetDate: "Zeitraum zurücksetzen",
};

const priceLabel = "pro Person";
const fromLabel = "ab";

function isRecord(value: unknown): value is UnknownRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function getValue(root: unknown, path: string[]) {
  return path.reduce<unknown>((current, key) => {
    if (!isRecord(current)) {
      return undefined;
    }

    return current[key];
  }, root);
}

function getString(root: unknown, path: string[]) {
  const value = getValue(root, path);

  return typeof value === "string" ? value.trim() : "";
}

function getNumber(root: unknown, path: string[]) {
  const value = getValue(root, path);

  if (typeof value === "number" && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === "string") {
    const parsed = Number(value);

    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function getArray(root: unknown, path: string[]) {
  const value = getValue(root, path);

  return Array.isArray(value) ? value : [];
}

function toImageValue(src: string, alt: string): ImageValue {
  return { src, alt };
}

function uniqueImages(images: ImageValue[]) {
  const seen = new Set<string>();

  return images.filter((image) => {
    if (!isRecord(image) || typeof image.src !== "string") {
      return true;
    }

    if (seen.has(image.src)) {
      return false;
    }

    seen.add(image.src);
    return true;
  });
}

const getFilterConfig = (config: TGatewayFilterConfig): TGatewayFilterConfig => {
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

function PageSection({
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
    // Elevated so the search suggestion panel stacks above later sections
    // (sliders create their own transform stacking contexts).
    <section
      className={
        isSummaryHero ? "relative z-10 pt-6 sm:pt-8 lg:pt-10" : "relative z-10"
      }
    >
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
    <PageSection>
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
    </PageSection>
  );
}

function renderGatewayFeatureBandSection(
  section: GatewayHomeFeatureBandSectionData
) {
  return (
    <PageSection>
      <SectionFeatureBand
        title={section.title}
        items={section.items.map((item) => ({
          id: item.id,
          icon: <ProviderIcon icon={item.icon} />,
          title: item.title,
          description: item.description,
        }))}
      />
    </PageSection>
  );
}

function renderGatewayRegionMapSection(
  section: GatewayHomeRegionMapSectionData
) {
  return (
    <PageSection>
      <SectionRegionExplorer title={section.title} tiles={section.tiles} />
    </PageSection>
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
    <PageSection spacing={false}>
      <GatewayFilters
        action={action}
        className="pb-4"
        desktopDrawer="left"
        hideQuickFilters={hideQuickFilters}
        filters={getFilterConfig(section.filterConfig)}
        labels={filterLabels}
      />
    </PageSection>
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
    <PageSection spacing={useSectionSpacing}>
      {section.component === "activity_grid" ? (
        <SectionGrid title={null} activities={toPreviewActivity(section)} />
      ) : (
        <SectionActivityGrid
          title={section.title}
          activities={toPreviewActivity(section)}
          itemsPerRowLg={carouselItemsPerRowLg}
        />
      )}
    </PageSection>
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

function GatewayContentPage({
  data,
  googleMapsApiKey = "",
  hero,
  sections,
}: {
  data: TGatewayHome;
  googleMapsApiKey?: string;
  hero: ReactNode;
  sections: GatewayHomeSectionData[];
}) {
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
          apiKey={googleMapsApiKey}
          filterHeader={renderGatewayFilterSection({
            action: filterAction,
            hideQuickFilters: true,
            section: filterSection,
          })}
          labels={mapLabels}
          sectionTitle={activityGridSection.title}
        />
      ) : null}
    </div>
  );
}

function getContextFromPage(
  page: WebsiteGatewayOverviewPage,
  locale: string
): AppGatewayContext {
  const baseContext: AppGatewayContext = {
    country: "CH",
    lat: null,
    lng: null,
    locale,
    ...page.context,
  };
  const slug =
    page.slug ??
    (page.data.context && "slug" in page.data.context
      ? page.data.context.slug
      : null);

  switch (page.type) {
    case "overview-activity-type":
      return { ...baseContext, activityType: slug };
    case "overview-destination":
      return { ...baseContext, destination: slug };
    case "overview-non-bookable":
      return {
        ...baseContext,
        nonBookable:
          slug ??
          (page.data.context?.type === "non-bookable"
            ? page.data.context.category
            : null),
      };
    case "overview-point-of-interest":
      return { ...baseContext, poi: slug };
    case "home":
      return baseContext;
    default:
      page.type satisfies never;
      return baseContext;
  }
}

export function WebsiteGatewayContentRenderer({
  apiUrl = "",
  context,
  data,
  gatewayUrl = "",
  googleMapsApiKey,
  heroSearch,
  locale,
}: WebsiteGatewayContentRendererProps) {
  return (
    <GatewayProvider apiUrl={apiUrl} gatewayUrl={gatewayUrl} locale={locale}>
      <AppGateway<GatewayHomeSectionData, GatewayHomeHeroData>
        apiUrl={apiUrl}
        gatewayUrl={gatewayUrl}
        locale={locale}
        enabled
        initialData={data}
        initialContext={context}
        renderFallbackHero={() => null}
        buildFallbackSections={() => []}
        mapGatewayData={({ data: gatewayData }) => ({
          ...mapGatewayHomeData(gatewayData, {
            locale,
            labels: gatewayLabels,
            priceLabel,
            fromLabel,
          }),
        })}
        renderGatewayHero={({ hero }) => renderGatewayHero(hero, heroSearch)}
        renderPage={({ hero, sections }) => (
          <GatewayContentPage
            data={data}
            googleMapsApiKey={googleMapsApiKey}
            hero={hero}
            sections={sections}
          />
        )}
      />
    </GatewayProvider>
  );
}

function getSectionReviewsLabels(): SectionReviewsLabels {
  return {
    clearFilters: "Filter löschen",
    close: "Schliessen",
    filter: "Filter",
    general: "Allgemein",
    helpfulQuestion: "Hilfreich?",
    helpfulSelected: "Hilfreich",
    lessFilters: "Weniger anzeigen",
    noResults: "Keine Bewertungen gefunden",
    participants: "Teilnehmer",
    participantLabels: {
      couple: "Paar",
      group: "Gruppe",
      single: "Allein",
    },
    rating: "Bewertung",
    ratingEqual: (rating) => `${rating} Sterne`,
    ratingSingular: "Bewertung",
    reset: "Zurücksetzen",
    results: "Ergebnisse",
    reviewsPlural: "Bewertungen",
    searchPlaceholder: "Bewertungen suchen",
    sortDateAsc: "Älteste zuerst",
    sortDateDesc: "Neueste zuerst",
    sortRatingAsc: "Niedrigste Bewertung",
    sortRatingDesc: "Höchste Bewertung",
    textOnly: "Nur mit Text",
    title: "Bewertungen",
    viewMore: "Mehr anzeigen",
  };
}

function getActivityTitle(detail: TGatewayActivityDetail) {
  return (
    getString(detail.activity, ["info", "title"]) ||
    getString(detail.activity, ["title"]) ||
    detail.id
  );
}

function getActivityImages(detail: TGatewayActivityDetail) {
  const title = getActivityTitle(detail);
  const teaserUrl = getString(detail.activity, ["teaser_image", "url"]);
  const galleryImages = getArray(detail.activity, ["gallery"]).flatMap((item) => {
    const url = getString(item, ["url"]);

    return url ? [toImageValue(url, title)] : [];
  });

  return uniqueImages([
    ...(teaserUrl ? [toImageValue(teaserUrl, title)] : []),
    ...galleryImages,
  ]);
}

function getActivityRating(detail: TGatewayActivityDetail) {
  const score =
    detail.productContext.rating?.score ??
    getNumber(detail.activity, ["rating", "average_rating"]);
  const count =
    detail.productContext.rating?.count ??
    getNumber(detail.activity, ["rating", "num_ratings"]);

  return score
    ? {
        score,
        count: count ?? undefined,
        stacked: true,
      }
    : undefined;
}

function getActivityInfoItems(
  detail: TGatewayActivityDetail
): ProductInfoListItem[] {
  const weather = detail.productContext.weather;
  const meetingPoint = detail.productContext.meetingPoint;
  const items: Array<ProductInfoListItem | null> = [
    detail.productContext.openingHours
      ? {
          icon: <Icon icon={Clock3} />,
          title: "Öffnungszeiten",
          subtitle: detail.productContext.openingHours,
        }
      : null,
    weather
      ? {
          icon: <Icon icon={Cloud} />,
          title: weather.description ?? weather.locationName,
          subtitle: `${weather.temperature}°C | ${weather.precipitation} mm/h`,
        }
      : null,
    meetingPoint?.displayText || meetingPoint?.address
      ? {
          icon: <Icon icon={MapPin} />,
          title: "Adresse",
          subtitle: [
            meetingPoint.distanceKm ? `${meetingPoint.distanceKm} km` : null,
            meetingPoint.displayText ?? meetingPoint.address,
          ]
            .filter(Boolean)
            .join(" | "),
        }
      : null,
  ];

  return items.filter((item): item is ProductInfoListItem => item !== null);
}

function getActivityContentItems(detail: TGatewayActivityDetail) {
  return getArray(detail.activity, ["content_blocks"]).flatMap((item, index) => {
    const title = getString(item, ["title"]);
    const html = getString(item, ["text"]);

    return title && html
      ? [
          {
            id: `${title}-${index}`,
            title,
            content: (
              <div
                className="[&_li]:mb-1 [&_p]:mb-3 [&_p]:break-words [&_p]:text-[14px] [&_p]:leading-relaxed [&_p]:text-gray-700 [&_strong]:font-semibold [&_ul]:list-disc [&_ul]:pl-5"
                dangerouslySetInnerHTML={{ __html: html }}
              />
            ),
          },
        ]
      : [];
  });
}

function getReviewerName(review: UnknownRecord) {
  return (
    [
      getString(review, ["reviewer", "first_name"]),
      getString(review, ["reviewer", "last_name"]),
    ]
      .filter(Boolean)
      .join(" ") || "Gast"
  );
}

function getActivityReviews(
  detail: TGatewayActivityDetail
): SectionReviewsReview[] {
  return detail.reviews.flatMap((review, index) => {
    if (!isRecord(review)) {
      return [];
    }

    const text = getString(review, ["review"]);
    const rating = getNumber(review, ["rating"]);

    if (!text || !rating) {
      return [];
    }

    return [
      {
        id: String(getValue(review, ["product_review_id"]) ?? index),
        author: getReviewerName(review),
        category: getString(review, ["category"]) || undefined,
        countryCode: getString(review, ["countryCode"]) || undefined,
        date: getString(review, ["date_created"]),
        rating,
        searchTerms: [text, getReviewerName(review)],
        text,
        upvoteCount: getNumber(review, ["upvoteCount"]) ?? undefined,
      },
    ];
  });
}

function formatPrice(value: number | null) {
  return value ? `CHF ${value}` : "";
}

function toActivityCardItem(value: unknown): TGatewayActivityCardItem | null {
  if (!isRecord(value)) {
    return null;
  }

  const id = String(getValue(value, ["id"]) ?? "");
  const title = getString(value, ["info", "title"]) || getString(value, ["title"]);
  const imageUrl = getString(value, ["teaser_image", "url"]);

  if (!id || !title) {
    return null;
  }

  return {
    id,
    title,
    type: "activity",
    imageUrl: imageUrl || null,
    priceFormatted: formatPrice(getNumber(value, ["summary", "startingPrice"])),
    rating: getNumber(value, ["rating", "average_rating"]),
    reviewCount: getNumber(value, ["rating", "num_ratings"]),
    path: getString(value, ["urls", "de_CH"]) || "#",
    subtitle: getString(value, ["location", "title"]) || null,
  };
}

function getRelatedActivities(detail: TGatewayActivityDetail): ActivityItem[] {
  return getArray(detail.activity, ["similarActivities"])
    .flatMap((item) => {
      const gatewayItem = toActivityCardItem(item);

      return gatewayItem
        ? [
            toGatewayActivityItemData(gatewayItem, {
              locale: "de_CH",
              labels: gatewayLabels,
              priceLabel,
              fromLabel,
            }),
          ]
        : [];
    })
    .slice(0, 8);
}

export function WebsiteGatewayActivityDetail({
  detail,
}: {
  detail: TGatewayActivityDetail;
}) {
  const title = getActivityTitle(detail);

  return (
    <SectionProduct
      title={title}
      images={getActivityImages(detail)}
      backLabel="Zurück"
      rating={getActivityRating(detail)}
      badges={[
        {
          icon: <Icon icon={Star} />,
          title: `${detail.reviewSummary.totalAverage.toFixed(1)}`,
          subtitle: `${detail.reviewSummary.totalAmount} Bewertungen`,
        },
      ]}
      description={getString(detail.activity, ["info", "teaser"])}
      infoItems={getActivityInfoItems(detail)}
      reviewsContent={
        <SectionReviews
          averageRating={detail.reviewSummary.totalAverage}
          labels={getSectionReviewsLabels()}
          reviewCount={detail.reviewSummary.totalAmount}
          reviews={getActivityReviews(detail)}
        />
      }
      contentItems={getActivityContentItems(detail)}
      relatedActivitiesTitle="Weitere Aktivitäten"
      relatedActivities={getRelatedActivities(detail)}
    />
  );
}

function getNonBookableImages(detail: TGatewayNonBookableDetail) {
  const title = detail.title ?? "Detail";

  return uniqueImages(
    [detail.coverImage, ...(detail.photos ?? [])].flatMap((src) =>
      src ? [toImageValue(src, title)] : []
    )
  );
}

function formatAmenityLabel(key: string) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .trim()
    .replace(/^./, (match) => match.toUpperCase());
}

function getNonBookableDetailSections(detail: TGatewayNonBookableDetail) {
  const amenityEntries = Object.entries(detail.amenities ?? {});

  return amenityEntries.length
    ? [
        {
          id: "amenities",
          title: "Ausstattung",
          items: amenityEntries.map(
            ([key, value]): NonBookableFactItem => ({
              id: key,
              label: formatAmenityLabel(key),
              status:
                typeof value === "boolean"
                  ? value
                    ? "available"
                    : "unavailable"
                  : "neutral",
              value:
                typeof value === "number" && Number.isFinite(value)
                  ? String(value)
                  : undefined,
            })
          ),
        },
      ]
    : [];
}

function getNonBookableHighlights(
  detail: TGatewayNonBookableDetail
): ProductInfoListItem[] {
  const items: Array<ProductInfoListItem | null> = [
    detail.canton
      ? {
          icon: <Icon icon={MapPin} />,
          title: "Kanton",
          subtitle: detail.canton,
        }
      : null,
    detail.location?.lat && detail.location.lng
      ? {
          icon: <Icon icon={MapPin} />,
          title: "Koordinaten",
          subtitle: `${detail.location.lat}, ${detail.location.lng}`,
        }
      : null,
  ];

  return items.filter((item): item is ProductInfoListItem => item !== null);
}

function getNonBookableRelatedActivities(
  detail: TGatewayNonBookableDetail
): ActivityItem[] {
  return (detail.nearbySection?.data ?? [])
    .filter((item): item is TGatewayActivityCardItem => item.type !== "review")
    .map((item) =>
      toGatewayActivityItemData(item, {
        locale: "de_CH",
        labels: gatewayLabels,
        priceLabel,
        fromLabel,
      })
    );
}

export function WebsiteGatewayNonBookableDetail({
  detail,
}: {
  detail: TGatewayNonBookableDetail;
}) {
  return (
    <SectionNonBookable
      title={detail.title ?? "Detail"}
      images={getNonBookableImages(detail)}
      backLabel="Zurück"
      description={detail.description}
      highlights={getNonBookableHighlights(detail)}
      detailSections={getNonBookableDetailSections(detail)}
      sourceLabel="Quelle öffnen"
      sourceHref={detail.sourceUrl ?? undefined}
      relatedActivitiesTitle={detail.nearbySection?.title ?? "In der Nähe"}
      relatedActivities={getNonBookableRelatedActivities(detail)}
    />
  );
}

export function WebsiteGatewayPageContent({
  googleMapsApiKey,
  apiUrl,
  gatewayUrl,
  heroSearch,
  locale = "de_CH",
  page,
}: WebsiteGatewayPageContentProps) {
  if (page.type === "detail-activity") {
    return <WebsiteGatewayActivityDetail detail={page.detail} />;
  }

  if (page.type === "detail-non-bookable") {
    return <WebsiteGatewayNonBookableDetail detail={page.detail} />;
  }

  return (
    <WebsiteGatewayContentRenderer
      apiUrl={apiUrl}
      context={getContextFromPage(page, locale)}
      data={page.data}
      gatewayUrl={gatewayUrl}
      googleMapsApiKey={googleMapsApiKey}
      heroSearch={heroSearch}
      locale={locale}
    />
  );
}

export function WebsiteGatewayPageRenderer({
  afterFooter,
  apiUrl = "",
  className,
  dir,
  footer,
  footerSlot,
  gatewayUrl = "",
  googleMapsApiKey,
  header,
  headerSlot,
  heroSearch,
  language,
  locale = "de_CH",
  page,
  search,
  traceUrl,
}: WebsiteGatewayPageRendererProps) {
  const normalizedLocale = locale.replace("_", "-");
  const headerProps = header
    ? {
        ...header,
        languageSelector:
          header.languageSelector ??
          (language ? <WebsiteLanguageSelect {...language} /> : undefined),
      }
    : header;
  const footerProps = footer
    ? {
        ...footer,
        languageSelector:
          footer.languageSelector ??
          (language ? <WebsiteLanguageSelect {...language} long /> : undefined),
      }
    : footer;
  const resolvedHeroSearch =
    heroSearch ??
    (search ? (
      <WebsiteGatewaySearch {...search} locale={normalizedLocale} mode="main" />
    ) : undefined);

  return (
    <GatewayProvider
      apiUrl={apiUrl}
      gatewayUrl={gatewayUrl}
      locale={normalizedLocale}
      traceUrl={traceUrl}
    >
      <Website
        afterFooter={afterFooter}
        className={className}
        dir={dir}
        footer={footerProps}
        footerSlot={footerSlot}
        footerSpacing="page"
        gateway={
          <div className="lg:pt-8">
            <WebsiteGatewayPageContent
              apiUrl={apiUrl}
              gatewayUrl={gatewayUrl}
              googleMapsApiKey={googleMapsApiKey}
              heroSearch={resolvedHeroSearch}
              locale={locale}
              page={page}
            />
          </div>
        }
        header={headerProps}
        headerSlot={headerSlot}
      />
    </GatewayProvider>
  );
}
