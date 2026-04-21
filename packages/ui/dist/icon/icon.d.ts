import type { ComponentType } from "react";
import type { LucideProps } from "../icons";
import { type IconSize } from "./icon.shared";
export type IconProps = Omit<LucideProps, "size"> & {
    icon: ComponentType<LucideProps>;
    size?: IconSize;
};
export declare function Icon({ icon: Glyph, size, className, strokeWidth, ...props }: IconProps): import("react/jsx-runtime").JSX.Element;
