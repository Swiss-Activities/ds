import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { cardStyles } from "./card.variants.web";
export function Card({ children = null, className, elevation = "default", noPadding = false, render, ...props }) {
    const mergedClassName = cn(cardStyles({ elevation, noPadding }), className);
    if (render)
        return render({ className: mergedClassName, children });
    return (_jsx("div", { className: mergedClassName, ...props, children: children }));
}
