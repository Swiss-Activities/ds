"use client";

import { fetchGatewayProxy, getGatewayContextParams } from "./client";
import type {
  TGatewayDetail,
  TGatewayDetailForItemOptions,
  TGatewayDetailParams,
  TGatewayHomeItem,
} from "./types";

export function getGatewayDetailParamsForItem(
  item: Pick<TGatewayHomeItem, "detailPath" | "id" | "type">,
  options: Pick<TGatewayDetailParams, "dev"> = {}
): TGatewayDetailParams | null {
  if (item.detailPath) {
    return {
      path: item.detailPath,
      ...(options.dev ? { dev: options.dev } : {}),
    };
  }

  if (
    !item.id ||
    item.type === "activity" ||
    item.type === "blog-post" ||
    item.type === "review"
  ) {
    return null;
  }

  return {
    id: item.id,
    type: item.type,
    ...(options.dev ? { dev: options.dev } : {}),
  };
}

export const getGatewayDetail = async (
  apiUrl: string,
  params: TGatewayDetailParams,
  signal?: AbortSignal
): Promise<TGatewayDetail> => {
  const { locale, lat, lng, country, ...queryParams } = params;

  return fetchGatewayProxy<TGatewayDetail>({
    apiUrl,
    path: "detail",
    params: {
      ...queryParams,
      ...getGatewayContextParams({ locale, lat, lng, country }),
    },
    signal,
  });
};

export const getGatewayDetailForItem = async (
  apiUrl: string,
  item: Pick<TGatewayHomeItem, "detailPath" | "id" | "type">,
  { dev, signal }: TGatewayDetailForItemOptions = {}
): Promise<TGatewayDetail | null> => {
  const params = getGatewayDetailParamsForItem(item, { dev });

  if (!params) {
    return null;
  }

  return getGatewayDetail(apiUrl, params, signal);
};
