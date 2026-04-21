import type { ReactNode } from "react";
export type WeatherDay = {
    label: string;
    icon: ReactNode;
    low: number;
    high: number;
    id?: string;
};
export declare const weatherVariants: readonly ["light", "dark"];
export type WeatherVariant = (typeof weatherVariants)[number];
export type BaseWeatherProps = {
    days: WeatherDay[];
    unit?: string;
    variant?: WeatherVariant;
    selected?: string;
    onSelect?: (id: string) => void;
    className?: string;
};
