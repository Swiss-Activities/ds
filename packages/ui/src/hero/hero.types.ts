import type { ReactNode } from "react";

export type BaseHeroProps = {
  title: ReactNode;
  image: ReactNode;
  images?: ReactNode[];
  children?: ReactNode;
  backLabel?: string;
  backHref?: string;
  onBack?: () => void;
  className?: string;
};
