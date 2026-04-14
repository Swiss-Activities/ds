import type { ReactNode } from "react";

export const ratingSizes = ["xs", "sm", "default", "md", "lg"] as const;

export type RatingSize = (typeof ratingSizes)[number];

export type BaseRatingProps = {
  score: number;
  count?: number;
  size?: RatingSize;
  showScore?: boolean;
  stacked?: boolean;
  label?: ReactNode;
  className?: string;
};
