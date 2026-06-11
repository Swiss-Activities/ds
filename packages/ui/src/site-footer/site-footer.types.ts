import type { ReactNode } from "react";

export type SiteFooterLink = {
  id: string;
  label: ReactNode;
  /** Accessible name for icon-only links (the social row). */
  ariaLabel?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
};

export type SiteFooterSection = {
  id: string;
  title: ReactNode;
  links: SiteFooterLink[];
};

export type SiteFooterPartnerLogo = {
  id: string;
  alt: string;
  className?: string;
  href?: string;
  src: string;
};

export type SiteFooterAppLinksProps = {
  appStoreHref?: string;
  appStoreSrc?: string;
  center?: boolean;
  className?: string;
  googlePlayHref?: string;
  googlePlaySrc?: string;
  label?: ReactNode;
};

export type SiteFooterPaymentMethod = {
  id: string;
  alt: string;
  className?: string;
  src: string;
};

export type SiteFooterPaymentMethodsProps = {
  center?: boolean;
  className?: string;
  heading?: ReactNode;
  methods?: SiteFooterPaymentMethod[];
};

export type SiteFooterProps = {
  affiliateWidget?: ReactNode;
  appLinks?: ReactNode;
  brand?: ReactNode;
  bottomText?: ReactNode;
  className?: string;
  languageSelector?: ReactNode;
  legalLinks?: SiteFooterLink[];
  newsletter?: ReactNode;
  partnerLogos?: SiteFooterPartnerLogo[];
  paymentMethods?: ReactNode;
  sections?: SiteFooterSection[];
  socialLinks?: SiteFooterLink[];
};
