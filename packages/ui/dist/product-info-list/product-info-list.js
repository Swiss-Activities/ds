import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement } from "react";
import { Button } from "../button";
import { Card } from "../card";
import { Text } from "../text";
import { cn } from "../utils/cn";
function ContentText({ children, className, gray = false, }) {
    if (typeof children === "string" || typeof children === "number") {
        return (_jsx(Text, { as: "span", size: "sm", gray: gray, className: cn("block !leading-snug", className), children: children }));
    }
    return _jsx(_Fragment, { children: children });
}
function ProductInfoListContent({ title, subtitle, details, }) {
    return (_jsxs("div", { className: "min-w-0", children: [_jsx(Text, { as: "span", size: "sm", black: true, className: "block !text-sm !font-medium !leading-tight lg:!text-xs", children: title }), subtitle ? (_jsx("div", { className: "mt-0.5", children: _jsx(ContentText, { gray: true, className: "!text-sm !leading-tight !text-gray-500 lg:!text-xs", children: subtitle }) })) : null, details ? (_jsx("div", { className: "mt-0.5", children: _jsx(ContentText, { gray: true, className: "!text-sm !leading-tight !text-gray-500 lg:!text-xs", children: details }) })) : null] }));
}
function ProductInfoListItemRow({ icon, title, subtitle, details, href, onClick, }) {
    const tag = href ? "a" : "button";
    return createElement(tag, {
        className: "flex w-full items-center gap-4 bg-transparent py-4 text-left text-current no-underline",
        ...(href ? { href } : { type: "button", onClick }),
    }, _jsxs(_Fragment, { children: [_jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-solid border-gray-200 bg-white text-gray-900 shadow-sm [&_svg]:h-5 [&_svg]:w-5", children: icon }), _jsx("div", { className: "min-w-0 flex-1", children: _jsx(ProductInfoListContent, { title: title, subtitle: subtitle, details: details }) })] }));
}
function ProductInfoListItemCard({ icon, title, subtitle, details, href, onClick, }) {
    return (_jsx(Card, { noPadding: true, className: "h-full rounded-2xl", render: ({ className, children }) => {
            const buttonProps = href
                ? { as: "a", href }
                : onClick
                    ? { onClick }
                    : { as: "div" };
            return (_jsx(Button, { variant: "ghost", className: `${className} !h-full !justify-start !text-left !p-3`, ...buttonProps, children: children }));
        }, children: _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "flex shrink-0 text-gray-700 [&_svg]:h-7 [&_svg]:w-7", children: icon }), _jsx(ProductInfoListContent, { title: title, subtitle: details ?? subtitle })] }) }));
}
export function ProductInfoList({ items, className, ...props }) {
    return (_jsxs("div", { className: cn("w-full", className), ...props, children: [_jsx("div", { className: "divide-y divide-solid divide-gray-200 border-y border-solid border-gray-200 lg:hidden", children: items.map((item, index) => (_jsx(ProductInfoListItemRow, { ...item }, item.id ?? `${String(item.title)}-${index}`))) }), _jsx("div", { className: "hidden grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid lg:grid-cols-4 lg:gap-7", children: items.map((item, index) => (_jsx(ProductInfoListItemCard, { ...item }, item.id ?? `${String(item.title)}-${index}`))) })] }));
}
