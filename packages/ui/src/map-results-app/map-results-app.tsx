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

const MOBILE_MAP_SHEET_DETENTS = ["124px", "calc(64dvh + 60px)"];
const MOBILE_MAP_SHEET_PREVIEW_DETENT = 1;
const MOBILE_MAP_SHEET_DEFAULT_HEADER_HEIGHT = 72;
const MOBILE_MAP_SHEET_RADIUS = 28;
const MOBILE_MAP_SHEET_SHADOW_OPACITY = 0.16;

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
  const [mobileMapHeaderHeight, setMobileMapHeaderHeight] = useState(
    MOBILE_MAP_SHEET_DEFAULT_HEADER_HEIGHT
  );
  const [mobileMapSheetTopProgress, setMobileMapSheetTopProgress] =
    useState(0);
  const [mobileMapScrollResetKey, setMobileMapScrollResetKey] = useState(0);
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

  const updateMobileMapSheetTopProgress = useCallback(
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
    },
    []
  );

  useEffect(() => {
    if (open) {
      setMobileMapSheetTopProgress(0);
      setMobileMapScrollResetKey((key) => key + 1);
    }
  }, [open, resetKey]);

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
        <div className="absolute inset-0 min-h-0 min-w-0 lg:static">{map}</div>
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
              onTravel={updateMobileMapSheetTopProgress}
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
