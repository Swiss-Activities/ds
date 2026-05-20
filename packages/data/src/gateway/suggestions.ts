import type { TGatewaySearchSuggestion } from "./types";

export const decodeGatewayHtmlEntities = (value: string | null | undefined) => {
  if (!value) {
    return value ?? null;
  }

  return value
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) =>
      String.fromCodePoint(Number.parseInt(code, 16))
    )
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&apos;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
};

export const formatGatewayDistance = (distanceKm?: number | null) => {
  if (distanceKm == null) {
    return null;
  }

  if (distanceKm < 1) {
    return `${Math.round(distanceKm * 1000)} m`;
  }

  return `${distanceKm.toFixed(distanceKm < 10 ? 1 : 0)} km`;
};

export const normalizeGatewaySearchValue = (value?: string | null) => {
  return (value ?? "")
    .trim()
    .toLocaleLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const getSuggestionPathValue = (
  suggestion: TGatewaySearchSuggestion,
  prefix: string
) => {
  const path = suggestion.path
    ?.trim()
    .replace(/^\/+/, "")
    .replace(/\/+$/, "")
    .replace(new RegExp(`^${prefix}/`), "");

  return path || suggestion.id;
};

export const getGatewayDestinationValue = (
  suggestion?: TGatewaySearchSuggestion | null
) => {
  if (!suggestion || suggestion.type !== "destination") {
    return null;
  }

  return getSuggestionPathValue(suggestion, "destinations");
};

export const getGatewayActivityTypeValue = (
  suggestion?: TGatewaySearchSuggestion | null
) => {
  if (!suggestion || suggestion.type !== "activity-type") {
    return null;
  }

  return getSuggestionPathValue(suggestion, "activity-types");
};

export const getGatewayPointOfInterestValue = (
  suggestion?: TGatewaySearchSuggestion | null
) => {
  if (!suggestion || suggestion.type !== "point-of-interest") {
    return null;
  }

  return getSuggestionPathValue(suggestion, "pois");
};

export const findGatewaySearchDestination = (
  suggestions: TGatewaySearchSuggestion[],
  query: string
) => {
  const normalizedQuery = normalizeGatewaySearchValue(query);

  return (
    suggestions.find(
      (suggestion) =>
        suggestion.type === "destination" &&
        normalizeGatewaySearchValue(suggestion.title) === normalizedQuery
    ) ??
    suggestions.find((suggestion) => suggestion.type === "destination") ??
    null
  );
};

export const getGatewaySuggestionCategoryDetail = (
  suggestion: TGatewaySearchSuggestion,
  categoryLabels: Record<string, string>
) => {
  if (suggestion.type !== "non-bookable") {
    return null;
  }

  const category = decodeGatewayHtmlEntities(suggestion.category);

  return category ? (categoryLabels[category] ?? category) : null;
};
