import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { badgeStyles } from "./badge.variants.shared";
export function Badge({ children = null, className, variant = "overlay", ...props }) {
    return (_jsx("span", { className: cn(badgeStyles({ variant }), className), ...props, children: children ?? "" }));
}
