import React from "react";
import { Sheet as SilkSheet } from "@silk-hq/components";
import { CloseButton } from "../shared";
type SheetRootProps = React.ComponentPropsWithoutRef<typeof SilkSheet.Root>;
export declare const Sheet: {
    Root: React.ForwardRefExoticComponent<Omit<Omit<import("@silk-hq/components").SheetRootProps & React.RefAttributes<any>, "ref">, "license"> & {
        license?: SheetRootProps["license"];
    } & React.RefAttributes<any>>;
    Portal: {
        (props: import("@silk-hq/components").SheetPortalProps): React.ReactPortal | null;
        displayName: string;
    };
    View: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").SheetViewProps & React.RefAttributes<unknown>, "ref"> & React.RefAttributes<unknown>>;
    Backdrop: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").SheetBackdropProps & React.RefAttributes<unknown>, "ref"> & React.RefAttributes<unknown>>;
    Content: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").SheetContentProps & React.RefAttributes<unknown>, "ref"> & React.RefAttributes<unknown>>;
    Trigger: React.ForwardRefExoticComponent<import("@silk-hq/components").SheetTriggerProps & React.RefAttributes<unknown>>;
    Handle: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").HandleProps & React.RefAttributes<unknown>, "ref"> & React.RefAttributes<unknown>>;
    Header: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>>;
    CloseButton: typeof CloseButton;
    Outlet: React.ForwardRefExoticComponent<import("@silk-hq/components").SheetOutletProps & React.RefAttributes<unknown>>;
    Title: React.ForwardRefExoticComponent<import("@silk-hq/components").SheetTitleProps & React.RefAttributes<any>>;
    Description: React.ForwardRefExoticComponent<import("@silk-hq/components").SheetDescriptionProps & React.RefAttributes<any>>;
    AutoFocusTarget: {
        Root: React.ForwardRefExoticComponent<import("@silk-hq/components").AutoFocusTargetRootProps & React.RefAttributes<unknown>>;
    };
    ScrollRoot: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").ScrollRootProps & React.RefAttributes<any>, "ref"> & React.RefAttributes<any>>;
    ScrollView: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").ScrollViewProps & React.RefAttributes<any>, "ref"> & React.RefAttributes<any>>;
    ScrollContent: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").ScrollContentProps & React.RefAttributes<any>, "ref"> & React.RefAttributes<any>>;
};
export {};
