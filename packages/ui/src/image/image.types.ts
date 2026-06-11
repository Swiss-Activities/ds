import type { ImgHTMLAttributes } from "react";

/** imgix fit mode — "crop" additionally sets crop=edges (legacy website parity). */
export type ImageFit = "crop" | "clip" | "max" | "fill" | "scale";

export type BaseImageProps = {
  src: string;
  alt?: string;
  /**
   * Rendered width hint in px. Drives the srcset candidate cap (2× for
   * retina) and the default `sizes` attribute. Also emitted as the `width`
   * attribute for layout stability.
   */
  width?: number;
  /** Height matching `width` — keeps the crop ratio across srcset candidates. */
  height?: number;
  /** Responsive `sizes`; defaults to `${width}px`, or "100vw" without a width. */
  sizes?: string;
  fit?: ImageFit;
  /** imgix quality override (q=). */
  quality?: number;
  /**
   * Above-the-fold image (hero/LCP): loads eagerly with high fetch priority.
   * Everything else lazy-loads when scrolled near the viewport.
   */
  priority?: boolean;
  /**
   * Gray placeholder behind the image while it loads (a plain background —
   * the photo paints over it, no JS). Defaults to on for imgix-served
   * photos, off for local assets/logos where a backdrop behind transparency
   * looks wrong.
   */
  skeleton?: boolean;
};

export type ImageProps = BaseImageProps &
  Omit<
    ImgHTMLAttributes<HTMLImageElement>,
    "src" | "alt" | "width" | "height" | "sizes"
  >;
