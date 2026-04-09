import type { ReactNode } from "react";

export type BaseActivityCardProps = {
  image: ReactNode;
  title: string;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
  className?: string;
};
