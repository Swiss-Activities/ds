"use client";

import type { ViewProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root.native";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track.native";
import type { BaseWeatherProps, WeatherDay } from "./weather.types";

export type WeatherProps = BaseWeatherProps & Omit<ViewProps, "children">;

function WeatherDayCard({
  day,
  unit,
  variant,
  isSelected,
}: {
  day: WeatherDay;
  unit: string;
  variant: NonNullable<BaseWeatherProps["variant"]>;
  isSelected: boolean;
}) {
  const isDark = variant === "dark";

  return (
    <View
      className={cn(
        "flex flex-col items-start gap-1 rounded-lg border border-solid px-2.5 py-2",
        isDark
          ? isSelected
            ? "border-primary bg-white/10"
            : "border-white bg-white/5"
          : isSelected
            ? "border-primary bg-primary/10"
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

export function Weather({
  days,
  unit = "°",
  variant = "dark",
  selected,
  onSelect,
  className,
  ...props
}: WeatherProps) {
  return (
    <HorizontalScrollerRoot className={cn(className)} {...props}>
      <HorizontalScrollerTrack className="gap-2">
        {days.map((day, i) => {
          const id = day.id ?? String(i);
          return (
            <Pressable
              key={id}
              onPress={onSelect ? () => onSelect(id) : undefined}
              className="shrink-0"
            >
              <WeatherDayCard
                day={day}
                unit={unit}
                variant={variant}
                isSelected={selected === id}
              />
            </Pressable>
          );
        })}
      </HorizontalScrollerTrack>
    </HorizontalScrollerRoot>
  );
}
