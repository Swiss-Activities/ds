import type { HTMLAttributes } from "react";
import type { BaseBadgeProps } from "./badge.types";
export type BadgeProps = BaseBadgeProps & HTMLAttributes<HTMLSpanElement>;
export declare function Badge({ children, className, variant, ...props }: BadgeProps): import("react/jsx-runtime").JSX.Element;
