import isArray from "lodash/isArray";
import { create } from "zustand";
import type { TActivity } from "../types/activity";

export type FilterStore = {
  activities: TActivity["id"][];
  attributes: TActivity["attributes"];
  filter: { [key: string]: any };
  hasFiltered: boolean;
  hasSearched: boolean;
  isLoading: boolean;
  reset: (state: {}, url?: boolean) => void;
  setActivities: (activities: TActivity["id"][]) => void;
  setAttributes: (attributes: TActivity["attributes"]) => void;
  setFilter: (state: {}, setter?: boolean, url?: boolean) => void;
  setHasFiltered: (hasFiltered: boolean) => void;
  setHasSearched: (hasSearched: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setSort: (sort: string) => void;
  setUserLocation: (userLocation: number[]) => void;
  sort: string;
  userLocation: number[];
};

export const setUrlState = (
  filter: FilterStore["filter"],
  ret = "",
  attributes: {
    [key: string]: any;
  } = {}
) => {
  const url = new URL(ret || window.location.href);

  attributes = {
    ...attributes,
    rating: [""],
    guided: [""],
  };

  Object.entries(attributes).forEach(([key]) => {
    url.searchParams.delete(key);
  });

  Object.entries(filter).forEach(([key, value]) => {
    if ((isArray(value) && value.length) || (value && !isArray(value))) {
      if (isArray(value)) {
        value = value.join(",");
      }
      url.searchParams.set(key, value);
    }
  });

  if (ret) return url;

  window.history.replaceState({}, "", url);
};

export const useFilterStore = (map = false) =>
  create<FilterStore>((set, get) => ({
    activities: [],
    setActivities: (activities) => {
      set({ activities });
    },

    attributes: {},
    setAttributes: (attributes) => {
      set({ attributes });
    },

    filter: {},
    setFilter: (state) => {
      const filter = {
        ...get().filter,
        ...state,
      } as FilterStore["filter"];

      const updatedFilter: FilterStore["filter"] = {};
      Object.entries(filter).forEach(([key, value]) => {
        if (
          value === null ||
          value === undefined ||
          value === "" ||
          value === false ||
          value.length === 0
        ) {
          return;
        }

        updatedFilter[key] = value;
      });

      if (!map) setUrlState(updatedFilter, undefined, get().attributes);

      set({
        filter: updatedFilter,
      });
    },

    hasFiltered: false,
    setHasFiltered: (hasFiltered: boolean) => set({ hasFiltered }),

    hasSearched: false,
    setHasSearched: (hasSearched: boolean) => set({ hasSearched }),

    isLoading: false,
    setIsLoading: (isLoading) => set({ isLoading }),

    reset: (state, url = true) => {
      if (url) {
        setUrlState(state, undefined, get().attributes);
      }
      set({
        filter: state,
      });
    },

    sort: "relevance",
    setSort: (sort) => {
      set({ sort });
      const url = new URL(window.location.href);
      if (sort === "relevance") {
        url.searchParams.delete("sort");
      } else {
        url.searchParams.set("sort", sort);
      }
      window.history.replaceState({}, "", url);
    },

    userLocation: [],
    setUserLocation: (userLocation) => {
      set({ userLocation });
    },
  }));

// Alias for backwards compatibility
export const filterStore = useFilterStore;

// Default store instance for shared use
export const store = useFilterStore();
