"use client";

import type { ViewProps } from "react-native";
import type { BaseHorizontalScrollerProps } from "./horizontal-scroller.types";
import { HorizontalScrollerRoot } from "./horizontal-scroller.root.native";
import { HorizontalScrollerTrack } from "./horizontal-scroller.track.native";
import { HorizontalScrollerTitle } from "./horizontal-scroller.title.native";

export type HorizontalScrollerProps = BaseHorizontalScrollerProps &
  Omit<ViewProps, "children">;

export function HorizontalScroller({
  activeId,
  className,
  children,
  classNameInner,
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
    </HorizontalScrollerRoot>
  );
}

HorizontalScroller.Root = HorizontalScrollerRoot;
HorizontalScroller.Track = HorizontalScrollerTrack;
HorizontalScroller.Title = HorizontalScrollerTitle;
