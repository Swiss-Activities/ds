import { ActivityIndicator } from "react-native";
import { View } from "react-native-css/components";

export type LoaderProps = {
  color?: string;
  center?: boolean;
  size?: "md" | "sm" | "xs" | "base";
};

const loaderScale = {
  md: 1.25,
  sm: 1,
  xs: 0.85,
  base: 0.75,
} as const;

function resolveColor(color?: string) {
  if (!color) return "#000000";
  if (color === "text-white" || color === "!current-color") return "#ffffff";
  if (color.startsWith("#")) return color;

  return "#000000";
}

export function Loader({
  color = "#000000",
  center = false,
  size = "md",
}: LoaderProps) {
  return (
    <View
      className={center ? "items-center justify-center" : undefined}
      style={{ transform: [{ scale: loaderScale[size] }] }}
    >
      <ActivityIndicator
        color={resolveColor(color)}
        size="small"
      />
    </View>
  );
}
