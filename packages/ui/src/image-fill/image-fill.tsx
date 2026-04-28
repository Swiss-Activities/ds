"use client";

import {
  isValidElement,
  useMemo,
  useState,
  type HTMLAttributes,
  type SyntheticEvent,
} from "react";
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
const defaultMinLandscapeRatio = 1.15;
const defaultMinLandscapeWidth = 960;

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

function getNaturalImageStyle(meta: ImageMeta | null) {
  if (!meta) {
    return undefined;
  }

  return {
    maxWidth: `${meta.width}px`,
    maxHeight: `${meta.height}px`,
  };
}

function useResolvedMode({
  mode,
  meta,
  minLandscapeRatio,
  minLandscapeWidth,
}: {
  mode: NonNullable<BaseImageFillProps["mode"]>;
  meta: ImageMeta | null;
  minLandscapeRatio: number;
  minLandscapeWidth: number;
}) {
  return useMemo(() => {
    if (mode !== "auto") {
      return mode;
    }

    if (!meta) {
      return "contain";
    }

    const ratio = meta.width / meta.height;
    const isGoodLandscape =
      ratio >= minLandscapeRatio && meta.width >= minLandscapeWidth;

    return isGoodLandscape ? "cover" : "contain";
  }, [meta, minLandscapeRatio, minLandscapeWidth, mode]);
}

function SourceImageFill({
  source,
  alt,
  renderImage,
  mode = "auto",
  backgroundColor,
  minLandscapeRatio = defaultMinLandscapeRatio,
  minLandscapeWidth = defaultMinLandscapeWidth,
  imageClassName,
}: {
  source: ImageSource;
  alt?: string;
  renderImage?: RenderImage;
  mode?: BaseImageFillProps["mode"];
  backgroundColor?: string;
  minLandscapeRatio?: number;
  minLandscapeWidth?: number;
  imageClassName?: string;
}) {
  const [meta, setMeta] = useState<ImageMeta | null>(null);
  const resolvedMode = useResolvedMode({
    mode,
    meta,
    minLandscapeRatio,
    minLandscapeWidth,
  });
  const resolvedBackground =
    backgroundColor || meta?.color || defaultBackgroundColor;

  const handleLoad = (event: SyntheticEvent<HTMLImageElement>) => {
    const image = event.currentTarget;

    setMeta({
      width: image.naturalWidth,
      height: image.naturalHeight,
      color: getAverageColor(image),
    });
  };

  const imageWithAlt = {
    ...source,
    alt: alt ?? source.alt ?? "",
  };

  const probeImage = (
    <img
      src={source.src}
      alt=""
      aria-hidden="true"
      onLoad={handleLoad}
      className="pointer-events-none absolute h-px w-px opacity-0"
    />
  );

  if (resolvedMode === "cover") {
    return (
      <>
        {probeImage}
        <div
          className={cn(
            "absolute inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover",
            imageClassName
          )}
        >
          {renderImage ? (
            renderImage(imageWithAlt)
          ) : (
            <img
              src={source.src}
              alt={imageWithAlt.alt}
              className="h-full w-full object-cover"
            />
          )}
        </div>
      </>
    );
  }

  return (
    <div
      className="absolute inset-0 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: resolvedBackground }}
    >
      <img
        src={source.src}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-xl"
      />
      {probeImage}
      <div
        className={cn(
          "relative z-10 flex max-h-full max-w-full items-center justify-center [&_img]:max-h-full [&_img]:max-w-full [&_img]:object-contain",
          imageClassName
        )}
        style={getNaturalImageStyle(meta)}
      >
        {renderImage ? (
          renderImage(imageWithAlt)
        ) : (
          <img
            src={source.src}
            alt={imageWithAlt.alt}
            className="max-h-full max-w-full object-contain"
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
  minLandscapeRatio = defaultMinLandscapeRatio,
  minLandscapeWidth = defaultMinLandscapeWidth,
  className,
  imageClassName,
  ...props
}: ImageFillProps) {
  return (
    <div
      className={cn("relative h-full w-full overflow-hidden", className)}
      {...props}
    >
      {isImageSource(image) ? (
        <SourceImageFill
          source={image}
          alt={alt}
          renderImage={renderImage}
          mode={mode}
          backgroundColor={backgroundColor}
          minLandscapeRatio={minLandscapeRatio}
          minLandscapeWidth={minLandscapeWidth}
          imageClassName={imageClassName}
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
