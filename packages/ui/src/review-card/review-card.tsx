import type { HTMLAttributes } from "react";
import { Button } from "../button";
import { Card } from "../card";
import { Flag } from "../flag";
import { Icon } from "../icon/icon";
import { Languages, ThumbsUp } from "../icons";
import { Rating } from "../rating";
import { Text } from "../text";
import { cn } from "../utils/cn";
import { useReviewUpvote } from "./use-review-upvote";
import type { BaseReviewCardProps } from "./review-card.types";

export type ReviewCardProps = BaseReviewCardProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

export function ReviewCard({
  author,
  countryCode,
  date,
  rating,
  text,
  images,
  hideUpvoteCount = false,
  upvoteCount,
  onUpvote,
  translatedFrom,
  className,
  ...props
}: ReviewCardProps) {
  const { hasUpvoted, handleUpvote, upvoteDisabled } = useReviewUpvote({
    onUpvote,
  });
  const showUpvoteAction = Boolean(onUpvote || upvoteCount != null);
  const showUpvoteCount = upvoteCount != null && !hideUpvoteCount;

  return (
    <Card className={cn("flex flex-col !p-4", className)} {...props}>
      <div className="-mx-4 flex flex-wrap items-center gap-x-2 gap-y-0.5 !border-b !border-l-0 !border-r-0 !border-t-0 !border-solid !border-gray-200 px-4 pb-3">
        <span className="flex min-w-0 max-w-full items-center gap-1.5 whitespace-nowrap">
          {countryCode && <Flag countryCode={countryCode} />}
          <Text
            as="span"
            size="sm"
            bold
            black
            className="min-w-0 max-w-full truncate"
          >
            {author}
          </Text>
        </span>
        <span className="min-w-2 flex-1" aria-hidden="true" />
        <Text as="span" size="sm" gray className="shrink-0">
          {date}
        </Text>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <Rating score={rating} showScore={false} size="md" />
        {showUpvoteAction && (
          <div className="flex items-stretch overflow-hidden rounded-md !border !border-solid !border-gray-200">
            <Button
              variant={hasUpvoted ? "outline-gray" : "ghost"}
              size="sm"
              onClick={handleUpvote}
              disabled={upvoteDisabled}
              className={cn(
                "!rounded-none !border-none !px-2.5 !py-0",
                hasUpvoted
                  ? "!bg-gray-100 text-gray-500"
                  : "text-gray-400 hover:text-gray-600"
              )}
            >
              <Icon icon={ThumbsUp} size="sm" />
            </Button>
            {showUpvoteCount && (
              <div className="flex items-center !border-y-0 !border-l !border-r-0 !border-solid !border-gray-200 px-2.5">
                <Text as="span" size="xs" gray>
                  {upvoteCount}
                </Text>
              </div>
            )}
          </div>
        )}
      </div>
      <Text size="xs" className="mt-3 line-clamp-5 !text-gray-700">
        {text}
      </Text>
      {images && images.length > 0 && (
        <div className="mt-3 flex gap-1.5">
          {images.map((img, i) => (
            <div
              key={i}
              className="relative h-16 w-16 shrink-0 overflow-hidden rounded [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover"
            >
              {img}
            </div>
          ))}
        </div>
      )}
      {translatedFrom && (
        <div className="mt-3 flex items-center gap-1 text-gray-400">
          <Icon icon={Languages} size="sm" />
          <Text as="span" size="xs" gray>
            Original in {translatedFrom}
          </Text>
        </div>
      )}
    </Card>
  );
}
