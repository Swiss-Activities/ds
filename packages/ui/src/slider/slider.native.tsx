"use client";

import { useCallback, useRef, useState } from "react";
import type { ViewProps, NativeScrollEvent, NativeSyntheticEvent } from "react-native";
import { Dimensions } from "react-native";
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
  const total = slides.length;

  const onScroll = useCallback(
    (e: NativeSyntheticEvent<NativeScrollEvent>) => {
      const offsetX = e.nativeEvent.contentOffset.x;
      const width = e.nativeEvent.layoutMeasurement.width;
      if (width > 0) setIndex(Math.round(offsetX / width));
    },
    []
  );

  return (
    <View className={cn("relative overflow-hidden", className)} {...props}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, i) => (
          <View key={i} style={{ width: Dimensions.get("window").width }}>
            {slide}
          </View>
        ))}
      </ScrollView>
      {showCounter && total > 1 && (
        <View className="absolute bottom-3 right-3 z-20 rounded bg-black/30 px-2 py-0.5 backdrop-blur-sm">
          <Text as="span" size="xs" className="!text-white">
            {index + 1}/{total}
          </Text>
        </View>
      )}
    </View>
  );
}
