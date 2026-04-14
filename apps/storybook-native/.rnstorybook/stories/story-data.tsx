import React from "react";
import { Image, ScrollView, StyleSheet } from "react-native";
import Svg, { Circle, Line, Path } from "react-native-svg";
import {
  accordionItems,
  activityItems,
  contentBlocks,
  heroGalleryImageKeys,
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
import { Flow, Text } from "@swiss-activities/ui";
import {
  Clock3,
  Cloud,
  Flame,
  MapPin,
  Star,
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

function SunIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={5} fill="#facc15" />
      <Path
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
        stroke="#facc15"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function CloudIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z"
        fill="#d1d5db"
      />
    </Svg>
  );
}

function CloudRainIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z"
        fill="#d1d5db"
      />
      <Line x1={8} y1={20} x2={8} y2={23} stroke="#60a5fa" strokeWidth={1.5} strokeLinecap="round" />
      <Line x1={12} y1={20} x2={12} y2={23} stroke="#60a5fa" strokeWidth={1.5} strokeLinecap="round" />
      <Line x1={16} y1={20} x2={16} y2={23} stroke="#60a5fa" strokeWidth={1.5} strokeLinecap="round" />
    </Svg>
  );
}

function CloudStormIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z"
        fill="#d1d5db"
      />
      <Path d="M11 14h3l-2 4h2l-3 5v-5h-2z" fill="#fbbf24" />
    </Svg>
  );
}

function renderWeatherIcon(icon: WeatherIconKind) {
  switch (icon) {
    case "sun":
      return <SunIcon />;
    case "cloud":
      return <CloudIcon />;
    case "cloud-rain":
      return <CloudRainIcon />;
    case "cloud-storm":
      return <CloudStormIcon />;
    default:
      return <CloudIcon />;
  }
}

function renderProductIcon(icon: string) {
  switch (icon) {
    case "trophy":
      return <Trophy size={20} color="#002f49" strokeWidth={1.8} />;
    case "fire":
      return <Flame size={20} color="#002f49" strokeWidth={1.8} />;
    case "clock":
      return <Clock3 size={20} color="#002f49" strokeWidth={1.8} />;
    case "cloud":
      return <Cloud size={20} color="#002f49" strokeWidth={1.8} />;
    case "map-pin":
      return <MapPin size={20} color="#002f49" strokeWidth={1.8} />;
    case "star":
      return <Star size={20} color="#002f49" strokeWidth={1.8} />;
    default:
      return <Star size={20} color="#002f49" strokeWidth={1.8} />;
  }
}

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
        padding: 16,
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
    icon: renderWeatherIcon(day.icon),
  }));
}

export function getWeatherDaysLong() {
  return weatherDaysLong.map((day) => ({
    ...day,
    icon: renderWeatherIcon(day.icon),
  }));
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
    icon: renderProductIcon(item.icon),
  }));
}

export function getProductInfoCards() {
  return productInfoCards.map((item) => ({
    ...item,
    icon: renderProductIcon(item.icon),
  }));
}
