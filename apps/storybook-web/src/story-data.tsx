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
import { Text } from "@swiss-activities/ui";

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

function TrophyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6M18 9h1.5a2.5 2.5 0 0 0 0-5H18M4 22h16M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20 7 22M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20 17 22M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

function FireIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function ProductCloudIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
    </svg>
  );
}

function MapPinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
      return <TrophyIcon />;
    case "fire":
      return <FireIcon />;
    case "clock":
      return <ClockIcon />;
    case "cloud":
      return <ProductCloudIcon />;
    case "map-pin":
      return <MapPinIcon />;
    case "star":
      return <StarIcon />;
    default:
      return <StarIcon />;
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
