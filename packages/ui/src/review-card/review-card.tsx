import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Card } from "../card";
import { Button } from "../button";
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
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="h-3.5 w-3.5">
                <path d="M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 18.5-10.5 34.6-25.9 42.6C497 275.4 504 288.9 504 304c0 23.4-16.8 42.9-38.9 47.1c4.4 7.3 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.4 1.1 6.9 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z" />
              </svg>
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
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3 w-3">
            <path d="m5 8 6 6M4 14l6-6 2-3M2 5h12M7 2h1M22 22l-5-10-5 10M14 18h6" />
          </svg>
          <Text as="span" size="xs" gray>
            Original in {translatedFrom}
          </Text>
        </div>
      )}
    </Card>
  );
}
