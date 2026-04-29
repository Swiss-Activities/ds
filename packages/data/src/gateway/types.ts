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

export type TGatewayDetail = {
  id?: string;
  type?: string;
  title?: string;
  coverImage?: string | null;
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
  phone?: string | null;
  museumCategory?: string | null;
  foundedYear?: number | null;
  canton?: string | null;
  tags?: string[];
  photos?: string[];
  badges?: string[];
  amenities?: Record<string, boolean | number | null | undefined>;
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
