import type { HTMLAttributes } from "react";
import type { BaseHorizontalScrollerNavProps } from "./horizontal-scroller.types";
export type HorizontalScrollerNextProps = BaseHorizontalScrollerNavProps & Omit<HTMLAttributes<HTMLButtonElement>, "children">;
export declare function HorizontalScrollerNext({ children, className, variant, ...props }: HorizontalScrollerNextProps): import("react/jsx-runtime").JSX.Element | null;
