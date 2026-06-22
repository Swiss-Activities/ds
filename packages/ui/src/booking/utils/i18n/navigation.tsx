import { useCallback } from "react";
import type { AnchorHTMLAttributes, ReactNode } from "react";

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

export const useSearchParams = () =>
  new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
