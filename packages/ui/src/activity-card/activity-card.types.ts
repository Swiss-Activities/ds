import type { ReactNode } from "react";
import type { CardRender } from "../card/card.types";
import type { ImageValue, RenderImage } from "../utils/render-image";

export const activityCardTypes = [
  "activity",
  "non-bookable",
  "non-bookable-event",
] as const;

export type ActivityCardType = (typeof activityCardTypes)[number];

export type ActivityCardRender = CardRender;

export type ActivityCardMetaItem = {
  label: ReactNode;
  icon?: ReactNode;
};

export type BaseActivityCardProps = {
  image: ImageValue | null;
  title: string;
  type?: ActivityCardType;
  subtitle?: ReactNode;
  category?: ReactNode;
  dateRange?: ReactNode;
  distance?: ReactNode;
  meta?: ActivityCardMetaItem[];
  score?: number | null;
  reviewCount?: number | null;
  priceLabel?: string;
  price?: string | null;
  loading?: boolean;
  pending?: boolean;
  renderImage?: RenderImage;
  className?: string;
  render?: ActivityCardRender;
};
