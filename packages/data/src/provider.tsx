"use client";

import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { DataConfig } from "./types";

const DataConfigContext = createContext<DataConfig | null>(null);

export function useDataConfig(): DataConfig {
  const ctx = useContext(DataConfigContext);
  if (!ctx) {
    throw new Error("useDataConfig must be used within <DataProvider>");
  }
  return ctx;
}

export function DataProvider({
  gatewayUrl,
  apiUrl,
  locale,
  traceUrl = "https://www.swissactivities.com/cdn-cgi/trace",
  children,
}: DataConfig & { children: ReactNode }) {
  const value = useMemo(
    () => ({ gatewayUrl, apiUrl, locale, traceUrl }),
    [gatewayUrl, apiUrl, locale, traceUrl]
  );

  return (
    <DataConfigContext.Provider value={value}>
      {children}
    </DataConfigContext.Provider>
  );
}
