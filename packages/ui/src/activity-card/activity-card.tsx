import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Card } from "../card";
import { Text } from "../text";
import { Rating } from "../rating";
import type { BaseActivityCardProps } from "./activity-card.types";

export type ActivityCardProps = BaseActivityCardProps &
  HTMLAttributes<HTMLDivElement>;

export function ActivityCard({
  image,
  title,
  score,
  reviewCount,
  priceLabel,
  price,
  className,
  ...props
}: ActivityCardProps) {
  return (
    <Card
      noPadding
      className={cn("group w-full lg:hover:shadow-md", className)}
      {...props}
    >
      <div className="h-[210px] w-full overflow-hidden [&_img]:h-full [&_img]:w-full [&_img]:object-cover">
        {image}
      </div>
      <div className="flex flex-col gap-1 p-3.5 pt-4">
        <Text as="h3" size="default" bold className="!leading-snug">
          {title}
        </Text>
        <Rating score={score} count={reviewCount} size="sm" className="mt-1" />
        <div className="-mx-3.5 mt-2 h-px bg-gray-200" />
        <div className="mt-2 flex items-baseline justify-between">
          <Text size="xs" gray className="font-medium">
            {priceLabel}
          </Text>
          <Text size="default" bold>
            {price}
          </Text>
        </div>
      </div>
    </Card>
  );
}
