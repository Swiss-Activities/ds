import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Accordion } from "../accordion/accordion.native";
import { Text } from "../text/text.native";
import type { BaseContentBlocksProps, ContentBlockItem } from "./content-blocks.types";

export type ContentBlocksProps = BaseContentBlocksProps &
  Omit<ViewProps, "children">;

function BlockContent({ content }: { content: ContentBlockItem["content"] }) {
  if (typeof content === "string") {
    return <Text>{content}</Text>;
  }

  return <>{content}</>;
}

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
          content: <BlockContent content={item.content} />,
        }))}
      />
    </View>
  );
}
