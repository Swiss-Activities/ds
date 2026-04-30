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
export { useGatewayStore } from "./gateway/store";
export type {
  TGatewayHome,
  TGatewayHomeSection,
  TGatewayHomeCarouselSection,
  TGatewayHomeWeatherCardSection,
  TGatewayHomeItem,
  TGatewayWeatherCardItem,
  TGatewayHomeParams,
  TGatewayDetail,
} from "./gateway/types";
export type { GatewayStoreState } from "./gateway/store";

export { toActivityItem } from "./adapters/activityItem";
export type { ActivityItemData, RenderImage } from "./adapters/activityItem";

export { useGeolocation } from "./hooks/useGeolocation";
export { useSilentCoordinates } from "./hooks/useSilentCoordinates";
