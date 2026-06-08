"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { FullScreenApp } from "../full-screen-app";
import { SheetWithDetent } from "../sheet";
import { cn } from "../utils/cn";
import type { MapResultsAppProps } from "./map-results-app.types";

const MOBILE_MAP_SHEET_PREVIEW_HEIGHT = 124;
const MOBILE_MAP_SHEET_MIDDLE_HEIGHT_RATIO = 0.64;
const MOBILE_MAP_SHEET_MIDDLE_HEIGHT_OFFSET = 60;
const MOBILE_MAP_SHEET_VIEW_OVERSCAN = 60;
const MOBILE_MAP_SHEET_PREVIEW_VISIBLE_HEIGHT =
  MOBILE_MAP_SHEET_PREVIEW_HEIGHT - MOBILE_MAP_SHEET_VIEW_OVERSCAN;
const MOBILE_MAP_SHEET_DETENTS = [
  `${MOBILE_MAP_SHEET_PREVIEW_HEIGHT}px`,
  `calc(${MOBILE_MAP_SHEET_MIDDLE_HEIGHT_RATIO * 100}dvh + ${MOBILE_MAP_SHEET_MIDDLE_HEIGHT_OFFSET}px)`,
];
const MOBILE_MAP_SHEET_PREVIEW_DETENT = 1;
const MOBILE_MAP_SHEET_DEFAULT_HEADER_HEIGHT = 72;
const MOBILE_MAP_SHEET_RADIUS = 28;
const MOBILE_MAP_SHEET_SHADOW_OPACITY = 0.16;

function getMobileMapSheetMiddleHeight() {
  const viewportHeight = window.visualViewport?.height ?? window.innerHeight;

  return Math.round(
    viewportHeight * MOBILE_MAP_SHEET_MIDDLE_HEIGHT_RATIO +
      MOBILE_MAP_SHEET_MIDDLE_HEIGHT_OFFSET
  );
}

export function MapResultsApp({
  className,
  desktopList,
  header,
  lockBody,
  map,
  mobileList,
  mobileTitle,
  open,
  resetKey,
  ...props
}: MapResultsAppProps) {
  const mobileMapHeaderRef = useRef<HTMLDivElement>(null);
  const mobileMapFrameRef = useRef<number | null>(null);
  const [mobileMapHeaderHeight, setMobileMapHeaderHeight] = useState(
    MOBILE_MAP_SHEET_DEFAULT_HEADER_HEIGHT
  );
  const [mobileMapBottomOffset, setMobileMapBottomOffset] = useState(
    MOBILE_MAP_SHEET_PREVIEW_VISIBLE_HEIGHT
  );
  const [mobileMapSheetTopProgress, setMobileMapSheetTopProgress] =
    useState(0);
  const [mobileMapScrollResetKey, setMobileMapScrollResetKey] = useState(0);
  const mobileMapStyle: CSSProperties = {
    bottom: `${Math.round(mobileMapBottomOffset)}px`,
  };
  const mobileMapSheetRadius =
    MOBILE_MAP_SHEET_RADIUS * (1 - mobileMapSheetTopProgress);
  const mobileMapSheetShapeStyle: CSSProperties = {
    borderTopLeftRadius: `${mobileMapSheetRadius}px`,
    borderTopRightRadius: `${mobileMapSheetRadius}px`,
  };
  const mobileMapSheetContentStyle: CSSProperties = {
    ...mobileMapSheetShapeStyle,
    boxShadow: `0 -12px 32px rgba(0,0,0,${
      MOBILE_MAP_SHEET_SHADOW_OPACITY * (1 - mobileMapSheetTopProgress)
    })`,
  };

  const updateMobileMapBottomOffset = useCallback(() => {
    const sheetNode = document.querySelector<HTMLElement>(
      "[data-mobile-map-sheet-content]"
    );

    if (!sheetNode) {
      return;
    }

    const visibleSheetHeight = Math.max(
      0,
      window.innerHeight - sheetNode.getBoundingClientRect().top
    );
    const middleVisibleHeight = Math.max(
      MOBILE_MAP_SHEET_PREVIEW_VISIBLE_HEIGHT,
      getMobileMapSheetMiddleHeight() - MOBILE_MAP_SHEET_VIEW_OVERSCAN
    );
    const nextOffset = Math.min(visibleSheetHeight, middleVisibleHeight);

    setMobileMapBottomOffset((currentOffset) =>
      Math.abs(currentOffset - nextOffset) < 1 ? currentOffset : nextOffset
    );
  }, []);

  const syncMobileMapBottomOffset = useCallback(
    (durationMs = 300) => {
      if (mobileMapFrameRef.current !== null) {
        cancelAnimationFrame(mobileMapFrameRef.current);
      }

      const startedAt = performance.now();

      const updateUntilSettled = () => {
        updateMobileMapBottomOffset();

        if (performance.now() - startedAt < durationMs) {
          mobileMapFrameRef.current = requestAnimationFrame(updateUntilSettled);
          return;
        }

        mobileMapFrameRef.current = null;
      };

      mobileMapFrameRef.current = requestAnimationFrame(updateUntilSettled);
    },
    [updateMobileMapBottomOffset]
  );

  const cancelMobileMapBottomOffsetSync = useCallback(() => {
    if (mobileMapFrameRef.current !== null) {
      cancelAnimationFrame(mobileMapFrameRef.current);
      mobileMapFrameRef.current = null;
    }
  }, []);

  const updateMobileMapSheetTravel = useCallback(
    ({
      progress,
      progressAtDetents,
    }: {
      progress: number;
      progressAtDetents?: number[];
    }) => {
      const topProgress = progressAtDetents?.[progressAtDetents.length - 1] ?? 1;
      const previousProgress =
        progressAtDetents?.[progressAtDetents.length - 2] ?? 2 / 3;
      const topRange = topProgress - previousProgress;
      const nextProgress =
        topRange > 0
          ? Math.min(
              1,
              Math.max(0, (progress - previousProgress) / topRange)
            )
          : 0;

      setMobileMapSheetTopProgress((currentProgress) =>
        Math.abs(currentProgress - nextProgress) < 0.005
          ? currentProgress
          : nextProgress
      );
      syncMobileMapBottomOffset();
    },
    [syncMobileMapBottomOffset]
  );

  useEffect(() => {
    if (open) {
      setMobileMapSheetTopProgress(0);
      setMobileMapBottomOffset(MOBILE_MAP_SHEET_PREVIEW_VISIBLE_HEIGHT);
      setMobileMapScrollResetKey((key) => key + 1);
      syncMobileMapBottomOffset();
    }
  }, [open, resetKey, syncMobileMapBottomOffset]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const updateMiddleHeight = () => syncMobileMapBottomOffset(100);
    const visualViewport = window.visualViewport;

    updateMiddleHeight();
    window.addEventListener("resize", updateMiddleHeight);
    visualViewport?.addEventListener("resize", updateMiddleHeight);

    return () => {
      window.removeEventListener("resize", updateMiddleHeight);
      visualViewport?.removeEventListener("resize", updateMiddleHeight);
    };
  }, [open, syncMobileMapBottomOffset]);

  useEffect(() => {
    return cancelMobileMapBottomOffsetSync;
  }, [cancelMobileMapBottomOffsetSync]);

  useEffect(() => {
    if (!open || !mobileMapHeaderRef.current) {
      return;
    }

    const headerNode = mobileMapHeaderRef.current;
    const updateHeaderHeight = () => {
      const nextHeaderHeight = Math.ceil(
        headerNode.getBoundingClientRect().height
      );

      if (nextHeaderHeight > 0) {
        setMobileMapHeaderHeight(nextHeaderHeight);
      }
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(headerNode);

    return () => {
      resizeObserver.disconnect();
    };
  }, [open]);

  return (
    <FullScreenApp
      open={open}
      lockBody={lockBody}
      className={cn("grid grid-rows-[auto_1fr]", className)}
      {...props}
    >
      <div
        ref={mobileMapHeaderRef}
        data-mobile-map-sheet-header
        className="border-0 border-b border-solid border-gray-200 px-4 sm:px-6 lg:px-8"
      >
        {header}
      </div>
      <div className="relative min-h-0 overflow-hidden lg:grid lg:grid-cols-[minmax(360px,42%)_minmax(0,1fr)]">
        <div className="hidden min-h-0 overflow-y-auto px-4 py-6 sm:px-6 lg:block lg:px-8">
          {desktopList}
        </div>
        <div
          data-mobile-map-results-map
          className="absolute inset-x-0 top-0 min-h-0 min-w-0 lg:static"
          style={mobileMapStyle}
        >
          {map}
        </div>
        <SheetWithDetent.Root
          defaultActiveDetent={MOBILE_MAP_SHEET_PREVIEW_DETENT}
          defaultPresented
        >
          <SheetWithDetent.Portal>
            <SheetWithDetent.View
              className="!bottom-auto !top-[var(--mobile-map-sheet-header-height)] !h-[calc(100dvh_-_var(--mobile-map-sheet-header-height)_+_60px)] z-[210] lg:hidden"
              contentPlacement="bottom"
              detents={MOBILE_MAP_SHEET_DETENTS}
              inertOutside={false}
              keepDetentsAtLastDetent
              style={
                {
                  "--mobile-map-sheet-header-height": `${mobileMapHeaderHeight}px`,
                } as CSSProperties
              }
              onClickOutside={{ dismiss: false }}
              onEscapeKeyDown={{ dismiss: false }}
              onTravel={updateMobileMapSheetTravel}
              swipeDismissal={false}
              swipeOvershoot
            >
              <SheetWithDetent.Content
                data-mobile-map-sheet-content
                className="grid h-full max-w-none grid-rows-[min-content_1fr] overflow-hidden bg-white"
                style={mobileMapSheetContentStyle}
              >
                <SheetWithDetent.SpecialWrapper.Root
                  className="grid h-full min-h-0 grid-rows-[min-content_1fr] overflow-hidden"
                  style={mobileMapSheetShapeStyle}
                >
                  <SheetWithDetent.SpecialWrapper.Content
                    className="grid min-h-0 grid-rows-[min-content_1fr] overflow-hidden bg-white"
                    style={mobileMapSheetShapeStyle}
                  >
                    <SheetWithDetent.BleedingBackground
                      className="bg-white"
                      style={mobileMapSheetShapeStyle}
                    />
                    <div className="flex shrink-0 flex-col items-center gap-3 px-4 pb-4 pt-2 text-left">
                      <SheetWithDetent.Handle
                        className="justify-self-center"
                        lastDetentAction={{ type: "step", direction: "down" }}
                        tabIndex={-1}
                      />
                      <SheetWithDetent.Title className="text-center text-base font-semibold text-gray-950">
                        {mobileTitle}
                      </SheetWithDetent.Title>
                    </div>
                    <SheetWithDetent.ScrollRoot
                      key={mobileMapScrollResetKey}
                      className="h-[calc(100dvh_-_var(--mobile-map-sheet-header-height)_-_66px)] min-h-0"
                    >
                      <SheetWithDetent.ScrollView className="h-full min-h-0">
                        <SheetWithDetent.ScrollContent className="px-4 pb-20">
                          {mobileList}
                        </SheetWithDetent.ScrollContent>
                      </SheetWithDetent.ScrollView>
                    </SheetWithDetent.ScrollRoot>
                  </SheetWithDetent.SpecialWrapper.Content>
                </SheetWithDetent.SpecialWrapper.Root>
              </SheetWithDetent.Content>
            </SheetWithDetent.View>
          </SheetWithDetent.Portal>
        </SheetWithDetent.Root>
      </div>
    </FullScreenApp>
  );
}
