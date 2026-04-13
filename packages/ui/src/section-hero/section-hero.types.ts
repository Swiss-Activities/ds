import type { ReactNode } from "react";
import type { WeatherDay } from "../weather/weather.types";

export type BaseSectionHeroProps = {
  title: ReactNode;
  image: ReactNode;
  days: WeatherDay[];
  unit?: string;
  selected?: string;
  onSelect?: (id: string) => void;
  className?: string;
};
