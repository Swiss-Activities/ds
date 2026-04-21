import { jsx as _jsx } from "react/jsx-runtime";
import { Skeleton } from "../skeleton";
import { cn } from "../utils/cn";
export function Header({ children, className, loading, ...props }) {
    return (_jsx("header", { className: cn("fixed inset-x-0 top-0 z-50 flex h-[var(--h-header)] items-center justify-between border-b border-l-0 border-r-0 border-t-0 border-solid border-gray-200 bg-white px-4 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] backdrop-blur-md", className), ...props, children: loading ? (_jsx(Skeleton, { loading: true, amount: 1, size: "xs", className: "w-full" })) : (children) }));
}
Header.Left = function HeaderLeft({ children, className, ...props }) {
    return (_jsx("div", { className: cn("flex items-center gap-2", className), ...props, children: children }));
};
Header.Right = function HeaderRight({ children, className, ...props }) {
    return (_jsx("div", { className: cn("flex items-center gap-2", className), ...props, children: children }));
};
