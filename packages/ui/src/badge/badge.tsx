import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import type { BaseBadgeProps } from "./badge.types";
import { badgeStyles } from "./badge.variants";

export type BadgeProps = BaseBadgeProps & HTMLAttributes<HTMLSpanElement>;

export function Badge({
  children = null,
  className,
  size = "default",
  variant = "overlay",
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeStyles({ size, variant }), className)} {...props}>
      {children ?? ""}
    </span>
  );
}
