import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import { ChevronDown } from "../icons";
import { Text } from "../text";
export function Accordion({ items, className, ...props }) {
    return (_jsx("div", { className: cn("divide-y divide-gray-200 border-y border-solid border-gray-200", className), ...props, children: items.map((item, i) => (_jsxs("details", { className: "group", children: [_jsxs("summary", { className: "flex cursor-pointer list-none items-center justify-between py-4 [&::-webkit-details-marker]:hidden", children: [_jsx(Text, { as: "span", size: "lg", className: "!text-[17px]", children: item.title }), _jsx(Icon, { icon: ChevronDown, size: "default", className: "text-gray-400 transition group-open:rotate-180" })] }), _jsx("div", { className: "pb-4", children: item.content })] }, item.id ?? i))) }));
}
