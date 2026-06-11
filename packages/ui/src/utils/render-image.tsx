import { isValidElement, type ReactNode } from "react";
import { Image } from "../image";

export type ImageSource = {
  src: string;
  alt?: string;
};

export type RenderImageHandlers = {
  onLoad?: () => void;
  onError?: () => void;
};

/** Sizing/loading hints forwarded to the default `Image` render. */
export type RenderImageOptions = RenderImageHandlers & {
  sizes?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  skeleton?: boolean;
};

export type ImageValue = ReactNode | ImageSource;

export type RenderImage = (
  image: ImageSource & RenderImageHandlers
) => ReactNode;

export function isImageSource(
  value: ImageValue | null | undefined
): value is ImageSource {
  return (
    typeof value === "object" &&
    value !== null &&
    !Array.isArray(value) &&
    !isValidElement(value) &&
    "src" in value &&
    typeof value.src === "string"
  );
}

export function renderImageValue(
  value: ImageValue | null | undefined,
  renderImage?: RenderImage,
  options: RenderImageOptions = {}
) {
  if (!value) {
    return null;
  }

  if (isImageSource(value)) {
    const { onLoad, onError, ...imageOptions } = options;

    return renderImage ? (
      renderImage({ ...value, onLoad, onError })
    ) : (
      <Image
        src={value.src}
        alt={value.alt ?? ""}
        onLoad={onLoad}
        onError={onError}
        {...imageOptions}
      />
    );
  }

  return value;
}
