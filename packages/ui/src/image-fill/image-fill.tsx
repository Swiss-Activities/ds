"use client";

import {
  isValidElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type HTMLAttributes,
  type SyntheticEvent,
} from "react";
import { Image, imgixSrc } from "../image";
import { cn } from "../utils/cn";
import {
  isImageSource,
  renderImageValue,
  type ImageSource,
  type RenderImage,
} from "../utils/render-image";
import type { BaseImageFillProps } from "./image-fill.types";

export type ImageFillProps = BaseImageFillProps &
  Omit<HTMLAttributes<HTMLDivElement>, "children">;

type ImageMeta = {
  width: number;
  height: number;
  color?: string;
};

const defaultBackgroundColor = "#f3f4f6";
function getAverageColor(image: HTMLImageElement) {
  try {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { willReadFrequently: true });

    if (!context) {
      return undefined;
    }

    canvas.width = 1;
    canvas.height = 1;
    context.drawImage(image, 0, 0, 1, 1);

    const [red, green, blue] = context.getImageData(0, 0, 1, 1).data;

    return `rgb(${red}, ${green}, ${blue})`;
  } catch {
    return undefined;
  }
}

function useResolvedMode({
  mode,
  meta,
}: {
  mode: NonNullable<BaseImageFillProps["mode"]>;
  meta: ImageMeta | null;
}) {
  return useMemo(() => {
    if (mode !== "auto") {
      return mode;
    }

    if (!meta) {
      return null;
    }

    return meta.height > meta.width ? "contain" : "cover";
  }, [meta, mode]);
}

function SourceImageFill({
  source,
  alt,
  renderImage,
  mode = "auto",
  backgroundColor,
  imageClassName,
  sizes,
  priority,
  onImageError,
  onImageLoad,
}: {
  source: ImageSource;
  alt?: string;
  renderImage?: RenderImage;
  mode?: BaseImageFillProps["mode"];
  backgroundColor?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  onImageLoad?: () => void;
  onImageError?: () => void;
}) {
  const probeContainerRef = useRef<HTMLDivElement>(null);
  const [meta, setMeta] = useState<ImageMeta | null>(null);
  const resolvedMode = useResolvedMode({
    mode,
    meta,
  });
  const resolvedBackground =
    backgroundColor || meta?.color || defaultBackgroundColor;

  const applyImageMeta = useCallback((image: HTMLImageElement) => {
    setMeta({
      width: image.naturalWidth,
      height: image.naturalHeight,
      color: getAverageColor(image),
    });
  }, []);

  const handleLoadCapture = useCallback(
    (event: SyntheticEvent<HTMLElement>) => {
      if (!(event.target instanceof HTMLImageElement)) {
        return;
      }

      applyImageMeta(event.target);
    },
    [applyImageMeta]
  );

  const syncProbeImage = useCallback(() => {
    const image = probeContainerRef.current?.querySelector("img");

    if (image?.complete && image.naturalWidth > 0) {
      applyImageMeta(image);
    }
  }, [applyImageMeta]);

  useEffect(() => {
    if (mode !== "auto" || meta) {
      return;
    }

    const frame = window.requestAnimationFrame(syncProbeImage);
    window.addEventListener("pageshow", syncProbeImage);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pageshow", syncProbeImage);
    };
  }, [meta, mode, source.src, syncProbeImage]);

  const handleVisibleLoadCapture = (event: SyntheticEvent<HTMLElement>) => {
    if (!(event.target instanceof HTMLImageElement)) {
      return;
    }

    applyImageMeta(event.target);
  };

  const imageWithAlt = {
    ...source,
    alt: alt ?? source.alt ?? "",
  };

  if (!resolvedMode) {
    return (
      <div
        ref={probeContainerRef}
        onLoadCapture={handleLoadCapture}
        className="absolute inset-0 overflow-hidden"
        style={{ backgroundColor: resolvedBackground }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-0 [&_img]:h-full [&_img]:w-full"
        >
          {/* Dimension probe: a tiny variant is enough to read the ratio. */}
          <img
            src={imgixSrc(source.src, { width: 64 })}
            alt=""
            loading="eager"
            decoding="async"
            onError={onImageError}
          />
        </div>
      </div>
    );
  }

  const backdropImage = renderImage ? (
    renderImage({ ...source, alt: "" })
  ) : (
    // Blurred at 25% opacity — a tiny variant is indistinguishable.
    <Image src={source.src} alt="" width={64} skeleton={false} />
  );

  if (resolvedMode === "cover") {
    return (
      <div
        onLoadCapture={handleVisibleLoadCapture}
        className={cn(
          "absolute inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover",
          imageClassName
        )}
      >
        {renderImage ? (
          renderImage({
            ...imageWithAlt,
            onLoad: onImageLoad,
            onError: onImageError,
          })
        ) : (
          <Image
            src={source.src}
            alt={imageWithAlt.alt}
            sizes={sizes}
            priority={priority}
            className="h-full w-full object-cover"
            onLoad={onImageLoad}
            onError={onImageError}
          />
        )}
      </div>
    );
  }

  return (
    <div
      onLoadCapture={handleVisibleLoadCapture}
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: resolvedBackground }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:scale-110 [&_img]:object-cover [&_img]:opacity-25 [&_img]:blur-xl"
      >
        {backdropImage}
      </div>
      <div
        className={cn(
          "absolute inset-0 z-10 flex h-full w-full items-center justify-center [&_img]:h-full [&_img]:w-full [&_img]:object-contain",
          imageClassName
        )}
      >
        {renderImage ? (
          renderImage({
            ...imageWithAlt,
            onLoad: onImageLoad,
            onError: onImageError,
          })
        ) : (
          <Image
            src={source.src}
            alt={imageWithAlt.alt}
            sizes={sizes}
            fit="clip"
            skeleton={false}
            priority={priority}
            className="max-h-full max-w-full object-contain"
            onLoad={onImageLoad}
            onError={onImageError}
          />
        )}
      </div>
    </div>
  );
}

export function ImageFill({
  image,
  alt,
  renderImage,
  mode = "auto",
  backgroundColor,
  className,
  imageClassName,
  sizes,
  priority,
  onImageError,
  onImageLoad,
  ...props
}: ImageFillProps) {
  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      {...props}
    >
      {isImageSource(image) ? (
        <SourceImageFill
          key={image.src}
          source={image}
          alt={alt}
          renderImage={renderImage}
          mode={mode}
          backgroundColor={backgroundColor}
          imageClassName={imageClassName}
          sizes={sizes}
          priority={priority}
          onImageLoad={onImageLoad}
          onImageError={onImageError}
        />
      ) : image && isValidElement(image) ? (
        <div
          className={cn(
            "absolute inset-0 flex items-center justify-center bg-gray-100 [&_img]:max-h-full [&_img]:max-w-full [&_img]:object-contain",
            imageClassName
          )}
        >
          {image}
        </div>
      ) : (
        renderImageValue(image, renderImage)
      )}
    </div>
  );
}
