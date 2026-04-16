import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root.native";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track.native";
import { HorizontalScrollerTitle } from "../horizontal-scroller/horizontal-scroller.title.native";
import type { BaseSectionScrollerProps } from "./section-scroller.types";

export type SectionScrollerProps = BaseSectionScrollerProps &
  Omit<ViewProps, "children">;

export function SectionScroller({
  title,
  subtitle,
  action,
  children,
  className,
  ...props
}: SectionScrollerProps) {
  return (
    <View className={cn(className)} {...props}>
      <HorizontalScrollerRoot>
        <View className="mb-4 flex flex-row flex-wrap items-center gap-x-4 gap-y-2 px-4">
          <View className="min-w-0 flex-1 flex flex-row flex-wrap items-center gap-x-4 gap-y-2">
            <HorizontalScrollerTitle>
              {title}
            </HorizontalScrollerTitle>
            {subtitle}
            {action}
          </View>
        </View>
        <HorizontalScrollerTrack className="gap-4 px-4 pt-2 pb-4">
          {children}
        </HorizontalScrollerTrack>
      </HorizontalScrollerRoot>
    </View>
  );
}

export const sectionScrollerItemClassName = "w-[220px] shrink-0 self-start";
