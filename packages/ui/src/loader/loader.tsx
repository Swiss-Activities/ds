import { Loader2 } from "../icons";
import { cn } from "../utils/cn";

export type LoaderProps = {
  color?: string;
  center?: boolean;
  size?: "md" | "sm" | "xs" | "base";
};

const loaderSizes = {
  md: 30,
  sm: 24,
  xs: 20,
  base: 16,
} as const;

function resolveColorClass(color?: string) {
  if (!color || color.startsWith("#")) return null;
  if (color === "!current-color") return "text-current";

  return color;
}

function resolveColorStyle(color?: string) {
  if (!color?.startsWith("#")) return undefined;

  return { color };
}

export function Loader({
  color = "text-black",
  center = false,
  size = "md",
}: LoaderProps) {
  return (
    <Loader2
      aria-hidden="true"
      size={loaderSizes[size]}
      style={resolveColorStyle(color)}
      className={cn("animate-spin shrink-0", resolveColorClass(color), {
        "fixed end-0 start-0 mx-auto my-0": center,
      })}
    />
  );
}
