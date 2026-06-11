import type { ReactNode } from "react";
import type {
  ActivityCardMetaItem,
  ActivityCardRender,
  ActivityCardType,
  ActivityCardVariant,
} from "../activity-card/activity-card.types";
import type { BaseSectionScrollerProps } from "../section-scroller/section-scroller.types";
import type { MapPoint } from "../map";
import type { ImageValue, RenderImage } from "../utils/render-image";

export type ActivityItem = {
  image: ImageValue | null;
  images?: ImageValue[];
  title: string;
  description?: ReactNode;
  type?: ActivityCardType;
  variant?: ActivityCardVariant;
  subtitle?: ReactNode;
  category?: ReactNode;
  dateRange?: ReactNode;
  distance?: ReactNode;
  meta?: ActivityCardMetaItem[];
  score?: number | null;
  reviewCount?: number | null;
  priceLabel?: string;
  price?: string | null;
  mapPoint?: MapPoint | null;
  pending?: boolean;
  renderImage?: RenderImage;
  render?: ActivityCardRender;
};

export type BaseSectionActivityGridProps = {
  title: ReactNode;
  action?: ReactNode;
  activities: ActivityItem[];
  loading?: boolean;
  /** How many leading cards load their image eagerly (above the fold). */
  eagerCards?: number;
  skeletonAmount?: number;
  itemsPerRowLg?: BaseSectionScrollerProps["itemsPerRowLg"];
  className?: string;
};
