"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type UseImageLoadStateOptions = {
  sourceKey?: string | null;
  markFailedOnError?: boolean;
};

function getPrimaryImage(container: HTMLElement | null) {
  const images = Array.from(container?.querySelectorAll("img") ?? []);

  return (
    images.find((image) => !image.closest("[aria-hidden='true']")) ?? null
  );
}

export function useImageLoadState<TElement extends HTMLElement = HTMLDivElement>(
  {
    sourceKey,
    markFailedOnError = false,
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

    const frame = window.requestAnimationFrame(syncCompletedImageState);

    return () => window.cancelAnimationFrame(frame);
  }, [sourceKey, syncCompletedImageState]);

  useEffect(() => {
    const handlePageShow = () => syncCompletedImageState();
    window.addEventListener("pageshow", handlePageShow);

    return () => window.removeEventListener("pageshow", handlePageShow);
  }, [syncCompletedImageState]);

  return {
    imageContainerRef: containerRef,
    imageFailed,
    imageLoaded,
    handleImageError,
    handleImageLoad,
    syncCompletedImageState,
  };
}
