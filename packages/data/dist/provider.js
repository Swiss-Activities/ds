"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useMemo } from "react";
const DataConfigContext = createContext(null);
export function useDataConfig() {
    const ctx = useContext(DataConfigContext);
    if (!ctx) {
        throw new Error("useDataConfig must be used within <DataProvider>");
    }
    return ctx;
}
export function DataProvider({ gatewayUrl, apiUrl, locale, traceUrl = "https://www.swissactivities.com/cdn-cgi/trace", children, }) {
    const value = useMemo(() => ({ gatewayUrl, apiUrl, locale, traceUrl }), [gatewayUrl, apiUrl, locale, traceUrl]);
    return (_jsx(DataConfigContext.Provider, { value: value, children: children }));
}
