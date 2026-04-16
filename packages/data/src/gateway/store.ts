import { create } from "zustand";

export type GatewayStoreState = {
  selectedTabId: string | null;
  setSelectedTabId: (id: string | null) => void;
  reset: () => void;
};

const initialState = {
  selectedTabId: null,
} satisfies Pick<GatewayStoreState, "selectedTabId">;

export const useGatewayStore = create<GatewayStoreState>((set) => ({
  ...initialState,
  setSelectedTabId: (id) => {
    set({ selectedTabId: id });
  },
  reset: () => {
    set(initialState);
  },
}));
