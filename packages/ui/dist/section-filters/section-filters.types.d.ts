import type { ReactNode } from "react";
export type SectionFilterItem = {
    id: string;
    label: string;
    kind?: "plain" | "disclosure" | "removable";
};
export type SectionFiltersBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl";
export type BaseSectionFiltersProps = {
    className?: string;
    drawerPlacement?: "bottom" | "left" | "right";
    filterButtonLabel?: ReactNode;
    desktopDrawer?: "left" | "right";
    desktopDrawerFrom?: SectionFiltersBreakpoint;
    drawerTitle?: ReactNode;
    drawerDescription?: ReactNode;
    drawerContent?: ReactNode;
    items: SectionFilterItem[];
};
