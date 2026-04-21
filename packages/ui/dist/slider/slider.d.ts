import type { HTMLAttributes } from "react";
import type { BaseSliderProps } from "./slider.types";
export type SliderProps = BaseSliderProps & Omit<HTMLAttributes<HTMLDivElement>, "children">;
export declare function Slider({ slides, showNav, showCounter, loop, className, ...props }: SliderProps): import("react/jsx-runtime").JSX.Element;
