import type { HTMLAttributes } from "react";
import { Skeleton } from "../skeleton";
import { cn } from "../utils/cn";

export type HeroSkeletonProps = HTMLAttributes<HTMLDivElement> & {
  fill?: boolean;
};

export function HeroSkeleton({
  fill = false,
  className,
  ...props
}: HeroSkeletonProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gray-100 lg:rounded-lg",
        fill ? "absolute inset-0" : "h-[316px] sm:h-[360px] lg:h-[408px]",
        className
      )}
      {...props}
    >
      <Skeleton
        loading
        full
        classNameItems="!rounded-none lg:!rounded-lg"
      />
    </div>
  );
}
