"use client";

import { useState } from "react";
import type { ViewProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import Svg, {
  Defs,
  LinearGradient,
  Path,
  Rect,
  Stop,
} from "react-native-svg";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root.native";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track.native";
import { useHorizontalScroller } from "../horizontal-scroller/horizontal-scroller.context";
import type { BaseWeatherProps, WeatherDay } from "./weather.types";

export type WeatherProps = BaseWeatherProps & Omit<ViewProps, "children">;

const MIN_ITEM_WIDTH = 72;
const BUTTON_WIDTH = 36;
const GAP = 8;

function WeatherDayCard({
  day,
  unit,
  width,
  variant,
  isSelected,
}: {
  day: WeatherDay;
  unit: string;
  width?: number;
  variant: NonNullable<BaseWeatherProps["variant"]>;
  isSelected: boolean;
}) {
  const isDark = variant === "dark";

  return (
    <View
      style={width ? { width } : undefined}
      className={cn(
        "flex flex-col items-start gap-1 rounded-lg border border-solid px-2.5 py-2",
        isDark
          ? isSelected
            ? "border-primary bg-white/10"
            : "border-white bg-white/5"
          : isSelected
            ? "border-primary bg-white"
            : "border-gray-200 bg-white"
      )}
    >
      <Text
        as="span"
        size="xs"
        bold
        className={cn(isDark ? "!text-white" : "!text-dark")}
      >
        {day.label}
      </Text>
      <View className="flex w-full flex-row items-center justify-between">
        <View className="[&_svg]:h-6 [&_svg]:w-6">{day.icon}</View>
        <View className="flex flex-col items-end">
          <Text
            as="span"
            size="xs"
            className={cn(isDark ? "!text-white/60" : "!text-gray-500")}
          >
            {day.low}
            {unit}
          </Text>
          <Text
            as="span"
            size="xs"
            bold
            className={cn(isDark ? "!text-white" : "!text-dark")}
          >
            {day.high}
            {unit}
          </Text>
        </View>
      </View>
    </View>
  );
}

function ChevronRight({ color }: { color: string }) {
  return (
    <Svg width={14} height={14} viewBox="0 0 320 512" fill={color}>
      <Path d="M305 239c9.4 9.4 9.4 24.6 0 33.9L113 465c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l175-175L79 81c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0L305 239z" />
    </Svg>
  );
}

function ChevronLeft({ color }: { color: string }) {
  return (
    <Svg width={14} height={14} viewBox="0 0 320 512" fill={color}>
      <Path d="M15 239c-9.4 9.4-9.4 24.6 0 33.9L207 465c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9L65.9 256 241 81c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0L15 239z" />
    </Svg>
  );
}

function NextButton({
  hasOverflow,
  variant,
}: {
  hasOverflow: boolean;
  variant: NonNullable<BaseWeatherProps["variant"]>;
}) {
  const { canScrollRight, scrollNext } = useHorizontalScroller();
  const isDark = variant === "dark";

  if (!hasOverflow) return null;

  return (
    <Pressable
      onPress={scrollNext}
      className={cn(
        "shrink-0 items-center justify-center self-stretch rounded-lg border border-solid px-2.5",
        isDark
          ? "border-white bg-white/5"
          : "border-gray-200 bg-white",
        !canScrollRight && "pointer-events-none opacity-0"
      )}
      style={{ width: BUTTON_WIDTH }}
    >
      <ChevronRight color={isDark ? "#ffffff" : "#737373"} />
    </Pressable>
  );
}

function ScrollBackButton({
  variant,
}: {
  variant: NonNullable<BaseWeatherProps["variant"]>;
}) {
  const { canScrollLeft, scrollPrev } = useHorizontalScroller();
  const gradientColor = variant === "dark" ? "#002f49" : "#ffffff";

  return (
    <Pressable
      onPress={scrollPrev}
      className={cn(
        "absolute bottom-0 left-0 top-0 z-10 w-10 items-start justify-center ps-2",
        !canScrollLeft && "pointer-events-none opacity-0"
      )}
    >
      <Svg
        pointerEvents="none"
        width="100%"
        height="100%"
        style={{ position: "absolute", left: 0, top: 0, bottom: 0 }}
      >
        <Defs>
          <LinearGradient id="weather-back-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <Stop offset="0%" stopColor={gradientColor} />
            <Stop offset="100%" stopColor={gradientColor} stopOpacity={0} />
          </LinearGradient>
        </Defs>
        <Rect width="100%" height="100%" fill="url(#weather-back-gradient)" />
      </Svg>
      <ChevronLeft color={variant === "dark" ? "#ffffff" : "#737373"} />
    </Pressable>
  );
}

export function Weather({
  days,
  unit = "°",
  variant = "dark",
  selected,
  onSelect,
  className,
  ...props
}: WeatherProps) {
  const [containerWidth, setContainerWidth] = useState<number | undefined>();
  const hasOverflow =
    typeof containerWidth === "number" &&
    days.length > Math.floor((containerWidth + GAP) / (MIN_ITEM_WIDTH + GAP));
  const availableWidth =
    typeof containerWidth === "number"
      ? hasOverflow
        ? containerWidth - BUTTON_WIDTH - GAP
        : containerWidth
      : undefined;
  const visibleCount =
    typeof availableWidth === "number"
      ? Math.max(
          1,
          Math.floor((availableWidth + GAP) / (MIN_ITEM_WIDTH + GAP))
        )
      : undefined;
  const itemWidth =
    typeof availableWidth === "number" && typeof visibleCount === "number"
      ? Math.max(
          (availableWidth - (visibleCount - 1) * GAP) / visibleCount,
          MIN_ITEM_WIDTH
        )
      : undefined;

  return (
    <View
      className={cn(className)}
      onLayout={(event) => {
        setContainerWidth(event.nativeEvent.layout.width);
      }}
    >
      <HorizontalScrollerRoot className="flex flex-row gap-2" {...props}>
        <View className="relative flex-1 overflow-hidden">
          <ScrollBackButton variant={variant} />
          <HorizontalScrollerTrack className="gap-2">
            {days.map((day, i) => {
              const id = day.id ?? String(i);
              return (
                <Pressable
                  key={id}
                  onPress={onSelect ? () => onSelect(id) : undefined}
                  className="shrink-0"
                  style={itemWidth ? { width: itemWidth } : undefined}
                >
                  <WeatherDayCard
                    day={day}
                    unit={unit}
                    width={itemWidth}
                    variant={variant}
                    isSelected={selected === id}
                  />
                </Pressable>
              );
            })}
          </HorizontalScrollerTrack>
        </View>
        <NextButton hasOverflow={!!hasOverflow} variant={variant} />
      </HorizontalScrollerRoot>
    </View>
  );
}
