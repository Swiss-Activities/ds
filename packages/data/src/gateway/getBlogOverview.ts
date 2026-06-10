"use client";

import { fetchGatewayProxy, getGatewayContextParams } from "./client";
import type { TGatewayBlogOverview, TGatewayBlogOverviewParams } from "./types";

export const getGatewayBlogOverviewPath = () => "blog-posts/overview";

export const getGatewayBlogOverview = async (
  apiUrl: string,
  params: TGatewayBlogOverviewParams,
  signal?: AbortSignal
): Promise<TGatewayBlogOverview> => {
  const { locale, country, category, ...queryParams } = params;

  return fetchGatewayProxy<TGatewayBlogOverview>({
    apiUrl,
    path: getGatewayBlogOverviewPath(),
    params: {
      ...queryParams,
      ...(category ? { category } : {}),
      ...getGatewayContextParams({ locale, country }),
    },
    signal,
  });
};
