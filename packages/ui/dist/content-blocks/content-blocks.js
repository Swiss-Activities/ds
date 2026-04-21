"use client";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { memo, useEffect, useMemo, useRef } from "react";
import { Icon } from "../icon/icon";
import { List } from "../icons";
import { cn } from "../utils/cn";
import { Text } from "../text";
import { Accordion } from "../accordion";
const BlockContent = memo(function BlockContent({ content, }) {
    if (typeof content === "string") {
        return (_jsx("div", { className: "prose-sa max-w-none", dangerouslySetInnerHTML: { __html: content } }));
    }
    return _jsx(_Fragment, { children: content });
});
const TocNav = memo(function TocNav({ items, tocTitle, }) {
    return (_jsxs("div", { className: "space-y-4", children: [_jsxs(Text, { as: "p", size: "default", bold: true, className: "flex items-center gap-2", children: [_jsx(Icon, { icon: List, size: "default", className: "text-primary" }), tocTitle] }), _jsx("ul", { className: "grid gap-3", children: items.map((item) => (_jsx("li", { children: _jsx("a", { href: `#${item.id}`, "data-id": item.id, className: "inline-block text-sm font-medium text-black transition duration-100 ease-in", children: item.title }) }, item.id))) })] }));
});
export const ContentBlocks = memo(function ContentBlocks({ items, tocTitle = "Inhaltsverzeichnis", className, ...props }) {
    const containerRef = useRef(null);
    useEffect(() => {
        const container = containerRef.current;
        if (!container)
            return;
        let ticking = false;
        const update = () => {
            const threshold = 100;
            const scrollPos = window.pageYOffset + threshold;
            let currentId = "";
            const headings = container.querySelectorAll("h2[id]");
            for (const heading of Array.from(headings)) {
                if (heading.offsetTop <= scrollPos) {
                    currentId = heading.id;
                }
                else {
                    break;
                }
            }
            container.querySelectorAll("[data-id]").forEach((el) => {
                if (el.getAttribute("data-id") === currentId) {
                    el.style.color = "var(--color-primary)";
                }
                else {
                    el.style.color = "";
                }
            });
        };
        const onScroll = () => {
            if (ticking)
                return;
            ticking = true;
            requestAnimationFrame(() => {
                update();
                ticking = false;
            });
        };
        window.addEventListener("scroll", onScroll, { passive: true });
        update();
        return () => window.removeEventListener("scroll", onScroll);
    }, [items]);
    const accordionItems = useMemo(() => items.map((item) => ({
        id: item.id,
        title: item.title,
        content: _jsx(BlockContent, { content: item.content }),
    })), [items]);
    return (_jsxs("div", { ref: containerRef, className: cn(className), ...props, children: [_jsx("div", { className: "lg:hidden", children: _jsx(Accordion, { items: accordionItems }) }), _jsxs("div", { className: "hidden grid-cols-3 gap-8 lg:grid xl:gap-16", children: [_jsx("div", { className: "col-span-2 flex flex-col gap-10", children: items.map((item) => (_jsxs("div", { children: [_jsx(Text, { id: item.id, as: "h2", size: "lg", className: "mb-4", children: item.title }), _jsx(BlockContent, { content: item.content })] }, item.id))) }), _jsx("div", { className: "sticky top-6 h-max max-h-[calc(100vh-48px)] overflow-y-auto rounded-lg border border-solid border-gray-200 p-6 shadow-sm", children: _jsx(TocNav, { items: items, tocTitle: tocTitle }) })] })] }));
});
