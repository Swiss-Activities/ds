"use client";

import type { HTMLAttributes } from "react";
import React, { useEffect } from "react";
import { cn } from "../utils/cn";
import { useHorizontalScroller } from "./horizontal-scroller.context";
import type { BaseHorizontalScrollerTrackProps } from "./horizontal-scroller.types";

export type HorizontalScrollerTrackProps = BaseHorizontalScrollerTrackProps &
  Omit<HTMLAttributes<HTMLUListElement>, "children">;

export function HorizontalScrollerTrack({
  children,
  className,
  bleed = false,
  ...props
}: HorizontalScrollerTrackProps) {
  const { activeId, trackRef } = useHorizontalScroller();

  useEffect(() => {
    if (!activeId) return;
    const track = trackRef.current;
    if (!track) return;

    if (activeId === "all") {
      setTimeout(() => {
        track.scrollTo({ left: 0, behavior: "smooth" });
      }, 100);
      return;
    }

    const activeElement = track.querySelector(
      `[data-id=\"${CSS.escape(activeId)}\"]`
    ) as HTMLElement | null;

    if (activeElement) {
      setTimeout(() => {
        const maxLeft = Math.max(0, track.scrollWidth - track.clientWidth);
        const targetLeft = Math.min(
          maxLeft,
          Math.max(
            0,
            activeElement.offsetLeft -
              (track.clientWidth - activeElement.offsetWidth) / 2
          )
        );

        track.scrollTo({
          left: targetLeft,
          behavior: "smooth",
        });
      }, 100);
    }
  }, [activeId, trackRef]);

  return (
    <ul
      ref={trackRef as React.RefObject<HTMLUListElement>}
      className={cn(
        "no-scrollbar flex snap-x gap-2 overflow-x-auto overflow-y-hidden [touch-action:pan-x_pan-y] [&>*]:snap-start",
        bleed && "-mx-4 px-4 sm:mx-0 sm:px-0",
        className
      )}
      {...props}
    >
      {children}
    </ul>
  );
}
