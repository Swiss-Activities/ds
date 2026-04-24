import type { ReactNode } from "react";
import type {
  ActivityCardMetaItem,
  ActivityCardRender,
  ActivityCardType,
} from "../activity-card/activity-card.types";
import type { ImageValue, RenderImage } from "../utils/render-image";

export type ActivityItem = {
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
  pending?: boolean;
  renderImage?: RenderImage;
  render?: ActivityCardRender;
};

export type BaseSectionActivityGridProps = {
  title: ReactNode;
  action?: ReactNode;
  activities: ActivityItem[];
  loading?: boolean;
  skeletonAmount?: number;
  className?: string;
};
