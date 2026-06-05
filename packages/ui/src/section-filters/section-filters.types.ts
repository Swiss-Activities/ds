import type { ReactNode } from "react";
import type { FilterCheckboxGroupItem } from "../filter-checkbox-group/filter-checkbox-group.types";

export type SectionFilterItem = {
  id: string;
  label: ReactNode;
  kind?: "plain" | "disclosure" | "removable";
  param?: string;
  value?: string;
};

export type SectionFilterGroup = {
  id: string;
  items: FilterCheckboxGroupItem[];
  param: string;
  title: ReactNode;
  type?: "checkbox" | "radio" | "dropdown";
};

export type SectionFiltersBreakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export type BaseSectionFiltersProps = {
  action?: ReactNode;
  className?: string;
  drawerPlacement?: "bottom" | "left" | "right";
  filterButtonLabel?: ReactNode;
  desktopDrawer?: "left" | "right";
  desktopDrawerFrom?: SectionFiltersBreakpoint;
  drawerTitle?: ReactNode;
  drawerDescription?: ReactNode;
  drawerContent?: ReactNode;
  filterGroups?: SectionFilterGroup[];
  filterGroupLessLabel?: ReactNode;
  filterGroupMoreLabel?: (remaining: number) => ReactNode;
  filterGroupNoResultsLabel?: ReactNode;
  filterGroupSearchPlaceholder?: string;
  hideQuickFilters?: boolean;
  selectedFiltersLabel?: ReactNode;
  items: SectionFilterItem[];
  onFilterGroupItemToggle?: (
    group: SectionFilterGroup,
    itemId: string,
    nextValue: boolean,
    item: FilterCheckboxGroupItem
  ) => void;
  onItemClick?: (item: SectionFilterItem) => void;
};
