import type { HTMLAttributes } from "react";
import { Card } from "../card";
import { Skeleton } from "../skeleton";
import { cn } from "../utils/cn";

export type ActivityCardSkeletonProps = HTMLAttributes<HTMLDivElement>;

function ActivityCardSkeletonContent() {
  return (
    <>
      <div className="aspect-[4/3] w-full shrink-0 overflow-hidden">
        <Skeleton
          loading
          className="h-full w-full !space-y-0"
          classNameItems="!h-full !rounded-none"
          amount={1}
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-3.5 pt-4">
        <Skeleton
          loading
          className="!space-y-2"
          classNameItems="!h-5 first:!w-[78%] last:!w-[56%]"
          amount={2}
        />
        <Skeleton
          loading
          className="!space-y-0"
          classNameItems="!h-4 !w-[42%]"
          amount={1}
        />
        <div className="mt-auto">
          <div className="-mx-3.5 mb-3 mt-2 h-px bg-gray-200" />
          <div className="flex items-center justify-between gap-4">
            <Skeleton
              loading
              className="!space-y-0"
              classNameItems="!h-4 !w-20"
              amount={1}
            />
            <Skeleton
              loading
              className="!space-y-0"
              classNameItems="!h-5 !w-16"
              amount={1}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function ActivityCardSkeleton({
  className,
  ...props
}: ActivityCardSkeletonProps) {
  return (
    <Card
      noPadding
      className={cn("flex h-full w-full flex-col overflow-hidden", className)}
      {...props}
    >
      <ActivityCardSkeletonContent />
    </Card>
  );
}

export { ActivityCardSkeletonContent };
