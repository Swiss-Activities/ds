import type { HTMLAttributes } from "react";
import type { BaseSkeletonProps } from "./skeleton.types";
export type SkeletonProps = BaseSkeletonProps & HTMLAttributes<HTMLSpanElement>;
export declare function Skeleton({ loading, full, size, amount, className, classNameItems, ...props }: SkeletonProps): import("react/jsx-runtime").JSX.Element;
