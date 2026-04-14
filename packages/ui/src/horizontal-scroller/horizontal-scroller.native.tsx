"use client";

import type { ViewProps } from "react-native";
import type { BaseHorizontalScrollerProps } from "./horizontal-scroller.types";
import { HorizontalScrollerRoot } from "./horizontal-scroller.root.native";
import { HorizontalScrollerTrack } from "./horizontal-scroller.track.native";
import { HorizontalScrollerPrev } from "./horizontal-scroller.prev.native";
import { HorizontalScrollerNext } from "./horizontal-scroller.next.native";
import { HorizontalScrollerTitle } from "./horizontal-scroller.title.native";

export type HorizontalScrollerProps = BaseHorizontalScrollerProps &
  Omit<ViewProps, "children">;

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
