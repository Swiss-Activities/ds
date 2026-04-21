import { type RefObject } from "react";
export type HorizontalScrollerMetrics = {
    scrollX?: number;
    contentWidth?: number;
    viewportWidth?: number;
    stepWidth?: number;
};
export type HorizontalScrollerContextValue = {
    canScrollLeft: boolean;
    canScrollRight: boolean;
    scrollPrev: () => void;
    scrollNext: () => void;
    activeId?: string;
    trackRef: RefObject<any>;
    setMetrics?: (metrics: HorizontalScrollerMetrics) => void;
};
export declare const HorizontalScrollerContext: import("react").Context<HorizontalScrollerContextValue | null>;
export declare function useHorizontalScroller(): HorizontalScrollerContextValue;
