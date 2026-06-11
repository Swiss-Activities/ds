import { cn } from "../utils/cn";
import type { BaseImageProps, ImageProps } from "./image.types";

/**
 * The one way to render an image. Owns lazy loading, the gray loading
 * placeholder, and the imgix delivery pipeline: content sources are rewritten
 * to their imgix origin and served resized + auto-compressed
 * (`auto=format,compress`) with a srcset, instead of the multi-MB originals.
 */

const SOURCE_REWRITES: ReadonlyArray<readonly [from: string, to: string]> = [
  [
    "https://fra1.digitaloceanspaces.com/",
    "https://contentapi-swissactivities.imgix.net/",
  ],
];

const IMGIX_HOSTS = [
  "https://contentapi-swissactivities.imgix.net/",
  "https://website-swissactivities.imgix.net/",
];

/** Candidate widths for srcsets (capped at 2× the rendered width). */
const SRCSET_WIDTHS = [320, 480, 640, 960, 1280, 1600, 1920];

export function normalizeImageSrc(src: string): string {
  for (const [from, to] of SOURCE_REWRITES) {
    if (src.startsWith(from)) {
      return to + src.slice(from.length);
    }
  }

  return src;
}

export function isImgixSrc(src: string): boolean {
  const normalized = normalizeImageSrc(src);

  return IMGIX_HOSTS.some((host) => normalized.startsWith(host));
}

type ImgixOptions = Pick<BaseImageProps, "width" | "height" | "quality" | "fit">;

/** Build a transformed imgix URL; non-imgix sources pass through untouched. */
export function imgixSrc(
  src: string,
  { width, height, quality, fit = "crop" }: ImgixOptions = {}
): string {
  const normalized = normalizeImageSrc(src);

  if (!IMGIX_HOSTS.some((host) => normalized.startsWith(host))) {
    return src;
  }

  const params = ["auto=format,compress", `fit=${fit}`];

  if (fit === "crop") {
    params.push("crop=edges");
  }

  if (width) {
    params.push(`w=${Math.round(width)}`);
  }

  if (height) {
    params.push(`h=${Math.round(height)}`);
  }

  if (quality) {
    params.push(`q=${quality}`);
  }

  return normalized + (normalized.includes("?") ? "&" : "?") + params.join("&");
}

function srcsetWidths(width?: number): number[] {
  if (!width) {
    return [...SRCSET_WIDTHS];
  }

  const retinaCap = width * 2;
  const widths = SRCSET_WIDTHS.filter((candidate) => candidate < retinaCap);
  widths.push(width, retinaCap);

  return [...new Set(widths)].sort((a, b) => a - b);
}

export function Image({
  src,
  alt = "",
  width,
  height,
  sizes,
  fit = "crop",
  quality,
  priority = false,
  skeleton,
  className,
  ...props
}: ImageProps) {
  const optimized = isImgixSrc(src);
  const ratio = width && height ? height / width : null;
  const srcSet = optimized
    ? srcsetWidths(width)
        .map((candidate) => {
          const url = imgixSrc(src, {
            width: candidate,
            height: ratio ? Math.round(candidate * ratio) : undefined,
            quality,
            fit,
          });

          return `${url} ${candidate}w`;
        })
        .join(", ")
    : undefined;
  const showSkeleton = skeleton ?? optimized;

  return (
    <img
      src={optimized ? imgixSrc(src, { width, height, quality, fit }) : src}
      srcSet={srcSet}
      sizes={srcSet ? (sizes ?? (width ? `${width}px` : "100vw")) : undefined}
      alt={alt}
      width={width}
      height={height}
      loading={priority ? "eager" : "lazy"}
      fetchPriority={priority ? "high" : undefined}
      decoding="async"
      // The placeholder is just a background — the loaded photo paints over
      // it. No load listeners, no animation: works in plain static markup.
      className={cn(showSkeleton && "bg-gray-100", className)}
      {...props}
    />
  );
}
