import {
  formatGatewayItemCategory,
  formatGatewayItemDateRange,
  formatGatewayItemDistance,
  getGatewayItemImageUrl,
  getGatewayItemPriceFormatted,
  getGatewayItemReviewCount,
  getUsableGatewayImageUrl,
} from "../gateway/items";
import type { TGatewayActivityCardItem } from "../gateway/types";

export type GatewayActivityItemImage = {
  src: string;
  alt: string;
};

export type GatewayActivityItemLabels = {
  categories: Record<string, string>;
  dateRange: {
    from: string;
    until: string;
  };
  distanceUnit: string;
};

export type GatewayActivityMapPoint = {
  id: string;
  title: string;
  lat: number;
  lng: number;
  type: "activity" | "non-bookable" | "point-of-interest" | null;
  category?: string | null;
  priceLabel?: string | null;
};

export type GatewayActivityItemData = {
  image: GatewayActivityItemImage | null;
  images?: GatewayActivityItemImage[];
  title: string;
  description?: string;
  /** Localized public permalink (`webPath` preferred over `path`). */
  path?: string | null;
  /** Public permalink only — null when the gateway ships no web page for the item. */
  webPath?: string | null;
  type: TGatewayActivityCardItem["type"];
  subtitle?: string;
  category?: string;
  dateRange?: string;
  distance?: string;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
  mapPoint: GatewayActivityMapPoint | null;
};

const imageFormatPrefixRegex =
  /^(large|medium|small|thumbnail|teaser|gallery)_/i;
const imageHashSuffixRegex = /_[a-f0-9]{8,}$/i;
const imageHashOnlyRegex = /^[a-f0-9]{8,}$/i;
const imageExtensionRegex = /\.[^.]+$/;
const imageDimensionPrefixRegex = /^\d+x\d+(?:_|$)/i;

const getImageDedupKey = (src: string) => {
  const trimmed = src.trim();

  try {
    const url = new URL(trimmed);
    url.hash = "";
    url.search = "";
    url.hostname = url.hostname.toLowerCase();

    return url.toString();
  } catch {
    return trimmed.split("#")[0]!.split("?")[0]!.trim();
  }
};

const getImageVisualDedupKey = (src: string) => {
  const pathname = (() => {
    try {
      return new URL(src).pathname;
    } catch {
      return src.split("#")[0]!.split("?")[0]!;
    }
  })();
  const filename = pathname.split("/").pop()?.trim();

  if (!filename) {
    return null;
  }

  let stem = decodeURIComponent(filename).replace(imageExtensionRegex, "");
  while (imageFormatPrefixRegex.test(stem)) {
    stem = stem.replace(imageFormatPrefixRegex, "");
  }

  let visualStem = stem;
  while (imageHashSuffixRegex.test(visualStem)) {
    const candidate = visualStem.replace(imageHashSuffixRegex, "");

    if (!/[a-z]/i.test(candidate) || imageDimensionPrefixRegex.test(candidate)) {
      break;
    }

    visualStem = candidate;
  }

  const normalized = visualStem.toLowerCase();

  if (
    normalized === stem.toLowerCase() ||
    normalized.length < 6 ||
    imageHashOnlyRegex.test(normalized) ||
    imageDimensionPrefixRegex.test(normalized)
  ) {
    return null;
  }

  return normalized;
};

export const uniqueGatewayActivityItemImages = <
  TImage extends GatewayActivityItemImage,
>(
  images: TImage[]
) => {
  const seen = new Set<string>();

  return images.filter((image) => {
    const dedupKeys = [
      getImageDedupKey(image.src),
      getImageVisualDedupKey(image.src),
    ].filter((key): key is string => key !== null);

    if (dedupKeys.some((key) => seen.has(key))) {
      return false;
    }

    dedupKeys.forEach((key) => seen.add(key));
    return true;
  });
};

const getGatewayImageInputUrl = (
  image: NonNullable<TGatewayActivityCardItem["images"]>[number]
) => {
  if (typeof image === "string") {
    return getUsableGatewayImageUrl(image);
  }

  return getUsableGatewayImageUrl(image.src, image.url, image.imageUrl);
};

const getGatewayImageInputAlt = (
  image: NonNullable<TGatewayActivityCardItem["images"]>[number],
  fallbackAlt: string
) => {
  if (typeof image === "string") {
    return fallbackAlt;
  }

  return image.alt || image.alternativeText || fallbackAlt;
};

export const getGatewayActivityItemImages = (
  item: TGatewayActivityCardItem
) => {
  const imageInputs =
    item.imageUrls && item.imageUrls.length > 0
      ? [...item.imageUrls, ...(item.images ?? [])]
      : [item.imageUrl ?? item.image_url ?? null, ...(item.images ?? [])];

  return uniqueGatewayActivityItemImages(
    imageInputs.reduce<GatewayActivityItemImage[]>((images, image) => {
      if (!image) {
        return images;
      }

      const src =
        typeof image === "string"
          ? getUsableGatewayImageUrl(image)
          : getGatewayImageInputUrl(image);

      if (src) {
        images.push({
          src,
          alt: getGatewayImageInputAlt(image, item.title),
        });
      }

      return images;
    }, [])
  );
};

const getGatewayMapPointType = (
  type: TGatewayActivityCardItem["type"]
): GatewayActivityMapPoint["type"] => {
  if (type === "activity") {
    return "activity";
  }

  if (type === "point-of-interest") {
    return "point-of-interest";
  }

  return "non-bookable";
};

const toGatewayMapPoint = (
  item: TGatewayActivityCardItem,
  price: string | null,
  fromLabel: string
): GatewayActivityMapPoint | null => {
  if (
    typeof item.lat !== "number" ||
    typeof item.lng !== "number" ||
    !Number.isFinite(item.lat) ||
    !Number.isFinite(item.lng)
  ) {
    return null;
  }

  return {
    id: item.id,
    title: item.title,
    lat: item.lat,
    lng: item.lng,
    type: getGatewayMapPointType(item.type),
    category: item.category ?? null,
    priceLabel:
      item.type === "activity" && price ? `${fromLabel} ${price}` : null,
  };
};

export const toGatewayActivityItemData = (
  item: TGatewayActivityCardItem,
  {
    locale,
    labels,
    priceLabel,
    fromLabel,
  }: {
    locale: string;
    labels: GatewayActivityItemLabels;
    priceLabel: string;
    fromLabel: string;
  }
): GatewayActivityItemData => {
  const images =
    item.type === "activity" ? getGatewayActivityItemImages(item) : [];
  const src = images[0]?.src ?? getGatewayItemImageUrl(item);
  const reviewCount = getGatewayItemReviewCount(item);
  const price = getGatewayItemPriceFormatted(item);

  return {
    image:
      images[0] ??
      (src
        ? {
            src,
            alt: item.type === "blog-post" ? "" : item.title,
          }
        : null),
    images: images.length > 1 ? images : undefined,
    title: item.title,
    description:
      item.type === "blog-post" ? item.description || undefined : undefined,
    path: item.webPath ?? item.path ?? null,
    webPath: item.webPath ?? null,
    type: item.type,
    subtitle: item.subtitle || undefined,
    category: formatGatewayItemCategory(item.category, labels.categories),
    dateRange: formatGatewayItemDateRange(item, locale, labels.dateRange),
    distance: formatGatewayItemDistance(
      item.distanceKm,
      locale,
      labels.distanceUnit
    ),
    score: item.rating ?? 0,
    reviewCount,
    priceLabel,
    price: price ? `${fromLabel} ${price}` : "",
    mapPoint: toGatewayMapPoint(item, price ?? null, fromLabel),
  };
};
