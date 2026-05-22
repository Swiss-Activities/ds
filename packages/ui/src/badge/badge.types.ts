import type { ReactNode } from "react";

export const badgeVariants = [
  "dark",
  "demand",
  "glass",
  "info",
  "overlay",
  "text",
] as const;

export type BadgeVariant = (typeof badgeVariants)[number];

export const badgeSizes = ["default", "lg"] as const;

export type BadgeSize = (typeof badgeSizes)[number];

export type BaseBadgeProps = {
  children?: ReactNode;
  className?: string;
  size?: BadgeSize;
  variant?: BadgeVariant;
};
