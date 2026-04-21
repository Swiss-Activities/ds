import type { HTMLAttributes } from "react";
import type { BaseHorizontalScrollerTitleProps } from "./horizontal-scroller.types";
export type HorizontalScrollerTitleProps = BaseHorizontalScrollerTitleProps & Omit<HTMLAttributes<HTMLElement>, "children">;
export declare function HorizontalScrollerTitle({ children, className, ...props }: HorizontalScrollerTitleProps): import("react/jsx-runtime").JSX.Element;
