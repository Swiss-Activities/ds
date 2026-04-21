import type { HTMLAttributes } from "react";
import type { BaseImageCardProps } from "./image-card.types";
export type ImageCardProps = BaseImageCardProps & HTMLAttributes<HTMLDivElement>;
export declare function ImageCard({ image, button, children, className, ...props }: ImageCardProps): import("react/jsx-runtime").JSX.Element;
