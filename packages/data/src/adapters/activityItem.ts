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

const getImageUrl = (item: TGatewayHomeItem) => item.imageUrl ?? item.image_url;
const getReviewCount = (item: TGatewayHomeItem) =>
  item.reviewCount ?? item.review_count;
const getPriceFormatted = (item: TGatewayHomeItem) =>
  item.priceFormatted ?? item.price_formatted;

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
  image: getImageUrl(item) ? renderImage(item) : null,
  title: item.title,
  score: item.rating ?? 0,
  reviewCount: getReviewCount(item) ?? 0,
  priceLabel,
  price: getPriceFormatted(item) ? `${fromLabel} ${getPriceFormatted(item)}` : "",
  href: item.path,
});
