import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { Star, StarHalf } from "../icons/index.native";
import { cn } from "../utils/cn";
import { Text } from "../text";
import {
  defaultIconStrokeWidth,
  iconPixelSizes,
} from "../icon/icon.shared";
import type { BaseRatingProps } from "./rating.types";

const starPixelSizes = {
  xs: iconPixelSizes.sm,
  sm: iconPixelSizes.sm,
  default: iconPixelSizes.sm,
  md: iconPixelSizes.md,
  lg: iconPixelSizes.lg,
} as const;

const STAR_STROKE_WIDTH = defaultIconStrokeWidth;

function StarSolid({ size, color }: { size: number; color: string }) {
  return (
    <Star
      size={size}
      color={color}
      fill={color}
      strokeWidth={STAR_STROKE_WIDTH}
    />
  );
}

function StarHalfSolid({ size, color }: { size: number; color: string }) {
  return (
    <StarHalf
      size={size}
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
  const yellow = "#facc15";
  const gray = "#d1d5db";

  return (
    <View className={cn("flex flex-row items-center gap-0.5", className)}>
      {[1, 2, 3, 4, 5].map((i) => {
        const isFull = score >= i;
        const isHalf = !isFull && score >= i - 0.5;

        return (
          <View className="relative" key={i}>
            <StarSolid size={size} color={isFull ? yellow : gray} />
            {isHalf && (
              <View className="absolute start-0 top-0">
                <StarHalfSolid size={size} color={yellow} />
              </View>
            )}
          </View>
        );
      })}
    </View>
  );
}

export type RatingProps = BaseRatingProps & Omit<ViewProps, "children">;

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
  const yellow = "#facc15";

  if (stacked) {
    return (
      <View
        className={cn("flex flex-col items-center", className)}
        {...props}
      >
        <Text as="span" size="default" bold className="!leading-none">
          {score.toFixed(1)}
        </Text>
        <Stars score={score} size={starSize} className="mt-1" />
      </View>
    );
  }

  return (
    <View
      className={cn("flex flex-row flex-wrap items-center", className)}
      {...props}
    >
      {showScore && (
        <Text as="span" size="xs" gray className="me-1.5 font-medium">
          {score.toFixed(1)}
        </Text>
      )}
      {isSm ? (
        <View className="flex flex-row items-center">
          <StarSolid size={starSize} color={yellow} />
          {count != null && (
            <Text as="span" size="xs" gray className="ms-1 font-medium">
              ({count})
            </Text>
          )}
        </View>
      ) : (
        <>
          <Stars score={score} size={starSize} className="me-2" />
          {label}
        </>
      )}
    </View>
  );
}
