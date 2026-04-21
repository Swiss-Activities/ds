import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Text } from "../text";
import { cn } from "../utils/cn";
import { getLogoDimensions, getLogoMarkup } from "./logo.shared";
const encodedLogoSrc = {
    default: `data:image/svg+xml;utf8,${encodeURIComponent(getLogoMarkup("default"))}`,
    sm: `data:image/svg+xml;utf8,${encodeURIComponent(getLogoMarkup("sm"))}`,
};
export function Logo({ size = "default", className, alt = "Swiss Activities", children, ...props }) {
    const dimensions = getLogoDimensions(size);
    const src = size === "sm" ? encodedLogoSrc.sm : encodedLogoSrc.default;
    const img = (_jsx("img", { alt: alt, className: cn("inline-block shrink-0", !children && className), height: dimensions.height, src: src, width: dimensions.width, ...props }));
    if (!children)
        return img;
    return (_jsxs("span", { className: cn("inline-flex items-center gap-2", className), children: [img, _jsx(Text, { as: "span", size: "default", bold: true, black: true, children: children })] }));
}
