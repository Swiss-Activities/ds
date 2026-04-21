import type { HTMLAttributes } from "react";
import type { BaseSectionReviewGridProps } from "./section-review-grid.types";
export type SectionReviewGridProps = BaseSectionReviewGridProps & Omit<HTMLAttributes<HTMLElement>, "children" | "title">;
export declare function SectionReviewGrid({ title, subtitle, reviews, as, noContainer, className, ...props }: SectionReviewGridProps): import("react/jsx-runtime").JSX.Element;
