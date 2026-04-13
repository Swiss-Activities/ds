import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Text } from "../text";
import type { BaseRatingProps } from "./rating.types";

function StarSolid({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 576 512"
      className={cn(
        "inline-flex h-[1em] w-[1em] shrink-0 fill-current",
        className
      )}
    >
      <path d="M310.9 16.7C307.7 6.8 298.5 0 288 0s-19.7 6.8-22.9 16.7L214.5 176H56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L172.1 320.7 121.1 480.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7L288 406.4 417.3 506.9c8.3 6.5 19.8 6.8 28.5 .7s12.3-16.9 9.1-27L403.9 320.7 534.7 218.9c8.1-6.3 11.3-17 8-26.7s-12.4-16.2-22.7-16.2H361.5L310.9 16.7z" />
    </svg>
  );
}

function StarHalfSolid({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 576 512"
      className={cn(
        "inline-flex h-[1em] w-[1em] shrink-0 fill-current",
        className
      )}
    >
      <path d="M254.4 50.4L214.5 176H90.3 88 74.7 56c-10.3 0-19.4 6.5-22.7 16.2s-.1 20.4 8 26.7L56 230.4l10.5 8.2 1.8 1.4 103.7 80.7L132 446.7l-1.1 3.5L126.1 465l-5 15.7c-3.2 10 .5 21 9.1 27s20.2 5.7 28.5-.7l13-10.1 12.3-9.5 2.9-2.3L288 406.4V325.3 155.9 0c-10.5 0-19.7 6.8-22.9 16.7L260 32.9l0 0-4.6 14.3-1 3.2z" />
    </svg>
  );
}

function Stars({ score, className }: { score: number; className?: string }) {
  return (
    <span className={cn("flex items-center space-x-0.5", className)}>
      {[1, 2, 3, 4, 5].map((i) => {
        const isFull = score >= i;
        const isHalf = !isFull && score >= i - 0.5;
        return (
          <span className="relative flex" key={i}>
            <StarSolid className={cn({ "text-yellow-400": isFull })} />
            {isHalf && (
              <StarHalfSolid className="absolute start-0 top-0 text-yellow-400" />
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

  if (stacked) {
    return (
      <span className={cn("flex flex-col items-center", className)} {...props}>
        <Text as="span" size="default" bold className="!leading-none">
          {score.toFixed(1)}
        </Text>
        <Stars score={score} className="mt-1 text-xs text-gray-300" />
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
          <StarSolid className="relative -top-px text-sm text-yellow-400" />
          {count != null && <Text as="span" size="xs" gray className="ms-1 font-medium !text-gray-700">({count})</Text>}
        </Text>
      ) : (
        <>
          <Stars
            score={score}
            className={cn(
              "relative -top-px me-2 text-xs text-gray-300 lg:text-sm",
              { "me-0 w-max !text-2xl": size === "lg" }
            )}
          />
          {label}
        </>
      )}
    </span>
  );
}
