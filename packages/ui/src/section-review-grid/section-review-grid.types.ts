import type { ReactNode } from "react";
import type { BaseReviewCardProps } from "../review-card/review-card.types";

export type ReviewItem = BaseReviewCardProps & {
  id?: string;
};

export type BaseSectionReviewGridProps = {
  title: ReactNode;
  subtitle?: ReactNode;
  reviews: ReviewItem[];
  as?: "section" | "div";
  noContainer?: boolean;
  className?: string;
};
