import { useCallback, useMemo, useSyncExternalStore } from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

const subscribeToLocation = (onChange: () => void) => {
  if (typeof window === "undefined") return () => {};
  window.addEventListener("popstate", onChange);
  return () => window.removeEventListener("popstate", onChange);
};

const getSearchSnapshot = () =>
  typeof window !== "undefined" ? window.location.search : "";

export const Link = ({
  href,
  children,
  ...rest
}: { href?: string; children?: ReactNode } & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a href={href} {...rest}>
    {children}
  </a>
);

export const useRouter = () => {
  const push = useCallback((url: string) => {
    if (typeof window !== "undefined") window.location.href = url;
  }, []);
  const replace = useCallback((url: string) => {
    if (typeof window !== "undefined") window.location.replace(url);
  }, []);
  const back = useCallback(() => {
    if (typeof window !== "undefined") window.history.back();
  }, []);
  const refresh = useCallback(() => {
    if (typeof window !== "undefined") window.location.reload();
  }, []);
  const prefetch = useCallback(() => {}, []);
  return { push, replace, back, refresh, prefetch };
};

export const usePathname = () =>
  typeof window !== "undefined" ? window.location.pathname : "";

// Next's useSearchParams returns a stable, reactive value; the naive shim
// returned a fresh URLSearchParams every render, so any effect with a
// `[searchParams]` dep re-ran on every render (an infinite-update trigger).
// Read the search string through useSyncExternalStore (stable by value, reactive
// to history navigation) and memoise the parsed params.
export const useSearchParams = () => {
  const search = useSyncExternalStore(subscribeToLocation, getSearchSnapshot, () => "");
  return useMemo(() => new URLSearchParams(search), [search]);
};
