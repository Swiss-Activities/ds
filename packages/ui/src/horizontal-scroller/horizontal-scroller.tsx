"use client";

import type { HTMLAttributes } from "react";
import type { BaseHorizontalScrollerProps } from "./horizontal-scroller.types";
import { HorizontalScrollerRoot } from "./horizontal-scroller.root";
import { HorizontalScrollerTrack } from "./horizontal-scroller.track";
import { HorizontalScrollerPrev } from "./horizontal-scroller.prev";
import { HorizontalScrollerNext } from "./horizontal-scroller.next";
import { HorizontalScrollerTitle } from "./horizontal-scroller.title";

export type HorizontalScrollerProps = BaseHorizontalScrollerProps &
  Omit<HTMLAttributes<HTMLElement>, "children">;

export function HorizontalScroller({
  activeId,
  className,
  children,
  classNameInner,
  variant,
  title,
  bleed,
  ...props
}: HorizontalScrollerProps) {
  return (
    <HorizontalScrollerRoot activeId={activeId} className={className} {...props}>
      {title && <HorizontalScrollerTitle>{title}</HorizontalScrollerTitle>}
      <HorizontalScrollerTrack className={classNameInner} bleed={bleed}>
        {children}
      </HorizontalScrollerTrack>
      <HorizontalScrollerPrev variant={variant} />
      <HorizontalScrollerNext variant={variant} />
    </HorizontalScrollerRoot>
  );
}

HorizontalScroller.Root = HorizontalScrollerRoot;
HorizontalScroller.Track = HorizontalScrollerTrack;
HorizontalScroller.Prev = HorizontalScrollerPrev;
HorizontalScroller.Next = HorizontalScrollerNext;
HorizontalScroller.Title = HorizontalScrollerTitle;
