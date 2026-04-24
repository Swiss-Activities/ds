"use client";

import { useEffect, useState } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { ActivityCard } from "../activity-card/activity-card.native";
import {
  SectionScroller,
  sectionScrollerItemClassName,
} from "../section-scroller/section-scroller.native";
import { Skeleton } from "../skeleton/skeleton.native";
import { cn } from "../utils/cn";
import type {
  ActivityItem,
  BaseSectionActivityGridProps,
} from "./section-activity-grid.types";

export type SectionActivityGridProps = BaseSectionActivityGridProps &
  Omit<ViewProps, "children">;

export function SectionActivityGrid({
  title,
  action,
  activities,
  loading = false,
  skeletonAmount = 4,
  className,
  ...props
}: SectionActivityGridProps) {
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

  useEffect(() => {
    setMaxCardHeight(0);
  }, [items]);

  return (
    <SectionScroller
      title={titleNode}
      action={loading ? null : action}
      className={cn(className)}
      {...props}
    >
      {items.map((a, i) => (
        <View key={i} className={sectionScrollerItemClassName}>
          <ActivityCard
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
            onLayout={(event) => {
              const height = Math.ceil(event.nativeEvent.layout.height);
              setMaxCardHeight((current) =>
                height > current ? height : current
              );
            }}
          />
        </View>
      ))}
    </SectionScroller>
  );
}
