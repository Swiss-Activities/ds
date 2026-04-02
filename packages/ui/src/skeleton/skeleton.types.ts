export const skeletonSizes = ["2xs", "xs", "sm", "md", "lg"] as const;

export type SkeletonSize = (typeof skeletonSizes)[number];

export type BaseSkeletonProps = {
  loading: boolean;
  full?: boolean;
  size?: SkeletonSize;
  amount?: number;
  className?: string;
  classNameItems?: string;
};
