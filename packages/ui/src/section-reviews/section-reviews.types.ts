import type { ReactNode } from "react";

export type SectionReviewsSort =
  | "dateDesc"
  | "dateAsc"
  | "ratingDesc"
  | "ratingAsc";

export type SectionReviewsReview = {
  id?: string | number;
  author: string;
  category?: string | null;
  countryCode?: string;
  date: string;
  rating: number;
  reply?: string | null;
  searchTerms?: string[];
  text?: string | null;
  translatedFromLabel?: ReactNode;
  upvoteCount?: number;
  onUpvote?: () => void | Promise<void>;
};

export type SectionReviewsLabels = {
  title: ReactNode;
  ratingSingular: ReactNode;
  reviewsPlural: ReactNode;
  filter: ReactNode;
  rating: ReactNode;
  participants: ReactNode;
  general: ReactNode;
  textOnly: ReactNode;
  searchPlaceholder: string;
  sortDateDesc: string;
  sortDateAsc: string;
  sortRatingDesc: string;
  sortRatingAsc: string;
  noResults: ReactNode;
  clearFilters: ReactNode;
  viewMore: ReactNode;
  lessFilters: ReactNode;
  reset: ReactNode;
  results: ReactNode;
  close: string;
  helpfulQuestion: ReactNode;
  helpfulSelected: ReactNode;
  participantLabels?: Record<string, ReactNode>;
  ratingEqual?: (rating: number) => ReactNode;
};

export type BaseSectionReviewsProps = {
  averageRating: number;
  className?: string;
  labels: SectionReviewsLabels;
  reviewCount: number;
  reviews: SectionReviewsReview[];
};

