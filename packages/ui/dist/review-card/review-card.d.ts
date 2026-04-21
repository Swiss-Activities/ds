import type { HTMLAttributes } from "react";
import type { BaseReviewCardProps } from "./review-card.types";
export type ReviewCardProps = BaseReviewCardProps & Omit<HTMLAttributes<HTMLDivElement>, "children">;
export declare function ReviewCard({ author, countryCode, date, rating, text, images, upvoteCount, onUpvote, translatedFrom, className, ...props }: ReviewCardProps): import("react/jsx-runtime").JSX.Element;
