import type { HTMLAttributes } from "react";
import type { BaseCardProps } from "./card.types";
export type CardProps = BaseCardProps & HTMLAttributes<HTMLDivElement>;
export declare function Card({ children, className, elevation, noPadding, render, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
