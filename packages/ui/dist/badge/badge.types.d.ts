import type { ReactNode } from "react";
export declare const badgeVariants: readonly ["demand", "info", "overlay", "text"];
export type BadgeVariant = (typeof badgeVariants)[number];
export type BaseBadgeProps = {
    children?: ReactNode;
    className?: string;
    variant?: BadgeVariant;
};
