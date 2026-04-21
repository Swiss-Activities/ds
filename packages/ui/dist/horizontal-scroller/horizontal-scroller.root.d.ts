import type { HTMLAttributes } from "react";
import type { BaseHorizontalScrollerRootProps } from "./horizontal-scroller.types";
export type HorizontalScrollerRootProps = BaseHorizontalScrollerRootProps & Omit<HTMLAttributes<HTMLElement>, "children">;
export declare function HorizontalScrollerRoot({ activeId, children, className, ...props }: HorizontalScrollerRootProps): import("react/jsx-runtime").JSX.Element;
