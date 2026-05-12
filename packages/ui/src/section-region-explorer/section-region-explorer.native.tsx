import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { RegionExplorer } from "../region-explorer/index.native";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type { BaseSectionRegionExplorerProps } from "./section-region-explorer.types";

export type SectionRegionExplorerProps = BaseSectionRegionExplorerProps &
  Omit<ViewProps, "children"> & {
    activeTileId?: string;
    onTileClick?: BaseSectionRegionExplorerProps["onItemClick"];
  };

export function SectionRegionExplorer({
  activeItemId,
  activeTileId,
  className,
  onItemClick,
  onTileClick,
  tiles,
  title,
  variant,
  ...props
}: SectionRegionExplorerProps) {
  return (
    <View className={cn(className)} {...props}>
      <Text as="h2" size="lg" className="mb-4">
        {title}
      </Text>
      <RegionExplorer
        activeItemId={activeItemId ?? activeTileId}
        items={tiles}
        onItemClick={onItemClick ?? onTileClick}
        variant={variant}
      />
    </View>
  );
}
