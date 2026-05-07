"use client";

import { fetchGatewayProxy, normalizeGatewayLocale } from "./client";
import type {
  TGatewayActivityDetail,
  TGatewayActivityDetailParams,
} from "./types";

export const getGatewayActivityDetailPath = (id: string) =>
  `activities/${encodeURIComponent(id)}`;

export const getGatewayActivityDetail = async (
  apiUrl: string,
  params: TGatewayActivityDetailParams,
  signal?: AbortSignal
): Promise<TGatewayActivityDetail> => {
  const { id, locale, ...queryParams } = params;

  return fetchGatewayProxy<TGatewayActivityDetail>({
    apiUrl,
    path: getGatewayActivityDetailPath(id),
    params: {
      ...queryParams,
      ...(locale ? { locale: normalizeGatewayLocale(locale) } : {}),
    },
    signal,
  });
};
