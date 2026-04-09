import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Card } from "../card";
import { Text } from "../text";
import { Rating } from "../rating";
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
  className,
  ...props
}: ActivityCardProps) {
  return (
    <Card noPadding className={cn("w-full", className)} {...props}>
      <View className="h-[210px] w-full overflow-hidden">
        {image}
      </View>
      <View className="flex flex-col gap-1 p-3.5 pt-4">
        <Text as="h3" size="default" bold className="!leading-snug">
          {title}
        </Text>
        <Rating score={score} count={reviewCount} size="sm" className="mt-1" />
        <View className="-mx-3.5 mt-2 h-px bg-gray-200" />
        <View className="mt-2 flex flex-row items-baseline justify-between">
          <Text size="xs" gray className="font-medium">
            {priceLabel}
          </Text>
          <Text size="default" bold>
            {price}
          </Text>
        </View>
      </View>
    </Card>
  );
}
