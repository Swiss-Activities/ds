"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Sheet, Scroll } from "@silk-hq/components";
import { Button } from "../button/button";
import { Icon } from "../icon/icon";
import { X } from "../icons";
import { cn } from "../utils/cn";
export const sheetInsetXClassName = "px-4 lg:px-6";
export const Handle = React.forwardRef(({ className, ...restProps }, ref) => {
    return (_jsx(Sheet.Handle, { className: cn("h-1.5 w-12 cursor-pointer rounded-full border-0 bg-gray-300", className), ...restProps, ref: ref }));
});
Handle.displayName = "Sheet.Handle";
export const Backdrop = React.forwardRef(({ className, ...restProps }, ref) => {
    return (_jsx(Sheet.Backdrop, { className: cn("bg-black backdrop-blur-[2px]", className), travelAnimation: { opacity: [0, 0.6] }, ...restProps, ref: ref }));
});
Backdrop.displayName = "Sheet.Backdrop";
export function CloseButton({ label = "Close" }) {
    return (_jsx("div", { className: "pointer-events-none absolute inset-0 z-10 flex items-start justify-end", children: _jsx(Sheet.Trigger, { action: "dismiss", asChild: true, children: _jsx(Button, { type: "transparent", icon: _jsx(Icon, { icon: X, size: "sm" }), text: label, className: "pointer-events-auto !min-h-[40px] !border-none !text-white gap-1.5 hover:!bg-transparent focus-visible:!outline-white" }) }) }));
}
export const Header = React.forwardRef(({ children, className, ...restProps }, ref) => {
    return (_jsx("div", { className: cn(sheetInsetXClassName, className), ...restProps, ref: ref, children: children }));
});
Header.displayName = "Sheet.Header";
export const Content = React.forwardRef(({ children, className, ...restProps }, ref) => {
    return (_jsx(Sheet.Content, { className: cn("box-border h-[calc(100%-40px)] max-w-[800px] overflow-hidden rounded-t-3xl bg-white", className), ...restProps, ref: ref, children: children }));
});
Content.displayName = "Sheet.Content";
export const View = React.forwardRef(({ children, className, ...restProps }, ref) => {
    return (_jsx(Sheet.View, { className: cn("fixed inset-0 top-0 z-[200] h-[calc(100dvh+60px)]", className), swipeOvershoot: false, nativeEdgeSwipePrevention: true, ...restProps, ref: ref, children: children }));
});
View.displayName = "Sheet.View";
export const ScrollRoot = React.forwardRef(({ children, ...restProps }, ref) => {
    return (_jsx(Scroll.Root, { ...restProps, ref: ref, children: children }));
});
ScrollRoot.displayName = "Sheet.ScrollRoot";
export const ScrollView = React.forwardRef(({ children, className, ...restProps }, ref) => {
    return (_jsx(Scroll.View, { className: cn("min-h-0", className), scrollGestureTrap: { yEnd: true }, safeArea: "layout-viewport", onScrollStart: { dismissKeyboard: true }, ...restProps, ref: ref, children: children }));
});
ScrollView.displayName = "Sheet.ScrollView";
export const ScrollContent = React.forwardRef(({ children, className, ...restProps }, ref) => {
    return (_jsx(Scroll.Content, { className: cn(sheetInsetXClassName, className), ...restProps, ref: ref, children: children }));
});
ScrollContent.displayName = "Sheet.ScrollContent";
export const Portal = Sheet.Portal;
export const Trigger = Sheet.Trigger;
export const Outlet = Sheet.Outlet;
export const Title = Sheet.Title;
export const Description = Sheet.Description;
export const Root = React.forwardRef(({ children, ...restProps }, ref) => {
    return (_jsx(Sheet.Root, { license: "non-commercial", ...restProps, ref: ref, children: children }));
});
Root.displayName = "Sheet.Root";
