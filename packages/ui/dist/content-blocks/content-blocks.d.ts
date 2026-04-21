import type { HTMLAttributes } from "react";
import type { BaseContentBlocksProps } from "./content-blocks.types";
export type ContentBlocksProps = BaseContentBlocksProps & Omit<HTMLAttributes<HTMLDivElement>, "children">;
export declare const ContentBlocks: import("react").MemoExoticComponent<({ items, tocTitle, className, ...props }: ContentBlocksProps) => import("react/jsx-runtime").JSX.Element>;
