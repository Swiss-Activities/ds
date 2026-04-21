import { jsx as _jsx } from "react/jsx-runtime";
import { Skeleton } from "../skeleton";
import { cn } from "../utils/cn";
export function HeroSkeleton({ fill = false, className, ...props }) {
    return (_jsx("div", { className: cn("relative overflow-hidden bg-gray-100 lg:rounded-lg", fill ? "absolute inset-0" : "h-[316px] sm:h-[360px] lg:h-[408px]", className), ...props, children: _jsx(Skeleton, { loading: true, full: true, classNameItems: "!rounded-none lg:!rounded-lg" }) }));
}
