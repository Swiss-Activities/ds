import type { TextSize } from "./text.types";
export declare const textVariantSizes: readonly ["3xl", "2xl", "xl", "lg", "default", "md2", "display", "sm", "sm2", "xs", "xs2", "none"];
export type TextVariantSize = (typeof textVariantSizes)[number];
export declare function resolveTextVariantSize(size: TextSize | undefined): TextVariantSize;
export declare const textStyles: (props?: ({
    size?: "xs" | "sm" | "default" | "lg" | "display" | "none" | "3xl" | "2xl" | "xl" | "md2" | "sm2" | "xs2" | null | undefined;
    bold?: boolean | null | undefined;
    black?: boolean | null | undefined;
    gray?: boolean | null | undefined;
} & import("class-variance-authority/types").ClassProp) | undefined) => string;
