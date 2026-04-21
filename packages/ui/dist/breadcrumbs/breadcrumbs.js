import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../icon/icon";
import { ChevronRight } from "../icons";
import { cn } from "../utils/cn";
export function Breadcrumbs({ items, white = false, ignoreLast = false, gradient = false, className, ...props }) {
    return (_jsxs("nav", { className: cn("relative", className), ...props, children: [gradient && (_jsx("div", { className: cn("pointer-events-none absolute end-0 top-0 z-10 h-full w-12 bg-gradient-to-l", {
                    "from-white": gradient === "white",
                    "from-gray-50": gradient === "gray",
                }) })), _jsxs("div", { className: "no-scrollbar flex max-w-full overflow-y-auto pe-10", children: [items.map((item, index) => {
                        const isLast = ignoreLast && items.length === index + 1;
                        return (_jsxs("span", { className: "flex items-center", children: [_jsx("a", { href: item.href, tabIndex: isLast ? -1 : 0, className: cn("focus-text whitespace-nowrap text-xs font-medium lg:text-sm lg:hover:underline", {
                                        "pointer-events-none text-gray-500": isLast && !white,
                                        "pointer-events-none text-white/70": isLast && white,
                                        "text-gray-700": !isLast && !white,
                                        "text-white": !isLast && white,
                                    }), children: item.label }), items.length > index + 1 && (_jsx("span", { className: cn("flex items-center px-1.5", {
                                        "text-white/50": white,
                                        "text-gray-500": !white,
                                    }), children: _jsx(Icon, { icon: ChevronRight, size: "xs", strokeWidth: 2 }) }))] }, `${item.href}-${item.label}-${index}`));
                    }), _jsx("div", { className: "h-full min-w-[70px] lg:hidden" })] })] }));
}
