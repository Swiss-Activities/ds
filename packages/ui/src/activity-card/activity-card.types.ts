import type { ReactNode } from "react";
import type { CardRender } from "../card/card.types";

export type ActivityCardRender = CardRender;

export type BaseActivityCardProps = {
  image: ReactNode;
  title: string;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
  loading?: boolean;
  pending?: boolean;
  className?: string;
  render?: ActivityCardRender;
};
