"use client";

import { useEffect } from "react";
import type { ViewProps } from "react-native";
import { ScrollView, View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { useHorizontalScroller } from "./horizontal-scroller.context";
import type { BaseHorizontalScrollerTrackProps } from "./horizontal-scroller.types";

export type HorizontalScrollerTrackProps = BaseHorizontalScrollerTrackProps &
  Omit<ViewProps, "children">;

export function HorizontalScrollerTrack({
  children,
  className,
  bleed = false,
  ...props
}: HorizontalScrollerTrackProps) {
  const { activeId, trackRef } = useHorizontalScroller();

  useEffect(() => {
    if (activeId === "all") {
      (trackRef.current as any)?.scrollTo?.({ x: 0, animated: true });
    }
  }, [activeId, trackRef]);

  return (
    <ScrollView
      ref={trackRef as any}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View
        className={cn(
          "flex flex-row gap-2",
          bleed && "-mx-4 px-4",
          className
        )}
        {...props}
      >
        {children}
      </View>
    </ScrollView>
  );
}
