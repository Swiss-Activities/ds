import { type HTMLAttributes } from "react";
import type { BaseSectionFiltersProps } from "./section-filters.types";
export type SectionFiltersProps = BaseSectionFiltersProps & Omit<HTMLAttributes<HTMLElement>, "children">;
export declare function SectionFilters({ className, drawerPlacement, filterButtonLabel, desktopDrawer, desktopDrawerFrom, drawerTitle, drawerContent, items, ...props }: SectionFiltersProps): import("react/jsx-runtime").JSX.Element;
