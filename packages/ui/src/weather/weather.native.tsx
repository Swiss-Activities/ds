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
}: {
  day: WeatherDay;
  unit: string;
}) {
  return (
    <View
      className={cn(
        "flex min-w-[60px] flex-1 flex-col items-center gap-1 rounded-lg border border-solid px-2.5 py-2",
        day.current
          ? "border-orange bg-white/10"
          : "border-white/20 bg-white/5"
      )}
    >
      <Text as="span" size="xs" bold className="!text-white">
        {day.label}
      </Text>
      <View className="flex items-center justify-center">{day.icon}</View>
      <View className="flex flex-row items-center gap-0.5">
        <Text as="span" size="xs" className="!text-white/60">
          {day.low}{unit}
        </Text>
        <Text as="span" size="xs" bold className="!text-white">
          {day.high}{unit}
        </Text>
      </View>
    </View>
  );
}

export function Weather({
  days,
  unit = "°",
  className,
  ...props
}: WeatherProps) {
  return (
    <HorizontalScrollerRoot className={cn(className)} {...props}>
      <HorizontalScrollerTrack className="gap-2">
        {days.map((day, i) => (
          <View key={i} className="shrink-0">
            <WeatherDayCard day={day} unit={unit} />
          </View>
        ))}
      </HorizontalScrollerTrack>
    </HorizontalScrollerRoot>
  );
}
