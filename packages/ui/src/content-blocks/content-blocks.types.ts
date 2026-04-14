import type { ReactNode } from "react";

export type ContentBlockItem = {
  id: string;
  title: string;
  content: string | ReactNode;
};

export type BaseContentBlocksProps = {
  items: ContentBlockItem[];
  tocTitle?: string;
  className?: string;
};
