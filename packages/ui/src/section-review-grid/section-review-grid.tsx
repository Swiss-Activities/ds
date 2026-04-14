"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { ReviewCard } from "../review-card";
import { SectionScroller, sectionScrollerItemClassName } from "../section-scroller";
import type { BaseSectionReviewGridProps } from "./section-review-grid.types";

export type SectionReviewGridProps = BaseSectionReviewGridProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

export function SectionReviewGrid({
  title,
  subtitle,
  reviews,
  as,
  noContainer,
  className,
  ...props
}: SectionReviewGridProps) {
  return (
    <SectionScroller title={title} subtitle={subtitle} as={as} noContainer={noContainer} className={cn(className)} {...props}>
      {reviews.map((review, i) => (
        <li key={review.id ? `${review.id}-${i}` : String(i)} className={sectionScrollerItemClassName}>
          <ReviewCard
            author={review.author}
            countryCode={review.countryCode}
            date={review.date}
            rating={review.rating}
            text={review.text}
            images={review.images}
            upvoteCount={review.upvoteCount}
            onUpvote={review.onUpvote}
            translatedFrom={review.translatedFrom}
          />
        </li>
      ))}
    </SectionScroller>
  );
}
