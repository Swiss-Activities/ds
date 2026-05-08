import type { ViewProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type {
  BaseSectionRegionExplorerProps,
  RegionExplorerTile,
} from "./section-region-explorer.types";

export type SectionRegionExplorerProps = BaseSectionRegionExplorerProps &
  Omit<ViewProps, "children">;

const isActive = (
  item: RegionExplorerTile,
  activeId?: string
) => item.active || item.id === activeId;

export function SectionRegionExplorer({
  title,
  tiles,
  activeTileId,
  onTileClick,
  className,
  ...props
}: SectionRegionExplorerProps) {
  return (
    <View className={cn(className)} {...props}>
      <Text as="h2" size="lg" className="mb-4">
        {title}
      </Text>
      <View className="rounded-xl border border-solid border-gray-200 bg-gray-50 p-3">
        <View className="flex flex-row flex-wrap gap-1.5">
          {tiles.map((tile) => {
            const active = isActive(tile, activeTileId);

            return (
              <Pressable
                accessibilityRole="button"
                accessibilityState={{
                  disabled: tile.disabled,
                  selected: active,
                }}
                className={cn(
                  "h-11 w-[11.5%] items-center justify-center rounded border border-solid",
                  active
                    ? "border-blue bg-blue"
                    : "border-gray-200 bg-white",
                  tile.disabled && "opacity-45"
                )}
                disabled={tile.disabled}
                key={tile.id}
                onPress={() => onTileClick?.(tile)}
              >
                <Text
                  size="xs"
                  className={cn(
                    "font-semibold",
                    active ? "!text-white" : "!text-gray-600"
                  )}
                >
                  {tile.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
}
