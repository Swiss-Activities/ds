import type { ViewProps } from "react-native";
import { View } from "react-native-css/components";
import { Button } from "../button/button.native";
import { cn } from "../utils/cn";
import { Card } from "../card/card.native";
import { Icon } from "../icon/icon.native";
import { Languages, ThumbsUp } from "../icons/index.native";
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
  onUpvote,
  translatedFrom,
  className,
  ...props
}: ReviewCardProps) {
  return (
    <Card className={cn("flex flex-col !p-4", className)} {...props}>
      <View className="-mx-4 flex flex-row items-center gap-1.5 border-b border-solid border-gray-200 px-4 pb-3">
        {countryCode && <Flag countryCode={countryCode} />}
        <Text as="span" size="sm" bold black>
          {author}
        </Text>
        <Text as="span" size="sm" gray className="ms-auto">
          {date}
        </Text>
      </View>
      <View className="mt-3 flex flex-row items-center justify-between">
        <Rating score={rating} showScore={false} size="md" />
        {upvoteCount != null && (
          <View className="flex flex-row items-stretch rounded-md border border-solid border-gray-200">
            <Button
              variant="ghost"
              size="sm"
              onPress={onUpvote}
              className="!rounded-none !px-2.5"
            >
              <Icon icon={ThumbsUp} size="sm" color="#a1a1aa" />
            </Button>
            <View className="flex items-center justify-center border-l border-solid border-gray-200 px-2.5">
              <Text as="span" size="xs" gray>
                {upvoteCount}
              </Text>
            </View>
          </View>
        )}
      </View>
      <Text size="xs" numberOfLines={5} className="mt-3 !text-gray-700">
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
      {translatedFrom && (
        <View className="mt-3 flex flex-row items-center gap-1 text-gray-400">
          <Icon icon={Languages} size="sm" color="#a1a1aa" />
          <Text as="span" size="xs" gray>
            Original in {translatedFrom}
          </Text>
        </View>
      )}
    </Card>
  );
}
