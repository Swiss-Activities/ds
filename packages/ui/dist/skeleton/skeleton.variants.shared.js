import { cva } from "class-variance-authority";
export const skeletonContainerStyles = cva("skeleton pointer-events-none flex flex-col space-y-2 transition duration-100 ease-in", {
    variants: {
        full: {
            true: "absolute start-0 top-0 h-full w-full",
            false: "",
        },
        fadeOut: {
            true: "absolute opacity-0",
            false: "",
        },
    },
    defaultVariants: {
        full: false,
        fadeOut: false,
    },
});
export const skeletonItemStyles = cva("animate-shimmer flex w-full", {
    variants: {
        size: {
            "2xs": "h-4",
            xs: "h-8",
            sm: "h-16",
            md: "h-24",
            lg: "h-32",
        },
        full: {
            true: "h-full rounded",
            false: "rounded-lg",
        },
    },
    defaultVariants: {
        size: "sm",
        full: false,
    },
});
