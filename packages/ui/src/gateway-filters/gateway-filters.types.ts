import type { ReactNode } from "react";
import type { FilterCheckboxGroupItem } from "../filter-checkbox-group";
import type {
  BaseSectionFiltersProps,
  SectionFilterItem,
} from "../section-filters";

export type GatewayFilterOption = {
  id: string;
  label: ReactNode;
  value: string;
  count?: number;
  selected?: boolean;
  disabled?: boolean;
  lat?: number;
  lng?: number;
};

export type GatewayFilterGroup = {
  id: string;
  type?: "checkbox" | "radio" | "dropdown";
  title: ReactNode;
  param: string;
  options: GatewayFilterOption[];
};

export type GatewayFilterConfig = {
  items: SectionFilterItem[];
  groups: GatewayFilterGroup[];
};

export type GatewayFiltersLabels = {
  filterGroupLess: ReactNode;
  filterGroupMore: (remaining: number) => ReactNode;
  filterGroupNoResults: ReactNode;
  filterGroupSearchPlaceholder: string;
  selectedFilters: ReactNode;
};

export type GatewayFiltersProps = Omit<
  BaseSectionFiltersProps,
  | "items"
  | "filterGroups"
  | "filterGroupLessLabel"
  | "filterGroupMoreLabel"
  | "filterGroupNoResultsLabel"
  | "filterGroupSearchPlaceholder"
  | "selectedFiltersLabel"
  | "onFilterGroupItemToggle"
  | "onItemClick"
> & {
  filters: GatewayFilterConfig;
  labels: GatewayFiltersLabels;
  onFilterOptionToggle?: (
    param: string,
    itemId: string,
    nextValue: boolean,
    item: FilterCheckboxGroupItem
  ) => void;
  onItemClick?: BaseSectionFiltersProps["onItemClick"];
};
