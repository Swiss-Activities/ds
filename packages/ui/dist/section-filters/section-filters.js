"use client";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Button } from "../button";
import { Icon } from "../icon/icon";
import { ChevronDown, Filter, X } from "../icons";
import { Sheet } from "../sheet";
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
export function SectionFilters({ className, drawerPlacement = "bottom", filterButtonLabel = "Filter", desktopDrawer, desktopDrawerFrom = "lg", drawerTitle = "Filter", drawerContent, items, ...props }) {
    const [presented, setPresented] = useState(false);
    const aboveDesktopDrawerBreakpoint = useMinBreakpoint(desktopDrawerFrom);
    const resolvedPlacement = desktopDrawer && aboveDesktopDrawerBreakpoint
        ? desktopDrawer
        : drawerPlacement;
    const isSideDrawer = resolvedPlacement === "left" || resolvedPlacement === "right";
    const sideDrawerContentClassName = cn("grid h-dvh min-h-dvh max-h-none grid-rows-[min-content_1fr] overflow-hidden bg-white", resolvedPlacement === "left" &&
        "w-[min(92vw,420px)] max-w-[min(92vw,420px)] rounded-none", resolvedPlacement === "right" &&
        "w-[min(92vw,420px)] max-w-[min(92vw,420px)] rounded-none");
    return (_jsxs(_Fragment, { children: [_jsx("section", { className: cn(className), ...props, children: _jsx("div", { className: "no-scrollbar overflow-x-auto py-2 [scrollbar-width:none]", children: _jsxs("div", { className: "flex min-w-max items-center gap-2", children: [_jsx(Button, { type: "pill", text: filterButtonLabel, icon: _jsx(Icon, { icon: Filter, size: "xs" }), className: "shrink-0 whitespace-nowrap !bg-white lg:hover:!border-blue lg:hover:!bg-white lg:hover:!text-blue", onClick: () => setPresented(true) }), items.map((item) => (_jsx(Button, { type: "filter", text: item.label, iconRight: item.kind === "disclosure" ? (_jsx(Icon, { icon: ChevronDown, size: "xs" })) : item.kind === "removable" ? (_jsx(Icon, { icon: X, size: "xs" })) : null, className: "shrink-0 whitespace-nowrap" }, item.id)))] }) }) }), _jsx(Sheet.Root, { presented: presented, onPresentedChange: setPresented, children: _jsx(Sheet.Portal, { children: _jsxs(Sheet.View, { contentPlacement: resolvedPlacement, className: cn(isSideDrawer && "inset-0"), children: [_jsx(Sheet.Backdrop, {}), _jsx(Sheet.CloseButton, {}), _jsxs(Sheet.Content, { className: cn("grid grid-rows-[min-content_1fr] overflow-hidden bg-white", isSideDrawer && sideDrawerContentClassName), children: [_jsxs(Sheet.Header, { className: cn("pb-4", isSideDrawer ? "pt-5" : "pt-2"), children: [!isSideDrawer ? _jsx(Sheet.Handle, {}) : null, _jsx(Sheet.Title, { className: cn("text-xl font-semibold text-gray-950", !isSideDrawer && "mt-3"), children: drawerTitle })] }), _jsx(Sheet.ScrollRoot, { className: "min-h-0 h-full", children: _jsx(Sheet.ScrollView, { className: "min-h-0 h-full", children: _jsx(Sheet.ScrollContent, { className: "py-3", children: drawerContent ?? (_jsx("div", { className: "grid gap-2", children: items.map((item) => (_jsx("div", { className: "rounded-xl border border-solid border-gray-200 bg-white px-4 py-3", children: _jsx(Text, { bold: true, black: true, children: item.label }) }, item.id))) })) }) }) })] })] }) }) })] }));
}
