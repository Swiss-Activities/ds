"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useId, useState, } from "react";
import { Icon } from "../icon/icon";
import { Check } from "../icons";
import { Text } from "../text";
import { cn } from "../utils/cn";
function renderTitle(title) {
    if (typeof title === "string" || typeof title === "number") {
        return (_jsx(Text, { as: "span", size: "sm", className: "relative top-px !text-sm !text-gray-900", children: title }));
    }
    return title;
}
export function Checkbox({ className, controlled = true, disabled = false, help, name, onChange = () => { }, required = false, selected = false, title, id, ...props }) {
    const generatedId = useId();
    const [value, setValue] = useState(selected);
    const resolvedId = id ?? generatedId;
    useEffect(() => {
        if (controlled) {
            setValue(selected);
        }
    }, [controlled, selected]);
    return (_jsxs("label", { htmlFor: resolvedId, className: cn("flex cursor-pointer items-start gap-2.5", disabled && "pointer-events-none cursor-not-allowed opacity-50", className), children: [_jsx("input", { ...props, id: resolvedId, name: name, disabled: disabled, required: required, type: "checkbox", checked: value, onChange: (event) => {
                    const nextValue = event.target.checked;
                    setValue(nextValue);
                    onChange(nextValue);
                }, className: "sr-only" }), _jsx("span", { "aria-hidden": "true", className: cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border border-solid transition", value
                    ? "border-primary bg-primary text-white"
                    : "border-gray-500 bg-white text-transparent", !disabled && "hover:border-gray-700"), children: _jsx(Icon, { icon: Check, size: "xs", strokeWidth: 2.4 }) }), _jsxs("span", { className: "flex min-w-0 flex-1 flex-col", children: [title ? renderTitle(title) : null, help ? (_jsx(Text, { as: "span", size: "xs", gray: true, className: "mt-1", children: help })) : null] })] }));
}
