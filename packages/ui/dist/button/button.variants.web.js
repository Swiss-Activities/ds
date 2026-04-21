import { cva } from "class-variance-authority";
import { buttonSizes, buttonVariants } from "./button.types";
import { sharedButtonBaseStyles, sharedButtonDisabledStyles, sharedButtonSizeStyles, sharedButtonVariantStyles, } from "./button.variants.shared";
const webButtonVariantStyles = Object.fromEntries(buttonVariants.map((variant) => [
    variant,
    `${sharedButtonVariantStyles[variant].container} ${sharedButtonVariantStyles[variant].text} ${sharedButtonVariantStyles[variant].webInteraction}`.trim(),
]));
const webButtonSizeStyles = Object.fromEntries(buttonSizes.map((size) => [
    size,
    `${sharedButtonSizeStyles[size].container} ${sharedButtonSizeStyles[size].text}`.trim(),
]));
export const buttonStyles = cva(`${sharedButtonBaseStyles.container} ${sharedButtonBaseStyles.text} transition-colors focus-visible:outline-2 focus-visible:outline-offset-2`, {
    variants: {
        variant: webButtonVariantStyles,
        size: webButtonSizeStyles,
        disabled: {
            true: sharedButtonDisabledStyles.container,
            false: "",
        },
    },
    defaultVariants: {
        variant: "secondary",
        size: "md",
        disabled: false,
    },
});
