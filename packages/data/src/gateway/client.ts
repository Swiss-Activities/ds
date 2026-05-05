export type GatewayParamValue = string | number | boolean | null | undefined;
export type GatewayParams = Record<string, GatewayParamValue>;

export const normalizeGatewayLocale = (locale?: string | null) =>
  locale ? locale.replace("_", "-") : undefined;

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
  const response = await fetch(
    `${baseUrl}/gateway/${normalizePath(path)}/?${searchParams.toString()}`,
    { signal }
  );

  if (!response.ok) {
    throw new Error(`Gateway ${path} error: ${response.status}`);
  }

  return response.json();
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
  const response = await fetch(`${baseUrl}${normalizedPath}?${searchParams}`, {
    signal,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  if (!response.ok) {
    throw new Error(`Gateway ${path} error: ${response.status}`);
  }

  return response.json();
}
