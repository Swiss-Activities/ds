export type GatewayParamValue = string | number | boolean | null | undefined;
export type GatewayParams = Record<string, GatewayParamValue>;
export type GatewayContextParams = {
  locale?: string | null;
  lat?: number | null;
  lng?: number | null;
  country?: string | null;
};

export const normalizeGatewayLocale = (locale?: string | null) =>
  locale ? locale.replace("_", "-") : undefined;

export function getGatewayContextParams({
  locale,
  lat,
  lng,
  country,
}: GatewayContextParams): GatewayParams {
  const normalizedLocale = normalizeGatewayLocale(locale);

  return {
    ...(normalizedLocale ? { locale: normalizedLocale } : {}),
    ...(lat != null ? { lat } : {}),
    ...(lng != null ? { lng } : {}),
    ...(country ? { country } : {}),
  };
}

function stripTrailingSlash(value: string) {
  return value.replace(/\/+$/, "");
}

function normalizePath(path: string) {
  return path.replace(/^\/+|\/+$/g, "");
}

export function buildGatewaySearchParams(params: GatewayParams = {}) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value == null || value === "" || value === false) {
      continue;
    }

    if (key === "locale") {
      const locale = normalizeGatewayLocale(String(value));
      if (locale) {
        searchParams.set(key, locale);
      }
      continue;
    }

    searchParams.set(key, value === true ? "true" : String(value));
  }

  return searchParams;
}

export async function fetchGatewayProxy<T>({
  apiUrl,
  path,
  params,
  signal,
}: {
  apiUrl: string;
  path: string;
  params?: GatewayParams;
  signal?: AbortSignal;
}): Promise<T> {
  const baseUrl = stripTrailingSlash(apiUrl || "/api");
  const searchParams = buildGatewaySearchParams(params);
  const url = `${baseUrl}/gateway/${normalizePath(path)}/?${searchParams.toString()}`;
  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`Gateway ${path} error: ${response.status}`);
  }

  return (await response.json()) as T;
}

export async function fetchGatewayDirect<T>({
  gatewayUrl,
  path,
  params,
  signal,
}: {
  gatewayUrl: string;
  path: string;
  params?: GatewayParams;
  signal?: AbortSignal;
}): Promise<T> {
  const baseUrl = stripTrailingSlash(gatewayUrl);
  const searchParams = buildGatewaySearchParams(params);
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const url = `${baseUrl}${normalizedPath}?${searchParams}`;
  const response = await fetch(url, {
    signal,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Gateway ${path} error: ${response.status}`);
  }

  return (await response.json()) as T;
}
