import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { Text } from "../text";
export function InfoBadge({ icon, title, subtitle, className, ...props }) {
    return (_jsxs("div", { className: cn("flex items-center gap-2", className), ...props, children: [_jsx("div", { className: "flex shrink-0 text-gray-700 [&_svg]:h-7 [&_svg]:w-7", children: icon }), _jsxs("div", { className: "flex flex-col", children: [_jsx(Text, { as: "span", size: "xs", black: true, bold: true, className: "!leading-tight", children: title }), subtitle && (_jsx(Text, { as: "span", size: "xs", gray: true, className: "!leading-tight", children: subtitle }))] })] }));
}
