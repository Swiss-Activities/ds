"use client";

import { useCallback, useMemo, useRef, useState } from "react";
import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { HorizontalScrollerContext } from "./horizontal-scroller.context";
import type { BaseHorizontalScrollerRootProps } from "./horizontal-scroller.types";

export type HorizontalScrollerRootProps = BaseHorizontalScrollerRootProps &
  Omit<ViewProps, "children">;

export function HorizontalScrollerRoot({
  activeId,
  children,
  className,
  ...props
}: HorizontalScrollerRootProps) {
  const trackRef = useRef<any>(null);
  const scrollXRef = useRef(0);
  const contentWidthRef = useRef(0);
  const viewportWidthRef = useRef(0);
  const stepWidthRef = useRef(300);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateOverflow = useCallback(
    (
      scrollX = scrollXRef.current,
      contentWidth = contentWidthRef.current,
      viewportWidth = viewportWidthRef.current
    ) => {
      setCanScrollLeft(scrollX > 1);
      setCanScrollRight(scrollX < contentWidth - viewportWidth - 1);
    },
    []
  );

  const setMetrics = useCallback(
    ({
      scrollX,
      contentWidth,
      viewportWidth,
      stepWidth,
    }: {
      scrollX?: number;
      contentWidth?: number;
      viewportWidth?: number;
      stepWidth?: number;
    }) => {
      if (typeof scrollX === "number") {
        scrollXRef.current = scrollX;
      }

      if (typeof contentWidth === "number") {
        contentWidthRef.current = contentWidth;
      }

      if (typeof viewportWidth === "number") {
        viewportWidthRef.current = viewportWidth;
      }

      if (typeof stepWidth === "number" && stepWidth > 0) {
        stepWidthRef.current = stepWidth;
      }

      updateOverflow();
    },
    [updateOverflow]
  );

  const scrollPrev = useCallback(() => {
    const nextX = Math.max(0, scrollXRef.current - stepWidthRef.current);
    trackRef.current?.scrollTo?.({ x: nextX, animated: true });
  }, []);

  const scrollNext = useCallback(() => {
    const maxX = Math.max(
      0,
      contentWidthRef.current - viewportWidthRef.current
    );
    const nextX = Math.min(maxX, scrollXRef.current + stepWidthRef.current);
    trackRef.current?.scrollTo?.({ x: nextX, animated: true });
  }, []);

  const value = useMemo(
    () => ({
      canScrollLeft,
      canScrollRight,
      scrollPrev,
      scrollNext,
      activeId,
      trackRef,
      setMetrics,
    }),
    [
      canScrollLeft,
      canScrollRight,
      scrollPrev,
      scrollNext,
      activeId,
      setMetrics,
    ]
  );

  return (
    <HorizontalScrollerContext.Provider value={value}>
      <View className={cn("relative", className)} {...props}>
        {children}
      </View>
    </HorizontalScrollerContext.Provider>
  );
}
