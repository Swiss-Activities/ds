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
  applyGatewayFilterSelection,
  collectGatewayItemsById,
  getGatewaySearchResultsSummary,
  getGatewaySectionActionHref,
  getGatewayStaticFilterConfig,
  getGatewayStaticFilterSection,
  isGatewayActivityGridSection,
  isGatewayActivitySection,
  isGatewayCarouselSection,
  isGatewayFeatureBandSection,
  isGatewayFilterStaticSection,
  isGatewayHeroSection,
  isGatewayReviewSection,
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
  getGatewayActivityDetail,
  getGatewayActivityDetailPath,
} from "./gateway/getActivityDetail";
export {
  useSearchSuggest,
  getSearchSuggest,
  type UseSearchSuggestOptions,
} from "./gateway/getSearchSuggest";
export {
  useGatewayFilter,
  getGatewayFilter,
  getGatewayFilterPath,
  type UseGatewayFilterOptions,
} from "./gateway/getGatewayFilter";
export {
  useActivityTypeFilter,
  getActivityTypeFilter,
  getActivityTypeFilterEndpoint,
  type UseActivityTypeFilterOptions,
} from "./gateway/getActivityTypeFilter";
export { useGatewayStore } from "./gateway/store";
export { gatewayLucideIconNames } from "./gateway/types";
export type {
  TGatewayHome,
  TGatewayActivityCardItem,
  TGatewayActivityCarouselSection,
  TGatewayActivityTypeContext,
  TGatewayHomeSection,
  TGatewayHomeCarouselSection,
  TGatewayActivityGridSection,
  TGatewayHomeWeatherCardSection,
  TGatewayHomeHeroSection,
  TGatewayHomeItem,
  TGatewayReviewCarouselSection,
  TGatewayReviewItem,
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
  TGatewayFilter,
  TGatewayFilterParams,
  TGatewayActivityTypeFilter,
  TGatewayActivityTypeFilterParams,
  TGatewayDestinationContext,
  TGatewayDiscoveryContext,
  TGatewayFeatureBandItem,
  TGatewayFeatureBandSection,
  TGatewaySearchSuggestion,
  TGatewaySearchSuggest,
  TGatewaySearchSuggestParams,
  TGatewayIcon,
  TGatewayLucideIconName,
  TGatewayDetailParams,
  TGatewayDetailForItemOptions,
  TGatewayDetail,
  TGatewayActivityDetail,
  TGatewayActivityDetailParams,
  TGatewayActivityMeetingPoint,
  TGatewayActivityProductContext,
  TGatewayActivityReviewSummary,
  TGatewayActivityWeatherContext,
  TGatewayMovieShowtime,
} from "./gateway/types";
export type { GatewayStoreState } from "./gateway/store";

export { toActivityItem } from "./adapters/activityItem";
export type { ActivityItemData, RenderImage } from "./adapters/activityItem";

export { useGeolocation } from "./hooks/useGeolocation";
export { useSilentCoordinates } from "./hooks/useSilentCoordinates";
