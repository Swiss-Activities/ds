import { describe, expect, test } from "bun:test";
import {
  mapGatewayHomeData,
  toGatewayDestinationImageHero,
  toGatewayHomeHero,
  toGatewayStaticHero,
} from "./gatewayHome";
import type {
  TGatewayActivityCardItem,
  TGatewayActivityCarouselSection,
  TGatewayActivityGridSection,
  TGatewayFilterStaticSection,
  TGatewayHome,
  TGatewayHomeHeroSection,
  TGatewayHomeWeatherCardSection,
  TGatewayReviewCarouselSection,
} from "../gateway/types";

const labels = {
  categories: {
    fireplaces: "Fireplaces",
  },
  dateRange: {
    from: "from",
    until: "until",
  },
  distanceUnit: "km",
};

const mapOptions = {
  locale: "de_CH",
  labels,
  priceLabel: "pro Person",
  fromLabel: "ab",
};

const weatherDay = {
  date: "2026-06-08",
  day: "Heute",
  dayFull: "Heute",
  tempMin: 12,
  tempMax: 24,
  icon: "sunny",
  description: "Sonnig",
};

const activityItem = {
  id: "activity-1",
  type: "activity",
  title: "Paragliding",
  imageUrl: "https://img.test/teaser_paragliding_abcdef12.jpg",
  images: ["https://img.test/gallery_landing_zone_12345678.jpg"],
  subtitle: "Interlaken",
  priceFormatted: "CHF 190",
  rating: 4.8,
  reviewCount: 12,
  path: "/paragliding/",
  distanceKm: 1.2,
  lat: 46.68,
  lng: 7.86,
} satisfies TGatewayActivityCardItem;

const filterSection = {
  id: "filters",
  component: "filters",
  endpoint: "/app/v1/activity-types/paragliding/filter",
  items: [],
  groups: [
    {
      id: "destination",
      type: "dropdown",
      title: "Reiseziel",
      param: "destination",
      options: [
        {
          id: "destination:interlaken",
          label: "Interlaken",
          value: "interlaken",
          count: 0,
          selected: false,
          lat: 46.6863,
          lng: 7.8632,
        },
      ],
    },
    {
      id: "audience",
      type: "checkbox",
      title: "Geeignet für",
      param: "tags",
      options: [
        {
          id: "families",
          label: "Familien",
          value: "families",
          count: 8,
          selected: false,
        },
      ],
    },
  ],
} satisfies TGatewayFilterStaticSection;

const heroSection = {
  id: "hero",
  component: "hero",
  text: "Hi aus der Schweiz.",
  destination: null,
  forecast: {
    title: "Zürich",
    data: [weatherDay],
  },
  weather: "sunny",
  weatherLabel: "Sonnig",
  timeOfDay: "morning",
  timeOfDayLabel: "Morgen",
} satisfies TGatewayHomeHeroSection;

const weatherCardSection = {
  id: "weather_card",
  component: "weather_card",
  title: "Interlaken",
  imageUrl: "https://img.test/interlaken.jpg",
  data: [weatherDay],
} satisfies TGatewayHomeWeatherCardSection;

const activityCarouselSection = {
  id: "popular",
  component: "carousel",
  title: "Popular",
  pillarPath: "/app/v1/activity-types/paragliding",
  actionPath: "/app/v1/activity-types/paragliding",
  data: [activityItem],
  alternates: [
    {
      id: "alt-fireplaces",
      title: "Fireplaces",
      pillarPath: "/app/v1/non-bookable/fireplaces",
    },
  ],
} satisfies TGatewayActivityCarouselSection & { actionPath: string };

const reviewsSection = {
  id: "reviews",
  component: "carousel",
  title: "Reviews",
  data: [
    {
      id: "review-1",
      type: "review",
      title: "Paragliding",
      activityId: "activity-1",
      rating: 5,
      body: "Great.",
      reviewerName: "Dennis",
      reviewerCountry: "CH",
    },
  ],
} satisfies TGatewayReviewCarouselSection;

const gridSection = {
  id: "activity_grid",
  component: "activity_grid",
  title: "Activities",
  data: [activityItem],
  meta: {
    pagination: {
      page: 1,
      perPage: 20,
      total: 42,
      hasMore: true,
    },
  },
} satisfies TGatewayActivityGridSection;

describe("gateway home mapper", () => {
  test("maps home hero, filters, and mixed sections", () => {
    const data = {
      staticSections: [filterSection],
      sections: [
        heroSection,
        weatherCardSection,
        activityCarouselSection,
        reviewsSection,
        {
          id: "feature_band",
          component: "feature_band",
          title: "Why us",
          data: [
            {
              id: "support",
              icon: { provider: "lucide", name: "check" },
              title: "Support",
              description: "Local team.",
            },
          ],
        },
        {
          id: "region_map",
          component: "region_map",
          title: "Regions",
          data: [
            {
              id: "206",
              slug: "zurich-region",
              title: "Region Zürich",
              path: "/app/v1/regions/region-zuerich",
              numberOfActivities: 303,
            },
          ],
        },
      ],
    } satisfies TGatewayHome;

    const mapped = mapGatewayHomeData(data, {
      ...mapOptions,
      selectedRegion: "zurich-region",
      filterSelection: {
        destination: "interlaken",
        tags: ["families"],
      },
      getPillarPathHref: (path) => (path ? `/?pillar=${path}` : null),
    });

    expect(mapped.shouldUseFallbackHero).toBe(false);
    expect(mapped.hero).toMatchObject({
      id: "hero",
      variant: "summary",
      title: "Hi aus der Schweiz.",
      weatherDescription: "Sonnig",
      weatherTitle: "Zürich",
    });
    expect(mapped.sections.map((section) => section.component)).toEqual([
      "filters",
      "carousel",
      "reviews",
      "feature_band",
      "region_map",
    ]);

    const filters = mapped.sections[0];
    expect(filters.component).toBe("filters");
    expect(filters.filterConfig.items).toEqual([
      {
        id: "tag:families",
        label: "Familien",
        kind: "removable",
        param: "tags",
        value: "families",
      },
      {
        id: "destination:interlaken",
        label: "Interlaken",
        kind: "removable",
        param: "destination",
        value: "interlaken",
      },
    ]);
    expect(filters.filterConfig.groups[0]?.options[0]?.selected).toBe(true);
    expect(filters.filterConfig.groups[1]?.options[0]?.selected).toBe(true);

    const carousel = mapped.sections[1];
    expect(carousel.component).toBe("carousel");
    expect(carousel).toMatchObject({
      titlePillarPath: "/app/v1/activity-types/paragliding",
      actionHref: "/app/v1/activity-types/paragliding",
      alternates: [
        {
          id: "alt-fireplaces",
          href: "/?pillar=/app/v1/non-bookable/fireplaces",
        },
      ],
    });
    expect(carousel.items[0]?.itemData).toMatchObject({
      title: "Paragliding",
      distance: "1.2 km",
      price: "ab CHF 190",
      mapPoint: {
        id: "activity-1",
        priceLabel: "ab CHF 190",
      },
    });

    const regionMap = mapped.sections[4];
    expect(regionMap.component).toBe("region_map");
    expect(regionMap.tiles[0]).toMatchObject({
      id: "region-zuerich",
      active: true,
      count: 303,
      pathSlug: "region-zuerich",
    });
  });

  test("uses weather card as destination image summary hero", () => {
    const data = {
      context: {
        type: "destination",
        id: "destination-1",
        title: "Interlaken",
        slug: "interlaken",
        imageUrl: "https://img.test/interlaken.jpg",
        lat: 46.6863,
        lng: 7.8632,
      },
      sections: [weatherCardSection, activityCarouselSection],
    } satisfies TGatewayHome;

    expect(toGatewayDestinationImageHero(data)).toMatchObject({
      id: "weather_card",
      variant: "image_summary",
      title: "Interlaken",
      imageUrl: "https://img.test/interlaken.jpg",
      weatherDescription: "Sonnig",
      weatherTitle: "Interlaken",
    });
    expect(toGatewayHomeHero(data)).toMatchObject({
      variant: "image_summary",
      title: "Interlaken",
    });
  });

  test("uses centered title hero for entity contexts", () => {
    const data = {
      context: {
        type: "point-of-interest",
        id: "poi-1",
        title: "Jungfraujoch",
        slug: "jungfraujoch",
        imageUrl: "https://img.test/jungfraujoch.jpg",
        lat: 46.5475,
        lng: 7.9806,
      },
      staticSections: [
        {
          id: "hero",
          component: "hero",
          title: "Jungfraujoch",
          imageUrl: "https://img.test/jungfraujoch.jpg",
        },
      ],
      sections: [gridSection],
    } satisfies TGatewayHome;

    expect(toGatewayStaticHero(data)).toMatchObject({
      id: "hero",
      variant: "centered_title",
      title: "Jungfraujoch",
    });
  });

  test("can suppress static filters and maps grid pagination", () => {
    const data = {
      staticSections: [filterSection],
      sections: [gridSection],
    } satisfies TGatewayHome;

    const withFilters = mapGatewayHomeData(data, mapOptions);
    const withoutFilters = mapGatewayHomeData(data, {
      ...mapOptions,
      filterConfig: null,
    });

    expect(withFilters.sections[0]?.component).toBe("filters");
    expect(withoutFilters.sections.map((section) => section.component)).toEqual([
      "activity_grid",
    ]);
    expect(withoutFilters.sections[0]).toMatchObject({
      component: "activity_grid",
      pagination: {
        page: 1,
        perPage: 20,
        total: 42,
        hasMore: true,
      },
    });
  });
});
