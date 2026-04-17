import type { ComponentType, ReactNode } from "react";
import { Cloud, CloudLightning, CloudRain, Sun, type LucideProps } from "../icons";
import { Icon } from "../icon/icon";
import type { IconSize } from "../icon/icon.shared";
import {
  resolveWeatherIconName,
  weatherIconColorMap,
} from "./weather-icon.shared";

const weatherIcons: Record<
  ReturnType<typeof resolveWeatherIconName>,
  ComponentType<LucideProps>
> = {
  sun: Sun,
  cloud: Cloud,
  "cloud-rain": CloudRain,
  "cloud-storm": CloudLightning,
};

export function renderWeatherIcon(
  icon?: string | null,
  size: IconSize = "lg"
): ReactNode {
  const iconName = resolveWeatherIconName(icon);

  return (
    <Icon
      icon={weatherIcons[iconName]}
      size={size}
      color={weatherIconColorMap[iconName]}
    />
  );
}
