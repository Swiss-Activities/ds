"use client";
import { createContext, useContext } from "react";
export const HorizontalScrollerContext = createContext(null);
export function useHorizontalScroller() {
    const ctx = useContext(HorizontalScrollerContext);
    if (!ctx) {
        throw new Error("useHorizontalScroller must be used within <HorizontalScroller.Root>");
    }
    return ctx;
}
