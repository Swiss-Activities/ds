import type { HTMLAttributes } from "react";
import type { BaseHeaderProps, BaseHeaderSectionProps } from "./header.types";
export type HeaderProps = BaseHeaderProps & Omit<HTMLAttributes<HTMLElement>, "children">;
export declare function Header({ children, className, loading, ...props }: HeaderProps): import("react/jsx-runtime").JSX.Element;
export declare namespace Header {
    var Left: ({ children, className, ...props }: HeaderSectionProps) => import("react/jsx-runtime").JSX.Element;
    var Right: ({ children, className, ...props }: HeaderSectionProps) => import("react/jsx-runtime").JSX.Element;
}
export type HeaderSectionProps = BaseHeaderSectionProps & HTMLAttributes<HTMLDivElement>;
