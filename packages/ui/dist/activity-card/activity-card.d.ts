import type { HTMLAttributes } from "react";
import type { BaseActivityCardProps } from "./activity-card.types";
export type ActivityCardProps = BaseActivityCardProps & HTMLAttributes<HTMLDivElement>;
export declare function ActivityCard({ image, title, score, reviewCount, priceLabel, price, loading, className, render, ...props }: ActivityCardProps): import("react/jsx-runtime").JSX.Element;
