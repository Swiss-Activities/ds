import type { ViewProps } from "react-native";
import { Skeleton } from "../skeleton/skeleton.native";
import { cn } from "../utils/cn";

export type HeroSkeletonProps = ViewProps & {
  fill?: boolean;
};

export function HeroSkeleton({
  fill = false,
  className,
  ...props
}: HeroSkeletonProps) {
  return (
    <Skeleton
      loading
      full={fill}
      className={cn(
        "bg-gray-100",
        fill ? "absolute inset-0" : "h-[316px] sm:h-[360px] lg:h-[408px]",
        className
      )}
      classNameItems="!rounded-none"
      {...props}
    />
  );
}
