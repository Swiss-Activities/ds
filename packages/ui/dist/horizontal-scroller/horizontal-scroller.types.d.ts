import type { ReactNode } from "react";
export declare const horizontalScrollerVariants: readonly ["white", "white-button", "black", "bg"];
export type HorizontalScrollerVariant = (typeof horizontalScrollerVariants)[number];
export type BaseHorizontalScrollerProps = {
    activeId?: string;
    children: ReactNode;
    className?: string;
    classNameInner?: string;
    variant: HorizontalScrollerVariant;
    title?: ReactNode;
    bleed?: boolean;
};
export type BaseHorizontalScrollerRootProps = {
    activeId?: string;
    children: ReactNode;
    className?: string;
};
export type BaseHorizontalScrollerTrackProps = {
    children: ReactNode;
    className?: string;
    bleed?: boolean;
};
export type BaseHorizontalScrollerNavProps = {
    children?: ReactNode;
    className?: string;
    variant?: HorizontalScrollerVariant;
};
export type BaseHorizontalScrollerTitleProps = {
    children: ReactNode;
    className?: string;
};
