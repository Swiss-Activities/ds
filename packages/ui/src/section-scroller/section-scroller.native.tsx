import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root.native";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track.native";
import type { BaseSectionScrollerProps } from "./section-scroller.types";

export type SectionScrollerProps = BaseSectionScrollerProps &
  Omit<ViewProps, "children">;

export function SectionScroller({
  title,
  subtitle,
  children,
  className,
  ...props
}: SectionScrollerProps) {
  return (
    <View className={cn(className)} {...props}>
      <HorizontalScrollerRoot>
        <View className="mb-4 flex flex-row items-center gap-4 px-4">
          <Text as="h2" size="lg" bold>
            {title}
          </Text>
          {subtitle}
        </View>
        <HorizontalScrollerTrack bleed className="gap-4 px-4">
          {children}
        </HorizontalScrollerTrack>
      </HorizontalScrollerRoot>
    </View>
  );
}

export const sectionScrollerItemClassName = "w-[220px] shrink-0";
