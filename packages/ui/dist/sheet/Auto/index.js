"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { Sheet as SilkSheet, AutoFocusTarget } from "@silk-hq/components";
import { Handle as SharedHandle, Header as SharedHeader, Backdrop as SharedBackdrop, ScrollRoot as SharedScrollRoot, ScrollView as SharedScrollView, ScrollContent as SharedScrollContent, CloseButton, Portal, Trigger, Outlet, Title, Description, } from "../shared";
import { cn } from "../../utils/cn";
const Root = React.forwardRef(({ children, ...restProps }, ref) => {
    return (_jsx(SilkSheet.Root, { license: "non-commercial", ...restProps, ref: ref, children: children }));
});
Root.displayName = "Sheet.Root";
const View = React.forwardRef(({ children, className, ...restProps }, ref) => {
    return (_jsx(SilkSheet.View, { className: cn("fixed inset-x-0 bottom-0 z-[200]", className), swipeOvershoot: false, nativeEdgeSwipePrevention: true, ...restProps, ref: ref, children: children }));
});
View.displayName = "Sheet.View";
const Content = React.forwardRef(({ children, className, style, ...restProps }, ref) => {
    return (_jsx(SilkSheet.Content, { className: cn("max-h-[95dvh] rounded-t-3xl bg-white", className), style: {
            ...style,
            "--silk-default-height": "auto",
        }, ...restProps, ref: ref, children: children }));
});
Content.displayName = "Sheet.Content";
const Handle = React.forwardRef(({ className, ...restProps }, ref) => {
    return (_jsx(SharedHandle, { className: cn("mx-auto block", className), action: "dismiss", ...restProps, ref: ref }));
});
Handle.displayName = "Sheet.Handle";
export const Sheet = {
    Root,
    Portal,
    View,
    Backdrop: SharedBackdrop,
    Content,
    Trigger,
    Handle,
    Header: SharedHeader,
    CloseButton,
    Outlet,
    Title,
    Description,
    AutoFocusTarget,
    ScrollRoot: SharedScrollRoot,
    ScrollView: SharedScrollView,
    ScrollContent: SharedScrollContent,
};
