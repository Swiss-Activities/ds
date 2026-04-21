import type { HTMLAttributes } from "react";
import type { BaseSectionActivityGridProps } from "./section-activity-grid.types";
export type SectionActivityGridProps = BaseSectionActivityGridProps & Omit<HTMLAttributes<HTMLElement>, "children" | "title">;
export declare function SectionActivityGrid({ title, action, activities, loading, skeletonAmount, className, ...props }: SectionActivityGridProps): import("react/jsx-runtime").JSX.Element;
