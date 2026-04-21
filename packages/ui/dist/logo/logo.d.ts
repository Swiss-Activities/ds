import type { ImgHTMLAttributes } from "react";
import type { BaseLogoProps } from "./logo.types";
export type LogoProps = BaseLogoProps & Omit<ImgHTMLAttributes<HTMLImageElement>, "children">;
export declare function Logo({ size, className, alt, children, ...props }: LogoProps): import("react/jsx-runtime").JSX.Element;
