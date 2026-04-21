import { jsx as _jsx } from "react/jsx-runtime";
import { Loader2 } from "../icons";
import { cn } from "../utils/cn";
const loaderSizes = {
    md: 30,
    sm: 24,
    xs: 20,
    base: 16,
};
function resolveColorClass(color) {
    if (!color || color.startsWith("#"))
        return null;
    if (color === "!current-color")
        return "text-current";
    return color;
}
function resolveColorStyle(color) {
    if (!color?.startsWith("#"))
        return undefined;
    return { color };
}
export function Loader({ color = "text-black", center = false, size = "md", }) {
    return (_jsx(Loader2, { "aria-hidden": "true", size: loaderSizes[size], style: resolveColorStyle(color), className: cn("animate-spin shrink-0", resolveColorClass(color), {
            "fixed end-0 start-0 mx-auto my-0": center,
        }) }));
}
