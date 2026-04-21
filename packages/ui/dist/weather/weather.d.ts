import type { HTMLAttributes } from "react";
import type { BaseWeatherProps } from "./weather.types";
export type WeatherProps = BaseWeatherProps & Omit<HTMLAttributes<HTMLDivElement>, "children">;
export declare function Weather({ days, unit, variant, selected, onSelect, className, ...props }: WeatherProps): import("react/jsx-runtime").JSX.Element;
