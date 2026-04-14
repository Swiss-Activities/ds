import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Accordion } from "../accordion/accordion.native";
import type { BaseContentBlocksProps } from "./content-blocks.types";

export type ContentBlocksProps = BaseContentBlocksProps &
  Omit<ViewProps, "children">;

export function ContentBlocks({
  items,
  className,
  ...props
}: ContentBlocksProps) {
  return (
    <View className={cn(className)} {...props}>
      <Accordion
        items={items.map((item) => ({
          id: item.id,
          title: item.title,
          content: typeof item.content === "string" ? null : item.content,
        }))}
      />
    </View>
  );
}
