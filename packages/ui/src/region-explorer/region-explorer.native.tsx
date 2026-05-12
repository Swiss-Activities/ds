import type { ViewProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type {
  BaseRegionExplorerProps,
  RegionExplorerItem,
} from "./region-explorer.types";

export type RegionExplorerProps = BaseRegionExplorerProps &
  Omit<ViewProps, "children">;

const isActive = (item: RegionExplorerItem, activeId?: string) =>
  item.active || item.id === activeId;

export function RegionExplorer({
  activeItemId,
  className,
  items,
  onItemClick,
  variant: _variant,
  ...props
}: RegionExplorerProps) {
  return (
    <View className={cn(className)} {...props}>
      <View className="rounded-xl border border-solid border-gray-200 bg-gray-50 p-3">
        <View className="flex flex-row flex-wrap gap-1.5">
          {items.map((item) => {
            const active = isActive(item, activeItemId);

            return (
              <Pressable
                accessibilityRole="button"
                accessibilityState={{
                  disabled: item.disabled,
                  selected: active,
                }}
                className={cn(
                  "h-11 w-[11.5%] items-center justify-center rounded border border-solid",
                  active ? "border-blue bg-blue" : "border-gray-200 bg-white",
                  item.disabled && "opacity-45"
                )}
                disabled={item.disabled}
                key={item.id}
                onPress={() => onItemClick?.(item)}
              >
                <Text
                  size="xs"
                  className={cn(
                    "font-semibold",
                    active ? "!text-white" : "!text-gray-600"
                  )}
                >
                  {item.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
