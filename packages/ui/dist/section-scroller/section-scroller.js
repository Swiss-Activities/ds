"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import { ChevronLeft, ChevronRight } from "../icons";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track";
import { HorizontalScrollerTitle } from "../horizontal-scroller/horizontal-scroller.title";
import { useHorizontalScroller } from "../horizontal-scroller/horizontal-scroller.context";
function NavButton({ direction }) {
    const { canScrollLeft, canScrollRight, scrollPrev, scrollNext } = useHorizontalScroller();
    const disabled = direction === "prev" ? !canScrollLeft : !canScrollRight;
    const onClick = direction === "prev" ? scrollPrev : scrollNext;
    return (_jsx("button", { disabled: disabled, onClick: onClick, className: "flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-solid border-gray-200 bg-white text-gray-700 shadow-sm transition hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-30", children: direction === "prev" ? (_jsx(Icon, { icon: ChevronLeft, size: "md" })) : (_jsx(Icon, { icon: ChevronRight, size: "md" })) }));
}
export function SectionScroller({ title, subtitle, action, children, as: Tag = "section", noContainer: _noContainer, className, ...props }) {
    return (_jsx(Tag, { className: cn(className), ...props, children: _jsxs(HorizontalScrollerRoot, { children: [_jsxs("div", { className: "mb-4 flex flex-wrap items-center gap-x-4 gap-y-2", children: [_jsxs("div", { className: "flex min-w-0 flex-1 flex-wrap items-center gap-x-4 gap-y-2", children: [_jsx(HorizontalScrollerTitle, { children: title }), subtitle, action ? _jsx("div", { className: "hidden shrink-0 sm:block", children: action }) : null] }), action ? _jsx("div", { className: "ml-auto shrink-0 sm:hidden", children: action }) : null, _jsxs("div", { className: "hidden gap-2 sm:flex", children: [_jsx(NavButton, { direction: "prev" }), _jsx(NavButton, { direction: "next" })] })] }), _jsx(HorizontalScrollerTrack, { bleed: true, className: "-mx-px -my-2 snap-x gap-4 px-px py-2 [scroll-padding-inline:1px] sm:gap-6 lg:gap-7", children: children })] }) }));
}
export const sectionScrollerItemClassName = "w-[calc(66%-16px)] shrink-0 snap-start list-none sm:w-[calc(50%-13px)] md:w-[calc(33.333%-16px)] lg:w-[calc(25%-21px)]";
