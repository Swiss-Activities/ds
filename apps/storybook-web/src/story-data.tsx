import {
  accordionItems,
  activityItems,
  contentBlocks,
  heroGalleryImageKeys,
  homepageFilterGroups,
  homepageFilterItems,
  homepageHeroTabs,
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
  Mountain,
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

const homepageHeroTabIconMap = {
  trophy: Trophy,
  mountain: Mountain,
  flame: Flame,
  "map-pin": MapPin,
} as const;
const bodyParagraphClassName =
  "break-words text-[14px] leading-relaxed text-gray-700 lg:text-[15px] lg:leading-relaxed";

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

export function getHomepageHeroTabs() {
  return homepageHeroTabs.map((tab) => ({
    id: tab.id,
    label: tab.label,
    icon: (
      <Icon
        icon={homepageHeroTabIconMap[tab.icon]}
        size="md"
      />
    ),
  }));
}

export function getHomepageHeroDefaultTabId() {
  return homepageHeroTabs[0]?.id;
}

export function getHomepageHeroSections(selectedTabId?: string | null) {
  const activeTab =
    homepageHeroTabs.find((tab) => tab.id === selectedTabId) ??
    homepageHeroTabs[0];

  if (!activeTab) {
    return [];
  }

  return activeTab.sections.map((section) => ({
    id: section.id,
    title: section.title,
    activities: section.activityIndexes.flatMap((activityIndex) => {
      const item = activityItems[activityIndex];

      if (!item) {
        return [];
      }

      return [{
        ...item,
        image: imageFor(item.image, item.alt),
      }];
    }),
  }));
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
          <p key={paragraph} className={bodyParagraphClassName}>
            {paragraph}
          </p>
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
