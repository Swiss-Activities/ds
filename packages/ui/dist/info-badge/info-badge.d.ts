import type { HTMLAttributes } from "react";
import type { BaseInfoBadgeProps } from "./info-badge.types";
export type InfoBadgeProps = BaseInfoBadgeProps & Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;
export declare function InfoBadge({ icon, title, subtitle, className, ...props }: InfoBadgeProps): import("react/jsx-runtime").JSX.Element;
