"use client";

import { fetchGatewayProxy, normalizeGatewayLocale } from "./client";
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
  const { id, locale, ...queryParams } = params;

  return fetchGatewayProxy<TGatewayBlogPostDetail>({
    apiUrl,
    path: getGatewayBlogPostDetailPath(id),
    params: {
      ...queryParams,
      ...(locale ? { locale: normalizeGatewayLocale(locale) } : {}),
    },
    signal,
  });
};
