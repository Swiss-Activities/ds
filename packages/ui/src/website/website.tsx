import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";
import { cn } from "../utils/cn";
import type { WebsiteProps } from "./website.types";

export function Website({
  afterFooter,
  className,
  dir = "ltr",
  footer,
  footerSlot,
  gateway,
  header,
  headerSlot,
}: WebsiteProps) {
  return (
    <div dir={dir} className={cn("min-h-screen bg-white", className)}>
      {headerSlot ?? (header ? <SiteHeader {...header} /> : null)}
      <main>{gateway}</main>
      {footerSlot ?? (footer ? <SiteFooter {...footer} /> : null)}
      {afterFooter}
    </div>
  );
}
