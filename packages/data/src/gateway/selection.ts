import type { TGatewayDetail, TGatewayHomeItem } from "./types";

export const gatewaySelectionParams = {
  id: "id",
  type: "type",
  destination: "destination",
  activityType: "activityType",
  tags: "tags",
} as const;

export type TGatewaySelectedDetail = {
  item: TGatewayHomeItem;
  detail: TGatewayDetail;
};

type CreateGatewayDetailItemFromUrlParams = {
  id: string;
  type: TGatewayHomeItem["type"];
};

const gatewayDetailCacheKey = "__swissActivitiesGatewayDetail:";

export const createGatewayDetailItemFromUrl = ({
  id,
  type,
}: CreateGatewayDetailItemFromUrlParams): TGatewayHomeItem => {
  return {
    id,
    type,
    title: "",
    imageUrl: null,
    subtitle: null,
    category: null,
    distanceKm: null,
    detailPath: null,
  };
};

export const hydrateGatewayDetailItem = (
  item: TGatewayHomeItem,
  detail: TGatewayDetail
): TGatewayHomeItem => {
  return {
    ...item,
    title: item.title || detail.title || "",
    imageUrl: item.imageUrl ?? detail.coverImage ?? null,
    subtitle:
      item.subtitle ??
      detail.venue?.title ??
      detail.address ??
      detail.canton ??
      null,
    category: item.category ?? detail.type ?? null,
    dateStart: item.dateStart ?? detail.dateStart ?? null,
    dateEnd: item.dateEnd ?? detail.dateEnd ?? null,
  };
};

export const cacheGatewayDetail = (selectedDetail: TGatewaySelectedDetail) => {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.sessionStorage.setItem(
      `${gatewayDetailCacheKey}${selectedDetail.item.id}`,
      JSON.stringify(selectedDetail)
    );
  } catch {
    // Storage failures should not block query-driven navigation.
  }
};

export const readCachedGatewayDetail = (id: string) => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const value = window.sessionStorage.getItem(`${gatewayDetailCacheKey}${id}`);

    if (!value) {
      return null;
    }

    return JSON.parse(value) as TGatewaySelectedDetail;
  } catch {
    return null;
  }
};

export const isGatewayActivityId = (id: string) => {
  return /^\d+$/.test(id);
};

export const getGatewayQueryValue = (value: string | string[] | undefined) => {
  return Array.isArray(value) ? value[0] : value;
};

export const getGatewayQueryTokens = (
  value: string | string[] | undefined
) => {
  const queryValue = getGatewayQueryValue(value);

  if (!queryValue) {
    return [];
  }

  return queryValue
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
};

export const getFallbackGatewayType = (id?: string) => {
  if (!id) {
    return undefined;
  }

  return isGatewayActivityId(id) ? "activity" : "non-bookable";
};

export const isGatewayHomeItemType = (
  type?: string
): type is TGatewayHomeItem["type"] => {
  return (
    type === "activity" ||
    type === "non-bookable" ||
    type === "non-bookable-event" ||
    type === "blog-post" ||
    type === "review"
  );
};

export const isGatewayDetailType = (type?: string) => {
  return Boolean(
    type && type !== "activity" && type !== "blog-post" && type !== "review"
  );
};

export const scrollToGatewayTop = () => {
  if (typeof window === "undefined") {
    return;
  }

  window.scrollTo({ top: 0, behavior: "auto" });
};

export const scheduleGatewayTopScroll = () => {
  scrollToGatewayTop();

  if (typeof window === "undefined") {
    return;
  }

  window.requestAnimationFrame(() => {
    scrollToGatewayTop();
    window.setTimeout(scrollToGatewayTop, 0);
  });
};
