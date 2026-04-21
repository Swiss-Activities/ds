"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { Text } from "../text";
import { Button } from "../button";
import { Icon } from "../icon/icon";
import { ChevronLeft, ChevronRight } from "../icons";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track";
import { useHorizontalScroller } from "../horizontal-scroller/horizontal-scroller.context";
const MIN_ITEM_WIDTH = 72;
const BUTTON_WIDTH = 36;
const GAP = 8;
const EDGE_SAFETY = 1;
const styles = {
    dark: {
        card: "border-white bg-white/5",
        cardSelected: "border-primary bg-white/10",
        label: "!text-white",
        icon: "text-white",
        low: "!text-white/60",
        high: "!text-white",
        button: "border-white bg-white/5 text-white/80 hover:bg-white/10",
        buttonInvisible: "pointer-events-none invisible",
        gradient: "from-blue",
    },
    light: {
        card: "border-gray-200 bg-white",
        cardSelected: "border-primary bg-white",
        label: "!text-gray-900",
        icon: "text-gray-700",
        low: "!text-gray-400",
        high: "!text-gray-900",
        button: "border-gray-200 bg-white text-gray-500 hover:bg-gray-50",
        buttonInvisible: "pointer-events-none invisible",
        gradient: "from-white",
    },
};
function WeatherDayCard({ day, unit, width, variant, isSelected, onSelect, }) {
    const s = styles[variant];
    const content = (_jsxs(_Fragment, { children: [_jsx(Text, { as: "span", size: "xs", bold: true, className: s.label, children: day.label }), _jsxs("div", { className: "flex w-full items-center justify-between", children: [_jsx("div", { className: cn("[&_svg]:h-6 [&_svg]:w-6", s.icon), children: day.icon }), _jsxs("div", { className: "flex flex-col items-end", children: [_jsxs(Text, { as: "span", size: "xs", className: s.low, children: [day.low, unit] }), _jsxs(Text, { as: "span", size: "xs", bold: true, className: s.high, children: [day.high, unit] })] })] })] }));
    const cardClasses = cn("flex flex-col items-start gap-1 rounded-lg border border-solid px-2.5 py-2", isSelected ? s.cardSelected : s.card);
    if (onSelect) {
        return (_jsx(Button, { variant: "ghost", onClick: onSelect, className: cn(cardClasses, "cursor-pointer appearance-none text-left"), style: width ? { width } : undefined, children: content }));
    }
    return (_jsx("div", { className: cardClasses, style: width ? { width } : undefined, children: content }));
}
function NextButton({ hasOverflow, variant }) {
    const { canScrollRight, scrollNext } = useHorizontalScroller();
    const s = styles[variant];
    if (!hasOverflow)
        return null;
    return (_jsx("button", { onClick: scrollNext, tabIndex: canScrollRight ? 0 : -1, className: cn("flex shrink-0 cursor-pointer items-center justify-center self-stretch rounded-lg border border-solid px-2.5 transition", s.button, !canScrollRight && s.buttonInvisible), style: { width: BUTTON_WIDTH }, children: _jsx(Icon, { icon: ChevronRight, size: "sm" }) }));
}
function ScrollBackButton({ variant }) {
    const { canScrollLeft, scrollPrev } = useHorizontalScroller();
    const s = styles[variant];
    return (_jsx("button", { onClick: scrollPrev, tabIndex: canScrollLeft ? 0 : -1, className: cn("absolute inset-y-0 start-0 z-10 flex w-10 cursor-pointer items-center justify-start rounded-none bg-gradient-to-r to-transparent ps-2 transition-opacity", s.gradient, canScrollLeft ? "opacity-100" : "pointer-events-none opacity-0"), children: _jsx(Icon, { icon: ChevronLeft, size: "sm", className: cn(variant === "dark" ? "text-white/80" : "text-gray-500") }) }));
}
export function Weather({ days, unit = "°", variant = "dark", selected, onSelect, className, ...props }) {
    const containerRef = useRef(null);
    const [itemWidth, setItemWidth] = useState();
    const [hasOverflow, setHasOverflow] = useState(false);
    const measure = useCallback(() => {
        const el = containerRef.current;
        if (!el)
            return;
        const containerWidth = el.clientWidth;
        const fitsAll = days.length <= Math.floor((containerWidth + GAP) / (MIN_ITEM_WIDTH + GAP));
        setHasOverflow(!fitsAll);
        const available = fitsAll
            ? containerWidth
            : containerWidth - BUTTON_WIDTH - GAP - EDGE_SAFETY;
        const count = Math.max(1, Math.floor((available + GAP) / (MIN_ITEM_WIDTH + GAP)));
        const w = (available - (count - 1) * GAP) / count;
        setItemWidth(Math.max(w, MIN_ITEM_WIDTH));
    }, [days.length]);
    useEffect(() => {
        measure();
        const observer = new ResizeObserver(measure);
        if (containerRef.current)
            observer.observe(containerRef.current);
        return () => observer.disconnect();
    }, [measure]);
    return (_jsx("div", { ref: containerRef, className: cn(className), children: _jsxs(HorizontalScrollerRoot, { className: "flex gap-2", ...props, children: [_jsxs("div", { className: "relative flex-1 overflow-hidden", children: [_jsx(ScrollBackButton, { variant: variant }), _jsx(HorizontalScrollerTrack, { className: "gap-2", children: days.map((day, i) => {
                                const id = day.id ?? String(i);
                                return (_jsx("li", { className: "shrink-0 list-none", children: _jsx(WeatherDayCard, { day: day, unit: unit, width: itemWidth, variant: variant, isSelected: selected === id, onSelect: onSelect ? () => onSelect(id) : undefined }) }, id));
                            }) })] }), _jsx(NextButton, { hasOverflow: hasOverflow, variant: variant })] }) }));
}
