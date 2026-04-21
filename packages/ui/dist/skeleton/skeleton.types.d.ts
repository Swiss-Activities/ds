export declare const skeletonSizes: readonly ["2xs", "xs", "sm", "md", "lg"];
export type SkeletonSize = (typeof skeletonSizes)[number];
export type BaseSkeletonProps = {
    loading: boolean;
    full?: boolean;
    size?: SkeletonSize;
    amount?: number;
    className?: string;
    classNameItems?: string;
};
