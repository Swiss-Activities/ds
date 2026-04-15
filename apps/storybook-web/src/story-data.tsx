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
import { FilterCheckboxGroup, Icon, Text } from "@swiss-activities/ui";
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

function imageFor(key: StoryImageKey, alt?: string, className?: string) {
  const image = storyImages[key];

  return (
    <img
      src={image.url}
      alt={alt ?? image.alt}
      className={className}
    />
  );
}

export function getAccordionItems() {
  return accordionItems.map((item) => ({
    title: item.title,
    content: (
      <div className="space-y-3">
        {item.paragraphs.map((paragraph) => (
          <Text key={paragraph}>{paragraph}</Text>
        ))}
      </div>
    ),
  }));
}

export function getHeroImage() {
  return imageFor("jungfraujoch", "Interlaken");
}

export function getSliderSlides() {
  return [
    imageFor("jungfraujoch", "Jungfraujoch", "h-full w-full object-cover"),
    imageFor("grindelwald", "Grindelwald", "h-full w-full object-cover"),
    imageFor("pilatus", "Pilatus", "h-full w-full object-cover"),
  ];
}

export function getHeroGallery() {
  return heroGalleryImageKeys.map((key, index) =>
    imageFor(key, `${storyImages[key].alt} ${index + 1}`)
  );
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
    <div className="-mx-4 border-t border-solid border-gray-200 lg:mx-0 lg:border-t-0">
      {getHomepageFilterGroups().map((group) => (
        <FilterCheckboxGroup
          key={group.id}
          title={group.title}
          items={group.items}
          type="accordion"
          inlineFrom="lg"
          lessLabel="Weniger Filter"
          moreLabel={(remaining) => `Mehr ${remaining} Filter`}
        />
      ))}
    </div>
  );
}

export function getActivityItems() {
  return activityItems.map((item) => ({
    ...item,
    image: imageFor(item.image, item.alt),
  }));
}

export function getRelatedActivityItems() {
  return relatedActivityItems.map((item) => ({
    ...item,
    image: imageFor(item.image, item.alt),
  }));
}

function mapReviewItems(items: typeof reviewItems) {
  return items.map((item) => ({
    ...item,
    images: item.images
      ? item.images.map((key, index) =>
          imageFor(key, `Photo ${index + 1}`)
        )
      : undefined,
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
      <div className="space-y-3">
        {item.paragraphs.map((paragraph) => (
          <Text key={paragraph}>{paragraph}</Text>
        ))}
      </div>
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
      />
    ),
  }));
}
