import { useState } from "react";
import type { ViewProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Text } from "../text/text.native";
import type { BaseAccordionProps } from "./accordion.types";

export type AccordionProps = BaseAccordionProps & Omit<ViewProps, "children">;

export function Accordion({ items, className, ...props }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <View
      className={cn(
        "border-t border-b border-solid border-gray-200",
        className
      )}
      {...props}
    >
      {items.map((item, i) => {
        const id = item.id ?? String(i);
        const isOpen = openId === id;

        return (
          <View
            key={id}
            className={cn(i > 0 && "border-t border-solid border-gray-200")}
          >
            <Pressable
              onPress={() => setOpenId(isOpen ? null : id)}
              className="flex flex-row items-center justify-between py-4"
            >
              <Text as="span" size="default" bold>
                {item.title}
              </Text>
              <Text
                as="span"
                size="xs"
                className={cn(
                  "text-gray-400",
                  isOpen && "rotate-180"
                )}
              >
                ▾
              </Text>
            </Pressable>
            {isOpen && <View className="pb-4">{item.content}</View>}
          </View>
        );
      })}
    </View>
  );
}
