"use client";

import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { ReviewCard } from "../review-card";
import { Card } from "../card";
import { Flag } from "../flag";
import { Rating } from "../rating";
import {
  SectionScroller,
  sectionScrollerItemClassName,
} from "../section-scroller";
import { Text } from "../text";
import type { BaseSectionReviewGridProps } from "./section-review-grid.types";
import type {
  ReviewActivityLink,
  ReviewItem,
} from "./section-review-grid.types";

export type SectionReviewGridProps = BaseSectionReviewGridProps &
  Omit<HTMLAttributes<HTMLElement>, "children" | "title">;

const gridColumnClasses: Record<
  NonNullable<SectionReviewGridProps["itemsPerRowLg"]>,
  string
> = {
  3: "lg:grid-cols-3",
  4: "lg:grid-cols-4",
};

function ReviewActivity({
  activity,
}: {
  activity?: ReviewActivityLink;
}) {
  if (!activity) return null;

  const className =
    "font-medium text-gray-700 transition hover:text-black hover:underline";

  if (activity.href) {
    return (
      <a href={activity.href} className={className}>
        {activity.label}
      </a>
    );
  }

  return <span className={className}>{activity.label}</span>;
}

function GridReviewCard({
  activityPrefix,
  review,
}: {
  activityPrefix: SectionReviewGridProps["activityPrefix"];
  review: ReviewItem;
}) {
  const secondaryLabel = review.location ?? review.date;
  const translationLabel = review.translatedFromLabel ?? review.translatedFrom;

  return (
    <Card className="flex h-full min-h-[180px] flex-col !p-4">
      <div className="flex min-w-0 flex-wrap items-center gap-1.5">
        <Text
          as="span"
          size="sm2"
          black
          className="min-w-0 truncate font-semibold"
        >
          {review.author}
        </Text>
        {review.countryCode ? <Flag countryCode={review.countryCode} /> : null}
        {secondaryLabel ? (
          <>
            <Text as="span" size="sm2" gray aria-hidden="true">
              ·
            </Text>
            <Text as="span" size="sm2" gray className="min-w-0 truncate">
              {secondaryLabel}
            </Text>
          </>
        ) : null}
      </div>
      {review.activity ? (
        <Text as="p" size="sm2" gray className="mt-1">
          {activityPrefix} <ReviewActivity activity={review.activity} />
        </Text>
      ) : null}
      <Rating
        score={review.rating}
        showScore={false}
        size="md"
        className="mt-2"
      />
      <Text size="sm2" className="mt-2 line-clamp-3 !text-gray-700">
        {review.text}
      </Text>
      {translationLabel ? (
        <Text
          size="xs"
          gray
          className="mt-auto !border-b-0 !border-l-0 !border-r-0 !border-t !border-solid !border-gray-200 pt-3"
        >
          {translationLabel}
        </Text>
      ) : null}
    </Card>
  );
}

export function SectionReviewGrid({
  title,
  subtitle,
  reviews,
  variant = "scroller",
  activityPrefix = "on",
  itemsPerRowLg,
  as,
  noContainer,
  className,
  ...props
}: SectionReviewGridProps) {
  if (variant === "grid") {
    const Tag = as ?? "section";
    const resolvedItemsPerRowLg = itemsPerRowLg ?? 3;

    return (
      <Tag className={cn(className)} {...props}>
        <div className="mb-4">
          <Text
            as="h2"
            size="xs"
            className="font-semibold uppercase tracking-[0.16em] !text-gray-600"
          >
            {title}
          </Text>
          {subtitle ? <div className="mt-2">{subtitle}</div> : null}
        </div>
        <ul
          className={cn(
            "grid list-none gap-4 p-0 md:grid-cols-3 lg:gap-6",
            gridColumnClasses[resolvedItemsPerRowLg]
          )}
        >
          {reviews.map((review, i) => (
            <li
              key={review.id ? `${review.id}-${i}` : String(i)}
              className="min-w-0 list-none"
            >
              <GridReviewCard
                review={review}
                activityPrefix={activityPrefix}
              />
            </li>
          ))}
        </ul>
      </Tag>
    );
  }

  return (
    <SectionScroller
      title={title}
      subtitle={subtitle}
      as={as}
      noContainer={noContainer}
      itemsPerRowLg={itemsPerRowLg}
      className={cn(className)}
      {...props}
    >
      {reviews.map((review, i) => (
        <li
          key={review.id ? `${review.id}-${i}` : String(i)}
          className={sectionScrollerItemClassName}
        >
          <ReviewCard
            author={review.author}
            countryCode={review.countryCode}
            date={review.date ?? ""}
            rating={review.rating}
            text={review.text}
            images={review.images}
            hideUpvoteCount={review.hideUpvoteCount}
            upvoteCount={review.upvoteCount}
            onUpvote={review.onUpvote}
            translatedFrom={review.translatedFrom}
            translatedFromLabel={review.translatedFromLabel}
          />
        </li>
      ))}
    </SectionScroller>
  );
}
