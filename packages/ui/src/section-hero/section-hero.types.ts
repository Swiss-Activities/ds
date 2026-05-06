import type { ReactNode } from "react";
import type { HeroTab, HeroVariant } from "../hero/hero.types";
import type { WeatherDay } from "../weather/weather.types";

export type SectionHeroVariant = HeroVariant | "summary";

export type SectionHeroTag = {
  id?: string;
  icon?: ReactNode;
  label: ReactNode;
};

export type BaseSectionHeroProps = {
  title?: ReactNode;
  image?: ReactNode;
  overlay?: ReactNode;
  search?: ReactNode;
  variant?: SectionHeroVariant;
  days?: WeatherDay[];
  unit?: string;
  selected?: string;
  onSelect?: (id: string) => void;
  tags?: SectionHeroTag[];
  tabs?: HeroTab[];
  selectedTabId?: string;
  onSelectTab?: (id: string) => void;
  className?: string;
};
