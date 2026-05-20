"use client";

import { fetchGatewayProxy, getGatewayContextParams } from "./client";
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
  const { id, locale, lat, lng, country, ...queryParams } = params;

  return fetchGatewayProxy<TGatewayActivityDetail>({
    apiUrl,
    path: getGatewayActivityDetailPath(id),
    params: {
      ...queryParams,
      ...getGatewayContextParams({ locale, lat, lng, country }),
    },
    signal,
  });
};
