"use client";

import React, { useEffect, useRef, useState } from "react";
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
  const { activeId, trackRef, setMetrics } = useHorizontalScroller();
  const itemLayouts = useRef<Record<string, { x: number; width: number }>>({});
  const viewportWidthRef = useRef(0);
  const contentWidthRef = useRef(0);
  const [layoutVersion, setLayoutVersion] = useState(0);

  const updateStepWidth = () => {
    const layouts = Object.values(itemLayouts.current)
      .sort((a, b) => a.x - b.x)
      .filter((layout) => layout.width > 0);

    if (layouts.length < 2) return;

    const stepWidth = layouts[1].x - layouts[0].x;
    if (stepWidth > 0) {
      setMetrics?.({ stepWidth });
    }
  };

  useEffect(() => {
    if (!activeId) return;

    if (activeId === "all") {
      (trackRef.current as any)?.scrollTo?.({ x: 0, animated: true });
      setMetrics?.({ scrollX: 0 });
      return;
    }

    const layout = itemLayouts.current[activeId];
    if (!layout) {
      return;
    }

    const maxX = Math.max(0, contentWidthRef.current - viewportWidthRef.current);
    const targetX = Math.min(
      maxX,
      Math.max(0, layout.x - (viewportWidthRef.current - layout.width) / 2)
    );

    (trackRef.current as any)?.scrollTo?.({ x: targetX, animated: true });
    setMetrics?.({ scrollX: targetX });
  }, [activeId, layoutVersion, setMetrics, trackRef]);

  const childrenWithRefs = React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    const id =
      (child.props as Record<string, unknown>)["data-id"] ??
      (child.props as Record<string, unknown>).id ??
      (child.props as Record<string, unknown>).nativeID;

    if (typeof id !== "string") {
      return child;
    }

    const originalOnLayout = (child.props as Record<string, unknown>).onLayout as
      | ((event: any) => void)
      | undefined;

    return React.cloneElement(child, {
      nativeID: id,
      onLayout: (event: any) => {
        originalOnLayout?.(event);
        const { x, width } = event.nativeEvent.layout;
        itemLayouts.current[id] = { x, width };
        updateStepWidth();
        setLayoutVersion((version) => version + 1);
      },
    } as Record<string, unknown>);
  });

  return (
    <ScrollView
      ref={trackRef as any}
      horizontal
      onLayout={(event) => {
        viewportWidthRef.current = event.nativeEvent.layout.width;
        setMetrics?.({ viewportWidth: viewportWidthRef.current });
      }}
      onContentSizeChange={(contentWidth) => {
        contentWidthRef.current = contentWidth;
        setMetrics?.({ contentWidth });
      }}
      onScroll={(event) => {
        setMetrics?.({ scrollX: event.nativeEvent.contentOffset.x });
      }}
      scrollEventThrottle={16}
      showsHorizontalScrollIndicator={false}
      decelerationRate="fast"
    >
      <View
        className={cn(
          "flex flex-row gap-2",
          bleed && "-mx-4 px-4",
          className
        )}
        {...props}
      >
        {childrenWithRefs}
      </View>
    </ScrollView>
  );
}
