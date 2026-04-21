import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { Card } from "../card";
import { Text } from "../text";
import { Rating } from "../rating";
import { ActivityCardSkeletonContent } from "./activity-card-skeleton";
export function ActivityCard({ image, title, score, reviewCount, priceLabel, price, loading = false, className, render, ...props }) {
    return (_jsxs(Card, { noPadding: true, render: render, className: cn("group relative flex h-full w-full flex-col overflow-hidden lg:hover:shadow-md", className), ...props, children: [_jsx("div", { className: "aspect-[4/3] w-full shrink-0 overflow-hidden [&_img]:h-full [&_img]:w-full [&_img]:object-cover", children: image }), _jsxs("div", { className: "flex flex-1 flex-col gap-1 p-3.5 pt-4", children: [_jsx(Text, { as: "h3", size: "default", bold: true, className: "!text-base !leading-snug", children: title }), score > 0 && (_jsx(Rating, { score: score, count: reviewCount, size: "sm", className: "mt-1" })), _jsxs("div", { className: "mt-auto", children: [_jsx("div", { className: "-mx-3.5 mb-3 mt-2 h-px bg-gray-200" }), _jsxs("div", { className: "flex items-baseline justify-between", children: [_jsx(Text, { size: "xs", gray: true, className: "font-medium", children: priceLabel }), _jsx(Text, { size: "default", bold: true, children: price })] })] })] }), loading ? (_jsx("div", { className: "absolute inset-0 z-10 bg-white", children: _jsx(ActivityCardSkeletonContent, {}) })) : null] }));
}
