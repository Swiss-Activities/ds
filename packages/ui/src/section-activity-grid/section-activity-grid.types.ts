import type { ReactNode } from "react";
import type { ActivityCardRender } from "../activity-card/activity-card.types";
import type { ImageValue, RenderImage } from "../utils/render-image";

export type ActivityItem = {
  image: ImageValue | null;
  title: string;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
  pending?: boolean;
  renderImage?: RenderImage;
  render?: ActivityCardRender;
};

export type BaseSectionActivityGridProps = {
  title: ReactNode;
  action?: ReactNode;
  activities: ActivityItem[];
  loading?: boolean;
  skeletonAmount?: number;
  className?: string;
};
