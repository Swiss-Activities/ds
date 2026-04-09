"use client";

import type { HTMLAttributes, ReactElement } from "react";
import React, { useEffect, useRef } from "react";
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
  const elementRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    if (!activeId) return;

    if (activeId === "all") {
      setTimeout(() => {
        trackRef.current?.scrollTo({ left: 0, behavior: "smooth" });
      }, 100);
      return;
    }

    if (elementRefs.current[activeId]) {
      setTimeout(() => {
        elementRefs.current[activeId]?.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
      }, 100);
    }
  }, [activeId, trackRef]);

  const childrenWithRefs = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      const id = (child as ReactElement<Record<string, unknown>>).props[
        "data-id"
      ];
      if (typeof id === "string") {
        return React.cloneElement(
          child as ReactElement<Record<string, unknown>>,
          {
            ref: (el: HTMLDivElement) => {
              if (el) {
                elementRefs.current[id] = el;
              } else {
                delete elementRefs.current[id];
              }
            },
          } as Record<string, unknown>
        );
      }
    }
    return child;
  });

  return (
    <ul
      ref={trackRef as React.RefObject<HTMLUListElement>}
      className={cn(
        "-mx-px -my-2 no-scrollbar flex snap-x gap-2 overflow-x-auto px-px py-2 [scroll-padding-inline:1px] [&>*]:snap-start",
        bleed && "-mx-4 px-4 [scroll-padding-inline:16px] sm:-mx-px sm:px-px sm:[scroll-padding-inline:1px]",
        className
      )}
      {...props}
    >
      {childrenWithRefs}
    </ul>
  );
}
