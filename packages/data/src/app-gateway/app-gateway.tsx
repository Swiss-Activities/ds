"use client";

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { useSilentCoordinates } from "../hooks/useSilentCoordinates";
import type { TGatewayHome } from "../gateway/types";
import type { DataConfig } from "../types";

export type AppGatewaySelectItem = (id: string) => void;

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
  pendingItemId?: string | null;
  selectedTabId?: string;
  onBack: () => void;
  onSelectItem?: AppGatewaySelectItem;
};

export type BaseAppGatewayProps<TSection, THero, TItemData = unknown> =
  DataConfig & {
  enabled?: boolean;
  initialFallbackTabId?: string;
  renderFallbackHero: (args: AppGatewayFallbackHeroArgs) => ReactNode;
  renderLoadingHero?: () => ReactNode;
  buildFallbackSections: (
    args: AppGatewayFallbackSectionsArgs
  ) => TSection[];
  mapGatewayData: (
    args: AppGatewayMapGatewayDataArgs
  ) => AppGatewayMappedData<TSection, THero>;
  renderGatewayHero: (
    args: AppGatewayRenderGatewayHeroArgs<THero>
  ) => ReactNode;
  renderPage: (args: AppGatewayRenderPageArgs<TSection>) => ReactNode;
  renderItemView?: (args: AppGatewayRenderItemViewArgs<TItemData>) => ReactNode;
  loadItem?: (id: string) => Promise<TItemData | null>;
};

type AppGatewayContentProps<TSection, THero, TItemData> = BaseAppGatewayProps<
  TSection,
  THero,
  TItemData
>;

const normalizeLocale = (locale?: string | null) =>
  locale ? locale.replace("_", "-") : undefined;

async function fetchCountry(traceUrl?: string) {
  if (!traceUrl) {
    return null;
  }

  const response = await fetch(traceUrl);
  const text = await response.text();
  const match = text.match(/^loc=(.*)$/m);

  return match ? match[1].trim() : null;
}

async function fetchGatewayHome(
  apiUrl: string,
  params: {
    locale?: string;
    lat?: number | null;
    lng?: number | null;
    country?: string | null;
  }
): Promise<TGatewayHome> {
  const searchParams = new URLSearchParams();

  if (params.locale) {
    searchParams.set("locale", params.locale);
  }

  if (params.lat != null) {
    searchParams.set("lat", String(params.lat));
  }

  if (params.lng != null) {
    searchParams.set("lng", String(params.lng));
  }

  if (params.country) {
    searchParams.set("country", params.country);
  }

  const response = await fetch(`${apiUrl}/gateway/home/?${searchParams.toString()}`);

  if (!response.ok) {
    throw new Error(`Gateway error: ${response.status}`);
  }

  return response.json();
}

function scrollToTop() {
  if (typeof window === "undefined") {
    return;
  }

  window.scrollTo({ top: 0, behavior: "auto" });
}

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
}: AppGatewayContentProps<TSection, THero, TItemData>) {
  const [selectedTabId, setSelectedTabId] = useState<string | undefined>(
    initialFallbackTabId
  );
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);
  const [selectedItemData, setSelectedItemData] = useState<TItemData | null>(
    null
  );
  const [pendingItemId, setPendingItemId] = useState<string | null>(null);
  const [country, setCountry] = useState<string | null>(null);
  const [countryFetched, setCountryFetched] = useState(false);
  const [data, setData] = useState<TGatewayHome | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const previousSelectedItemId = useRef<string | null>(null);

  const { coords, ready: coordsReady } = useSilentCoordinates();

  const resolvedTraceUrl =
    traceUrl || "https://www.swissactivities.com/cdn-cgi/trace";
  const normalizedLocale = normalizeLocale(locale);
  const isPreparing = enabled && (!countryFetched || !coordsReady);

  const canSelectItem = Boolean(renderItemView);

  const handleSelectItem = useCallback(
    async (id: string) => {
      if (!canSelectItem) {
        return;
      }

      if (id === selectedItemId || id === pendingItemId) {
        return;
      }

      if (!loadItem) {
        setSelectedItemData(null);
        setSelectedItemId(id);
        scrollToTop();
        return;
      }

      setPendingItemId(id);

      try {
        const itemData = await loadItem(id);

        if (itemData == null) {
          return;
        }

        setSelectedItemData(itemData);
        setSelectedItemId(id);
      } catch (error) {
        console.error("Failed to load selected app gateway item", error);
      } finally {
        setPendingItemId(null);
      }
    },
    [canSelectItem, loadItem, pendingItemId, selectedItemId]
  );

  const handleBack = useCallback(() => {
    setSelectedItemId(null);
    setSelectedItemData(null);
    setPendingItemId(null);
  }, []);

  useLayoutEffect(() => {
    const previousId = previousSelectedItemId.current;

    if (previousId !== selectedItemId) {
      previousSelectedItemId.current = selectedItemId;
      scrollToTop();
    }
  }, [selectedItemId]);

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
    if (!enabled) {
      setCountryFetched(false);
      setCountry(null);
      return;
    }

    let cancelled = false;

    fetchCountry(resolvedTraceUrl)
      .then((nextCountry) => {
        if (cancelled) {
          return;
        }

        setCountry(nextCountry);
        setCountryFetched(true);
      })
      .catch(() => {
        if (cancelled) {
          return;
        }

        setCountry(null);
        setCountryFetched(true);
      });

    return () => {
      cancelled = true;
    };
  }, [enabled, resolvedTraceUrl]);

  useEffect(() => {
    if (!enabled) {
      setData(null);
      setIsLoading(false);
      setIsError(false);
      return;
    }

    if (!countryFetched || !coordsReady || !apiUrl) {
      return;
    }

    let cancelled = false;

    setIsLoading(true);
    setIsError(false);

    fetchGatewayHome(apiUrl, {
      locale: normalizedLocale,
      country,
      lat: coords?.latitude ?? null,
      lng: coords?.longitude ?? null,
    })
      .then((nextData) => {
        if (cancelled) {
          return;
        }

        setData(nextData);
        setIsLoading(false);
        setIsError(false);
      })
      .catch((error) => {
        if (cancelled) {
          return;
        }

        console.error("Failed to fetch app gateway data", error);
        setData(null);
        setIsLoading(false);
        setIsError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [
    apiUrl,
    coords?.latitude,
    coords?.longitude,
    coordsReady,
    country,
    countryFetched,
    enabled,
    normalizedLocale,
  ]);

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
  }, [
    canSelectItem,
    data,
    handleSelectItem,
    mapGatewayData,
    pendingItemId,
  ]);

  if (selectedItemId && renderItemView) {
    return (
      <div key={selectedItemId}>
        {renderItemView({
          selectedItemId,
          selectedItemData: selectedItemData ?? undefined,
          pendingItemId,
          selectedTabId,
          onBack: handleBack,
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
