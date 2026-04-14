import { cn } from "../utils/cn";
import type { BaseFlagProps } from "./flag.types";

function getFlagEmoji(countryCode: string) {
  const code = countryCode.toUpperCase().slice(-2);
  const codePoints = code
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export type FlagProps = BaseFlagProps &
  Omit<React.HTMLAttributes<HTMLSpanElement>, "children">;

export function Flag({ countryCode, className, ...props }: FlagProps) {
  if (!countryCode) return null;

  return (
    <span
      className={cn("inline-flex text-base leading-none", className)}
      role="img"
      aria-label={countryCode.toUpperCase()}
      {...props}
    >
      {getFlagEmoji(countryCode)}
    </span>
  );
}
