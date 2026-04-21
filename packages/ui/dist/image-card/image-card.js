import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { cn } from "../utils/cn";
export function ImageCard({ image, button, children, className, ...props }) {
    return (_jsxs("div", { className: cn("relative flex flex-col justify-between overflow-hidden rounded-lg px-6 py-8", className), ...props, children: [_jsxs("div", { className: "absolute inset-0 [&_img]:absolute [&_img]:h-full [&_img]:w-full [&_img]:object-cover", children: [image, _jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-blue" })] }), _jsxs("div", { className: "relative z-10 flex flex-col gap-8", children: [children, button] })] }));
}
