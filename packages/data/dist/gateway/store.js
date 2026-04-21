import { create } from "zustand";
const initialState = {
    selectedTabId: null,
};
export const useGatewayStore = create((set) => ({
    ...initialState,
    setSelectedTabId: (id) => {
        set({ selectedTabId: id });
    },
    reset: () => {
        set(initialState);
    },
}));
