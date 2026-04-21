"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { cn } from "../utils/cn";
import { Hero } from "../hero";
import { Weather } from "../weather";
export function SectionHero({ title, image, overlay, search, variant = "localized", days, unit, selected, onSelect, tabs, selectedTabId, onSelectTab, className, ...props }) {
    return (_jsx("section", { className: cn(className), ...props, children: _jsx(Hero, { title: title, image: image, overlay: overlay, search: search, variant: variant, tabs: tabs, selectedTabId: selectedTabId, onSelectTab: onSelectTab, children: variant === "localized" && days ? (_jsx(Weather, { days: days, unit: unit, selected: selected, onSelect: onSelect })) : null }) }));
}
