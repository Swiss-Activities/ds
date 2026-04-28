import type { ReactNode } from "react";
import type { BaseProductInfoListProps } from "../product-info-list/product-info-list.types";
import type { BaseSectionActivityGridProps } from "../section-activity-grid/section-activity-grid.types";
import type { ImageValue, RenderImage } from "../utils/render-image";

export type NonBookableFactStatus = "available" | "unavailable" | "neutral";

export type NonBookableFactItem = {
  id?: string;
  label: ReactNode;
  value?: ReactNode;
  status?: NonBookableFactStatus;
};

export type NonBookableDetailSection = {
  id?: string;
  title: string;
  items: NonBookableFactItem[];
};

export type BaseSectionNonBookableProps = {
  title: ReactNode;
  images: ImageValue[];
  renderImage?: RenderImage;
  categoryLabel?: ReactNode;
  categoryTitleLabel?: ReactNode;
  locationLabel?: ReactNode;
  locationTitleLabel?: ReactNode;
  backLabel?: string;
  backHref?: string;
  onBack?: () => void;
  description?: ReactNode;
  highlights?: BaseProductInfoListProps["items"];
  detailSections?: NonBookableDetailSection[];
  sourceLabel?: ReactNode;
  sourceHref?: string;
  relatedActivitiesTitle?: BaseSectionActivityGridProps["title"];
  relatedActivitiesAction?: BaseSectionActivityGridProps["action"];
  relatedActivities?: BaseSectionActivityGridProps["activities"];
  className?: string;
};
