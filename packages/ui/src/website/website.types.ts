import type { ReactNode } from "react";
import type { SiteFooterProps } from "../site-footer";
import type { SiteHeaderProps } from "../site-header";

export type WebsiteProps = {
  afterFooter?: ReactNode;
  className?: string;
  dir?: "ltr" | "rtl";
  footer?: SiteFooterProps;
  footerSlot?: ReactNode;
  gateway: ReactNode;
  header?: SiteHeaderProps;
  headerSlot?: ReactNode;
};
