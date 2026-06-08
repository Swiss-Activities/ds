"use client";

import { SectionFilters } from "../section-filters";
import type { GatewayFiltersProps } from "./gateway-filters.types";

export function GatewayFilters({
  filters,
  labels,
  onFilterOptionToggle,
  onItemClick,
  ...props
}: GatewayFiltersProps) {
  return (
    <SectionFilters
      {...props}
      items={filters.items}
      filterGroups={filters.groups.map((group) => ({
        id: group.id,
        title: group.title,
        param: group.param,
        type: group.type,
        items: group.options.map((option) => ({
          id: option.value,
          label: option.label,
          count: option.count,
          selected: option.selected,
          disabled: option.disabled,
          lat: option.lat,
          lng: option.lng,
          value: option.value,
        })),
      }))}
      filterGroupLessLabel={labels.filterGroupLess}
      filterGroupMoreLabel={labels.filterGroupMore}
      filterGroupNoResultsLabel={labels.filterGroupNoResults}
      filterGroupSearchPlaceholder={labels.filterGroupSearchPlaceholder}
      selectedFiltersLabel={labels.selectedFilters}
      onFilterGroupItemToggle={(group, id, nextValue, item) =>
        onFilterOptionToggle?.(group.param, id, nextValue, item)
      }
      onItemClick={onItemClick}
    />
  );
}
