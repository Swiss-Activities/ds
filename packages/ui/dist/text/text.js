import { createElement, forwardRef } from "react";
import { cn } from "../utils/cn";
import { resolveTextVariantSize, textStyles } from "./text.variants.shared";
export const Text = forwardRef(function Text({ children = null, className, size = "sm", as = "p", bold = false, black = false, gray = false, ...props }, ref) {
    const normalizedSize = resolveTextVariantSize(size);
    return createElement(as, {
        ...props,
        ref: ref,
        className: cn(textStyles({
            size: normalizedSize,
            bold,
            black,
            gray,
        }), className),
    }, children ?? "");
});
