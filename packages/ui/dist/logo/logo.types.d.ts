import type { ReactNode } from "react";
export declare const logoSizes: readonly ["sm", "default"];
export type LogoSize = (typeof logoSizes)[number];
export type BaseLogoProps = {
    size?: LogoSize;
    className?: string;
    children?: ReactNode;
};
