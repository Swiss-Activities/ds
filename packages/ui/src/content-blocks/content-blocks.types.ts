import type { ReactNode } from "react";

export type ContentBlockItem = {
  id: string;
  title: string;
  content: string | ReactNode;
};

export type BaseContentBlocksProps = {
  items: ContentBlockItem[];
  /** Untitled lead content at the top of the content column — no TOC entry. */
  lead?: ReactNode;
  /** Right-rail content above the sticky TOC card (e.g. related activities). */
  aside?: ReactNode;
  tocTitle?: string;
  variant?: "default" | "article";
  className?: string;
};
