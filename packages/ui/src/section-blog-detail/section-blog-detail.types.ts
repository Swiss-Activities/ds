import type { ReactNode, Ref } from "react";
import type { BaseContentBlocksProps } from "../content-blocks/content-blocks.types";
import type { BaseSectionActivityGridProps } from "../section-activity-grid/section-activity-grid.types";
import type { ImageValue, RenderImage } from "../utils/render-image";

export type BaseSectionBlogDetailProps = {
  title: ReactNode;
  image?: ImageValue | null;
  renderImage?: RenderImage;
  /** Header description (beside the title). Prefer contentLead for article intros. */
  description?: ReactNode;
  /** Untitled article intro at the top of the content column (no TOC entry). */
  contentLead?: ReactNode;
  contentItems?: BaseContentBlocksProps["items"];
  contentTocTitle?: BaseContentBlocksProps["tocTitle"];
  contentBlocksClassName?: BaseContentBlocksProps["className"];
  relatedActivitiesTitle?: BaseSectionActivityGridProps["title"];
  relatedActivitiesAction?: BaseSectionActivityGridProps["action"];
  relatedActivities?: BaseSectionActivityGridProps["activities"];
  relatedActivitiesRef?: Ref<HTMLElement>;
  className?: string;
};
