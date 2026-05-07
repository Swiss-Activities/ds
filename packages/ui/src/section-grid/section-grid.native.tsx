"use client";

import { useEffect, useState } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { ActivityCard } from "../activity-card/activity-card.native";
import type { ActivityItem } from "../section-activity-grid/section-activity-grid.types";
import { Skeleton } from "../skeleton/skeleton.native";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type { BaseSectionGridProps } from "./section-grid.types";

export type SectionGridProps = BaseSectionGridProps &
  Omit<ViewProps, "children">;

type LayoutEvent = {
  nativeEvent: {
    layout: {
      height: number;
    };
  };
};

export function SectionGrid({
  title,
  action,
  activities,
  loading = false,
  skeletonAmount = 8,
  className,
  ...props
}: SectionGridProps) {
  const [maxCardHeight, setMaxCardHeight] = useState(0);
  const items: ActivityItem[] = activities.length
    ? activities
    : Array.from({ length: skeletonAmount }, () => ({
        image: null,
        title: "",
        type: "activity",
        subtitle: undefined,
        category: undefined,
        dateRange: undefined,
        distance: undefined,
        meta: undefined,
        score: 0,
        reviewCount: 0,
        priceLabel: "",
        price: "",
        pending: false,
        render: undefined,
      }));

  const titleNode = loading ? (
    <Skeleton
      loading
      amount={1}
      className="w-40"
      classNameItems="h-8 rounded-md"
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    />
  ) : (
    title
  );
  const shouldRenderHeader = Boolean(titleNode || (!loading && action));

  useEffect(() => {
    setMaxCardHeight(0);
  }, [items]);

  return (
    <View className={cn("gap-4", className)} {...props}>
      {shouldRenderHeader ? (
        <View className="flex-row items-center justify-between gap-4">
          {titleNode ? (
            <Text as="h2" size="lg" className="flex-1">
              {titleNode}
            </Text>
          ) : null}
          {loading ? null : action}
        </View>
      ) : null}
      <View className="gap-4">
        {items.map((a, i) => (
          <ActivityCard
            key={i}
            image={a.image}
            title={a.title}
            type={a.type}
            subtitle={a.subtitle}
            category={a.category}
            dateRange={a.dateRange}
            distance={a.distance}
            meta={a.meta}
            score={a.score}
            reviewCount={a.reviewCount}
            priceLabel={a.priceLabel}
            price={a.price}
            loading={loading}
            pending={a.pending}
            render={a.render}
            style={maxCardHeight ? { minHeight: maxCardHeight } : undefined}
            onLayout={(event: LayoutEvent) => {
              const height = Math.ceil(event.nativeEvent.layout.height);
              setMaxCardHeight((current) =>
                height > current ? height : current
              );
            }}
          />
        ))}
      </View>
    </View>
  );
}
