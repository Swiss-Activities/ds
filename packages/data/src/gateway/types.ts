export type TGatewayHomeItem = {
  id: string;
  title: string;
  image_url?: string | null;
  imageUrl?: string | null;
  subtitle: string | null;
  path: string;
  type: "activity";
  price_formatted?: string | null;
  priceFormatted?: string | null;
  rating: number | null;
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
