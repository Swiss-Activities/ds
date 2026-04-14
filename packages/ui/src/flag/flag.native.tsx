import type { ViewProps } from "react-native";
import { Text } from "react-native-css/components";
import { cn } from "../utils/cn";
import type { BaseFlagProps } from "./flag.types";

function getFlagEmoji(countryCode: string) {
  const code = countryCode.toUpperCase().slice(-2);
  const codePoints = code
    .split("")
    .map((char) => 127397 + char.charCodeAt(0));
  return String.fromCodePoint(...codePoints);
}

export type FlagProps = BaseFlagProps & Omit<ViewProps, "children">;

export function Flag({ countryCode, className, ...props }: FlagProps) {
  if (!countryCode) return null;

  return (
    <Text className={cn("text-base leading-none", className)} {...props}>
      {getFlagEmoji(countryCode)}
    </Text>
  );
}
