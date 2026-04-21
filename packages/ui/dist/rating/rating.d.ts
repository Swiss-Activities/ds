import type { HTMLAttributes } from "react";
import type { BaseRatingProps } from "./rating.types";
export type RatingProps = BaseRatingProps & Omit<HTMLAttributes<HTMLSpanElement>, "children">;
export declare function Rating({ score, count, size, showScore, stacked, label, className, ...props }: RatingProps): import("react/jsx-runtime").JSX.Element;
