import { type ReactNode } from "react";
import type { DataConfig } from "./types";
type GatewayProviderProps = DataConfig & {
    children: ReactNode;
};
export declare function GatewayProvider({ gatewayUrl, apiUrl, locale, traceUrl, children, }: GatewayProviderProps): import("react/jsx-runtime").JSX.Element;
export {};
