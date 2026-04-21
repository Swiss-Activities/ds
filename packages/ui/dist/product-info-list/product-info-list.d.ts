import { type HTMLAttributes } from "react";
import type { BaseProductInfoListProps } from "./product-info-list.types";
export type ProductInfoListProps = BaseProductInfoListProps & Omit<HTMLAttributes<HTMLDivElement>, "children">;
export declare function ProductInfoList({ items, className, ...props }: ProductInfoListProps): import("react/jsx-runtime").JSX.Element;
