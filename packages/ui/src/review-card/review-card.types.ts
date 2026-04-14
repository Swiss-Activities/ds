import type { ReactNode } from "react";

export type BaseReviewCardProps = {
  author: string;
  countryCode?: string;
  date: string;
  rating: number;
  text: string;
  images?: ReactNode[];
  upvoteCount?: number;
  onUpvote?: () => void;
  translatedFrom?: string;
  className?: string;
};
