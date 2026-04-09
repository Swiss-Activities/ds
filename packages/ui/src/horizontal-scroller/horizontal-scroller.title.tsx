import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import { Text } from "../text";
import type { BaseHorizontalScrollerTitleProps } from "./horizontal-scroller.types";

export type HorizontalScrollerTitleProps = BaseHorizontalScrollerTitleProps &
  Omit<HTMLAttributes<HTMLElement>, "children">;

export function HorizontalScrollerTitle({
  children,
  className,
  ...props
}: HorizontalScrollerTitleProps) {
  return (
    <Text as="h2" size="lg" className={cn(className)} {...props}>
      {children}
    </Text>
  );
}
