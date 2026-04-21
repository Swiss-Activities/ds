"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { DataProvider } from "./provider";
export function GatewayProvider({ gatewayUrl, apiUrl, locale, traceUrl, children, }) {
    const [queryClient] = useState(() => new QueryClient());
    return (_jsx(QueryClientProvider, { client: queryClient, children: _jsx(DataProvider, { gatewayUrl: gatewayUrl, apiUrl: apiUrl, locale: locale, traceUrl: traceUrl, children: children }) }));
}
