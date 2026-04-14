import type { HTMLAttributes } from "react";
import { Star, StarHalf } from "../icons";
import { cn } from "../utils/cn";
import { Text } from "../text";
import {
  defaultIconStrokeWidth,
  iconPixelSizes,
} from "../icon/icon.shared";
import type { BaseRatingProps } from "./rating.types";

const STAR_STROKE_WIDTH = defaultIconStrokeWidth;

const starPixelSizes = {
  xs: iconPixelSizes.sm,
  sm: iconPixelSizes.sm,
  default: iconPixelSizes.sm,
  md: iconPixelSizes.md,
  lg: iconPixelSizes.lg,
} as const;

function StarSolid({
  className,
  color,
  size,
}: {
  className?: string;
  color: string;
  size: number;
}) {
  return (
    <Star
      size={size}
      className={cn("inline-flex shrink-0", className)}
      color={color}
      fill={color}
      strokeWidth={STAR_STROKE_WIDTH}
    />
  );
}

function StarHalfSolid({
  className,
  color,
  size,
}: {
  className?: string;
  color: string;
  size: number;
}) {
  return (
    <StarHalf
      size={size}
      className={cn("inline-flex shrink-0", className)}
      color={color}
      fill={color}
      strokeWidth={STAR_STROKE_WIDTH}
    />
  );
}

function Stars({
  score,
  size,
  className,
}: {
  score: number;
  size: number;
  className?: string;
}) {
  return (
    <span className={cn("flex items-center space-x-0.5", className)}>
      {[1, 2, 3, 4, 5].map((i) => {
        const isFull = score >= i;
        const isHalf = !isFull && score >= i - 0.5;
        return (
          <span className="relative flex" key={i}>
            <StarSolid
              size={size}
              color={isFull ? "#facc15" : "#d1d5db"}
            />
            {isHalf && (
              <StarHalfSolid
                size={size}
                className="absolute start-0 top-0"
                color="#facc15"
              />
            )}
          </span>
        );
      })}
    </span>
  );
}

export type RatingProps = BaseRatingProps &
  Omit<HTMLAttributes<HTMLSpanElement>, "children">;

export function Rating({
  score,
  count,
  size = "default",
  showScore = true,
  stacked = false,
  label,
  className,
  ...props
}: RatingProps) {
  const isSm = size === "sm" || size === "xs";
  const starSize = starPixelSizes[size];

  if (stacked) {
    return (
      <span className={cn("flex flex-col items-center", className)} {...props}>
        <Text as="span" size="default" bold className="!leading-none">
          {score.toFixed(1)}
        </Text>
        <Stars score={score} size={starSize} className="mt-1" />
      </span>
    );
  }

  return (
    <span className={cn("flex flex-wrap items-center", className)} {...props}>
      {showScore && (
        <Text as="span" size="xs" gray className="me-1.5 font-medium !text-gray-700">
          {score.toFixed(1)}
        </Text>
      )}
      {isSm ? (
        <Text as="span" size="xs" gray className="flex items-center font-medium !text-gray-700">
          <StarSolid
            size={starSize}
            className="relative -top-px"
            color="#facc15"
          />
          {count != null && <Text as="span" size="xs" gray className="ms-1 font-medium !text-gray-700">({count})</Text>}
        </Text>
      ) : (
        <>
          <Stars
            score={score}
            size={starSize}
            className={cn(
              "relative -top-px me-2",
              { "me-0 w-max": size === "md" || size === "lg" }
            )}
          />
          {label}
        </>
      )}
    </span>
  );
}
