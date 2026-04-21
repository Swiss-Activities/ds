import type { HTMLAttributes } from "react";
import type { BaseBreadcrumbsProps } from "./breadcrumbs.types";
export type BreadcrumbsProps = BaseBreadcrumbsProps & Omit<HTMLAttributes<HTMLElement>, "children">;
export declare function Breadcrumbs({ items, white, ignoreLast, gradient, className, ...props }: BreadcrumbsProps): import("react/jsx-runtime").JSX.Element;
