import type { ViewProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type {
  BaseSectionRegionExplorerProps,
  RegionExplorerChip,
  RegionExplorerTile,
} from "./section-region-explorer.types";

export type SectionRegionExplorerProps = BaseSectionRegionExplorerProps &
  Omit<ViewProps, "children">;

const isActive = (
  item: RegionExplorerTile | RegionExplorerChip,
  activeId?: string
) => item.active || item.id === activeId;

export function SectionRegionExplorer({
  title,
  subtitle,
  tiles,
  chips = [],
  activeTileId,
  activeChipId,
  action,
  onTileClick,
  onChipClick,
  className,
  ...props
}: SectionRegionExplorerProps) {
  return (
    <View className={cn(className)} {...props}>
      <View className="mb-4 gap-1.5">
        <Text as="h2" size="lg">
          {title}
        </Text>
        {subtitle ? (
          <Text size="xs" gray className="font-medium uppercase">
            {subtitle}
          </Text>
        ) : null}
        {action ? <View>{action}</View> : null}
      </View>
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
      {chips.length ? (
        <View className="mt-3 flex flex-row flex-wrap gap-2">
          {chips.map((chip) => {
            const active = isActive(chip, activeChipId);

            return (
              <Pressable
                accessibilityRole="button"
                accessibilityState={{
                  disabled: chip.disabled,
                  selected: active,
                }}
                className={cn(
                  "min-h-8 rounded-full border border-solid px-3 py-1.5",
                  active
                    ? "border-blue bg-blue"
                    : "border-gray-200 bg-white",
                  chip.disabled && "opacity-45"
                )}
                disabled={chip.disabled}
                key={chip.id}
                onPress={() => onChipClick?.(chip)}
              >
                <Text
                  size="xs"
                  className={active ? "!text-white" : "!text-black"}
                >
                  {chip.label}
                </Text>
              </Pressable>
            );
          })}
        </View>
      ) : null}
    </View>
  );
}
