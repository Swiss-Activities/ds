export type TGatewayListingContentBlock = {
  html: string | null;
  images: Array<{ url: string; caption: string | null; alt: string | null }>;
  youtubeUrl: string | null;
};

export type TGatewayHomeItem = {
  id: string;
  title: string;
  bookingActivityId?: number | string | null;
  description?: string | null;
  image_url?: string | null;
  imageUrl?: string | null;
  imageUrls?: string[];
  images?: Array<
    | string
    | {
        alt?: string | null;
        alternativeText?: string | null;
        imageUrl?: string | null;
        src?: string | null;
        url?: string | null;
      }
  >;
  subtitle?: string | null;
  path?: string;
  webPath?: string | null;
  detailPath?: string | null;
  lat?: number | null;
  lng?: number | null;
  type:
    | "activity"
    | "non-bookable"
    | "non-bookable-event"
    | "point-of-interest"
    | "blog-post"
    | "review";
  category?: string | null;
  distanceKm?: number | null;
  availabilityNote?: string | null;
  dateStart?: string | null;
  dateEnd?: string | null;
  dateRangeFormatted?: string | null;
  price_formatted?: string | null;
  priceFormatted?: string | null;
  startingPrice?: {
    amount?: number | null;
    currency?: string | null;
    formatted?: string | null;
  } | null;
  rating?: number | null;
  review_count?: number | null;
  reviewCount?: number | null;
  activityId?: string | null;
  body?: string | null;
  reviewerName?: string | null;
  reviewerCountry?: string | null;
};

export type TGatewayActivityCardItem = TGatewayHomeItem & {
  type: Exclude<TGatewayHomeItem["type"], "review">;
};

export type TGatewayReviewItem = TGatewayHomeItem & {
  type: "review";
  activityId: string;
  body: string;
  reviewerName: string;
  reviewerCountry?: string | null;
};

export type TGatewayWeatherCardItem = {
  date?: string;
  day: string;
  dayFull: string;
  tempMin: number;
  tempMax: number;
  icon: string;
  description: string;
};

export const gatewayLucideIconNames = [
  "check",
  "globe",
  "house",
  "user-round",
] as const;

export type TGatewayLucideIconName = (typeof gatewayLucideIconNames)[number];

export type TGatewayIcon = {
  provider: "lucide";
  name: TGatewayLucideIconName;
};

export type TGatewaySectionAlternate = {
  id: string;
  title: string;
  pillarSlug?: string | null;
  pillarPath?: string | null;
};

export type TGatewayHomeCarouselSection = {
  id: string;
  component: "carousel";
  title: string;
  subtitle?: string | null;
  pillarSlug?: string | null;
  pillarPath?: string | null;
  appliedRadiusKm?: number | null;
  alternates?: TGatewaySectionAlternate[];
  data: TGatewayHomeItem[];
};

export type TGatewayActivityCarouselSection = Omit<
  TGatewayHomeCarouselSection,
  "data"
> & {
  data: TGatewayActivityCardItem[];
};

export type TGatewayReviewCarouselSection = Omit<
  TGatewayHomeCarouselSection,
  "data"
> & {
  data: TGatewayReviewItem[];
};

export type TGatewayActivityGridSection = {
  id: string;
  component: "activity_grid" | "non_bookable_grid";
  title: string;
  pillarSlug?: string | null;
  alternates?: TGatewaySectionAlternate[];
  data: TGatewayActivityCardItem[];
  meta: {
    pagination: {
      page: number;
      perPage: number;
      total: number;
      hasMore: boolean;
    };
    nearestKm?: number | null;
    appliedRadiusKm?: number | null;
  };
};

export type TGatewayHomeWeatherCardSection = {
  id: string;
  component: "weather_card";
  title: string;
  imageUrl?: string | null;
  data: TGatewayWeatherCardItem[];
};

export type TGatewayHomeHeroSection = {
  id: "hero";
  component: "hero";
  text: string;
  destination: string | null;
  forecast?: {
    title: string;
    data: TGatewayWeatherCardItem[];
  } | null;
  weather: "sunny" | "rainy" | "snowy" | "cloudy" | "foggy" | null;
  weatherLabel: string | null;
  timeOfDay: "morning" | "afternoon" | "evening" | null;
  timeOfDayLabel: string | null;
};

export type TGatewayFeatureBandItem = {
  id: string;
  icon: TGatewayIcon;
  title: string;
  description: string;
};

export type TGatewayFeatureBandSection = {
  id: string;
  component: "feature_band";
  title?: string | null;
  data: TGatewayFeatureBandItem[];
};

export type TGatewayRegionMapItem = {
  id: string;
  title: string;
  imageUrl?: string | null;
  path?: string | null;
  webPath?: string | null;
  slug?: string | null;
  numberOfActivities?: number | null;
};

export type TGatewayRegionMapSection = {
  id: string;
  component: "region_map";
  title: string;
  data: TGatewayRegionMapItem[];
};

export type TGatewaySuggestedTypeItem = {
  id: string;
  title: string;
  iconUrl?: string | null;
  imageUrl?: string | null;
  href?: string | null;
  webPath?: string | null;
  weatherFit?: string | null;
  betterOn?: string | null;
};

export type TGatewaySuggestedTypesSection = {
  id: string;
  component: "suggested_types";
  title: string;
  data: TGatewaySuggestedTypeItem[];
};

export type TGatewayHomeSection =
  | TGatewayHomeCarouselSection
  | TGatewayActivityGridSection
  | TGatewayHomeWeatherCardSection
  | TGatewayHomeHeroSection
  | TGatewayFeatureBandSection
  | TGatewayRegionMapSection
  | TGatewaySuggestedTypesSection;

export type TGatewayActivityTypeContext = {
  type: "activity-type";
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  imageUrl?: string | null;
  numberOfActivities?: number;
};

export type TGatewayDestinationContext = {
  type: "destination";
  id: string;
  title: string;
  slug: string;
  imageUrl?: string | null;
  lat: number;
  lng: number;
};

export type TGatewayRegionContext = {
  type: "region";
  id: string;
  title: string;
  slug: string;
  description?: string | null;
  imageUrl?: string | null;
  numberOfActivities?: number;
};

export type TGatewayNonBookableContext = {
  type: "non-bookable";
  id?: string | null;
  title: string;
  category: string;
  description?: string | null;
  imageUrl?: string | null;
  numberOfItems?: number;
};

export type TGatewayPointOfInterestContext = {
  type: "point-of-interest";
  id: string;
  title: string;
  slug: string;
  imageUrl?: string | null;
  lat: number;
  lng: number;
};

export type TGatewayDiscoveryContext =
  | TGatewayActivityTypeContext
  | TGatewayDestinationContext
  | TGatewayRegionContext
  | TGatewayNonBookableContext
  | TGatewayPointOfInterestContext;

export type TGatewayFaqItem = {
  question: string;
  /** Answer as gateway-rendered HTML. */
  answer: string;
};

export type TGatewayFaq = {
  /** Heading override; the renderer falls back to the generic FAQ heading. */
  title?: string | null;
  items: TGatewayFaqItem[];
};

export type TGatewayHome = {
  context?: TGatewayDiscoveryContext;
  staticSections?: TGatewayStaticSection[];
  /** Long-form editorial content rendered after the sections (overview pages). */
  content?: TGatewayListingContentBlock[];
  /** FAQ accordion rendered after the editorial content (overview pages). */
  faq?: TGatewayFaq | null;
  sections: TGatewayHomeSection[];
};

export type TGatewayHeroStaticSection = {
  id: string;
  component: "hero";
  variant?: "centered_title";
  title: string;
  imageUrl?: string | null;
  description?: string | null;
};

export type TGatewayFilterItem = {
  id: string;
  label: string;
  kind?: "plain" | "disclosure" | "removable";
  param?: string;
  value?: string;
};

export type TGatewayFilterOption = {
  id: string;
  label: string;
  value: string;
  count: number;
  selected: boolean;
  disabled?: boolean;
  lat?: number;
  lng?: number;
};

export type TGatewayFilterGroup = {
  id: string;
  type: "checkbox" | "radio" | "dropdown";
  title: string;
  param: "tags" | "radiusKm" | "destination";
  options: TGatewayFilterOption[];
};

export type TGatewayFilterConfig = {
  endpoint: string;
  items: TGatewayFilterItem[];
  groups: TGatewayFilterGroup[];
};

export type TGatewayFilterStaticSection = TGatewayFilterConfig & {
  id: string;
  component: "filters";
};

export type TGatewayStaticSection =
  | TGatewayHeroStaticSection
  | TGatewayFilterStaticSection;

export type TGatewayFilterParams = {
  endpoint: string;
  locale?: string;
  lat?: number | null;
  lng?: number | null;
  country?: string | null;
  page?: number;
  perPage?: number;
  tags?: string[];
  destination?: string | null;
  view?: "list" | "map" | null;
  dev?: boolean;
};

export type TGatewayFilter = {
  filters: TGatewayFilterConfig;
  sections: TGatewayActivityGridSection[];
};

export type TGatewayActivityTypeFilterParams = Omit<
  TGatewayFilterParams,
  "endpoint"
> & {
  activityType: string;
};

export type TGatewayActivityTypeFilter = TGatewayFilter;

export type TGatewayHomeParams = {
  locale?: string;
  lat?: number | null;
  lng?: number | null;
  country?: string;
  date?: string | null;
  dev?: boolean;
};

export type TGatewayFeedParams = TGatewayHomeParams & {
  destination?: string | null;
  /** Website destination overview (`destinations/{slug}/overview`) — distinct
   *  from the app's personalized destination feed (`destination`). With
   *  `activityType` set too, loads the location-type page. */
  destinationOverview?: string | null;
  activityType?: string | null;
  /** Website attribute overview (attributes/{slug}); with destinationOverview, the location-attribute page. */
  attribute?: string | null;
  nonBookable?: string | null;
  region?: string | null;
  poi?: string | null;
  view?: "list" | "map" | null;
};

export type TGatewaySearchSuggestion = {
  id: string;
  title: string;
  subtitle: string | null;
  type:
    | "activity"
    | "activity-type"
    | "category"
    | "destination"
    | "non-bookable"
    | "point-of-interest";
  imageUrl?: string | null;
  path?: string | null;
  webPath?: string | null;
  category?: string | null;
  distanceKm?: number | null;
};

export type TGatewaySearchSuggest = {
  suggestions: TGatewaySearchSuggestion[];
};

export type TGatewaySearchSuggestParams = {
  q?: string;
  locale?: string;
  lat?: number | null;
  lng?: number | null;
  country?: string | null;
  dev?: boolean;
};

export type TGatewayDetailParams = {
  path?: string | null;
  id?: string;
  type?: Exclude<TGatewayHomeItem["type"], "activity" | "blog-post" | "review">;
  locale?: string;
  lat?: number | null;
  lng?: number | null;
  country?: string | null;
  dev?: boolean;
};

export type TGatewayDetailForItemOptions = {
  dev?: boolean;
  signal?: AbortSignal;
};

export type TGatewayActivityMeetingPoint = {
  id?: string | null;
  label?: string | null;
  address?: string | null;
  lat?: number | null;
  lng?: number | null;
  displayText?: string | null;
  appGeoLink?: string | null;
  webGeoLink?: string | null;
  distanceKm?: number | null;
};

export type TGatewayActivityWeatherContext = {
  plz: string;
  locationName: string;
  icon: string;
  condition: "rainy" | "snowy" | "sunny" | "cloudy" | "foggy";
  description?: string | null;
  temperature: number;
  precipitation: number;
  cloudCover: number;
  isNight: boolean;
  updatedAt: string;
};

export type TGatewayActivityReviewSummary = {
  totalAmount: number;
  totalAverage: number;
  filteredAmount: number;
  filteredAverage: number;
};

export type TGatewayActivityProductContext = {
  openingHours?: string | null;
  recommendedDurationHours?: number | null;
  meetingPoint?: TGatewayActivityMeetingPoint | null;
  weather?: TGatewayActivityWeatherContext | null;
  rating?: {
    score: number;
    count: number;
  } | null;
};

export type TGatewayActivityDetail = {
  id: string;
  type: "activity";
  activity: Record<string, unknown>;
  reviews: Record<string, unknown>[];
  reviewSummary: TGatewayActivityReviewSummary;
  productContext: TGatewayActivityProductContext;
  meta: {
    activitySource: "website-data-api";
    reviewsSource: "website-data-api";
    temporarySource: true;
    note: string;
  };
};

export type TGatewayActivityDetailParams = {
  id: string;
  locale?: string;
  lat?: number | null;
  lng?: number | null;
  country?: string | null;
  dev?: boolean;
};

export type TGatewayBlogPostDetail = {
  id: string;
  type: "blog-post";
  title: string;
  imageUrl?: string | null;
  path: string;
  relatedActivities: Array<TGatewayActivityCardItem & { type: "activity" }>;
  /**
   * `{ body, title }` (rendered HTML from the gateway read model) since
   * gateway PR #163; older gateways shipped the raw website-data-api
   * envelope (`listing.content_blocks` & co) — kept loose for both.
   */
  overview: { body?: string; title?: string } & Record<string, unknown>;
  meta: {
    overviewSource: "website-data-api" | "gateway-read-model";
    temporarySource: boolean;
    note?: string;
  };
};

/**
 * Static-page bundle from the gateway's in-code registry (`/web/v1/page`,
 * `type: listing`, `data.kind: 'static'`). Legal pages (`legal: true`) carry
 * the real document HTML in `blocks` (CAPI `texts`, rendered gateway-side).
 */
export type TGatewayStaticPageContent = {
  kind?: "static";
  id?: string;
  slug: string;
  title: string;
  description: string;
  heroTitle: string;
  blocks: Array<{ id: string; title: string; content: string }>;
  legal?: boolean;
  legalNav?: Array<{ id: string; title: string; path: string }>;
};

export type TGatewayBlogOverviewCategory = {
  slug: string;
  title: string;
};

export type TGatewayBlogOverviewPost = {
  id: string;
  title: string;
  description: string | null;
  imageUrl: string;
  path: string;
};

export type TGatewayBlogOverview = {
  context: {
    type: "travel-guide";
    category: { slug: string; title: string; description: string | null } | null;
    itineraries: boolean;
  };
  categories: TGatewayBlogOverviewCategory[];
  posts: TGatewayBlogOverviewPost[];
  durations?: Array<{ days: number; posts: TGatewayBlogOverviewPost[] }>;
};

export type TGatewayBlogOverviewParams = {
  locale?: string | null;
  category?: string | null;
  country?: string | null;
  dev?: boolean | null;
};

export type TGatewayBlogPostDetailParams = {
  id: string;
  locale?: string;
  lat?: number | null;
  lng?: number | null;
  country?: string | null;
  dev?: boolean;
};

export type TGatewaySwimmingDetails = {
  waterType?: string | null;
  water_type?: string | null;
  hasLifeguard?: boolean | null;
  has_lifeguard?: boolean | null;
  hasChangingRooms?: boolean | null;
  has_changing_rooms?: boolean | null;
  hasShowers?: boolean | null;
  has_showers?: boolean | null;
  hasLockers?: boolean | null;
  has_lockers?: boolean | null;
  hasFoodService?: boolean | null;
  has_food_service?: boolean | null;
  hasDivingBoard?: boolean | null;
  has_diving_board?: boolean | null;
  hasSlide?: boolean | null;
  has_slide?: boolean | null;
  hasKidsPool?: boolean | null;
  has_kids_pool?: boolean | null;
  poolLengthM?: number | null;
  pool_length_m?: number | null;
  openingHours?: string | null;
  opening_hours?: string | null;
  entryFees?: {
    adult?: string | null;
    child?: string | null;
  } | null;
  entry_fees?: {
    adult?: string | null;
    child?: string | null;
  } | null;
};

export type TGatewayMovieShowtime = {
  showDate?: string | null;
  show_date?: string | null;
  showTime?: string | null;
  show_time?: string | null;
  language?: string | null;
  is3d?: boolean | null;
  is3D?: boolean | null;
  is_3d?: boolean | null;
  bookingUrl?: string | null;
  booking_url?: string | null;
  cinemaName?: string | null;
  cinemaTitle?: string | null;
  cinemaCanton?: string | null;
  cinemaLocation?: string | null;
  cinema?: {
    title?: string | null;
    name?: string | null;
    canton?: string | null;
    location?: string | null;
  } | null;
  cinemaListing?: {
    title?: string | null;
    canton?: string | null;
    location?: string | null;
  } | null;
  cinema_listing?: {
    title?: string | null;
    canton?: string | null;
    location?: string | null;
  } | null;
};

export type TGatewayMovieDetails = {
  posterUrl?: string | null;
  poster_url?: string | null;
  synopsis?: string | null;
  durationMin?: number | null;
  duration_min?: number | null;
  ageRating?: string | number | null;
  age_rating?: string | number | null;
  director?: string | null;
  castMembers?: string[] | string | null;
  cast_members?: string[] | string | null;
  genres?: string[] | string | null;
  country?: string | null;
  year?: string | number | null;
  trailerUrl?: string | null;
  trailer_url?: string | null;
  cinefileUrl?: string | null;
  cinefile_url?: string | null;
  showtimes?: TGatewayMovieShowtime[] | null;
};

export type TGatewayNonBookableDetail = {
  id?: string;
  type?: string;
  title?: string;
  coverImage?: string | null;
  cover_image?: string | null;
  description?: string | null;
  dateStart?: string | null;
  dateEnd?: string | null;
  isPermanent?: boolean | null;
  isActive?: boolean | null;
  openingHoursText?: string | null;
  admissionPricesText?: string | null;
  priceInfoText?: string | null;
  address?: string | null;
  website?: string | null;
  homepage?: string | null;
  sourceUrl?: string | null;
  source_url?: string | null;
  phone?: string | null;
  museumCategory?: string | null;
  foundedYear?: number | null;
  canton?: string | null;
  location?: {
    lat?: number | null;
    lng?: number | null;
  } | null;
  tags?: string[];
  photos?: string[];
  badges?: string[];
  amenities?: Record<string, boolean | number | null | undefined>;
  attributes?: Record<string, unknown>;
  swimmingDetails?: TGatewaySwimmingDetails | null;
  swimming_details?: TGatewaySwimmingDetails | null;
  movie?: TGatewayMovieDetails | null;
  movies?: TGatewayMovieDetails | null;
  showtimes?: TGatewayMovieShowtime[] | null;
  venue?: {
    title?: string | null;
    address?: string | null;
    openingHoursText?: string | null;
    admissionPricesText?: string | null;
    website?: string | null;
    homepage?: string | null;
    sourceUrl?: string | null;
    photos?: string[];
  } | null;
  nearbySection?: TGatewayHomeCarouselSection | null;
};

export type TGatewayDetail = TGatewayNonBookableDetail | TGatewayBlogPostDetail;
