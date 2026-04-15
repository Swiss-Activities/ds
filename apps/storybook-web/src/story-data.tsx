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
import { FilterCheckboxGroup, Text } from "@swiss-activities/ui";
import {
  Clock3,
  Cloud,
  Flame,
  MapPin,
  Star,
  Trophy,
} from "@swiss-activities/ui/icons";

function SunIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-yellow-400">
      <circle cx="12" cy="12" r="5" />
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"
      />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
      <path d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z" />
    </svg>
  );
}

function CloudRainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
      <path d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z" />
      <line stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" x1="8" y1="22" x2="8" y2="24" />
      <line stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" x1="12" y1="22" x2="12" y2="24" />
      <line stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" x1="16" y1="22" x2="16" y2="24" />
    </svg>
  );
}

function CloudStormIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="text-gray-300">
      <path d="M19.36 10.04A7.49 7.49 0 0 0 4.5 11.5a4.5 4.5 0 0 0 0 9h14a5 5 0 0 0 .86-9.96z" />
      <path fill="#fbbf24" d="M11 14h3l-2 4h2l-3 5v-5h-2z" />
    </svg>
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
      return <Trophy className="h-5 w-5" />;
    case "fire":
      return <Flame className="h-5 w-5" />;
    case "clock":
      return <Clock3 className="h-5 w-5" />;
    case "cloud":
      return <Cloud className="h-5 w-5" />;
    case "map-pin":
      return <MapPin className="h-5 w-5" />;
    case "star":
      return <Star className="h-5 w-5" />;
    default:
      return <Star className="h-5 w-5" />;
  }
}

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
    icon: renderWeatherIcon(day.icon),
  }));
}

export function getWeatherDaysLong() {
  return weatherDaysLong.map((day) => ({
    ...day,
    icon: renderWeatherIcon(day.icon),
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
    <div className="-mx-4 border-t border-solid border-gray-200 lg:border-t-0">
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
    icon: renderProductIcon(item.icon),
  }));
}

export function getProductInfoCards() {
  return productInfoCards.map((item) => ({
    ...item,
    icon: renderProductIcon(item.icon),
  }));
}
