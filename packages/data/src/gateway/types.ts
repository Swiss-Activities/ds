export type TGatewayHomeItem = {
  id: string;
  title: string;
  image_url?: string | null;
  imageUrl?: string | null;
  subtitle?: string | null;
  path?: string;
  detailPath?: string | null;
  type: "activity" | "non-bookable" | "non-bookable-event";
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
};

export type TGatewayWeatherCardItem = {
  day: string;
  dayFull: string;
  tempMin: number;
  tempMax: number;
  icon: string;
  description: string;
};

export type TGatewayHomeCarouselSection = {
  id: string;
  component: "carousel";
  title: string;
  data: TGatewayHomeItem[];
};

export type TGatewayHomeWeatherCardSection = {
  id: string;
  component: "weather_card";
  title: string;
  imageUrl?: string | null;
  data: TGatewayWeatherCardItem[];
};

export type TGatewayHomeSection =
  | TGatewayHomeCarouselSection
  | TGatewayHomeWeatherCardSection;

export type TGatewayHome = {
  sections: TGatewayHomeSection[];
};

export type TGatewayHomeParams = {
  locale?: string;
  lat?: number | null;
  lng?: number | null;
  country?: string;
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
