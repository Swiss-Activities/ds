import { isValidElement, type ReactNode } from "react";

export type ImageSource = {
  src: string;
  alt?: string;
};

export type RenderImageHandlers = {
  onLoad?: () => void;
  onError?: () => void;
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
  handlers: RenderImageHandlers = {}
) {
  if (!value) {
    return null;
  }

  if (isImageSource(value)) {
    return renderImage ? (
      renderImage({ ...value, ...handlers })
    ) : (
      <img
        src={value.src}
        alt={value.alt ?? ""}
        onLoad={handlers.onLoad}
        onError={handlers.onError}
      />
    );
  }

  return value;
}
