import { normalizeGatewayLocale } from "./client";
import type { TGatewayHomeItem } from "./types";

export type GatewayDateRangeLabels = {
  from: string;
  until: string;
};

const isUsableGatewayImageUrl = (value: string) => {
  return (
    /^(https?:)?\/\//i.test(value) ||
    /^data:image\//i.test(value) ||
    value.startsWith("/")
  );
};

export const getUsableGatewayImageUrl = (
  ...values: Array<string | null | undefined>
) => {
  for (const value of values) {
    const normalized = value?.trim();

    if (normalized && isUsableGatewayImageUrl(normalized)) {
      return normalized;
    }
  }

  return undefined;
};

export const getGatewayItemImageUrl = (item: TGatewayHomeItem) => {
  return getUsableGatewayImageUrl(item.imageUrl, item.image_url);
};

export const getGatewayItemReviewCount = (item: TGatewayHomeItem) => {
  return item.reviewCount ?? item.review_count ?? 0;
};

export const getGatewayItemPriceFormatted = (item: TGatewayHomeItem) => {
  return item.priceFormatted ?? item.price_formatted;
};

export const parseGatewayDate = (value?: string | null) => {
  if (!value) {
    return null;
  }

  const date = new Date(`${value}T00:00:00`);

  return Number.isNaN(date.getTime()) ? null : date;
};

export const formatGatewayDate = (date: Date, locale: string) => {
  return new Intl.DateTimeFormat(normalizeGatewayLocale(locale), {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
};

export const isFutureGatewayDate = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return date.getTime() > today.getTime();
};

export const formatGatewayItemDateRange = (
  item: Pick<TGatewayHomeItem, "dateRangeFormatted" | "dateStart" | "dateEnd">,
  locale: string,
  labels: GatewayDateRangeLabels
) => {
  if (item.dateRangeFormatted) {
    return item.dateRangeFormatted;
  }

  const start = parseGatewayDate(item.dateStart);
  const end = parseGatewayDate(item.dateEnd);

  if (start && end && isFutureGatewayDate(start)) {
    return `${formatGatewayDate(start, locale)} - ${formatGatewayDate(
      end,
      locale
    )}`;
  }

  if (end) {
    return `${labels.until} ${formatGatewayDate(end, locale)}`;
  }

  if (start) {
    return `${labels.from} ${formatGatewayDate(start, locale)}`;
  }

  return undefined;
};

export const formatGatewayItemCategory = (
  category: string | null | undefined,
  labels: Record<string, string>
) => {
  if (!category) {
    return undefined;
  }

  return labels[category];
};

export const formatGatewayItemDistance = (
  distanceKm?: number | null,
  locale?: string,
  unit?: string
) => {
  if (distanceKm == null) {
    return undefined;
  }

  return `${new Intl.NumberFormat(
    locale ? normalizeGatewayLocale(locale) : undefined,
    {
      maximumFractionDigits: 1,
    }
  ).format(distanceKm)} ${unit ?? ""}`.trim();
};
