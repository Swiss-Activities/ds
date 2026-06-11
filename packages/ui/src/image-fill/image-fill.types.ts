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
  /** Responsive sizes hint for the filled image (container width is unknown here). */
  sizes?: string;
  /** Above-the-fold fill (detail-page main media): eager + high fetch priority. */
  priority?: boolean;
  onImageLoad?: () => void;
  onImageError?: () => void;
};
