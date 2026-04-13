import type { ReactNode } from "react";
import type { TGatewayHomeItem } from "../gateway/types";

export type ActivityItemData = {
  image: ReactNode;
  title: string;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
  href: string;
};

export type RenderImage = (item: TGatewayHomeItem) => ReactNode;

export const toActivityItem = (
  item: TGatewayHomeItem,
  {
    priceLabel,
    fromLabel,
    renderImage,
  }: {
    priceLabel: string;
    fromLabel: string;
    renderImage: RenderImage;
  }
): ActivityItemData => ({
  image: item.image_url ? renderImage(item) : null,
  title: item.title,
  score: item.rating ?? 0,
  reviewCount: item.review_count ?? 0,
  priceLabel,
  price: item.price_formatted ? `${fromLabel} ${item.price_formatted}` : "",
  href: item.path,
});
