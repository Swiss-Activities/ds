import React from "react";
import { Sheet } from "@silk-hq/components";
export declare const sheetInsetXClassName = "px-4 lg:px-6";
export declare const Handle: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").HandleProps & React.RefAttributes<unknown>, "ref"> & React.RefAttributes<unknown>>;
export declare const Backdrop: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").SheetBackdropProps & React.RefAttributes<unknown>, "ref"> & React.RefAttributes<unknown>>;
export declare function CloseButton({ label }: {
    label?: string;
}): import("react/jsx-runtime").JSX.Element;
type HeaderProps = React.HTMLAttributes<HTMLDivElement>;
export declare const Header: React.ForwardRefExoticComponent<HeaderProps & React.RefAttributes<HTMLDivElement>>;
export declare const Content: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").SheetContentProps & React.RefAttributes<unknown>, "ref"> & React.RefAttributes<unknown>>;
export declare const View: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").SheetViewProps & React.RefAttributes<unknown>, "ref"> & React.RefAttributes<unknown>>;
export declare const ScrollRoot: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").ScrollRootProps & React.RefAttributes<any>, "ref"> & React.RefAttributes<any>>;
export declare const ScrollView: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").ScrollViewProps & React.RefAttributes<any>, "ref"> & React.RefAttributes<any>>;
export declare const ScrollContent: React.ForwardRefExoticComponent<Omit<import("@silk-hq/components").ScrollContentProps & React.RefAttributes<any>, "ref"> & React.RefAttributes<any>>;
export declare const Portal: {
    (props: import("@silk-hq/components").SheetPortalProps): React.ReactPortal | null;
    displayName: string;
};
export declare const Trigger: React.ForwardRefExoticComponent<import("@silk-hq/components").SheetTriggerProps & React.RefAttributes<unknown>>;
export declare const Outlet: React.ForwardRefExoticComponent<import("@silk-hq/components").SheetOutletProps & React.RefAttributes<unknown>>;
export declare const Title: React.ForwardRefExoticComponent<import("@silk-hq/components").SheetTitleProps & React.RefAttributes<any>>;
export declare const Description: React.ForwardRefExoticComponent<import("@silk-hq/components").SheetDescriptionProps & React.RefAttributes<any>>;
export declare const Root: React.ForwardRefExoticComponent<Omit<Omit<import("@silk-hq/components").SheetRootProps & React.RefAttributes<any>, "ref">, "license"> & {
    license?: React.ComponentPropsWithoutRef<typeof Sheet.Root>["license"];
} & React.RefAttributes<any>>;
export {};
