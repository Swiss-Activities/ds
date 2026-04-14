import type { ComponentType } from "react";
import type { LucideProps } from "../icons";
import { cn } from "../utils/cn";
import {
  defaultIconStrokeWidth,
  iconPixelSizes,
  type IconSize,
} from "./icon.shared";

export type IconProps = Omit<LucideProps, "size"> & {
  icon: ComponentType<LucideProps>;
  size?: IconSize;
};

export function Icon({
  icon: Glyph,
  size = "default",
  className,
  strokeWidth = defaultIconStrokeWidth,
  ...props
}: IconProps) {
  return (
    <Glyph
      size={iconPixelSizes[size]}
      strokeWidth={strokeWidth}
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}
