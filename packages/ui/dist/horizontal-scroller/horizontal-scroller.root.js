"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cn } from "../utils/cn";
import { HorizontalScrollerContext } from "./horizontal-scroller.context";
export function HorizontalScrollerRoot({ activeId, children, className, ...props }) {
    const trackRef = useRef(null);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(false);
    const checkForOverflow = useCallback(() => {
        const el = trackRef.current;
        if (el) {
            const { scrollWidth, clientWidth, scrollLeft } = el;
            setCanScrollLeft(scrollLeft > 1);
            setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
        }
    }, []);
    const scrollPrev = useCallback(() => {
        const el = trackRef.current;
        if (!el)
            return;
        const items = Array.from(el.children);
        if (items.length < 2)
            return;
        const step = items[1].offsetLeft - items[0].offsetLeft;
        el.scrollBy({ left: -step, behavior: "smooth" });
    }, []);
    const scrollNext = useCallback(() => {
        const el = trackRef.current;
        if (!el)
            return;
        const items = Array.from(el.children);
        if (items.length < 2)
            return;
        const step = items[1].offsetLeft - items[0].offsetLeft;
        el.scrollBy({ left: step, behavior: "smooth" });
    }, []);
    useEffect(() => {
        const el = trackRef.current;
        if (!el)
            return;
        el.addEventListener("scroll", checkForOverflow, { passive: true });
        window.addEventListener("resize", checkForOverflow);
        checkForOverflow();
        return () => {
            el.removeEventListener("scroll", checkForOverflow);
            window.removeEventListener("resize", checkForOverflow);
        };
    }, [checkForOverflow]);
    const value = useMemo(() => ({
        canScrollLeft,
        canScrollRight,
        scrollPrev,
        scrollNext,
        activeId,
        trackRef,
    }), [canScrollLeft, canScrollRight, scrollPrev, scrollNext, activeId]);
    return (_jsx(HorizontalScrollerContext.Provider, { value: value, children: _jsx("nav", { className: cn("relative", className), ...props, children: children }) }));
}
