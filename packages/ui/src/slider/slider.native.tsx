"use client";

import { useCallback, useState } from "react";
import type { ViewProps, NativeScrollEvent, NativeSyntheticEvent, LayoutChangeEvent } from "react-native";
import { ScrollView, View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import type { BaseSliderProps } from "./slider.types";

export type SliderProps = BaseSliderProps & Omit<ViewProps, "children">;

export function Slider({
  slides,
  showCounter = true,
  className,
  ...props
}: SliderProps) {
  const [index, setIndex] = useState(0);
  const [width, setWidth] = useState(0);
  const total = slides.length;

  const onLayout = useCallback((e: LayoutChangeEvent) => {
    setWidth(e.nativeEvent.layout.width);
  }, []);

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = e.nativeEvent.contentOffset.x;
      const w = e.nativeEvent.layoutMeasurement.width;
      if (w > 0) setIndex(Math.round(offsetX / w));
    },
    []
  );

  return (
    <View
      className={cn("relative h-full w-full overflow-hidden", className)}
      onLayout={onLayout}
      {...props}
    >
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, i) => (
          <View key={i} style={width ? { width } : undefined}>
            {slide}
          </View>
        ))}
      </ScrollView>
      {showCounter && total > 1 && (
        <View className="absolute bottom-3 right-3 z-20 rounded-full bg-white/90 px-2 py-0.5">
          <Text as="span" size="xs" bold className="!text-blue">
            {index + 1}/{total}
          </Text>
        </View>
      )}
    </View>
  );
}
