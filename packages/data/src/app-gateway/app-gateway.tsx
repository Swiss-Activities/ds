"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { flushSync } from "react-dom";
import { useGatewayFeed } from "../gateway/feed";
import type { TGatewayHome } from "../gateway/types";
import type { DataConfig } from "../types";

export type AppGatewayContext = {
  locale?: string;
  country?: string | null;
  lat?: number | null;
  lng?: number | null;
  destination?: string | null;
  /** Website destination overview / location-type surface (vs the app feed). */
  destinationOverview?: string | null;
  activityType?: string | null;
  attribute?: string | null;
  nonBookable?: string | null;
  poi?: string | null;
  region?: string | null;
  date?: string | null;
};

export type AppGatewaySelectItemOptions = {
  title?: string;
  skipHistory?: boolean;
};

export type AppGatewaySelectItem = (
  id: string,
  options?: AppGatewaySelectItemOptions
) => void;

export type AppGatewayFallbackHeroArgs = {
  selectedTabId?: string;
  onSelectTab: (id: string) => void;
  showTabs: boolean;
};

export type AppGatewayFallbackSectionsArgs = {
  selectedTabId?: string;
  pendingItemId?: string | null;
  onSelectItem?: AppGatewaySelectItem;
};

export type AppGatewayMappedData<TSection, THero> = {
  hero: THero | null;
  sections: TSection[];
  shouldUseFallbackHero?: boolean;
};

export type AppGatewayMapGatewayDataArgs = {
  data: TGatewayHome;
  pendingItemId?: string | null;
  onSelectItem?: AppGatewaySelectItem;
};

export type AppGatewayRenderGatewayHeroArgs<THero> = {
  hero: THero | null;
  shouldUseFallbackHero: boolean;
  fallbackHero: ReactNode;
};

export type AppGatewayRenderPageArgs<TSection> = {
  hero: ReactNode;
  sections: TSection[];
  isGatewayLoading: boolean;
  pendingItemId?: string | null;
  onSelectItem?: AppGatewaySelectItem;
};

export type AppGatewayRenderItemViewArgs<TItemData = unknown> = {
  selectedItemId: string;
  selectedItemData?: TItemData;
  selectedItemLabel?: string;
  previousItemLabel?: string;
  pendingItemId?: string | null;
  selectedTabId?: string;
  onSelectItem?: AppGatewaySelectItem;
};

export type BaseAppGatewayProps<
  TSection,
  THero,
  TItemData = unknown,
> = DataConfig & {
  enabled?: boolean;
  initialFallbackTabId?: string;
  renderFallbackHero: (args: AppGatewayFallbackHeroArgs) => ReactNode;
  renderLoadingHero?: () => ReactNode;
  buildFallbackSections: (args: AppGatewayFallbackSectionsArgs) => TSection[];
  mapGatewayData: (
    args: AppGatewayMapGatewayDataArgs
  ) => AppGatewayMappedData<TSection, THero>;
  renderGatewayHero: (
    args: AppGatewayRenderGatewayHeroArgs<THero>
  ) => ReactNode;
  renderPage: (args: AppGatewayRenderPageArgs<TSection>) => ReactNode;
  renderItemView?: (args: AppGatewayRenderItemViewArgs<TItemData>) => ReactNode;
  loadItem?: (
    id: string,
    context?: AppGatewayContext
  ) => Promise<TItemData | null>;
  serverSideItemNavigation?: boolean;
  useDevGateway?: boolean;
  selectedDestination?: string | null;
  selectedActivityType?: string | null;
  selectedNonBookable?: string | null;
  selectedPoi?: string | null;
  selectedRegion?: string | null;
  selectedDate?: string | null;
  selectedView?: "list" | "map" | null;
  initialData?: TGatewayHome | null;
  initialContext?: AppGatewayContext | null;
  initialSelectedItemData?: TItemData | null;
  initialSelectedItemId?: string | null;
  initialSelectedItemLabel?: string | null;
  onGatewayData?: (data: TGatewayHome) => void;
  onGatewayContext?: (context: AppGatewayContext) => void;
};

type AppGatewayContentProps<TSection, THero, TItemData> = BaseAppGatewayProps<
  TSection,
  THero,
  TItemData
>;

type SelectedItemHistoryEntry<TItemData> = {
  id: string;
  data: TItemData | null;
  label: string | null;
};

function AppGatewayContent<TSection, THero, TItemData>({
  apiUrl,
  locale,
  traceUrl,
  enabled = true,
  initialFallbackTabId,
  renderFallbackHero,
  renderLoadingHero,
  buildFallbackSections,
  mapGatewayData,
  renderGatewayHero,
  renderPage,
  renderItemView,
  loadItem,
  serverSideItemNavigation = false,
  useDevGateway = false,
  selectedDestination = null,
  selectedActivityType = null,
  selectedNonBookable = null,
  selectedPoi = null,
  selectedRegion = null,
  selectedDate = null,
  selectedView = null,
  initialData = null,
  initialContext = null,
  initialSelectedItemData = null,
  initialSelectedItemId = null,
  initialSelectedItemLabel = null,
  onGatewayData,
  onGatewayContext,
}: AppGatewayContentProps<TSection, THero, TItemData>) {
  const canSelectItem = Boolean(renderItemView);
  const selectedItemInitialId = canSelectItem ? initialSelectedItemId : null;
  const [selectedTabId, setSelectedTabId] = useState<string | undefined>(
    initialFallbackTabId
  );
  const [selectedItemId, setSelectedItemId] = useState<string | null>(
    selectedItemInitialId
  );
  const [selectedItemData, setSelectedItemData] = useState<TItemData | null>(
    selectedItemInitialId ? initialSelectedItemData : null
  );
  const [selectedItemLabel, setSelectedItemLabel] = useState<string | null>(
    selectedItemInitialId ? initialSelectedItemLabel : null
  );
  const [selectedItemHistory, setSelectedItemHistory] = useState<
    SelectedItemHistoryEntry<TItemData>[]
  >([]);
  const [pendingItemId, setPendingItemId] = useState<string | null>(null);

  const resolvedTraceUrl =
    traceUrl || "https://www.swissactivities.com/cdn-cgi/trace";
  const gatewayFeed = useGatewayFeed({
    apiUrl,
    traceUrl: resolvedTraceUrl,
    locale,
    enabled: enabled && !initialData,
    retry: 3,
    refetchOnWindowFocus: true,
    refetchOnReconnect: true,
    dev: useDevGateway,
    destination: selectedDestination,
    activityType: selectedActivityType,
    nonBookable: selectedNonBookable,
    poi: selectedPoi,
    region: selectedRegion,
    date: selectedDate,
    view: selectedView,
  });
  const data = initialData ?? gatewayFeed.data;
  const isLoading = initialData ? false : gatewayFeed.isLoading;
  const isError = initialData ? false : gatewayFeed.isError;
  const isPreparing = initialData ? false : gatewayFeed.isPreparing;
  const context = initialContext ?? gatewayFeed.context;
  const contextReady = initialData ? true : gatewayFeed.contextReady;

  const loadItemContext = useMemo<AppGatewayContext>(
    () => ({
      locale: context.locale,
      country: context.country,
      lat: context.lat,
      lng: context.lng,
      destination: context.destination,
      activityType: context.activityType,
      nonBookable: context.nonBookable,
      poi: context.poi,
      region: context.region,
      date: context.date,
    }),
    [
      context.activityType,
      context.country,
      context.destination,
      context.lat,
      context.lng,
      context.locale,
      context.nonBookable,
      context.poi,
      context.region,
      context.date,
    ]
  );

  useEffect(() => {
    const clearPendingItem = () => {
      setPendingItemId(null);
    };

    window.addEventListener("pagehide", clearPendingItem);
    window.addEventListener("pageshow", clearPendingItem);

    return () => {
      window.removeEventListener("pagehide", clearPendingItem);
      window.removeEventListener("pageshow", clearPendingItem);
    };
  }, []);

  const handleSelectItem = useCallback(
    async (id: string, options?: AppGatewaySelectItemOptions) => {
      if (!canSelectItem) {
        return;
      }

      if (id === selectedItemId || id === pendingItemId) {
        return;
      }

      if (serverSideItemNavigation && !options?.skipHistory) {
        setPendingItemId(id);
        return;
      }

      const commitSelectionState = (update: () => void) => {
        if (options?.skipHistory) {
          update();
          return;
        }

        flushSync(update);
      };

      if (!loadItem) {
        commitSelectionState(() => {
          if (selectedItemId && !options?.skipHistory) {
            setSelectedItemHistory((current) => [
              ...current,
              {
                id: selectedItemId,
                data: selectedItemData,
                label: selectedItemLabel,
              },
            ]);
          }

          setSelectedItemData(null);
          setSelectedItemId(id);
          setSelectedItemLabel(options?.title ?? null);
        });

        return;
      }

      setPendingItemId(id);

      try {
        const itemData = await loadItem(
          id,
          contextReady ? loadItemContext : undefined
        );

        if (itemData == null) {
          return;
        }

        commitSelectionState(() => {
          if (selectedItemId && !options?.skipHistory) {
            setSelectedItemHistory((current) => [
              ...current,
              {
                id: selectedItemId,
                data: selectedItemData,
                label: selectedItemLabel,
              },
            ]);
          }

          setSelectedItemData(itemData);
          setSelectedItemId(id);
          setSelectedItemLabel(options?.title ?? null);
        });
      } catch (error) {
        console.error("Failed to load selected app gateway item", error);
      } finally {
        setPendingItemId(null);
      }
    },
    [
      canSelectItem,
      contextReady,
      loadItemContext,
      loadItem,
      pendingItemId,
      selectedItemData,
      selectedItemId,
      selectedItemLabel,
      serverSideItemNavigation,
    ]
  );

  useEffect(() => {
    if (!canSelectItem || !initialSelectedItemId || !initialSelectedItemData) {
      return;
    }

    setSelectedItemId(initialSelectedItemId);
    setSelectedItemData(initialSelectedItemData);
    setSelectedItemLabel(initialSelectedItemLabel);
    setSelectedItemHistory([]);
    setPendingItemId(null);
  }, [
    canSelectItem,
    initialSelectedItemData,
    initialSelectedItemId,
    initialSelectedItemLabel,
  ]);

  const fallbackHeroWithTabs = useMemo(
    () =>
      renderFallbackHero({
        selectedTabId,
        onSelectTab: setSelectedTabId,
        showTabs: true,
      }),
    [renderFallbackHero, selectedTabId]
  );

  const fallbackHeroWithoutTabs = useMemo(
    () =>
      renderFallbackHero({
        selectedTabId,
        onSelectTab: setSelectedTabId,
        showTabs: false,
      }),
    [renderFallbackHero, selectedTabId]
  );

  const fallbackSections = useMemo(
    () =>
      buildFallbackSections({
        selectedTabId,
        pendingItemId,
        onSelectItem: canSelectItem ? handleSelectItem : undefined,
      }),
    [
      buildFallbackSections,
      canSelectItem,
      handleSelectItem,
      pendingItemId,
      selectedTabId,
    ]
  );

  useEffect(() => {
    if (!enabled || !contextReady) {
      return;
    }

    onGatewayContext?.({
      locale: context.locale,
      country: context.country,
      lat: context.lat,
      lng: context.lng,
      destination: context.destination,
      activityType: context.activityType,
      nonBookable: context.nonBookable,
      region: context.region,
      date: context.date,
    });
  }, [
    context.activityType,
    context.country,
    context.destination,
    context.lat,
    context.lng,
    context.locale,
    context.nonBookable,
    context.region,
    context.date,
    contextReady,
    enabled,
    onGatewayContext,
  ]);

  useEffect(() => {
    if (!data) {
      return;
    }

    onGatewayData?.(data);
  }, [data, onGatewayData]);

  useEffect(() => {
    if (!isError || !gatewayFeed.error) {
      return;
    }

    console.error("Failed to fetch app gateway data", gatewayFeed.error);
  }, [gatewayFeed.error, isError]);

  const mappedGatewayData = useMemo(() => {
    if (!data) {
      return {
        hero: null,
        sections: [] as TSection[],
        hasFatalError: false,
        shouldUseFallbackHero: false,
      };
    }

    try {
      const mapped = mapGatewayData({
        data,
        pendingItemId,
        onSelectItem: canSelectItem ? handleSelectItem : undefined,
      });

      return {
        hero: mapped.hero,
        sections: mapped.sections,
        hasFatalError: false,
        shouldUseFallbackHero: Boolean(mapped.shouldUseFallbackHero),
      };
    } catch (error) {
      console.error("Failed to map app gateway response", error);

      return {
        hero: null,
        sections: [] as TSection[],
        hasFatalError: true,
        shouldUseFallbackHero: false,
      };
    }
  }, [canSelectItem, data, handleSelectItem, mapGatewayData, pendingItemId]);

  if (selectedItemId && renderItemView) {
    return (
      <div key={selectedItemId}>
        {renderItemView({
          selectedItemId,
          selectedItemData: selectedItemData ?? undefined,
          selectedItemLabel: selectedItemLabel ?? undefined,
          previousItemLabel:
            selectedItemHistory[selectedItemHistory.length - 1]?.label ??
            undefined,
          pendingItemId,
          selectedTabId,
          onSelectItem: canSelectItem ? handleSelectItem : undefined,
        })}
      </div>
    );
  }

  if (!enabled) {
    return (
      <>
        {renderPage({
          hero: fallbackHeroWithTabs,
          sections: fallbackSections,
          isGatewayLoading: false,
          pendingItemId,
          onSelectItem: canSelectItem ? handleSelectItem : undefined,
        })}
      </>
    );
  }

  if (isPreparing || isLoading) {
    return (
      <>
        {renderPage({
          hero: renderLoadingHero ? renderLoadingHero() : fallbackHeroWithTabs,
          sections: fallbackSections,
          isGatewayLoading: true,
          pendingItemId,
          onSelectItem: canSelectItem ? handleSelectItem : undefined,
        })}
      </>
    );
  }

  if (
    !isError &&
    !mappedGatewayData.hasFatalError &&
    (mappedGatewayData.sections.length || mappedGatewayData.hero)
  ) {
    return (
      <>
        {renderPage({
          hero: renderGatewayHero({
            hero: mappedGatewayData.hero,
            shouldUseFallbackHero: mappedGatewayData.shouldUseFallbackHero,
            fallbackHero: fallbackHeroWithoutTabs,
          }),
          sections: mappedGatewayData.sections,
          isGatewayLoading: false,
          pendingItemId,
          onSelectItem: canSelectItem ? handleSelectItem : undefined,
        })}
      </>
    );
  }

  return (
    <>
      {renderPage({
        hero: fallbackHeroWithTabs,
        sections: fallbackSections,
        isGatewayLoading: false,
        pendingItemId,
        onSelectItem: canSelectItem ? handleSelectItem : undefined,
      })}
    </>
  );
}

export function AppGateway<TSection, THero, TItemData = unknown>({
  apiUrl: propsApiUrl,
  gatewayUrl: _gatewayUrl,
  locale: propsLocale,
  traceUrl: propsTraceUrl,
  ...props
}: BaseAppGatewayProps<TSection, THero, TItemData>) {
  return (
    <AppGatewayContent
      apiUrl={propsApiUrl}
      gatewayUrl={_gatewayUrl}
      locale={propsLocale}
      traceUrl={propsTraceUrl}
      {...props}
    />
  );
}
