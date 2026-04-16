import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Card } from "../card/card.native";
import { Text } from "../text/text.native";
import { Rating } from "../rating/rating.native";
import { ActivityCardSkeletonContent } from "./activity-card-skeleton.native";
import type { BaseActivityCardProps } from "./activity-card.types";

export type ActivityCardProps = BaseActivityCardProps &
  Omit<ViewProps, "children">;

export function ActivityCard({
  image,
  title,
  score,
  reviewCount,
  priceLabel,
  price,
  loading = false,
  className,
  render,
  ...props
}: ActivityCardProps) {
  return (
    <Card
      noPadding
      render={render}
      className={cn("relative flex w-full flex-col self-start overflow-hidden", className)}
      {...props}
    >
      <View className="aspect-[4/3] w-full shrink-0 overflow-hidden">
        {image}
      </View>
      <View className="flex flex-1 flex-col gap-1 p-3.5 pt-4">
        <Text as="h3" size="default" bold className="!text-base !leading-snug">
          {title}
        </Text>
        {score > 0 && (
          <Rating score={score} count={reviewCount} size="sm" className="mt-1" />
        )}
        <View className="mt-auto">
          <View className="-mx-3.5 mb-3 mt-2 h-px bg-gray-200" />
          <View className="flex flex-row items-baseline justify-between">
            <Text size="xs" gray className="font-medium">
              {priceLabel}
            </Text>
            <Text size="default" bold>
              {price}
            </Text>
          </View>
        </View>
      </View>
      {loading ? (
        <View className="absolute inset-0 z-10 bg-white">
          <ActivityCardSkeletonContent />
        </View>
      ) : null}
    </Card>
  );
}
