import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { ReviewCard } from "../review-card/review-card.native";
import { SectionScroller, sectionScrollerItemClassName } from "../section-scroller/section-scroller.native";
import type { BaseSectionReviewGridProps } from "./section-review-grid.types";

export type SectionReviewGridProps = BaseSectionReviewGridProps &
  Omit<ViewProps, "children">;

export function SectionReviewGrid({
  title,
  subtitle,
  reviews,
  className,
  ...props
}: SectionReviewGridProps) {
  return (
    <SectionScroller title={title} subtitle={subtitle} className={cn(className)} {...props}>
      {reviews.map((review, i) => (
        <View key={review.id ?? i} className={sectionScrollerItemClassName}>
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
        </View>
      ))}
    </SectionScroller>
  );
}
