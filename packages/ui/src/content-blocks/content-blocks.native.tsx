import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { Accordion } from "../accordion/accordion.native";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type {
  BaseContentBlocksProps,
  ContentBlockItem,
} from "./content-blocks.types";

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
  variant = "default",
  className,
  ...props
}: ContentBlocksProps) {
  if (variant === "article") {
    return (
      <View className={cn("gap-8", className)} {...props}>
        {items.map((item) => (
          <View key={item.id} className="gap-4">
            <Text as="h2" size="lg">
              {item.title}
            </Text>
            <BlockContent content={item.content} />
          </View>
        ))}
      </View>
    );
  }

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
