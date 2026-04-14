"use client";

import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root.native";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track.native";
import type { BaseWeatherProps, WeatherDay } from "./weather.types";

export type WeatherProps = BaseWeatherProps & Omit<ViewProps, "children">;

function WeatherDayCard({
  day,
  unit,
  isSelected,
}: {
  day: WeatherDay;
  unit: string;
  isSelected: boolean;
}) {
  return (
    <View
      className={cn(
        "flex flex-col items-start gap-1 rounded-lg border border-solid px-2.5 py-2",
        isSelected
          ? "border-primary bg-white/10"
          : "border-white bg-white/5"
      )}
    >
      <Text as="span" size="xs" bold className="!text-white">
        {day.label}
      </Text>
      <View className="flex w-full flex-row items-center justify-between">
        <View className="[&_svg]:h-6 [&_svg]:w-6">{day.icon}</View>
        <View className="flex flex-col items-end">
          <Text as="span" size="xs" className="!text-white/60">
            {day.low}{unit}
          </Text>
          <Text as="span" size="xs" bold className="!text-white">
            {day.high}{unit}
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
  className,
  ...props
}: WeatherProps) {
  return (
    <HorizontalScrollerRoot className={cn(className)} {...props}>
      <HorizontalScrollerTrack className="gap-2">
        {days.map((day, i) => {
          const id = day.id ?? String(i);
          return (
            <View key={id} className="shrink-0">
              <WeatherDayCard day={day} unit={unit} isSelected={selected === id} />
            </View>
          );
        })}
      </HorizontalScrollerTrack>
    </HorizontalScrollerRoot>
  );
}
