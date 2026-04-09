import type { ViewProps } from "react-native";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import type { BaseHorizontalScrollerTitleProps } from "./horizontal-scroller.types";

export type HorizontalScrollerTitleProps = BaseHorizontalScrollerTitleProps &
  Omit<ViewProps, "children">;

export function HorizontalScrollerTitle({
  children,
  className,
  ...props
}: HorizontalScrollerTitleProps) {
  return (
    <Text as="h2" size="lg" className={cn(className)} {...(props as any)}>
      {children}
    </Text>
  );
}
