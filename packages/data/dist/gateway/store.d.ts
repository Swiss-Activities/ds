export type GatewayStoreState = {
    selectedTabId: string | null;
    setSelectedTabId: (id: string | null) => void;
    reset: () => void;
};
export declare const useGatewayStore: import("zustand").UseBoundStore<import("zustand").StoreApi<GatewayStoreState>>;
