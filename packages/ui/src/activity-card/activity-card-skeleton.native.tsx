import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { Card } from "../card/card.native";
import { Skeleton } from "../skeleton/skeleton.native";
import { cn } from "../utils/cn";

export type ActivityCardSkeletonProps = Omit<ViewProps, "children">;

function ActivityCardSkeletonContent() {
  return (
    <>
      <View className="aspect-[4/3] w-full shrink-0 overflow-hidden">
        <Skeleton
          loading
          className="h-full w-full !space-y-0"
          classNameItems="!h-full !rounded-none"
          amount={1}
        />
      </View>
      <View className="flex flex-1 flex-col gap-3 p-3.5 pt-4">
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
        <View className="mt-auto">
          <View className="-mx-3.5 mb-3 mt-2 h-px bg-gray-200" />
          <View className="flex flex-row items-center justify-between gap-4">
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
          </View>
        </View>
      </View>
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
      className={cn("flex w-full flex-col overflow-hidden self-start", className)}
      {...props}
    >
      <ActivityCardSkeletonContent />
    </Card>
  );
}

export { ActivityCardSkeletonContent };
