import type { HTMLAttributes } from "react";
export type HeroSkeletonProps = HTMLAttributes<HTMLDivElement> & {
    fill?: boolean;
};
export declare function HeroSkeleton({ fill, className, ...props }: HeroSkeletonProps): import("react/jsx-runtime").JSX.Element;
