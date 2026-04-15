import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import { View } from "react-native-css/components";
import {
  accordionItems,
  activityItems,
  contentBlocks,
  heroGalleryImageKeys,
  homepageFilterGroups,
  homepageFilterItems,
  productInfoBadges,
  productInfoCards,
  relatedActivityItems,
  reviewItems,
  sectionProductReviews,
  storyImages,
  type StoryImageKey,
  type WeatherIconKind,
  weatherDaysLong,
  weatherDaysShort,
} from "@swiss-activities/dummy-data";
import { FilterCheckboxGroup, Flow, Icon, Text } from "@swiss-activities/ui";
import {
  CloudLightning,
  CloudRain,
  Clock3,
  Cloud,
  Flame,
  MapPin,
  Star,
  Sun,
  Trophy,
} from "@swiss-activities/ui/icons";

const imageFillStyles = StyleSheet.create({
  fill: {
    width: "100%",
    height: "100%",
  },
});

export const imageUrls = {
  jungfraujoch: storyImages.jungfraujoch.url,
  grindelwald: storyImages.grindelwald.url,
  pilatus: storyImages.pilatus.url,
} as const;

const weatherIconMap = {
  sun: {
    icon: Sun,
    color: "#facc15",
  },
  cloud: {
    icon: Cloud,
    color: "#d1d5db",
  },
  "cloud-rain": {
    icon: CloudRain,
    color: "#d1d5db",
  },
  "cloud-storm": {
    icon: CloudLightning,
    color: "#d1d5db",
  },
} satisfies Record<WeatherIconKind, { icon: typeof Sun; color: string }>;

const productIconMap = {
  trophy: Trophy,
  fire: Flame,
  clock: Clock3,
  cloud: Cloud,
  "map-pin": MapPin,
  star: Star,
} as const;

function storyImageFor(key: StoryImageKey, alt?: string, suffix?: string) {
  const image = storyImages[key];

  return (
    <StoryImage
      uri={image.url}
      alt={suffix ? `${alt ?? image.alt} ${suffix}` : alt ?? image.alt}
    />
  );
}

export function StoryImage({
  uri,
  alt,
}: {
  uri: string;
  alt: string;
}) {
  return (
    <Image
      source={{ uri }}
      accessibilityLabel={alt}
      resizeMode="cover"
      style={imageFillStyles.fill}
    />
  );
}

export function StoryScrollScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingVertical: 16,
        gap: 24,
      }}
    >
      {children}
    </ScrollView>
  );
}

export function getAccordionItems() {
  return accordionItems.map((item) => ({
    title: item.title,
    content: (
      <Flow>
        {item.paragraphs.map((paragraph) => (
          <Text key={paragraph}>{paragraph}</Text>
        ))}
      </Flow>
    ),
  }));
}

export function getWeatherDaysShort() {
  return weatherDaysShort.map((day) => ({
    ...day,
    icon: (
      <Icon
        icon={weatherIconMap[day.icon].icon}
        size="lg"
        color={weatherIconMap[day.icon].color}
      />
    ),
  }));
}

export function getWeatherDaysLong() {
  return weatherDaysLong.map((day) => ({
    ...day,
    icon: (
      <Icon
        icon={weatherIconMap[day.icon].icon}
        size="lg"
        color={weatherIconMap[day.icon].color}
      />
    ),
  }));
}

export function getHomepageFilters() {
  return homepageFilterItems.map((item) => ({ ...item }));
}

export function getHomepageFilterGroups() {
  return homepageFilterGroups.map((group) => ({
    ...group,
    items: group.items.map((item) => ({ ...item })),
  }));
}

export function getHomepageFilterDrawerContent() {
  return (
    <View style={{ marginHorizontal: -16, borderTopWidth: 1, borderTopColor: "#e5e7eb" }}>
      {getHomepageFilterGroups().map((group) => (
        <FilterCheckboxGroup
          key={group.id}
          title={group.title}
          items={group.items}
          type="accordion"
          lessLabel="Weniger Filter"
          moreLabel={(remaining) => `Mehr ${remaining} Filter`}
        />
      ))}
    </View>
  );
}

export function getHeroImage() {
  return storyImageFor("jungfraujoch", "Interlaken");
}

export function getSliderSlides() {
  return [
    storyImageFor("jungfraujoch"),
    storyImageFor("grindelwald"),
    storyImageFor("pilatus"),
  ].map((image, index) => React.cloneElement(image, { key: String(index + 1) }));
}

export function getHeroGallery() {
  return heroGalleryImageKeys.map((key, index) =>
    React.cloneElement(storyImageFor(key, undefined, String(index + 1)), {
      key: String(index + 1),
    })
  );
}

export function getActivityItems() {
  return activityItems.map((item) => ({
    ...item,
    image: storyImageFor(item.image, item.alt),
  }));
}

export function getRelatedActivityItems() {
  return relatedActivityItems.map((item) => ({
    ...item,
    image: storyImageFor(item.image, item.alt),
  }));
}

export function getReviewImages(keys: StoryImageKey[] = reviewItems[0].images ?? []) {
  return keys.map((key, index) =>
    React.cloneElement(storyImageFor(key, `Review photo ${index + 1}`), {
      key: String(index + 1),
    })
  );
}

function mapReviewItems(items: typeof reviewItems) {
  return items.map((item) => ({
    ...item,
    images: item.images ? getReviewImages([...item.images]) : undefined,
  }));
}

export function getReviewItems() {
  return mapReviewItems(reviewItems);
}

export function getSectionProductReviews() {
  return mapReviewItems(sectionProductReviews);
}

export function getContentBlocks() {
  return contentBlocks.map((item) => ({
    id: item.id,
    title: item.title,
    content: (
      <Flow>
        {item.paragraphs.map((paragraph) => (
          <Text key={paragraph}>{paragraph}</Text>
        ))}
      </Flow>
    ),
  }));
}

export function getProductInfoBadges() {
  return productInfoBadges.map((item) => ({
    ...item,
    icon: (
      <Icon
        icon={productIconMap[item.icon as keyof typeof productIconMap] ?? Star}
        size="md"
        color="#002f49"
      />
    ),
  }));
}

export function getProductInfoCards() {
  return productInfoCards.map((item) => ({
    ...item,
    icon: (
      <Icon
        icon={productIconMap[item.icon as keyof typeof productIconMap] ?? Star}
        size="md"
        color="#002f49"
      />
    ),
  }));
}
