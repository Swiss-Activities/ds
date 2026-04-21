import type { ReactNode } from "react";
import type { WeatherDay } from "../weather/weather.types";
import type { HeroTab, HeroVariant } from "../hero/hero.types";
export type BaseSectionHeroProps = {
    title?: ReactNode;
    image?: ReactNode;
    overlay?: ReactNode;
    search?: ReactNode;
    variant?: HeroVariant;
    days?: WeatherDay[];
    unit?: string;
    selected?: string;
    onSelect?: (id: string) => void;
    tabs?: HeroTab[];
    selectedTabId?: string;
    onSelectTab?: (id: string) => void;
    className?: string;
};
