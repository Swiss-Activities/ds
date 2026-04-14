"use client";

import { useEffect, useState } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { ActivityCard } from "../activity-card/activity-card.native";
import { SectionScroller, sectionScrollerItemClassName } from "../section-scroller/section-scroller.native";
import type { BaseSectionActivityGridProps } from "./section-activity-grid.types";

export type SectionActivityGridProps = BaseSectionActivityGridProps &
  Omit<ViewProps, "children">;

export function SectionActivityGrid({
  title,
  activities,
  className,
  ...props
}: SectionActivityGridProps) {
  const [maxCardHeight, setMaxCardHeight] = useState(0);

  useEffect(() => {
    setMaxCardHeight(0);
  }, [activities]);

  return (
    <SectionScroller title={title} className={cn(className)} {...props}>
      {activities.map((a, i) => (
        <View key={i} className={sectionScrollerItemClassName}>
          <ActivityCard
            image={a.image}
            title={a.title}
            score={a.score}
            reviewCount={a.reviewCount}
            priceLabel={a.priceLabel}
            price={a.price}
            render={a.render}
            style={maxCardHeight ? { minHeight: maxCardHeight } : undefined}
            onLayout={(event) => {
              const height = Math.ceil(event.nativeEvent.layout.height);
              setMaxCardHeight((current) => (height > current ? height : current));
            }}
          />
        </View>
      ))}
    </SectionScroller>
  );
}
