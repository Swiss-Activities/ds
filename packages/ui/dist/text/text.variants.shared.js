import { cva } from "class-variance-authority";
export const textVariantSizes = [
    "3xl",
    "2xl",
    "xl",
    "lg",
    "default",
    "md2",
    "display",
    "sm",
    "sm2",
    "xs",
    "xs2",
    "none",
];
export function resolveTextVariantSize(size) {
    if (size === false) {
        return "none";
    }
    return size ?? "sm";
}
const smBaseTextStyles = "text-[14px] leading-relaxed text-gray-700 lg:text-[15px] lg:leading-relaxed";
export const textStyles = cva("break-words", {
    variants: {
        size: {
            "3xl": "text-[24px] xs:text-[30px] text-black !leading-snug font-bold md:text-[36px] lg:text-[48px]",
            "2xl": "text-[20px] xs:text-[24px] text-black !leading-snug font-bold md:text-[30px] lg:text-[36px]",
            xl: "text-[18px] xs:text-[20px] text-black !leading-snug font-bold md:text-[24px] lg:text-[30px]",
            lg: "text-black font-semibold text-[17px] sm:text-[20px] lg:text-[24px]",
            default: "text-black font-semibold leading-snug text-[16px] xs:text-[18px]",
            md2: "text-black font-semibold leading-snug text-[16px] lg:text-[18px]",
            display: `${smBaseTextStyles} lg:!text-[16px] lg:!leading-relaxed`,
            sm: smBaseTextStyles,
            sm2: `${smBaseTextStyles} lg:!text-[14px]`,
            xs: `${smBaseTextStyles} !text-[12px]`,
            xs2: "!text-[11px] !leading-tight relative -top-0.5",
            none: smBaseTextStyles,
        },
        bold: {
            true: "",
            false: "",
        },
        black: {
            true: "!text-black",
            false: "",
        },
        gray: {
            true: "!text-gray-500",
            false: "",
        },
    },
    compoundVariants: [
        {
            size: "sm",
            bold: true,
            class: "font-semibold",
        },
        {
            size: "none",
            bold: true,
            class: "font-semibold",
        },
    ],
    defaultVariants: {
        size: "sm",
        bold: false,
        black: false,
        gray: false,
    },
});
