import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { Text } from "../text";
export function HorizontalScrollerTitle({ children, className, ...props }) {
    return (_jsx(Text, { as: "h2", size: "lg", className: cn(className), ...props, children: children }));
}
