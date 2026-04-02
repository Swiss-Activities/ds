import { useEffect, useRef } from "react";
import type { ViewProps } from "react-native";
import { ScrollView, View } from "react-native-css/components";
import { cn } from "../utils/cn";
import type { BaseHorizontalScrollerProps } from "./horizontal-scroller.types";

export type HorizontalScrollerProps = BaseHorizontalScrollerProps &
  Omit<ViewProps, "children">;

export function HorizontalScroller({
  activeId,
  className,
  children,
  classNameInner,
  ...props
}: HorizontalScrollerProps) {
  const scrollRef = useRef<ScrollView>(null);

  useEffect(() => {
    if (activeId === "all") {
      scrollRef.current?.scrollTo({ x: 0, animated: true });
    }
  }, [activeId]);

  return (
    <View className={cn("relative", className)} {...props}>
      <ScrollView
        ref={scrollRef}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View className={cn("flex flex-row gap-2", classNameInner)}>
          {children}
        </View>
      </ScrollView>
    </View>
  );
}
