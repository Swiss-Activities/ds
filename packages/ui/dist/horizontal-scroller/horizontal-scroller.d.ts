import type { HTMLAttributes } from "react";
import type { BaseHorizontalScrollerProps } from "./horizontal-scroller.types";
import { HorizontalScrollerRoot } from "./horizontal-scroller.root";
import { HorizontalScrollerTrack } from "./horizontal-scroller.track";
import { HorizontalScrollerPrev } from "./horizontal-scroller.prev";
import { HorizontalScrollerNext } from "./horizontal-scroller.next";
import { HorizontalScrollerTitle } from "./horizontal-scroller.title";
export type HorizontalScrollerProps = BaseHorizontalScrollerProps & Omit<HTMLAttributes<HTMLElement>, "children">;
export declare function HorizontalScroller({ activeId, className, children, classNameInner, variant, title, bleed, ...props }: HorizontalScrollerProps): import("react/jsx-runtime").JSX.Element;
export declare namespace HorizontalScroller {
    var Root: typeof HorizontalScrollerRoot;
    var Track: typeof HorizontalScrollerTrack;
    var Prev: typeof HorizontalScrollerPrev;
    var Next: typeof HorizontalScrollerNext;
    var Title: typeof HorizontalScrollerTitle;
}
