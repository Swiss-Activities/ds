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
    <View className={cn("bg-blue px-4 py-8", className)} {...props}>
      {title ? (
        <Text as="h2" size="lg" className="mb-6 !text-white">
          {title}
        </Text>
      ) : null}
      <View className="gap-3">
        {items.map((item) => (
          <View
            className="rounded-lg border border-solid border-white/10 bg-white/5 p-4"
            key={item.id}
          >
            {item.icon ? <View className="mb-5">{item.icon}</View> : null}
            <Text as="h3" size="md2" className="!text-white">
              {item.title}
            </Text>
            {item.description ? (
              <Text size="sm" className="mt-2 !text-white/65">
                {item.description}
              </Text>
            ) : null}
          </View>
        ))}
      </View>
    </View>
  );
}
