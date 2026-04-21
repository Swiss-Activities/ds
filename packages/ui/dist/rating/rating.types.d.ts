import type { ReactNode } from "react";
export declare const ratingSizes: readonly ["xs", "sm", "default", "md", "lg"];
export type RatingSize = (typeof ratingSizes)[number];
export type BaseRatingProps = {
    score: number;
    count?: number;
    size?: RatingSize;
    showScore?: boolean;
    stacked?: boolean;
    label?: ReactNode;
    className?: string;
};
