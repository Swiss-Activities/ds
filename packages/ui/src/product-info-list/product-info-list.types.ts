import type { ReactNode } from "react";

export type ProductInfoListItem = {
  id?: string;
  icon: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  details?: ReactNode;
  href?: string;
  onClick?: () => void;
};

export type BaseProductInfoListProps = {
  items: ProductInfoListItem[];
  className?: string;
};
