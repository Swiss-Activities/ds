import { type HTMLAttributes } from "react";
import type { BaseSectionProductProps } from "./section-product.types";
export type SectionProductProps = BaseSectionProductProps & Omit<HTMLAttributes<HTMLDivElement>, "children" | "title">;
export declare function SectionProduct({ title, images, breadcrumbs, backLabel, backHref, onBack, children, className, ...props }: SectionProductProps): import("react/jsx-runtime").JSX.Element;
