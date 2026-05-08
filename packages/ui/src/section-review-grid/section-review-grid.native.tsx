import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Card } from "../card/card.native";
import { Flag } from "../flag/flag.native";
import { Rating } from "../rating/rating.native";
import { ReviewCard } from "../review-card/review-card.native";
import {
  SectionScroller,
  sectionScrollerItemClassName,
} from "../section-scroller/section-scroller.native";
import { Text } from "../text/text.native";
import type { BaseSectionReviewGridProps } from "./section-review-grid.types";
import type { ReviewItem } from "./section-review-grid.types";

export type SectionReviewGridProps = BaseSectionReviewGridProps &
  Omit<ViewProps, "children">;

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
    <Card className="flex min-h-[180px] flex-col !p-4">
      <View className="flex flex-row flex-wrap items-center gap-1.5">
        <Text as="span" size="sm2" black className="font-semibold">
          {review.author}
        </Text>
        {review.countryCode ? <Flag countryCode={review.countryCode} /> : null}
        {secondaryLabel ? (
          <>
            <Text as="span" size="sm2" gray>
              ·
            </Text>
            <Text as="span" size="sm2" gray>
              {secondaryLabel}
            </Text>
          </>
        ) : null}
      </View>
      {review.activity ? (
        <Text as="p" size="sm2" gray className="mt-1">
          {activityPrefix} {review.activity.label}
        </Text>
      ) : null}
      <Rating
        score={review.rating}
        showScore={false}
        size="md"
        className="mt-2"
      />
      <Text size="sm2" numberOfLines={3} className="mt-2 !text-gray-700">
        {review.text}
      </Text>
      {translationLabel ? (
        <Text
          size="xs"
          gray
          className="mt-auto border-t border-solid border-gray-200 pt-3"
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
  className,
  ...props
}: SectionReviewGridProps) {
  if (variant === "grid") {
    return (
      <View className={cn(className)} {...props}>
        <View className="mb-4">
          <Text
            as="h2"
            size="xs"
            className="font-semibold uppercase tracking-[0.16em] !text-gray-600"
          >
            {title}
          </Text>
          {subtitle ? <View className="mt-2">{subtitle}</View> : null}
        </View>
        <View className="gap-4">
          {reviews.map((review, i) => (
            <GridReviewCard
              key={review.id ? `${review.id}-${i}` : String(i)}
              review={review}
              activityPrefix={activityPrefix}
            />
          ))}
        </View>
      </View>
    );
  }

  return (
    <SectionScroller
      title={title}
      subtitle={subtitle}
      className={cn(className)}
      {...props}
    >
      {reviews.map((review, i) => (
        <View
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
        </View>
      ))}
    </SectionScroller>
  );
}
