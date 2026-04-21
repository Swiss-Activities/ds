"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { skeletonContainerStyles, skeletonItemStyles, } from "./skeleton.variants.shared";
export function Skeleton({ loading, full = false, size = "sm", amount = 2, className, classNameItems, ...props }) {
    const [fadeOut, setFadeOut] = useState(false);
    useEffect(() => {
        if (!loading) {
            setFadeOut(true);
            const timer = setTimeout(() => { }, 500);
            return () => clearTimeout(timer);
        }
    }, [loading]);
    return (_jsx("span", { className: cn(skeletonContainerStyles({ full, fadeOut }), className), ...props, children: Array.from({ length: full ? 1 : amount }).map((_, index) => (_jsx("span", { className: cn(skeletonItemStyles({ size, full }), classNameItems), style: {
                background: "linear-gradient(90deg, #fafafa, #e4e4e7, #fafafa)",
                backgroundSize: "200% 100%",
            } }, `skeleton-${index}`))) }));
}
