"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseImageLoadStateOptions = {
  sourceKey?: string | null;
  markFailedOnError?: boolean;
  syncDurationMs?: number;
  syncIntervalMs?: number;
};

function getPrimaryImage(container: HTMLElement | null) {
  const images = Array.from(container?.querySelectorAll("img") ?? []);

  return (
    images.find((image) => !image.closest("[aria-hidden='true']")) ?? null
  );
}

function dispatchCompletedImageLoad(container: HTMLElement | null) {
  const image = getPrimaryImage(container);

  if (image?.complete && image.naturalWidth > 0) {
    image.dispatchEvent(new Event("load", { bubbles: true }));
  }
}

function startTimedSync(
  sync: () => void,
  syncDurationMs: number,
  syncIntervalMs: number
) {
  const frame = window.requestAnimationFrame(sync);
  const interval = window.setInterval(sync, syncIntervalMs);
  const intervalTimeout = window.setTimeout(() => {
    window.clearInterval(interval);
  }, syncDurationMs);

  return () => {
    window.cancelAnimationFrame(frame);
    window.clearInterval(interval);
    window.clearTimeout(intervalTimeout);
  };
}

function useTimedSync(
  active: boolean,
  sync: () => void,
  syncDurationMs: number,
  syncIntervalMs: number
) {
  useEffect(() => {
    if (!active) {
      return;
    }

    return startTimedSync(sync, syncDurationMs, syncIntervalMs);
  }, [active, sync, syncDurationMs, syncIntervalMs]);
}

function useRestoreSync(
  active: boolean,
  sync: () => void,
  syncDurationMs: number,
  syncIntervalMs: number
) {
  useEffect(() => {
    if (!active) {
      return;
    }

    let stopSync: (() => void) | null = null;
    const handleRestore = () => {
      if (document.visibilityState === "hidden") {
        return;
      }

      stopSync?.();
      sync();
      stopSync = startTimedSync(sync, syncDurationMs, syncIntervalMs);
    };

    window.addEventListener("pageshow", handleRestore);
    window.addEventListener("popstate", handleRestore);
    window.addEventListener("focus", handleRestore);
    document.addEventListener("visibilitychange", handleRestore);

    return () => {
      stopSync?.();
      window.removeEventListener("pageshow", handleRestore);
      window.removeEventListener("popstate", handleRestore);
      window.removeEventListener("focus", handleRestore);
      document.removeEventListener("visibilitychange", handleRestore);
    };
  }, [active, sync, syncDurationMs, syncIntervalMs]);
}

export function useImageSync(
  active: boolean,
  sync: () => void,
  syncDurationMs = 5000,
  syncIntervalMs = 250
) {
  useTimedSync(active, sync, syncDurationMs, syncIntervalMs);
  useRestoreSync(active, sync, syncDurationMs, syncIntervalMs);
}

export function useCompletedImageLoadDispatch<
  TElement extends HTMLElement = HTMLElement,
>(active: boolean, syncDurationMs = 5000, syncIntervalMs = 250) {
  const elementRef = useRef<TElement>(null);

  const dispatchLoad = useCallback(() => {
    dispatchCompletedImageLoad(elementRef.current?.parentElement ?? null);
  }, []);

  useImageSync(active, dispatchLoad, syncDurationMs, syncIntervalMs);

  return elementRef;
}

export function useImageLoadState<TElement extends HTMLElement = HTMLDivElement>(
  {
    sourceKey,
    markFailedOnError = false,
    syncDurationMs = 5000,
    syncIntervalMs = 250,
  }: UseImageLoadStateOptions = {}
) {
  const containerRef = useRef<TElement>(null);
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = useCallback(() => {
    setImageLoaded(true);
  }, []);

  const handleImageError = useCallback(() => {
    if (markFailedOnError) {
      setImageFailed(true);
    }

    setImageLoaded(true);
  }, [markFailedOnError]);

  const syncCompletedImageState = useCallback(() => {
    const image = getPrimaryImage(containerRef.current);

    if (!image?.complete) {
      return;
    }

    if (image.naturalWidth > 0) {
      setImageLoaded(true);
      return;
    }

    if (markFailedOnError) {
      setImageFailed(true);
    }

    setImageLoaded(true);
  }, [markFailedOnError]);

  useEffect(() => {
    setImageFailed(false);
    setImageLoaded(false);

    const images = Array.from(
      containerRef.current?.querySelectorAll("img") ?? []
    );
    const stopSync = startTimedSync(
      syncCompletedImageState,
      syncDurationMs,
      syncIntervalMs
    );

    images.forEach((image) => {
      image.addEventListener("load", syncCompletedImageState);
      image.addEventListener("error", syncCompletedImageState);
    });

    return () => {
      stopSync();
      images.forEach((image) => {
        image.removeEventListener("load", syncCompletedImageState);
        image.removeEventListener("error", syncCompletedImageState);
      });
    };
  }, [
    sourceKey,
    syncCompletedImageState,
    syncDurationMs,
    syncIntervalMs,
  ]);

  useRestoreSync(true, syncCompletedImageState, syncDurationMs, syncIntervalMs);

  return {
    imageContainerRef: containerRef,
    imageFailed,
    imageLoaded,
    handleImageError,
    handleImageLoad,
    syncCompletedImageState,
  };
}
