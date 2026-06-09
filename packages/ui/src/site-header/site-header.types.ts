import type { ReactNode } from "react";

export type SiteHeaderLinkItem = {
  id: string;
  ariaLabel?: string;
  className?: string;
  label: ReactNode;
  href?: string;
  icon?: ReactNode;
  onClick?: () => void;
  onMouseEnter?: () => void;
  showTextFrom?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
};

export type SiteHeaderMenuGroup = {
  id: string;
  title?: ReactNode;
  icon?: ReactNode;
  links: SiteHeaderLinkItem[];
};

export type SiteHeaderLabels = {
  home: string;
  menu: string;
  close: string;
};

export type SiteHeaderProps = {
  actionItems?: SiteHeaderLinkItem[];
  appBanner?: ReactNode;
  children?: ReactNode;
  className?: string;
  gatewaySearch?: ReactNode;
  innerClassName?: string;
  labels: SiteHeaderLabels;
  languageSelector?: ReactNode;
  logo?: ReactNode;
  logoHref: string;
  mobileLogo?: ReactNode;
  menuGroups?: SiteHeaderMenuGroup[];
  mobileMenu?: ReactNode;
  mobileMenuOpen?: boolean;
  onMobileMenuOpenChange?: (open: boolean) => void;
  primaryItems?: SiteHeaderLinkItem[];
  searchButton?: ReactNode;
  sticky?: boolean;
  userSlot?: ReactNode;
};
