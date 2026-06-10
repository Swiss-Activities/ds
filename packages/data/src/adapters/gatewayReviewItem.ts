import type { TGatewayReviewItem } from "../gateway/types";

export type GatewayReviewItemData = {
  id: string;
  author: string;
  countryCode?: string;
  date: string;
  rating: number;
  text: string;
  activityPrefix: string;
  activityTitle: string;
  activityId: string;
  /** Public permalink of the reviewed activity. */
  activityPath: string | null;
};

export const getGatewayReviewActivityPrefix = (locale: string) => {
  if (locale.startsWith("de")) {
    return "zu";
  }

  if (locale.startsWith("fr")) {
    return "sur";
  }

  if (locale.startsWith("it")) {
    return "su";
  }

  return "on";
};

export const toGatewayReviewItems = (
  items: TGatewayReviewItem[],
  locale: string
): GatewayReviewItemData[] => {
  const activityPrefix = getGatewayReviewActivityPrefix(locale);

  return items.map((item) => ({
    id: item.id,
    author: item.reviewerName?.trim() || "",
    countryCode: item.reviewerCountry || undefined,
    date: "",
    rating: item.rating ?? 0,
    text: item.body || "",
    activityPrefix,
    activityTitle: item.title?.trim() || "",
    activityId: item.activityId?.trim() || "",
    activityPath: item.webPath ?? item.path ?? null,
  }));
};
