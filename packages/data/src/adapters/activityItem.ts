import type { ReactNode } from "react";
import {
  getGatewayItemImageUrl,
  getGatewayItemPriceFormatted,
  getGatewayItemReviewCount,
} from "../gateway/items";
import type { TGatewayHomeItem } from "../gateway/types";

export type ActivityItemData = {
  image: ReactNode;
  title: string;
  type: TGatewayHomeItem["type"];
  subtitle?: string | null;
  category?: string | null;
  dateRange?: string | null;
  distance?: string | null;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
  href: string;
  detailPath?: string | null;
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
  image: getGatewayItemImageUrl(item) ? renderImage(item) : null,
  title: item.title,
  type: item.type,
  subtitle: item.subtitle,
  category: item.category,
  dateRange: item.dateRangeFormatted,
  distance: item.distanceKm == null ? null : `${item.distanceKm.toFixed(1)} km`,
  score: item.rating ?? 0,
  reviewCount: getGatewayItemReviewCount(item),
  priceLabel,
  price: getGatewayItemPriceFormatted(item)
    ? `${fromLabel} ${getGatewayItemPriceFormatted(item)}`
    : "",
  href: item.path ?? "",
  detailPath: item.detailPath,
});
