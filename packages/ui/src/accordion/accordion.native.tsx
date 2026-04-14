import { useState } from "react";
import type { ViewProps } from "react-native";
import { Pressable, View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Icon } from "../icon/icon.native";
import { ChevronDown } from "../icons/index.native";
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
              <Text as="span" size="lg" className="!text-[17px]">
                {item.title}
              </Text>
              <View className={cn(isOpen && "rotate-180")}>
                <Icon icon={ChevronDown} size="default" color="#a1a1aa" />
              </View>
            </Pressable>
            {isOpen && <View className="pb-4">{item.content}</View>}
          </View>
        );
      })}
    </View>
  );
}
