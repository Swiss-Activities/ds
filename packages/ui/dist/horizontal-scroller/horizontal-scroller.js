"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HorizontalScrollerRoot } from "./horizontal-scroller.root";
import { HorizontalScrollerTrack } from "./horizontal-scroller.track";
import { HorizontalScrollerPrev } from "./horizontal-scroller.prev";
import { HorizontalScrollerNext } from "./horizontal-scroller.next";
import { HorizontalScrollerTitle } from "./horizontal-scroller.title";
export function HorizontalScroller({ activeId, className, children, classNameInner, variant, title, bleed, ...props }) {
    return (_jsxs(HorizontalScrollerRoot, { activeId: activeId, className: className, ...props, children: [title && _jsx(HorizontalScrollerTitle, { children: title }), _jsx(HorizontalScrollerTrack, { className: classNameInner, bleed: bleed, children: children }), _jsx(HorizontalScrollerPrev, { variant: variant }), _jsx(HorizontalScrollerNext, { variant: variant })] }));
}
HorizontalScroller.Root = HorizontalScrollerRoot;
HorizontalScroller.Track = HorizontalScrollerTrack;
HorizontalScroller.Prev = HorizontalScrollerPrev;
HorizontalScroller.Next = HorizontalScrollerNext;
HorizontalScroller.Title = HorizontalScrollerTitle;
