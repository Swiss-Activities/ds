import type { ReactNode } from "react";
import type { BaseReviewCardProps } from "../review-card/review-card.types";
import type { BaseSectionScrollerProps } from "../section-scroller/section-scroller.types";

export type ReviewItem = Omit<BaseReviewCardProps, "date"> & {
  id?: string;
  date?: string;
};

export type BaseSectionReviewGridProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  reviews: ReviewItem[];
  activityPrefix?: ReactNode;
  itemsPerRowLg?: BaseSectionScrollerProps["itemsPerRowLg"];
  as?: "section" | "div";
  noContainer?: boolean;
  className?: string;
};
