import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
export function IconCircle({ icon, className, ...props }) {
    return (_jsx("span", { className: cn("flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-light text-lg text-primary", className), ...props, children: icon }));
}
