import type { ReactNode } from "react";

export type BaseReviewCardProps = {
  author: string;
  countryCode?: string;
  date: string;
  rating: number;
  text: string;
  activity?: {
    label: ReactNode;
    href?: string;
    onClick?: () => void;
  };
  activityPrefix?: ReactNode;
  images?: ReactNode[];
  hideUpvoteCount?: boolean;
  upvoteCount?: number;
  onUpvote?: () => void | Promise<void>;
  translatedFrom?: string;
  translatedFromLabel?: ReactNode;
  className?: string;
};
