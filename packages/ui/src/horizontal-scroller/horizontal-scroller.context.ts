"use client";

import { createContext, useContext, type RefObject } from "react";

export type HorizontalScrollerContextValue = {
  canScrollLeft: boolean;
  canScrollRight: boolean;
  scrollPrev: () => void;
  scrollNext: () => void;
  activeId?: string;
  trackRef: RefObject<HTMLElement | null>;
};

export const HorizontalScrollerContext =
  createContext<HorizontalScrollerContextValue | null>(null);

export function useHorizontalScroller(): HorizontalScrollerContextValue {
  const ctx = useContext(HorizontalScrollerContext);
  if (!ctx) {
    throw new Error(
      "useHorizontalScroller must be used within <HorizontalScroller.Root>"
    );
  }
  return ctx;
}
