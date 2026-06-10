"use client";

import { useState } from "react";
import {
  SearchBar,
  SearchBarResultItem,
  Text,
  type SearchBarMode,
  type SearchBarResultVariant,
} from "@swiss-activities/ui";
import { useSearchSuggest } from "../gateway/getSearchSuggest";
import type { TGatewaySearchSuggestion } from "../gateway/types";

export type WebsiteGatewaySearchLabels = {
  placeholder: string;
  noResults: string;
};

export type WebsiteGatewaySearchProps = {
  /** Maps a suggestion's public path to the final href (e.g. locale prefixing). */
  buildHref?: (path: string) => string;
  className?: string;
  dev?: boolean;
  labels: WebsiteGatewaySearchLabels;
  locale?: string;
  mode?: SearchBarMode;
  onSubmit?: (value: string) => void;
  /** Preview/static-data mode (e.g. Storybook): skips the gateway query. */
  staticSuggestions?: TGatewaySearchSuggestion[];
};

const SUGGESTION_VARIANT: Record<
  TGatewaySearchSuggestion["type"],
  SearchBarResultVariant
> = {
  activity: "activity",
  "activity-type": "activity-listing",
  category: "activity-listing",
  destination: "location",
  "non-bookable": "poi",
  "point-of-interest": "poi",
};

function matchStatic(suggestions: TGatewaySearchSuggestion[], value: string) {
  const normalized = value.trim().toLowerCase();
  if (!normalized) return suggestions;
  return suggestions.filter((item) =>
    item.title.toLowerCase().includes(normalized)
  );
}

export function WebsiteGatewaySearch({
  buildHref,
  className,
  dev,
  labels,
  locale,
  mode = "default",
  onSubmit,
  staticSuggestions,
}: WebsiteGatewaySearchProps) {
  const [value, setValue] = useState("");
  const [open, setOpen] = useState(false);

  // An empty query returns the gateway's popular suggestions, so the panel
  // opens on focus before the visitor types anything (legacy-site behaviour).
  const { data, isFetched } = useSearchSuggest({
    q: value,
    locale,
    dev,
    enabled: !staticSuggestions && (open || value.trim().length > 0),
  });
  const suggestions = staticSuggestions
    ? matchStatic(staticSuggestions, value)
    : (data?.suggestions ?? []);
  const hasQuery = value.trim().length > 0;
  const showNoResults =
    hasQuery &&
    suggestions.length === 0 &&
    (staticSuggestions ? true : isFetched);
  const showPanel = open && (suggestions.length > 0 || showNoResults);

  return (
    <SearchBar
      className={className}
      mode={mode}
      value={value}
      open={open}
      onOpenChange={setOpen}
      showPanel={showPanel}
      onValueChange={setValue}
      onClear={() => setValue("")}
      onSubmit={(next) => {
        setValue(next);
        onSubmit?.(next);
      }}
      placeholder={labels.placeholder}
    >
      {suggestions.length > 0 ? (
        suggestions.map((item) => (
          <SearchBarResultItem
            key={`${item.type}-${item.id}`}
            href={item.path ? (buildHref?.(item.path) ?? item.path) : "#"}
            variant={SUGGESTION_VARIANT[item.type] ?? "activity"}
            title={item.title}
            subtitle={item.subtitle ?? undefined}
            detail={item.category ?? undefined}
            imageSrc={item.imageUrl ?? undefined}
          />
        ))
      ) : showNoResults ? (
        <div className="px-4 py-6">
          <Text>{labels.noResults}</Text>
        </div>
      ) : null}
    </SearchBar>
  );
}
