"use client";

import { fetchGatewayProxy, getGatewayContextParams } from "./client";
import type {
  TGatewayBlogPostDetail,
  TGatewayBlogPostDetailParams,
} from "./types";

export const getGatewayBlogPostDetailPath = (id: string) =>
  `blog-posts/${encodeURIComponent(id)}`;

export const getGatewayBlogPostDetail = async (
  apiUrl: string,
  params: TGatewayBlogPostDetailParams,
  signal?: AbortSignal
): Promise<TGatewayBlogPostDetail> => {
  const { id, locale, lat, lng, country, ...queryParams } = params;

  return fetchGatewayProxy<TGatewayBlogPostDetail>({
    apiUrl,
    path: getGatewayBlogPostDetailPath(id),
    params: {
      ...queryParams,
      ...getGatewayContextParams({ locale, lat, lng, country }),
    },
    signal,
  });
};
