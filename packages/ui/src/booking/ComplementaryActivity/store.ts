import { create } from "zustand";

export type ComplementaryReference = {
  mainActivityId: number;
  mainOfferId: number;
  complementaryActivityId: number;
  complementaryOfferId: number;
};

export type ComplementaryStore = {
  currentReference: ComplementaryReference | null;
  setCurrentReference: (reference: ComplementaryReference | null) => void;

  complementaryItems: Record<string, ComplementaryReference>;
  addComplementaryItem: (
    reservationId: string,
    reference: ComplementaryReference
  ) => void;
  removeComplementaryItem: (reservationId: string) => void;

  isComplementary: (reservationId: string) => boolean;
  getComplementaryReference: (
    reservationId: string
  ) => ComplementaryReference | null;

  reset: () => void;
};

export const useComplementaryStore = create<ComplementaryStore>((set, get) => ({
  currentReference: null,
  setCurrentReference: (reference) => set({ currentReference: reference }),

  complementaryItems: {},
  addComplementaryItem: (reservationId, reference) =>
    set((state) => ({
      complementaryItems: {
        ...state.complementaryItems,
        [reservationId]: reference,
      },
    })),
  removeComplementaryItem: (reservationId) =>
    set((state) => {
      const { [reservationId]: _, ...rest } = state.complementaryItems;
      return { complementaryItems: rest };
    }),

  isComplementary: (reservationId) => {
    return reservationId in get().complementaryItems;
  },
  getComplementaryReference: (reservationId) => {
    return get().complementaryItems[reservationId] || null;
  },

  reset: () =>
    set({
      currentReference: null,
      complementaryItems: {},
    }),
}));
