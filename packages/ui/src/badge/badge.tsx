import type { HTMLAttributes } from "react";
import { cn } from "../utils/cn";
import type { BaseBadgeProps } from "./badge.types";
import { badgeStyles } from "./badge.variants.shared";

export type BadgeProps = BaseBadgeProps & HTMLAttributes<HTMLSpanElement>;

export function Badge({
  children = null,
  className,
  variant = "overlay",
  ...props
}: BadgeProps) {
  return (
    <span className={cn(badgeStyles({ variant }), className)} {...props}>
      {children ?? ""}
    </span>
  );
}
