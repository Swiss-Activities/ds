import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { createElement } from "react";
import { cn } from "../utils/cn";
import { Hero } from "../hero";
import { Icon } from "../icon/icon";
import { ChevronLeft } from "../icons";
import { Slider } from "../slider";
import { Text } from "../text";
import { Breadcrumbs } from "../breadcrumbs";
function BackLink({ label, href, onClick, }) {
    const tag = href ? "a" : "button";
    return createElement(tag, {
        className: "flex cursor-pointer items-center gap-2 bg-transparent p-0 text-white no-underline",
        ...(href ? { href } : { type: "button", onClick }),
    }, _jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full border border-solid border-white bg-white/70 backdrop-blur-sm", children: _jsx(Icon, { icon: ChevronLeft, size: "sm", className: "text-blue" }) }), _jsx("span", { className: "text-sm font-medium text-white", children: label }));
}
function GalleryGrid({ images, backLabel, backHref, onBack, }) {
    const thumbs = images.slice(1, 5);
    return (_jsxs("div", { className: "hidden h-[360px] grid-cols-4 grid-rows-2 gap-1 overflow-hidden rounded-lg md:grid", children: [_jsxs("div", { className: "relative col-span-2 row-span-2 overflow-hidden rounded-s-lg", children: [_jsx(Slider, { slides: images, loop: true, className: "absolute inset-0" }), backLabel && (_jsxs(_Fragment, { children: [_jsx("div", { className: "pointer-events-none absolute inset-x-0 top-0 z-20 h-20 rounded-tl-lg bg-gradient-to-b from-black/40 to-transparent" }), _jsx("div", { className: "absolute left-3 top-3 z-30", children: _jsx(BackLink, { label: backLabel, href: backHref, onClick: onBack }) })] }))] }), thumbs.map((img, i) => (_jsx("div", { className: cn("relative overflow-hidden [&_img]:absolute [&_img]:inset-0 [&_img]:h-full [&_img]:w-full [&_img]:object-cover", i === 1 && "rounded-tr-lg", i === 3 && "rounded-br-lg"), children: img }, i)))] }));
}
export function SectionProduct({ title, images, breadcrumbs, backLabel, backHref, onBack, children, className, ...props }) {
    return (_jsxs("section", { className: cn(className), ...props, children: [_jsx("div", { className: "-mx-2 md:hidden", children: _jsx(Hero, { images: images, backLabel: backLabel, backHref: backHref, onBack: onBack }) }), images && images.length > 0 && (_jsx(GalleryGrid, { images: images, backLabel: backLabel, backHref: backHref, onBack: onBack })), breadcrumbs && breadcrumbs.length > 0 && (_jsx(Breadcrumbs, { items: breadcrumbs, ignoreLast: true, className: "mt-3 lg:mt-4" })), title && (_jsx(Text, { as: "h1", size: "xl", className: "mt-3 lg:mt-6", children: title })), children] }));
}
