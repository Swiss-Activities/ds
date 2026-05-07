export { DataProvider, useDataConfig } from "./provider";
export { GatewayProvider } from "./gateway-provider";
export type { DataConfig } from "./types";
export { AppGateway } from "./app-gateway";
export type {
  AppGatewayFallbackHeroArgs,
  AppGatewayFallbackSectionsArgs,
  AppGatewayContext,
  AppGatewayMapGatewayDataArgs,
  AppGatewayMappedData,
  AppGatewayRenderGatewayHeroArgs,
  AppGatewayRenderItemViewArgs,
  AppGatewayRenderPageArgs,
  AppGatewaySelectItem,
  AppGatewaySelectItemOptions,
  BaseAppGatewayProps,
} from "./app-gateway";

export { useGetHome, getHome } from "./gateway/getHome";
export { useGetCountry, getCountry } from "./gateway/getCountry";
export {
  collectGatewayItemsById,
  getGatewaySearchResultsSummary,
  getGatewaySectionActionHref,
  getGatewayStaticFilterConfig,
  isGatewayActivityGridSection,
  isGatewayActivitySection,
  isGatewayCarouselSection,
  isGatewayFilterStaticSection,
  isGatewayWeatherCardSection,
} from "./gateway/sections";
export {
  getGatewayFeed,
  getGatewayFeedDirect,
  getGatewayFeedDirectPath,
  getGatewayFeedPath,
  getGatewayFeedQueryParams,
  useGatewayFeed,
  type UseGatewayFeedOptions,
} from "./gateway/feed";
export {
  cacheGatewayDetail,
  createGatewayDetailItemFromUrl,
  getFallbackGatewayType,
  getGatewayQueryTokens,
  getGatewayQueryValue,
  gatewaySelectionParams,
  hydrateGatewayDetailItem,
  isGatewayActivityId,
  isGatewayDetailType,
  isGatewayHomeItemType,
  readCachedGatewayDetail,
  scheduleGatewayTopScroll,
  scrollToGatewayTop,
  type TGatewaySelectedDetail,
} from "./gateway/selection";
export {
  decodeGatewayHtmlEntities,
  findGatewaySearchDestination,
  formatGatewayDistance,
  getGatewayActivityTypeValue,
  getGatewayDestinationValue,
  getGatewaySuggestionCategoryDetail,
  normalizeGatewaySearchValue,
} from "./gateway/suggestions";
export {
  formatGatewayDate,
  formatGatewayItemCategory,
  formatGatewayItemDateRange,
  formatGatewayItemDistance,
  getGatewayItemImageUrl,
  getGatewayItemPriceFormatted,
  getGatewayItemReviewCount,
  getUsableGatewayImageUrl,
  isFutureGatewayDate,
  parseGatewayDate,
  type GatewayDateRangeLabels,
} from "./gateway/items";
export {
  getGatewayDetail,
  getGatewayDetailForItem,
  getGatewayDetailParamsForItem,
} from "./gateway/getDetail";
export {
  useSearchSuggest,
  getSearchSuggest,
  type UseSearchSuggestOptions,
} from "./gateway/getSearchSuggest";
export {
  useActivityTypeFilter,
  getActivityTypeFilter,
  type UseActivityTypeFilterOptions,
} from "./gateway/getActivityTypeFilter";
export { useGatewayStore } from "./gateway/store";
export type {
  TGatewayHome,
  TGatewayActivityTypeContext,
  TGatewayHomeSection,
  TGatewayHomeCarouselSection,
  TGatewayActivityGridSection,
  TGatewayHomeWeatherCardSection,
  TGatewayHomeItem,
  TGatewayWeatherCardItem,
  TGatewayHomeParams,
  TGatewayFeedParams,
  TGatewayStaticSection,
  TGatewayHeroStaticSection,
  TGatewayFilterStaticSection,
  TGatewayFilterConfig,
  TGatewayFilterGroup,
  TGatewayFilterItem,
  TGatewayFilterOption,
  TGatewayActivityTypeFilter,
  TGatewayActivityTypeFilterParams,
  TGatewaySearchSuggestion,
  TGatewaySearchSuggest,
  TGatewaySearchSuggestParams,
  TGatewayDetailParams,
  TGatewayDetailForItemOptions,
  TGatewayDetail,
  TGatewayMovieShowtime,
} from "./gateway/types";
export type { GatewayStoreState } from "./gateway/store";

export { toActivityItem } from "./adapters/activityItem";
export type { ActivityItemData, RenderImage } from "./adapters/activityItem";

export { useGeolocation } from "./hooks/useGeolocation";
export { useSilentCoordinates } from "./hooks/useSilentCoordinates";
