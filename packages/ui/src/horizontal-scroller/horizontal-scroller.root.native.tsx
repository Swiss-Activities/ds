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
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const scrollPrev = useCallback(() => {
    trackRef.current?.scrollTo?.({ x: -300, animated: true });
  }, []);

  const scrollNext = useCallback(() => {
    trackRef.current?.scrollTo?.({ x: 300, animated: true });
  }, []);

  const value = useMemo(
    () => ({
      canScrollLeft,
      canScrollRight,
      scrollPrev,
      scrollNext,
      activeId,
      trackRef,
    }),
    [canScrollLeft, canScrollRight, scrollPrev, scrollNext, activeId]
  );

  return (
    <HorizontalScrollerContext.Provider value={value}>
      <View className={cn("relative", className)} {...props}>
        {children}
      </View>
    </HorizontalScrollerContext.Provider>
  );
}
