import { type HTMLAttributes } from "react";
import type { BaseTextProps } from "./text.types";
export type TextProps = BaseTextProps & HTMLAttributes<HTMLElement>;
export declare const Text: import("react").ForwardRefExoticComponent<BaseTextProps & HTMLAttributes<HTMLElement> & import("react").RefAttributes<HTMLElement>>;
