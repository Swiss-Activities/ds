export type TGatewayHomeItem = {
  id: string;
  title: string;
  image_url: string | null;
  subtitle: string | null;
  path: string;
  type: "activity";
  price_formatted: string | null;
  rating: number | null;
  review_count: number | null;
};

export type TGatewayHomeSection = {
  id: string;
  component: "carousel";
  title: string;
  data: TGatewayHomeItem[];
};

export type TGatewayHome = {
  sections: TGatewayHomeSection[];
};

export type TGatewayHomeParams = {
  locale?: string;
  lat?: number | null;
  lng?: number | null;
  country?: string;
};
