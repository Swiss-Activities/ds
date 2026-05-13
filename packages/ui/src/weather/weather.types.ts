import type { ReactNode } from "react";

export type WeatherDay = {
  label: string;
  icon: ReactNode;
  low: number;
  high: number;
  id?: string;
};

export const weatherVariants = ["light", "dark", "compact"] as const;
export type WeatherVariant = (typeof weatherVariants)[number];

export type BaseWeatherProps = {
  days: WeatherDay[];
  description?: string;
  title?: string;
  unit?: string;
  variant?: WeatherVariant;
  selected?: string;
  onSelect?: (id: string) => void;
  className?: string;
};
