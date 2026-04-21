import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { defaultIconStrokeWidth, iconPixelSizes, } from "./icon.shared";
export function Icon({ icon: Glyph, size = "default", className, strokeWidth = defaultIconStrokeWidth, ...props }) {
    return (_jsx(Glyph, { size: iconPixelSizes[size], strokeWidth: strokeWidth, className: cn("shrink-0", className), ...props }));
}
