import type { ReactNode } from "react";

export type BaseReviewCardProps = {
  author: string;
  countryCode?: string;
  date: string;
  rating: number;
  text: string;
  images?: ReactNode[];
  hideUpvoteCount?: boolean;
  upvoteCount?: number;
  onUpvote?: () => void | Promise<void>;
  translatedFrom?: string;
  className?: string;
};
