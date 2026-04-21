import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { withFlowButtonSpacing } from "./flow.children";
import { flowStyles } from "./flow.variants.web";
export function Flow({ children = null, className, ...props }) {
    return (_jsx("div", { className: cn(flowStyles, className), ...props, children: withFlowButtonSpacing(children) }));
}
