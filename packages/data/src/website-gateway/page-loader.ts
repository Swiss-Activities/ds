import type { AppGatewayContext } from "../app-gateway";
import { getGatewayFeed } from "../gateway/feed";
import { getGatewayActivityDetail } from "../gateway/getActivityDetail";
import { getGatewayDetail } from "../gateway/getDetail";
import type {
  TGatewayDetailParams,
  TGatewayNonBookableDetail,
} from "../gateway/types";
import type {
  WebsiteGatewayOverviewPageType,
  WebsiteGatewayPage,
} from "./website-gateway";

type WebsiteGatewayOverviewPageRequest = {
  type: WebsiteGatewayOverviewPageType;
  slug?: string | null;
  /** Location slug of a destination-activity-type page. */
  locationSlug?: string | null;
};

type WebsiteGatewayDetailActivityPageRequest = {
  type: "detail-activity";
  id: string;
};

type WebsiteGatewayDetailNonBookablePageRequest = {
  type: "detail-non-bookable";
  id: string;
  detailPath?: string | null;
  gatewayType?: TGatewayDetailParams["type"];
};

export type WebsiteGatewayPageRequest =
  | WebsiteGatewayOverviewPageRequest
  | WebsiteGatewayDetailActivityPageRequest
  | WebsiteGatewayDetailNonBookablePageRequest;

export type LoadWebsiteGatewayPageOptions = {
  apiUrl: string;
  context?: AppGatewayContext;
  dev?: boolean;
  page: WebsiteGatewayPageRequest;
  signal?: AbortSignal;
};

const isGatewayNonBookableDetail = (
  detail: Awaited<ReturnType<typeof getGatewayDetail>>
): detail is TGatewayNonBookableDetail => {
  return !("relatedActivities" in detail && detail.type === "blog-post");
};

const getFeedSelection = (page: WebsiteGatewayOverviewPageRequest) => {
  switch (page.type) {
    case "overview-activity-type":
      return { activityType: page.slug ?? null };
    case "overview-destination":
      return { destinationOverview: page.slug ?? null };
    case "overview-destination-activity-type":
      return {
        destinationOverview: page.locationSlug ?? null,
        activityType: page.slug ?? null,
      };
    case "overview-non-bookable":
      return { nonBookable: page.slug ?? null };
    case "overview-point-of-interest":
      return { poi: page.slug ?? null };
    case "home":
      return {};
    default:
      page.type satisfies never;
      return {};
  }
};

const getNonBookableDetail = async ({
  apiUrl,
  context,
  dev,
  page,
  signal,
}: LoadWebsiteGatewayPageOptions & {
  page: WebsiteGatewayDetailNonBookablePageRequest;
}) => {
  const detail = await getGatewayDetail(
    apiUrl,
    {
      path: page.detailPath,
      id: page.detailPath ? undefined : page.id,
      type: page.detailPath ? undefined : page.gatewayType ?? "non-bookable",
      locale: context?.locale,
      country: context?.country ?? undefined,
      lat: context?.lat,
      lng: context?.lng,
      dev,
    },
    signal
  );

  if (!isGatewayNonBookableDetail(detail)) {
    throw new Error("Expected non-bookable gateway detail response");
  }

  return detail;
};

export async function loadWebsiteGatewayPage({
  apiUrl,
  context,
  dev,
  page,
  signal,
}: LoadWebsiteGatewayPageOptions): Promise<WebsiteGatewayPage> {
  if (page.type === "detail-activity") {
    return {
      type: page.type,
      id: page.id,
      context,
      detail: await getGatewayActivityDetail(
        apiUrl,
        {
          id: page.id,
          locale: context?.locale,
          country: context?.country ?? undefined,
          lat: context?.lat,
          lng: context?.lng,
          dev,
        },
        signal
      ),
    };
  }

  if (page.type === "detail-non-bookable") {
    return {
      type: page.type,
      id: page.id,
      context,
      detail: await getNonBookableDetail({
        apiUrl,
        context,
        dev,
        page,
        signal,
      }),
    };
  }

  const data = await getGatewayFeed(
    apiUrl,
    {
      locale: context?.locale,
      country: context?.country ?? undefined,
      lat: context?.lat,
      lng: context?.lng,
      date: context?.date,
      dev,
      ...getFeedSelection(page),
    },
    signal
  );

  return {
    type: page.type,
    data,
    context,
    slug: page.slug,
  };
}
