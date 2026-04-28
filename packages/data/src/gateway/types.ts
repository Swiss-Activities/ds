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
