import type { LogoSize } from "./logo.types";
export type LogoDimensions = {
    width: number;
    height: number;
};
export declare function getLogoDimensions(size: LogoSize | undefined): LogoDimensions;
export declare function getLogoMarkup(size: LogoSize | undefined): string;
