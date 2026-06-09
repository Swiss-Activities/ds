import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { cn } from "../utils/cn";
import type { WebsiteProps } from "./website.types";

export function Website({
  afterFooter,
  className,
  dir = "ltr",
  footer,
  footerSpacing,
  footerSlot,
  gateway,
  header,
  headerSlot,
}: WebsiteProps) {
  const footerSpacingClassName =
    footerSpacing === "page" ? "mt-12 lg:mt-16" : undefined;
  const spacedFooter = footer
    ? {
        ...footer,
        className: cn(footerSpacingClassName, footer.className),
      }
    : undefined;
  const spacedFooterSlot = footerSlot ? (
    <div className={footerSpacingClassName}>{footerSlot}</div>
  ) : null;

  return (
    <div dir={dir} className={cn("min-h-screen bg-white", className)}>
      {headerSlot ?? (header ? <SiteHeader {...header} /> : null)}
      <main>{gateway}</main>
      {spacedFooterSlot ?? (spacedFooter ? <SiteFooter {...spacedFooter} /> : null)}
      {afterFooter}
    </div>
  );
}
