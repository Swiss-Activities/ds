import type { ImageValue, RenderImage } from "../utils/render-image";

export type ImageFillMode = "auto" | "cover" | "contain";

export type BaseImageFillProps = {
  image?: ImageValue | null;
  alt?: string;
  renderImage?: RenderImage;
  mode?: ImageFillMode;
  backgroundColor?: string;
  className?: string;
  imageClassName?: string;
};
