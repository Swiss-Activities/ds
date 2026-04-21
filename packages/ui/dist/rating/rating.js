import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Star, StarHalf } from "../icons";
import { cn } from "../utils/cn";
import { Text } from "../text";
import { defaultIconStrokeWidth, iconPixelSizes, } from "../icon/icon.shared";
const STAR_STROKE_WIDTH = defaultIconStrokeWidth;
const starPixelSizes = {
    xs: iconPixelSizes.sm,
    sm: iconPixelSizes.sm,
    default: iconPixelSizes.sm,
    md: iconPixelSizes.md,
    lg: iconPixelSizes.lg,
};
function StarSolid({ className, color, size, }) {
    return (_jsx(Star, { size: size, className: cn("inline-flex shrink-0", className), color: color, fill: color, strokeWidth: STAR_STROKE_WIDTH }));
}
function StarHalfSolid({ className, color, size, }) {
    return (_jsx(StarHalf, { size: size, className: cn("inline-flex shrink-0", className), color: color, fill: color, strokeWidth: STAR_STROKE_WIDTH }));
}
function Stars({ score, size, className, }) {
    return (_jsx("span", { className: cn("flex items-center space-x-0.5", className), children: [1, 2, 3, 4, 5].map((i) => {
            const isFull = score >= i;
            const isHalf = !isFull && score >= i - 0.5;
            return (_jsxs("span", { className: "relative flex", children: [_jsx(StarSolid, { size: size, color: isFull ? "#facc15" : "#d1d5db" }), isHalf && (_jsx(StarHalfSolid, { size: size, className: "absolute start-0 top-0", color: "#facc15" }))] }, i));
        }) }));
}
export function Rating({ score, count, size = "default", showScore = true, stacked = false, label, className, ...props }) {
    const isSm = size === "sm" || size === "xs";
    const starSize = starPixelSizes[size];
    if (stacked) {
        return (_jsxs("span", { className: cn("flex flex-col items-center", className), ...props, children: [_jsx(Text, { as: "span", size: "default", bold: true, className: "!leading-none", children: score.toFixed(1) }), _jsx(Stars, { score: score, size: starSize, className: "mt-1" })] }));
    }
    return (_jsxs("span", { className: cn("flex flex-wrap items-center", className), ...props, children: [showScore && (_jsx(Text, { as: "span", size: "xs", gray: true, className: "me-1.5 font-medium !text-gray-700", children: score.toFixed(1) })), isSm ? (_jsxs(Text, { as: "span", size: "xs", gray: true, className: "flex items-center font-medium !text-gray-700", children: [_jsx(StarSolid, { size: starSize, className: "relative -top-px", color: "#facc15" }), count != null && _jsxs(Text, { as: "span", size: "xs", gray: true, className: "ms-1 font-medium !text-gray-700", children: ["(", count, ")"] })] })) : (_jsxs(_Fragment, { children: [_jsx(Stars, { score: score, size: starSize, className: cn("relative -top-px me-2", { "me-0 w-max": size === "md" || size === "lg" }) }), label] }))] }));
}
