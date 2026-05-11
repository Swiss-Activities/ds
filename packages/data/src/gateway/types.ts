export type TGatewayHomeItem = {
  id: string;
  title: string;
  image_url?: string | null;
  imageUrl?: string | null;
  subtitle?: string | null;
  path?: string;
  detailPath?: string | null;
  type:
    | "activity"
    | "non-bookable"
    | "non-bookable-event"
    | "blog-post"
    | "review";
  category?: string | null;
  distanceKm?: number | null;
  dateStart?: string | null;
  dateEnd?: string | null;
  dateRangeFormatted?: string | null;
  price_formatted?: string | null;
  priceFormatted?: string | null;
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

export type TGatewayLucideIconName =
  (typeof gatewayLucideIconNames)[number];

export type TGatewayIcon = {
  provider: "lucide";
  name: TGatewayLucideIconName;
};

export type TGatewayHomeCarouselSection = {
  id: string;
  component: "carousel";
  title: string;
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
  component: "activity_grid";
  title: string;
  data: Array<TGatewayActivityCardItem & { type: "activity" }>;
  meta: {
    pagination: {
      page: number;
      perPage: number;
      total: number;
      hasMore: boolean;
    };
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

export type TGatewayHomeSection =
  | TGatewayHomeCarouselSection
  | TGatewayActivityGridSection
  | TGatewayHomeWeatherCardSection
  | TGatewayHomeHeroSection
  | TGatewayFeatureBandSection;

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

export type TGatewayDiscoveryContext =
  | TGatewayActivityTypeContext
  | TGatewayDestinationContext;

export type TGatewayHome = {
  context?: TGatewayDiscoveryContext;
  staticSections?: TGatewayStaticSection[];
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
};

export type TGatewayFilterGroup = {
  id: string;
  type: "checkbox";
  title: string;
  param: "tags";
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
  dev?: boolean;
};

export type TGatewayFeedParams = TGatewayHomeParams & {
  destination?: string | null;
  activityType?: string | null;
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

export type TGatewayDetail = {
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
