import type { ReactNode } from "react";
import type { SiteFooterProps } from "../site-footer";
import type { SiteHeaderProps } from "../site-header";

export type WebsiteLanguageOption = {
  value: string;
  label: string;
  shortLabel?: string;
};

export type WebsiteLanguageSelectProps = {
  ariaLabel?: string;
  className?: string;
  long?: boolean;
  onValueChange?: (value: string) => void;
  options: WebsiteLanguageOption[];
  value: string;
};

export type WebsiteProps = {
  afterFooter?: ReactNode;
  className?: string;
  dir?: "ltr" | "rtl";
  footer?: SiteFooterProps;
  footerSpacing?: "page";
  footerSlot?: ReactNode;
  gateway: ReactNode;
  header?: SiteHeaderProps;
  headerSlot?: ReactNode;
};
