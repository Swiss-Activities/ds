import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement } from "react";
import { Icon } from "../icon/icon";
import { cn } from "../utils/cn";
import { ChevronLeft } from "../icons";
import { HorizontalScrollerRoot } from "../horizontal-scroller/horizontal-scroller.root";
import { HorizontalScrollerTrack } from "../horizontal-scroller/horizontal-scroller.track";
import { Text } from "../text";
import { Slider } from "../slider";
function BackLink({ label, href, onClick, }) {
    const tag = href ? "a" : "button";
    return createElement(tag, {
        className: "flex cursor-pointer items-center gap-2 bg-transparent p-0 text-white no-underline",
        ...(href ? { href } : { type: "button", onClick }),
    }, _jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full border border-solid border-white bg-white/70 backdrop-blur-sm", children: _jsx(Icon, { icon: ChevronLeft, size: "sm", className: "text-blue" }) }), _jsx("span", { className: "text-sm font-medium text-white", children: label }));
}
function HeroTabs({ tabs, selectedTabId, onSelectTab, }) {
    const activeId = selectedTabId ?? tabs[0]?.id;
    return (_jsx("div", { className: "absolute inset-x-0 bottom-0 z-20 px-2 sm:px-4 lg:px-6", children: _jsx(HorizontalScrollerRoot, { activeId: activeId, children: _jsx(HorizontalScrollerTrack, { className: "gap-0 overflow-x-auto px-0 sm:justify-center [&>*]:snap-none", children: tabs.map((tab) => {
                    const isActive = tab.id === activeId;
                    return (_jsx("li", { "data-id": tab.id, className: "list-none", children: _jsxs("button", { type: "button", onClick: () => onSelectTab?.(tab.id), className: cn("group relative flex min-h-[56px] w-max shrink-0 cursor-pointer flex-col items-center gap-1.5 whitespace-nowrap border-none bg-transparent px-3 pb-2 pt-2.5 text-xs text-white sm:flex-row sm:px-4 sm:text-base lg:px-8 lg:pb-3 lg:pt-3.5 lg:text-lg", isActive && "rounded-t-lg bg-white text-black"), children: [tab.icon ? (_jsx("span", { className: cn("flex shrink-0", isActive ? "text-blue" : "text-white"), children: isActive && tab.activeIcon ? tab.activeIcon : tab.icon })) : null, _jsx("span", { className: "relative mt-auto sm:mt-0 lg:top-px", children: tab.label })] }) }, tab.id));
                }) }) }) }));
}
export function Hero({ title, image, images, children, overlay, search, variant = "localized", tabs, selectedTabId, onSelectTab, backLabel, backHref, onBack, className, ...props }) {
    const isGallery = images && images.length > 0;
    const hasBack = !!backLabel;
    const isFallback = variant === "fallback";
    const hasTabs = isFallback && !!tabs?.length;
    const isLocalized = variant === "localized";
    const hasBottomFade = !!title || isFallback;
    const hasOverlayStack = !!overlay || !!search;
    const localizedMediaClassName = "h-[196px] sm:h-[228px] lg:h-[264px]";
    const localizedContentClassName = "h-[120px] sm:h-[132px] lg:h-[144px]";
    const fallbackMediaClassName = "h-[316px] sm:h-[360px] lg:h-[408px]";
    return (_jsxs("div", { className: cn("relative", className), ...props, children: [_jsxs("div", { className: "relative overflow-hidden bg-blue lg:rounded-lg", children: [_jsxs("div", { className: cn("relative w-full overflow-hidden", isLocalized && localizedMediaClassName, isFallback && fallbackMediaClassName), children: [_jsx("div", { className: "absolute inset-0 [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover", children: isGallery ? (_jsx(Slider, { slides: images, loop: true, className: "absolute inset-0" })) : (image) }), hasBack && (_jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 z-20 h-20 bg-gradient-to-b from-blue/50 to-transparent" })), isFallback ? (_jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-1/2 bg-gradient-to-b from-blue/55 to-transparent" })) : null, hasBottomFade && (_jsx("div", { className: cn("pointer-events-none absolute inset-x-0 bottom-0 z-10 h-1/2 bg-gradient-to-t to-transparent", isFallback ? "from-blue/75" : "from-blue") })), hasBack && (_jsx("div", { className: "absolute left-3 top-3 z-30", children: _jsx(BackLink, { label: backLabel, href: backHref, onClick: onBack }) })), title && (_jsx(Text, { as: "h2", size: "xl", className: "pointer-events-none absolute bottom-3 left-4 z-10 max-w-[90%] !text-white sm:left-6 lg:left-8", children: title })), hasTabs && tabs ? (_jsx(HeroTabs, { tabs: tabs, selectedTabId: selectedTabId, onSelectTab: onSelectTab })) : null] }), children && (_jsx("div", { className: cn(isLocalized
                            ? cn(localizedContentClassName, "flex items-center px-4 py-3 sm:px-6 sm:py-4 lg:px-8 lg:py-5")
                            : "p-4 sm:p-6 lg:p-8"), children: isLocalized ? _jsx("div", { className: "w-full", children: children }) : children }))] }), hasOverlayStack ? (_jsx("div", { className: cn("pointer-events-none absolute inset-0 z-40 flex justify-center px-4 sm:px-8 md:px-10 lg:px-12", isFallback
                    ? "items-start pt-12 lg:pt-16"
                    : "items-center py-6 sm:py-8 md:py-10 lg:py-12"), children: _jsxs("div", { className: cn("pointer-events-auto relative flex w-full max-w-5xl flex-col items-center justify-center", isFallback && search ? "gap-6 sm:gap-8" : "gap-0"), children: [overlay ? (_jsx("div", { className: "relative flex flex-col items-center justify-center", children: overlay })) : null, search ? (_jsx("div", { className: "flex w-full items-center justify-center", children: search })) : null] }) })) : null] }));
}
