import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Card } from "../card";
import { Skeleton } from "../skeleton";
import { cn } from "../utils/cn";
function ActivityCardSkeletonContent() {
    return (_jsxs(_Fragment, { children: [_jsx("div", { className: "aspect-[4/3] w-full shrink-0 overflow-hidden", children: _jsx(Skeleton, { loading: true, className: "h-full w-full !space-y-0", classNameItems: "!h-full !rounded-none", amount: 1 }) }), _jsxs("div", { className: "flex flex-1 flex-col gap-3 p-3.5 pt-4", children: [_jsx(Skeleton, { loading: true, className: "!space-y-2", classNameItems: "!h-5 first:!w-[78%] last:!w-[56%]", amount: 2 }), _jsx(Skeleton, { loading: true, className: "!space-y-0", classNameItems: "!h-4 !w-[42%]", amount: 1 }), _jsxs("div", { className: "mt-auto", children: [_jsx("div", { className: "-mx-3.5 mb-3 mt-2 h-px bg-gray-200" }), _jsxs("div", { className: "flex items-center justify-between gap-4", children: [_jsx(Skeleton, { loading: true, className: "!space-y-0", classNameItems: "!h-4 !w-20", amount: 1 }), _jsx(Skeleton, { loading: true, className: "!space-y-0", classNameItems: "!h-5 !w-16", amount: 1 })] })] })] })] }));
}
export function ActivityCardSkeleton({ className, ...props }) {
    return (_jsx(Card, { noPadding: true, className: cn("flex h-full w-full flex-col overflow-hidden", className), ...props, children: _jsx(ActivityCardSkeletonContent, {}) }));
}
export { ActivityCardSkeletonContent };
