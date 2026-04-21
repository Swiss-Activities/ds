"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import { ChevronLeft } from "../icons";
import { useHorizontalScroller } from "./horizontal-scroller.context";
function DefaultArrowButton({ variant = "white", onClick, }) {
    return (_jsx("div", { className: "absolute start-0 top-0 flex h-full items-center", children: _jsxs("button", { className: cn("pointer-events-auto relative flex w-8 cursor-pointer items-center justify-center border-none", {
                "h-full bg-transparent from-white text-black": variant === "white" || variant === "white-button",
                "h-full bg-transparent from-bg text-black": variant === "bg",
                "bg-gradient-to-r": variant === "white" ||
                    variant === "white-button" ||
                    variant === "bg",
                "h-8 rounded-full bg-white/20 text-white backdrop-blur": variant === "black",
            }), onClick: onClick, children: [variant === "white-button" ? (_jsx("div", { className: "absolute top-1/2 start-0 h-12 w-9 -translate-y-1/2 rounded-r-xl bg-white shadow-[10px_0_10px_0px_rgba(0,0,0,0.5)]" })) : null, _jsx(Icon, { icon: ChevronLeft, size: "md", className: "relative z-10" })] }) }));
}
export function HorizontalScrollerPrev({ children, className, variant, ...props }) {
    const { canScrollLeft, scrollPrev } = useHorizontalScroller();
    if (!canScrollLeft)
        return null;
    if (children) {
        return (_jsx("button", { className: cn("cursor-pointer", className), onClick: scrollPrev, ...props, children: children }));
    }
    return _jsx(DefaultArrowButton, { variant: variant, onClick: scrollPrev });
}
