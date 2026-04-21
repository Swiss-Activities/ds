import type { HTMLAttributes } from "react";
import type { BaseHorizontalScrollerNavProps } from "./horizontal-scroller.types";
export type HorizontalScrollerPrevProps = BaseHorizontalScrollerNavProps & Omit<HTMLAttributes<HTMLButtonElement>, "children">;
export declare function HorizontalScrollerPrev({ children, className, variant, ...props }: HorizontalScrollerPrevProps): import("react/jsx-runtime").JSX.Element | null;
