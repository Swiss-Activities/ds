import type { AppGatewayContext } from "../app-gateway";
import { getGatewayFeed } from "../gateway/feed";
import { getGatewayActivityDetail } from "../gateway/getActivityDetail";
import { getGatewayDetail } from "../gateway/getDetail";
import { getGatewayBlogPostDetail } from "../gateway/getBlogPostDetail";
import { getGatewayBlogOverview } from "../gateway/getBlogOverview";
import type { TGatewayStaticPageContent } from "../gateway/types";
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

type WebsiteGatewayTravelGuidePageRequest = {
  type: "overview-travel-guide";
  /** Editorial category slug; null/absent on the root overview. */
  slug?: string | null;
};

type WebsiteGatewayDetailBlogPostPageRequest = {
  type: "detail-blog-post";
  id: string;
};

type WebsiteGatewayStaticPageRequest = {
  type: "static-page";
  /** The full gateway bundle — the /web/v1/page envelope already carries it. */
  content: TGatewayStaticPageContent;
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
  | WebsiteGatewayDetailNonBookablePageRequest
  | WebsiteGatewayTravelGuidePageRequest
  | WebsiteGatewayDetailBlogPostPageRequest
  | WebsiteGatewayStaticPageRequest;

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

/** Feed params for an overview/home request — exported so consumers can
 * precompute the feed URL (e.g. the static shell's early-fetch script). */
export const getFeedSelection = (page: WebsiteGatewayOverviewPageRequest) => {
  switch (page.type) {
    case "overview-activities":
      return { activitiesOverview: true };
    case "overview-activity-type":
      return { activityType: page.slug ?? null };
    case "overview-destination":
      return { destinationOverview: page.slug ?? null };
    case "overview-destination-activity-type":
      return {
        destinationOverview: page.locationSlug ?? null,
        activityType: page.slug ?? null,
      };
    case "overview-attribute":
      return { attribute: page.slug ?? null };
    case "overview-destination-attribute":
      return {
        destinationOverview: page.locationSlug ?? null,
        attribute: page.slug ?? null,
      };
    case "overview-non-bookable":
      return { nonBookable: page.slug ?? null };
    case "overview-point-of-interest":
      return { poi: page.slug ?? null };
    case "overview-region":
      return { region: page.slug ?? null };
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

  if (page.type === "static-page") {
    return { type: page.type, content: page.content, context };
  }

  if (page.type === "detail-blog-post") {
    return {
      type: page.type,
      id: page.id,
      context,
      detail: await getGatewayBlogPostDetail(
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

  if (page.type === "overview-travel-guide") {
    return {
      type: page.type,
      slug: page.slug ?? null,
      context,
      data: await getGatewayBlogOverview(
        apiUrl,
        {
          locale: context?.locale,
          country: context?.country ?? undefined,
          category: page.slug ?? undefined,
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
