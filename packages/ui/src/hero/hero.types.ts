import type { ReactNode } from "react";

export type HeroVariant = "localized" | "fallback";

export type HeroTab = {
  id: string;
  label: ReactNode;
  icon?: ReactNode;
  activeIcon?: ReactNode;
};

export type BaseHeroProps = {
  title?: ReactNode;
  image?: ReactNode;
  images?: ReactNode[];
  children?: ReactNode;
  overlay?: ReactNode;
  search?: ReactNode;
  variant?: HeroVariant;
  tabs?: HeroTab[];
  selectedTabId?: string;
  onSelectTab?: (id: string) => void;
  backLabel?: string;
  backHref?: string;
  onBack?: () => void;
  className?: string;
};
