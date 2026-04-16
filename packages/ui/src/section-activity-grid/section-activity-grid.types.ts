import type { ReactNode } from "react";
import type { ActivityCardRender } from "../activity-card/activity-card.types";

export type ActivityItem = {
  image: ReactNode;
  title: string;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
  render?: ActivityCardRender;
};

export type BaseSectionActivityGridProps = {
  title: ReactNode;
  action?: ReactNode;
  activities: ActivityItem[];
  className?: string;
};
