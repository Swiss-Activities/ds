"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect } from "react";
import { cn } from "../utils/cn";
import { useHorizontalScroller } from "./horizontal-scroller.context";
export function HorizontalScrollerTrack({ children, className, bleed = false, ...props }) {
    const { activeId, trackRef } = useHorizontalScroller();
    useEffect(() => {
        if (!activeId)
            return;
        const track = trackRef.current;
        if (!track)
            return;
        if (activeId === "all") {
            setTimeout(() => {
                track.scrollTo({ left: 0, behavior: "smooth" });
            }, 100);
            return;
        }
        const activeElement = track.querySelector(`[data-id=\"${CSS.escape(activeId)}\"]`);
        if (activeElement) {
            setTimeout(() => {
                activeElement.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                    inline: "center",
                });
            }, 100);
        }
    }, [activeId, trackRef]);
    return (_jsx("ul", { ref: trackRef, className: cn("no-scrollbar flex snap-x gap-2 overflow-x-auto [&>*]:snap-start", bleed && "-mx-4 px-4 sm:mx-0 sm:px-0", className), ...props, children: children }));
}
