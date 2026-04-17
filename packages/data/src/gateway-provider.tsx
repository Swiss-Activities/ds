"use client";

import { useState, type ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataProvider } from "./provider";
import type { DataConfig } from "./types";

type GatewayProviderProps = DataConfig & {
  children: ReactNode;
};

export function GatewayProvider({
  gatewayUrl,
  apiUrl,
  locale,
  traceUrl,
  children,
}: GatewayProviderProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <DataProvider
        gatewayUrl={gatewayUrl}
        apiUrl={apiUrl}
        locale={locale}
        traceUrl={traceUrl}
      >
        {children}
      </DataProvider>
    </QueryClientProvider>
  );
}
