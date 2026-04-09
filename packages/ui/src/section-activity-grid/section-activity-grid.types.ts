import type { ReactNode } from "react";

export type ActivityItem = {
  image: ReactNode;
  title: string;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
  href?: string;
};

export type BaseSectionActivityGridProps = {
  title: ReactNode;
  activities: ActivityItem[];
  className?: string;
};
