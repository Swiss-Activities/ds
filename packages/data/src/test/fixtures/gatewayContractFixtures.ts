import type {
  TGatewayActivityCardItem,
  TGatewayActivityDetail,
  TGatewayBlogPostDetail,
  TGatewayFeatureBandSection,
  TGatewayFilterStaticSection,
  TGatewayHome,
  TGatewayNonBookableDetail,
  TGatewayRegionMapSection,
  TGatewayReviewItem,
} from "../../gateway/types";

export const GATEWAY_CONTRACT_FIXTURE_VERSION = "gateway-home-v1";

const weatherDay = {
  date: "2026-06-09",
  day: "Heute",
  dayFull: "Heute",
  tempMin: 14,
  tempMax: 27,
  icon: "sunny",
  description: "Meist klar",
};

const activity = {
  id: "activity-320",
  type: "activity",
  title: "Paragliding Grindelwald ab First",
  imageUrl: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/teaser_4d4fcf80f5.jpg",
  images: [
    "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/gallery_paragliding_first_1.jpg",
    {
      url: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/gallery_paragliding_first_2.jpg",
      alt: "Paragliding over Grindelwald",
    },
  ],
  subtitle: "Grindelwald",
  priceFormatted: "CHF 220",
  rating: 4.82,
  reviewCount: 204,
  path: "/paragliding/paragliding-grindelwald-first/",
  distanceKm: 1.2,
  lat: 46.6621,
  lng: 8.0538,
} satisfies TGatewayActivityCardItem;

const nonBookable = {
  id: "fireplace-1",
  type: "non-bookable",
  title: "Feuerstelle am See",
  imageUrl: "https://api.grillstelle.ch/images/240/446.jpg",
  subtitle: "Interlaken",
  category: "fireplaces",
  distanceKm: 2.4,
  detailPath: "/app/v1/fireplaces/fireplace-1",
  lat: 46.6863,
  lng: 7.8632,
} satisfies TGatewayActivityCardItem;

const poi = {
  id: "poi-rigi",
  type: "point-of-interest",
  title: "Rigi",
  imageUrl: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/rigi.jpg",
  path: "/app/v1/pois/rigi",
  distanceKm: 41.2,
  lat: 47.0568,
  lng: 8.485,
} satisfies TGatewayActivityCardItem;

const review = {
  id: "review-1",
  type: "review",
  title: "Paragliding Grindelwald ab First",
  activityId: "activity-320",
  rating: 5,
  body: "Super organisiert und eine fantastische Aussicht.",
  reviewerName: "Seraina",
  reviewerCountry: "CH",
  path: "/paragliding/paragliding-grindelwald-first/",
} satisfies TGatewayReviewItem;

const filters = {
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

const featureBand = {
  id: "feature_band",
  component: "feature_band",
  data: [
    {
      id: "support",
      icon: { provider: "lucide", name: "check" },
      title: "5-Sterne Support",
      description: "Lokales Team in Zürich.",
    },
  ],
} satisfies TGatewayFeatureBandSection;

const regionMap = {
  id: "region_map",
  component: "region_map",
  title: "Schweizer Regionen entdecken",
  data: [
    {
      id: "206",
      slug: "zurich-region",
      title: "Region Zürich",
      path: "/app/v1/regions/region-zuerich",
      numberOfActivities: 303,
    },
  ],
} satisfies TGatewayRegionMapSection;

export const gatewayHomeFixture = {
  staticSections: [filters],
  sections: [
    {
      id: "hero",
      component: "hero",
      text: "Hi aus der Schweiz. Sonnig in der ganzen Schweiz.",
      destination: null,
      forecast: {
        title: "Zürich",
        data: [weatherDay],
      },
      weather: "sunny",
      weatherLabel: "Sonnig",
      timeOfDay: "morning",
      timeOfDayLabel: "Morgen",
    },
    {
      id: "popular_this_week",
      component: "carousel",
      title: "Was die Schweiz diese Woche bucht",
      pillarPath: "/app/v1/activity-types/paragliding",
      data: [activity],
      alternates: [
        {
          id: "planAhead.weekend.sunny.nb",
          title: "Wochenend-Feuerstellen",
          pillarPath: "/app/v1/non-bookable/fireplaces",
        },
      ],
    },
    {
      id: "reviews",
      component: "carousel",
      title: "Was Reisende sagen",
      data: [review],
    },
    featureBand,
    regionMap,
    {
      id: "points_of_interest",
      component: "carousel",
      title: "Sehenswürdigkeiten",
      data: [poi],
    },
  ],
} satisfies TGatewayHome;

export const gatewayActivityTypeFixture = {
  context: {
    type: "activity-type",
    id: "paragliding",
    title: "Paragliding",
    slug: "paragliding",
    imageUrl: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/paragliding.jpg",
    numberOfActivities: 204,
  },
  staticSections: [
    {
      id: "hero",
      component: "hero",
      variant: "centered_title",
      title: "Paragliding",
      imageUrl: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/paragliding.jpg",
    },
    filters,
  ],
  sections: [
    {
      id: "activity_grid",
      component: "activity_grid",
      title: "Paragliding",
      data: [activity],
      meta: {
        pagination: {
          page: 1,
          perPage: 20,
          total: 204,
          hasMore: true,
        },
      },
    },
  ],
} satisfies TGatewayHome;

export const gatewayDestinationFixture = {
  context: {
    type: "destination",
    id: "interlaken",
    title: "Interlaken",
    slug: "berner-oberland-interlaken",
    imageUrl: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/interlaken.jpg",
    lat: 46.6863,
    lng: 7.8632,
  },
  sections: [
    {
      id: "weather_card",
      component: "weather_card",
      title: "Interlaken",
      imageUrl: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/interlaken.jpg",
      data: [weatherDay],
    },
    {
      id: "proximity",
      component: "carousel",
      title: "Beliebt im Umkreis von 30 km um Interlaken",
      data: [activity],
    },
  ],
} satisfies TGatewayHome;

export const gatewayPoiFixture = {
  context: {
    type: "point-of-interest",
    id: "rigi",
    title: "Rigi",
    slug: "rigi",
    imageUrl: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/rigi.jpg",
    lat: 47.0568,
    lng: 8.485,
  },
  staticSections: [
    {
      id: "hero",
      component: "hero",
      variant: "centered_title",
      title: "Rigi",
      imageUrl: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/rigi.jpg",
    },
  ],
  sections: [
    {
      id: "activity_grid",
      component: "activity_grid",
      title: "Aktivitäten",
      data: [activity],
      meta: {
        pagination: {
          page: 1,
          perPage: 20,
          total: 1,
          hasMore: false,
        },
      },
    },
  ],
} satisfies TGatewayHome;

export const gatewayNonBookableFixture = {
  context: {
    type: "non-bookable",
    id: "fireplaces",
    title: "Grillstellen",
    category: "fireplaces",
    imageUrl: "https://api.grillstelle.ch/images/240/446.jpg",
    numberOfItems: 1766,
  },
  staticSections: [filters],
  sections: [
    {
      id: "non_bookable_grid",
      component: "non_bookable_grid",
      title: "Grillstellen",
      data: [nonBookable],
      meta: {
        pagination: {
          page: 1,
          perPage: 20,
          total: 1766,
          hasMore: true,
        },
      },
    },
  ],
} satisfies TGatewayHome;

export const gatewayActivityDetailFixture = {
  id: "activity-320",
  type: "activity",
  activity: {
    id: "activity-320",
    title: "Paragliding Grindelwald ab First",
    description: "Tandemflug ab Grindelwald First.",
    imageUrl: activity.imageUrl,
    images: activity.images,
  },
  reviews: [review],
  reviewSummary: {
    totalAmount: 204,
    totalAverage: 4.82,
    filteredAmount: 204,
    filteredAverage: 4.82,
  },
  productContext: {
    meetingPoint: {
      label: "Treffpunkt",
      address: "Firstbahn, Grindelwald",
      lat: 46.6242,
      lng: 8.0414,
    },
    weather: {
      plz: "3818",
      locationName: "Grindelwald",
      icon: "sunny",
      condition: "sunny",
      description: "Sonnig",
      temperature: 24,
      precipitation: 0,
      cloudCover: 10,
      isNight: false,
      updatedAt: "2026-06-09T08:00:00.000Z",
    },
  },
  meta: {
    activitySource: "website-data-api",
    reviewsSource: "website-data-api",
    temporarySource: true,
    note: "Fixture mirrors the temporary activity detail gateway contract.",
  },
} satisfies TGatewayActivityDetail;

export const gatewayNonBookableDetailFixture = {
  type: "non-bookable",
  id: "fireplace-1",
  title: "Feuerstelle am See",
  description: "Kostenlose Grillstelle am Wasser.",
  coverImage: nonBookable.imageUrl,
  photos: [nonBookable.imageUrl],
  address: "Interlaken",
  nearbySection: {
    id: "nearby",
    component: "carousel",
    title: "In der Nähe",
    data: [activity],
  },
} satisfies TGatewayNonBookableDetail;

export const gatewayBlogPostDetailFixture = {
  type: "blog-post",
  id: "blog-1",
  title: "Jungfrau Travel Pass - lohnt es sich?",
  imageUrl: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/jungfrau-pass.jpg",
  path: "/travel-guide/reisetipps-schweiz/travel-pass-jungfrau/",
  relatedActivities: [activity],
  overview: {
    description: "Ein Überblick über den Jungfrau Travel Pass.",
  },
  meta: {
    overviewSource: "website-data-api",
    temporarySource: true,
    note: "Fixture mirrors the temporary blog detail gateway contract.",
  },
} satisfies TGatewayBlogPostDetail;

export const gatewayHomeFixtures = {
  home: gatewayHomeFixture,
  activityType: gatewayActivityTypeFixture,
  destination: gatewayDestinationFixture,
  poi: gatewayPoiFixture,
  nonBookable: gatewayNonBookableFixture,
} as const;

export const gatewayDetailFixtures = {
  activity: gatewayActivityDetailFixture,
  nonBookable: gatewayNonBookableDetailFixture,
  blogPost: gatewayBlogPostDetailFixture,
} as const;
