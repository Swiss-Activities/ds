import { type ReactNode } from "react";
import type { DataConfig } from "./types";
export declare function useDataConfig(): DataConfig;
export declare function DataProvider({ gatewayUrl, apiUrl, locale, traceUrl, children, }: DataConfig & {
    children: ReactNode;
}): import("react/jsx-runtime").JSX.Element;
