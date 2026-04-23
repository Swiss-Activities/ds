import type { ReactNode } from "react";
import type { ActivityCardRender } from "../activity-card/activity-card.types";

export type ActivityItem = {
  image: ReactNode;
  title: string;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
  pending?: boolean;
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
