"use client";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useMemo, useState, } from "react";
import { Button } from "../button";
import { Checkbox } from "../checkbox";
import { Icon } from "../icon/icon";
import { ChevronDown, Plus } from "../icons";
import { Text } from "../text";
import { cn } from "../utils/cn";
const breakpointMinWidths = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
};
function useMinBreakpoint(breakpoint) {
    const [matches, setMatches] = useState(false);
    useEffect(() => {
        if (!breakpoint) {
            setMatches(false);
            return;
        }
        const mediaQuery = window.matchMedia(`(min-width: ${breakpointMinWidths[breakpoint]}px)`);
        const update = () => {
            setMatches(mediaQuery.matches);
        };
        update();
        mediaQuery.addEventListener("change", update);
        return () => {
            mediaQuery.removeEventListener("change", update);
        };
    }, [breakpoint]);
    return matches;
}
function FilterCheckboxLabel({ label, count, }) {
    return (_jsxs("span", { className: "relative top-[2px] inline-block text-sm leading-5 text-gray-900", children: [_jsx("span", { className: "me-2 inline-block", children: label }), typeof count === "number" ? (_jsx("span", { className: "relative -top-px inline-flex h-max rounded bg-blue/10 px-1 py-1 text-[11px] leading-none text-blue", children: count })) : null] }));
}
function FilterCheckboxList({ items, lessLabel, maxVisible, moreLabel, onItemToggle, }) {
    const [isAll, setIsAll] = useState(false);
    const [selectedById, setSelectedById] = useState({});
    useEffect(() => {
        setSelectedById(Object.fromEntries(items.map((item) => [item.id, Boolean(item.selected)])));
    }, [items]);
    const visibleItems = items.slice(0, isAll ? items.length : maxVisible);
    return (_jsxs("div", { className: "flex flex-col", children: [visibleItems.map((item) => (_jsx(Checkbox, { title: _jsx(FilterCheckboxLabel, { label: item.label, count: item.count }), selected: Boolean(selectedById[item.id]), disabled: item.disabled, className: "py-1", onChange: (nextValue) => {
                    setSelectedById((current) => ({
                        ...current,
                        [item.id]: nextValue,
                    }));
                    onItemToggle?.(item.id, nextValue);
                } }, item.id))), items.length > maxVisible ? (_jsx(Button, { type: "link", className: "mt-1 !border-none !bg-transparent !p-0 !text-left !text-gray-900", icon: !isAll ? _jsx(Icon, { icon: Plus, size: "xs" }) : null, text: isAll ? lessLabel : moreLabel(items.length - maxVisible), onClick: () => setIsAll((current) => !current) })) : null] }));
}
export function FilterCheckboxGroup({ className, inlineFrom, items, lessLabel = "Show less", maxVisible = 5, moreLabel = (remaining) => `Show ${remaining} more`, onItemToggle, title, type = "inline", ...props }) {
    const [open, setOpen] = useState(false);
    const shouldRenderInline = useMinBreakpoint(inlineFrom);
    const content = useMemo(() => (_jsx(FilterCheckboxList, { items: items, lessLabel: lessLabel, maxVisible: maxVisible, moreLabel: moreLabel, onItemToggle: onItemToggle })), [items, lessLabel, maxVisible, moreLabel, onItemToggle]);
    if (type === "accordion" && !shouldRenderInline) {
        return (_jsxs("div", { className: cn("border-b border-solid border-gray-200", className), ...props, children: [_jsxs("button", { type: "button", className: "flex w-full items-center justify-between gap-4 px-4 py-4 text-left", onClick: () => setOpen((current) => !current), children: [_jsx(Text, { as: "span", size: "lg", className: "!text-[17px]", children: title }), _jsx(Icon, { icon: ChevronDown, size: "default", className: cn("text-gray-400 transition", open && "rotate-180") })] }), open ? _jsx("div", { className: "px-4 pb-4", children: content }) : null] }));
    }
    return (_jsxs("div", { className: cn("space-y-2", type === "accordion" &&
            inlineFrom &&
            shouldRenderInline &&
            "py-3 first:pt-0", className), ...props, children: [_jsx(Text, { as: "h3", bold: true, black: true, children: title }), content] }));
}
