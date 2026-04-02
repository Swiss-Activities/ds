import type { ReactNode } from "react";

export const badgeVariants = ["demand", "info", "overlay", "text"] as const;

export type BadgeVariant = (typeof badgeVariants)[number];

export type BaseBadgeProps = {
  children?: ReactNode;
  className?: string;
  variant?: BadgeVariant;
};
