import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type { BaseSectionFeatureBandProps } from "./section-feature-band.types";

export type SectionFeatureBandProps = BaseSectionFeatureBandProps &
  Omit<ViewProps, "children">;

export function SectionFeatureBand({
  title,
  items,
  className,
  ...props
}: SectionFeatureBandProps) {
  return (
    <View className={cn("py-6", className)} {...props}>
      <View className="rounded-lg bg-blue p-5">
        {title ? (
          <Text as="h2" size="md2" className="mb-6 !text-white">
            {title}
          </Text>
        ) : null}
        <View className="gap-6">
          {items.map((item) => (
            <View className="min-w-0" key={item.id}>
              {item.icon ? <View className="mb-4">{item.icon}</View> : null}
              <Text as="h3" size="sm" bold className="!text-white">
                {item.title}
              </Text>
              {item.description ? (
                <Text size="xs" className="mt-1.5 !text-white/60">
                  {item.description}
                </Text>
              ) : null}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
