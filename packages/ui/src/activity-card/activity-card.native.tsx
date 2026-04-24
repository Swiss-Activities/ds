import type { ReactNode } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { Card } from "../card/card.native";
import { Rating } from "../rating/rating.native";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import { ActivityCardSkeletonContent } from "./activity-card-skeleton.native";
import type {
  ActivityCardMetaItem,
  BaseActivityCardProps,
} from "./activity-card.types";

export type ActivityCardProps = BaseActivityCardProps &
  Omit<ViewProps, "children">;

function hasContent(value: ActivityCardMetaItem["label"]) {
  return value !== null && value !== undefined && value !== "";
}

function getDefaultMeta({
  type,
  subtitle,
  category,
  dateRange,
  distance,
}: Pick<
  BaseActivityCardProps,
  "type" | "subtitle" | "category" | "dateRange" | "distance"
>): ActivityCardMetaItem[] {
  const isBookable = !type || type === "activity";

  return [
    !isBookable && hasContent(subtitle) ? { label: subtitle } : null,
    !isBookable && hasContent(dateRange) ? { label: dateRange } : null,
    !isBookable && hasContent(category) ? { label: category } : null,
    hasContent(distance) ? { label: distance } : null,
  ].filter(Boolean) as ActivityCardMetaItem[];
}

export function ActivityCard({
  image,
  title,
  type = "activity",
  subtitle,
  category,
  dateRange,
  distance,
  meta,
  score = 0,
  reviewCount = 0,
  priceLabel = "",
  price = "",
  loading = false,
  pending = false,
  className,
  render,
  ...props
}: ActivityCardProps) {
  const normalizedScore = Number(score) || 0;
  const isBookable = type === "activity";
  const hasPricingFooter = isBookable && Boolean(price);
  const metaItems =
    meta ??
    getDefaultMeta({
      type,
      subtitle,
      category,
      dateRange,
      distance,
    });

  return (
    <Card
      noPadding
      render={render}
      className={cn(
        "relative flex w-full flex-col self-start overflow-hidden",
        className
      )}
      {...props}
    >
      <View className="aspect-[4/3] w-full shrink-0 overflow-hidden">
        {image as ReactNode}
      </View>
      <View className="flex flex-1 flex-col gap-1 p-3.5 pt-4">
        <Text as="h3" size="default" bold className="!text-base !leading-snug">
          {title}
        </Text>
        {metaItems.length ? (
          <View className="mt-1.5 gap-1.5">
            {metaItems.map((item, index) => (
              <Text
                key={index}
                as="span"
                size="xs"
                gray
                className="font-medium !leading-snug"
              >
                {item.label}
              </Text>
            ))}
          </View>
        ) : null}
        {normalizedScore > 0 && (
          <Rating
            score={normalizedScore}
            count={reviewCount ?? undefined}
            size="sm"
            className="mt-1"
          />
        )}
        {hasPricingFooter ? (
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
        ) : null}
      </View>
      {loading ? (
        <View className="absolute inset-0 z-10 bg-white">
          <ActivityCardSkeletonContent />
        </View>
      ) : pending ? (
        <View className="absolute inset-0 z-10 bg-white/70" />
      ) : null}
    </Card>
  );
}
