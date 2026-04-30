import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Hero } from "../hero/hero.native";
import { Text } from "../text/text.native";
import { Breadcrumbs } from "../breadcrumbs/breadcrumbs.native";
import type { BaseSectionProductProps } from "./section-product.types";

export type SectionProductProps = BaseSectionProductProps &
  Omit<ViewProps, "children">;

export function SectionProduct({
  title,
  images,
  breadcrumbs,
  backLabel,
  backHref,
  onBack,
  rating,
  badges,
  description,
  infoItems,
  reviewsTitle,
  reviewsSubtitle,
  reviews,
  contentItems,
  contentTocTitle,
  relatedActivitiesTitle,
  relatedActivitiesAction,
  relatedActivities,
  relatedActivitiesRef: _relatedActivitiesRef,
  className,
  ...props
}: SectionProductProps) {
  return (
    <View className={cn("flex flex-col", className)} {...props}>
      <Hero
        images={images}
        backLabel={backLabel}
        onBack={onBack}
      />
      <View className="px-4">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <Breadcrumbs items={breadcrumbs} ignoreLast className="mt-3" />
        )}
        {title && (
          <Text as="h1" size="xl" className="mt-3">
            {title}
          </Text>
        )}
        {description && (
          <View className="mt-4">
            {typeof description === "string" ? (
              <Text>{description}</Text>
            ) : (
              description
            )}
          </View>
        )}
      </View>
    </View>
  );
}
