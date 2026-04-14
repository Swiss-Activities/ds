import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { cn } from "../utils/cn";
import { Card } from "../card/card.native";
import { Text } from "../text/text.native";
import { Rating } from "../rating/rating.native";
import { Flag } from "../flag/flag.native";
import type { BaseReviewCardProps } from "./review-card.types";

export type ReviewCardProps = BaseReviewCardProps &
  Omit<ViewProps, "children">;

export function ReviewCard({
  author,
  countryCode,
  date,
  rating,
  text,
  images,
  upvoteCount,
  translatedFrom,
  className,
  ...props
}: ReviewCardProps) {
  return (
    <Card className={cn("flex flex-col !p-5", className)} {...props}>
      <View className="flex flex-row items-center justify-between">
        <View className="flex flex-row items-center gap-1.5">
          {countryCode && <Flag countryCode={countryCode} />}
          <Text as="span" size="xs" bold black>
            {author}
          </Text>
          <Text as="span" size="xs" gray>
            {date}
          </Text>
        </View>
      </View>
      <Rating score={rating} showScore={false} size="default" className="mt-2" />
      <Text size="xs" className="mt-2 !text-gray-700">
        {text}
      </Text>
      {images && images.length > 0 && (
        <View className="mt-3 flex flex-row gap-1.5">
          {images.map((img, i) => (
            <View key={i} className="h-16 w-16 shrink-0 overflow-hidden rounded">
              {img}
            </View>
          ))}
        </View>
      )}
    </Card>
  );
}
