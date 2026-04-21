import type { HTMLAttributes } from "react";
import type { BaseHorizontalScrollerTrackProps } from "./horizontal-scroller.types";
export type HorizontalScrollerTrackProps = BaseHorizontalScrollerTrackProps & Omit<HTMLAttributes<HTMLUListElement>, "children">;
export declare function HorizontalScrollerTrack({ children, className, bleed, ...props }: HorizontalScrollerTrackProps): import("react/jsx-runtime").JSX.Element;
