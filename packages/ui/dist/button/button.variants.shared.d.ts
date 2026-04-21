import type { ButtonSizeToken, ButtonVariant } from "./button.types";
export type SharedButtonVariantStyles = {
    container: string;
    text: string;
    webInteraction: string;
};
export type SharedButtonSizeStyles = {
    container: string;
    text: string;
};
export declare const sharedButtonBaseStyles: {
    readonly container: "group inline-flex h-[max-content] max-h-max min-h-[48px] cursor-pointer appearance-none items-center justify-center rounded-lg border-solid px-3.5 py-2.5 text-center transition duration-100 ease-in";
    readonly text: "text-sm font-medium";
};
export declare const sharedButtonDisabledStyles: {
    readonly container: "pointer-events-none border-gray-300 bg-gray-300";
};
export declare const sharedButtonVariantStyles: Record<ButtonVariant, SharedButtonVariantStyles>;
export declare const sharedButtonSizeStyles: Record<ButtonSizeToken, SharedButtonSizeStyles>;
