import { create } from "zustand";
import { persist } from "zustand/middleware";
import { createJSONStorage } from "zustand/middleware";

export type SearchPage = {
  path?: string;
  activityAmount?: number;
  distance?: number;
  title?: string;
  [key: string]: unknown;
};

type Store = {
  childrenAges: string[];
  date: string | null;
  forceOpen: boolean;
  hasScrolled: boolean;
  input: string;
  inputAfterLoad: string;
  isDistance: boolean;
  isLoaded: boolean;
  latLng: number[];
  pages: SearchPage[];
  participants: { adults: number; children: number };
  setChildrenAges: (ages: string[]) => void;
  setDate: (date: string | null) => void;
  setForceOpen: (forceOpen: boolean) => void;
  setHasScrolled: (hasScrolled: boolean) => void;
  setInput: (input: string) => void;
  setInputAfterLoad: (inputAfterLoad: string) => void;
  setIsDistance: (isDistance: boolean) => void;
  setIsLoaded: (isLoaded: boolean) => void;
  setLatLng: (latLng: number[]) => void;
  setPages: (pages: SearchPage[]) => void;
  setParticipants: (participants: Store["participants"]) => void;
};

export const useSearchStore = create<Store>()(
  persist(
    (set) => ({
      childrenAges: [],
      setChildrenAges: (childrenAges) => set({ childrenAges }),

      date: null,
      setDate: (date) => set({ date }),

      forceOpen: false,
      setForceOpen: (forceOpen) => set({ forceOpen }),

      input: "",
      setInput: (input) => set({ input }),

      inputAfterLoad: "",
      setInputAfterLoad: (inputAfterLoad) => set({ inputAfterLoad }),

      hasScrolled: false,
      setHasScrolled: (hasScrolled) => set({ hasScrolled }),

      latLng: [],
      setLatLng: (latLng) => set({ latLng }),

      isDistance: false,
      setIsDistance: (isDistance) => set({ isDistance }),

      pages: [],
      setPages: (pages: SearchPage[]) => set({ pages }),

      participants: {
        adults: 0,
        children: 0,
      },
      setParticipants: (participants) => set({ participants }),

      isLoaded: false,
      setIsLoaded: (isLoaded) => set({ isLoaded }),
    }),
    {
      name: "searchStore",
      storage: createJSONStorage(() => sessionStorage),
      onRehydrateStorage: () => (state) => {
        const pageType = window?.__NEXT_DATA__?.props?.pageProps?.pageType;
        let defaultInput = "";
        if (
          [
            "location",
            "location-type",
            "type",
            "attribute",
            "location-attribute",
            "listing",
          ].includes(pageType)
        ) {
          defaultInput = window?.__NEXT_DATA__?.props?.pageProps?.page?.title;
        }

        if (state?.input.trim().length === 0) {
          state.setInput(defaultInput);
        }

        if (state) {
          state.setIsLoaded(true);
        }
      },
      partialize: (state) => {
        const { date, childrenAges, participants, input, inputAfterLoad } =
          state;

        return {
          childrenAges,
          date,
          input: inputAfterLoad || input,
          participants,
        };
      },
    }
  )
);
