import type { ReactNode } from "react";
export declare const textSizes: readonly ["3xl", "2xl", "xl", "lg", "default", "md2", "display", "sm", "sm2", "xs", "xs2"];
export type TextSize = (typeof textSizes)[number] | false;
export declare const textElements: readonly ["h1", "h2", "h3", "h4", "h5", "h6", "span", "p", "li"];
export type TextElement = (typeof textElements)[number];
export type BaseTextProps = {
    children?: ReactNode | null;
    className?: string;
    size?: TextSize;
    as?: TextElement;
    bold?: boolean;
    black?: boolean;
    gray?: boolean;
};
