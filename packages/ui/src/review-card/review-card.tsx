import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Card } from "../card";
import { Button } from "../button";
import { Icon } from "../icon/icon";
import { Languages, ThumbsUp } from "../icons";
import { Text } from "../text";
import { Rating } from "../rating";
import { Flag } from "../flag";
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
  upvoteCount,
  onUpvote,
  translatedFrom,
  className,
  ...props
}: ReviewCardProps) {
  return (
    <Card className={cn("flex flex-col !p-4", className)} {...props}>
      <div className="-mx-4 flex items-center gap-1.5 border-b border-solid border-gray-200 px-4 pb-3">
        {countryCode && <Flag countryCode={countryCode} />}
        <Text as="span" size="sm" bold black>
          {author}
        </Text>
        <Text as="span" size="sm" gray className="ms-auto">
          {date}
        </Text>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <Rating score={rating} showScore={false} size="md" />
        {upvoteCount != null && (
          <div className="flex items-stretch rounded-md border border-solid border-gray-200">
            <Button variant="ghost" size="sm" onClick={onUpvote} className="!rounded-none !px-2.5 text-gray-400 hover:text-gray-600">
              <Icon icon={ThumbsUp} size="sm" />
            </Button>
            <div className="flex items-center border-l border-solid border-gray-200 px-2.5">
              <Text as="span" size="xs" gray>
                {upvoteCount}
              </Text>
            </div>
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
