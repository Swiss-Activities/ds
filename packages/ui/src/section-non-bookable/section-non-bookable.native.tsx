import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { ImageFill } from "../image-fill/image-fill.native";
import { Text } from "../text/text.native";
import { cn } from "../utils/cn";
import type { BaseSectionNonBookableProps } from "./section-non-bookable.types";

export type SectionNonBookableProps = BaseSectionNonBookableProps &
  Omit<ViewProps, "children">;

export function SectionNonBookable({
  title,
  images,
  renderImage,
  description,
  highlights,
  detailSections,
  className,
  ...props
}: SectionNonBookableProps) {
  return (
    <View className={cn("flex flex-col bg-white", className)} {...props}>
      <View className="h-[292px] w-full bg-gray-100">
        <ImageFill image={images[0]} renderImage={renderImage} />
      </View>
      <View className="px-4 py-4">
        <Text as="h1" size="xl">
          {title}
        </Text>
        {description ? (
          <View className="mt-4">
            {typeof description === "string" ? (
              <Text>{description}</Text>
            ) : (
              description
            )}
          </View>
        ) : null}
        {highlights?.length ? (
          <View className="mt-6">
            {highlights.map((item, index) => (
              <View
                key={item.id ?? `${String(item.title)}-${index}`}
                className="border-t border-solid border-gray-200 py-3"
              >
                <Text bold>{item.title}</Text>
                {item.subtitle ? <Text gray>{item.subtitle}</Text> : null}
              </View>
            ))}
          </View>
        ) : null}
        {detailSections?.length ? (
          <View className="mt-6">
            {detailSections.map((section) => (
              <View key={section.id ?? section.title} className="mb-4">
                <Text bold>{section.title}</Text>
                {section.items.map((item, index) => (
                  <Text
                    key={item.id ?? `${String(item.label)}-${index}`}
                    gray
                    className="mt-1"
                  >
                    {item.label}
                    {item.value ? `: ${item.value}` : ""}
                  </Text>
                ))}
              </View>
            ))}
          </View>
        ) : null}
      </View>
    </View>
  );
}
