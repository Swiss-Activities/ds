import type { ReactNode, Ref } from "react";
import type { BreadcrumbsItem } from "../breadcrumbs/breadcrumbs.types";
import type { BaseContentBlocksProps } from "../content-blocks/content-blocks.types";
import type { BaseInfoBadgeProps } from "../info-badge/info-badge.types";
import type { BaseProductInfoListProps } from "../product-info-list/product-info-list.types";
import type { BaseRatingProps } from "../rating/rating.types";
import type { BaseSectionActivityGridProps } from "../section-activity-grid/section-activity-grid.types";
import type { BaseSectionReviewGridProps } from "../section-review-grid/section-review-grid.types";
import type { ImageValue, RenderImage } from "../utils/render-image";

export type ProductBenefitItem = {
  type: "included" | "excluded";
  html: string;
};

export type BaseSectionProductProps = {
  title: ReactNode;
  images: ImageValue[];
  renderImage?: RenderImage;
  breadcrumbs?: BreadcrumbsItem[];
  rating?: BaseRatingProps;
  badges?: BaseInfoBadgeProps[];
  description?: ReactNode;
  infoItems?: BaseProductInfoListProps["items"];
  reviewsTitle?: BaseSectionReviewGridProps["title"];
  reviewsSubtitle?: BaseSectionReviewGridProps["subtitle"];
  reviews?: BaseSectionReviewGridProps["reviews"];
  reviewsContent?: ReactNode;
  reviewsSectionClassName?: string;
  benefitsTitle?: ReactNode;
  benefits?: ProductBenefitItem[];
  highlightsTitle?: ReactNode;
  highlights?: string[];
  importantInfoTitle?: ReactNode;
  /** Trusted gateway HTML, rendered through the prose styles. */
  importantInfo?: string;
  contentItems?: BaseContentBlocksProps["items"];
  contentTocTitle?: BaseContentBlocksProps["tocTitle"];
  contentBlocksClassName?: BaseContentBlocksProps["className"];
  relatedActivitiesTitle?: BaseSectionActivityGridProps["title"];
  relatedActivitiesAction?: BaseSectionActivityGridProps["action"];
  relatedActivities?: BaseSectionActivityGridProps["activities"];
  relatedActivitiesRef?: Ref<HTMLElement>;
  className?: string;
};
