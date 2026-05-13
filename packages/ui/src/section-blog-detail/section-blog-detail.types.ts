import type { ReactNode } from "react";
import type { BaseContentBlocksProps } from "../content-blocks/content-blocks.types";
import type { ImageValue, RenderImage } from "../utils/render-image";

export type BaseSectionBlogDetailProps = {
  title: ReactNode;
  image?: ImageValue | null;
  renderImage?: RenderImage;
  backLabel?: string;
  backHref?: string;
  onBack?: () => void;
  description?: ReactNode;
  contentItems?: BaseContentBlocksProps["items"];
  contentTocTitle?: BaseContentBlocksProps["tocTitle"];
  contentBlocksClassName?: BaseContentBlocksProps["className"];
  className?: string;
};
