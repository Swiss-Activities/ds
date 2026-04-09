"use client";

import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { ActivityCard } from "../activity-card/activity-card.native";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root.native";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track.native";
import { HorizontalScrollerTitle } from "../horizontal-scroller/horizontal-scroller.title.native";
import type { BaseSectionActivityGridProps } from "./section-activity-grid.types";

export type SectionActivityGridProps = BaseSectionActivityGridProps &
  Omit<ViewProps, "children">;

export function SectionActivityGrid({
  title,
  activities,
  className,
  ...props
}: SectionActivityGridProps) {
  return (
    <HorizontalScrollerRoot className={cn(className)} {...props}>
      <View className="mb-4">
        <HorizontalScrollerTitle>{title}</HorizontalScrollerTitle>
      </View>
      <HorizontalScrollerTrack bleed className="gap-4">
        {activities.map((a, i) => (
          <View key={i} className="w-[66%] shrink-0">
            <ActivityCard
              image={a.image}
              title={a.title}
              score={a.score}
              reviewCount={a.reviewCount}
              priceLabel={a.priceLabel}
              price={a.price}
            />
          </View>
        ))}
      </HorizontalScrollerTrack>
    </HorizontalScrollerRoot>
  );
}
