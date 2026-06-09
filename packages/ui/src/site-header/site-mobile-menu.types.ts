import type { ReactNode } from "react";
import type { SiteHeaderLinkItem } from "./site-header.types";

export type SiteMobileMenuItem = {
  id: string;
  children?: SiteMobileMenuItem[];
  href?: string;
  icon?: ReactNode;
  label: ReactNode;
  onClick?: () => void;
};

export type SiteMobileMenuGroup = {
  id: string;
  items: SiteMobileMenuItem[];
};

export type SiteMobileMenuAccount = {
  action: SiteHeaderLinkItem;
  avatar: ReactNode;
};

export type SiteMobileMenuProps = {
  account?: SiteMobileMenuAccount | null;
  groups: SiteMobileMenuGroup[];
};
