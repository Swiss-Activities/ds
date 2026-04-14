export const storyImages = {
  jungfraujoch: {
    url: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Jungfraujoch_Plateau_Sonnenaufgang_Aletschgletscher_6b8bb53632.jpg",
    alt: "Jungfraujoch",
  },
  grindelwald: {
    url: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/Grindelwald_First_Cliff_Walk_Eiger_Moench_Jungfrau_Bergpanorama_4653546e26.jpg",
    alt: "Grindelwald",
  },
  pilatus: {
    url: "https://contentapi-swissactivities.imgix.net/contentapi.swissactivities/omar_m_j_F7_U3wadbd0_unsplash_f301eb283f.jpg",
    alt: "Pilatus",
  },
} as const;

export type StoryImageKey = keyof typeof storyImages;

export type WeatherIconKind =
  | "sun"
  | "cloud"
  | "cloud-rain"
  | "cloud-storm";

export type WeatherDayData = {
  id: string;
  label: string;
  icon: WeatherIconKind;
  low: number;
  high: number;
};

export type ActivityItemData = {
  image: StoryImageKey;
  alt?: string;
  title: string;
  score: number;
  reviewCount: number;
  priceLabel: string;
  price: string;
};

export type ReviewItemData = {
  author: string;
  countryCode?: string;
  date: string;
  rating: number;
  text: string;
  images?: StoryImageKey[];
  upvoteCount?: number;
  translatedFrom?: string;
};

export type ContentBlockData = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const flagCountries = [
  "CH",
  "DE",
  "US",
  "GB",
  "FR",
  "IT",
  "JP",
  "KR",
  "CN",
  "BR",
  "AU",
  "IN",
] as const;

export const heroTitles = {
  hero: "Interlaken",
  gallery: "Jungfraujoch",
  sectionActivityGrid: "Beliebte Aktivitaten in Interlaken",
  product:
    "Ab Interlaken: Ticket Jungfraujoch inkl. Sitzplatzreservation",
  relatedActivities: "Mehr Erlebnisse zum Jungfraujoch",
} as const;

export const sliderImageKeys: StoryImageKey[] = [
  "jungfraujoch",
  "grindelwald",
  "pilatus",
];

export const heroGalleryImageKeys: StoryImageKey[] = [
  "jungfraujoch",
  "grindelwald",
  "pilatus",
  "jungfraujoch",
  "grindelwald",
  "pilatus",
  "jungfraujoch",
  "grindelwald",
  "pilatus",
  "jungfraujoch",
  "grindelwald",
  "pilatus",
];

export const accordionItems = [
  {
    title: "Detaillierte Beschreibung",
    paragraphs: [
      "Reise mit diesem Jungfraujoch Ticket ab Interlaken auf das Jungfraujoch.",
      "Auch bekannt als Top of Europe liegt das Jungfraujoch mit Europas hochstem Bahnhof auf 3454 m u. M.",
    ],
  },
  {
    title: "Wichtige Informationen",
    paragraphs: [
      "Bitte bringen Sie warme Kleidung mit.",
      "Die Temperaturen auf dem Jungfraujoch konnen auch im Sommer unter 0 C fallen.",
    ],
  },
  {
    title: "Barrierefreiheit",
    paragraphs: [
      "Die Jungfraubahn und das Jungfraujoch sind weitgehend barrierefrei zuganglich.",
    ],
  },
  {
    title: "Inkludierte Leistungen",
    paragraphs: [
      "Hin- und Ruckfahrt ab Interlaken Ost.",
      "Sitzplatzreservation.",
      "Eintritt zu allen Attraktionen auf dem Jungfraujoch.",
    ],
  },
] as const;

export const weatherDaysShort: WeatherDayData[] = [
  { id: "today", label: "Heute", icon: "sun", low: 6, high: 22 },
  { id: "mi", label: "Mi", icon: "cloud", low: 6, high: 22 },
  { id: "do", label: "Do", icon: "cloud-rain", low: 6, high: 22 },
  { id: "fr", label: "Fr", icon: "cloud-storm", low: 6, high: 22 },
  { id: "sa", label: "Sa", icon: "sun", low: 8, high: 24 },
  { id: "so", label: "So", icon: "cloud", low: 7, high: 21 },
  { id: "mo", label: "Mo", icon: "cloud-rain", low: 5, high: 19 },
  { id: "di", label: "Di", icon: "sun", low: 7, high: 23 },
];

export const weatherDaysLong: WeatherDayData[] = [
  { id: "0", label: "Heute", icon: "sun", low: 6, high: 22 },
  { id: "1", label: "Mi", icon: "cloud", low: 6, high: 22 },
  { id: "2", label: "Do", icon: "cloud-rain", low: 6, high: 22 },
  { id: "3", label: "Fr", icon: "cloud-storm", low: 6, high: 22 },
  { id: "4", label: "Sa", icon: "sun", low: 8, high: 24 },
  { id: "5", label: "So", icon: "cloud", low: 7, high: 21 },
  { id: "6", label: "Mo", icon: "cloud-rain", low: 5, high: 19 },
  { id: "7", label: "Di", icon: "sun", low: 7, high: 23 },
  { id: "8", label: "Mi", icon: "cloud-storm", low: 4, high: 18 },
  { id: "9", label: "Do", icon: "cloud", low: 6, high: 20 },
  { id: "10", label: "Fr", icon: "sun", low: 8, high: 25 },
  { id: "11", label: "Sa", icon: "cloud-rain", low: 5, high: 17 },
  { id: "12", label: "So", icon: "cloud", low: 7, high: 21 },
  { id: "13", label: "Mo", icon: "sun", low: 9, high: 26 },
  { id: "14", label: "Di", icon: "cloud-storm", low: 3, high: 16 },
  { id: "15", label: "Mi", icon: "cloud", low: 5, high: 19 },
  { id: "16", label: "Do", icon: "sun", low: 7, high: 22 },
  { id: "17", label: "Fr", icon: "cloud-rain", low: 4, high: 18 },
  { id: "18", label: "Sa", icon: "sun", low: 8, high: 24 },
  { id: "19", label: "So", icon: "cloud", low: 6, high: 20 },
  { id: "20", label: "Mo", icon: "cloud-storm", low: 3, high: 15 },
  { id: "21", label: "Di", icon: "sun", low: 7, high: 23 },
  { id: "22", label: "Mi", icon: "cloud-rain", low: 5, high: 19 },
  { id: "23", label: "Do", icon: "cloud", low: 6, high: 21 },
  { id: "24", label: "Fr", icon: "sun", low: 9, high: 27 },
  { id: "25", label: "Sa", icon: "cloud-rain", low: 4, high: 17 },
  { id: "26", label: "So", icon: "sun", low: 8, high: 25 },
];

export const activityItems: ActivityItemData[] = [
  {
    image: "jungfraujoch",
    title: "Ab Interlaken: Ticket Jungfraujoch inkl. Sitzplatzreservation",
    score: 4.7,
    reviewCount: 100,
    priceLabel: "pro Person",
    price: "ab CHF 233.80",
  },
  {
    image: "grindelwald",
    alt: "Grindelwald First Cliff Walk",
    title: "Grindelwald: First Cliff Walk by Tissot",
    score: 4.5,
    reviewCount: 64,
    priceLabel: "pro Person",
    price: "ab CHF 68.00",
  },
  {
    image: "pilatus",
    title: "Luzern: Tagespass Pilatus - Seilbahn, Zahnradbahn & Schifffahrt",
    score: 4.8,
    reviewCount: 215,
    priceLabel: "pro Person",
    price: "ab CHF 119.00",
  },
  {
    image: "jungfraujoch",
    alt: "Harder Kulm",
    title: "Interlaken: Harder Kulm - Top of Interlaken Ticket",
    score: 4.6,
    reviewCount: 87,
    priceLabel: "pro Person",
    price: "ab CHF 42.00",
  },
  {
    image: "grindelwald",
    alt: "First Top of Adventure",
    title: "Grindelwald: First - Top of Adventure Ticket",
    score: 4.4,
    reviewCount: 53,
    priceLabel: "pro Person",
    price: "ab CHF 74.00",
  },
  {
    image: "pilatus",
    alt: "Zurichsee",
    title: "Zurich: Stadtrundfahrt mit Schifffahrt auf dem Zurichsee",
    score: 4.3,
    reviewCount: 142,
    priceLabel: "pro Person",
    price: "ab CHF 56.00",
  },
];

export const relatedActivityItems: ActivityItemData[] = [
  {
    image: "grindelwald",
    alt: "Grindelwald",
    title: "Ab Grindelwald: Ticket Jungfraujoch inkl. Sitzplatzreservation",
    score: 4.7,
    reviewCount: 100,
    priceLabel: "pro Person",
    price: "ab CHF 211.20",
  },
  {
    image: "pilatus",
    alt: "Moonlight Silberhornhutte",
    title: "\"Moonlight\": Silberhornhutte ab Interlaken",
    score: 4.7,
    reviewCount: 100,
    priceLabel: "pro Person",
    price: "ab CHF 189.00",
  },
  {
    image: "jungfraujoch",
    alt: "Jungfraujoch VIP Pass",
    title: "Jungfraujoch: Top of Europe - VIP Pass",
    score: 4.8,
    reviewCount: 64,
    priceLabel: "pro Person",
    price: "ab CHF 298.00",
  },
  {
    image: "grindelwald",
    alt: "Grindelwald",
    title: "Grindelwald: First Cliff Walk by Tissot",
    score: 4.5,
    reviewCount: 53,
    priceLabel: "pro Person",
    price: "ab CHF 68.00",
  },
  {
    image: "pilatus",
    alt: "Harder Kulm",
    title: "Interlaken: Harder Kulm - Top of Interlaken",
    score: 4.6,
    reviewCount: 87,
    priceLabel: "pro Person",
    price: "ab CHF 42.00",
  },
  {
    image: "jungfraujoch",
    alt: "Schilthorn",
    title: "Murren: Schilthorn - Piz Gloria Ticket",
    score: 4.4,
    reviewCount: 42,
    priceLabel: "pro Person",
    price: "ab CHF 105.00",
  },
];

export const reviewItems: ReviewItemData[] = [
  {
    author: "Willhelmine",
    countryCode: "CH",
    date: "3 days ago",
    rating: 5,
    upvoteCount: 24,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ulla...",
    images: ["grindelwald", "pilatus", "jungfraujoch"],
    translatedFrom: "Chinese (simplified)",
  },
  {
    author: "Marco",
    countryCode: "DE",
    date: "1 week ago",
    rating: 4,
    upvoteCount: 8,
    text: "Tolles Erlebnis! Die Aussicht vom Jungfraujoch ist atemberaubend. Wurde es jedem empfehlen.",
  },
  {
    author: "Sarah",
    date: "2 weeks ago",
    rating: 5,
    text: "Amazing experience, highly recommended!",
  },
];

export const sectionProductReviews: ReviewItemData[] = [
  reviewItems[0],
  {
    author: "Marco",
    countryCode: "DE",
    date: "1 week ago",
    rating: 5,
    upvoteCount: 12,
    text: "Tolles Erlebnis! Die Aussicht vom Jungfraujoch ist atemberaubend. Wurde es jedem empfehlen der in der Schweiz ist.",
  },
  {
    author: "Sarah",
    countryCode: "GB",
    date: "2 weeks ago",
    rating: 4,
    upvoteCount: 8,
    text: "Amazing experience! The train ride through the Eiger was spectacular. Only downside was the crowds at the top.",
  },
  {
    author: "Yuki",
    countryCode: "JP",
    date: "3 weeks ago",
    rating: 5,
    upvoteCount: 15,
    text: "Wunderbare Erfahrung. Die Aussicht uber den Aletschgletscher bleibt unvergesslich.",
    translatedFrom: "Japanese",
  },
  {
    author: "Pierre",
    countryCode: "FR",
    date: "1 month ago",
    rating: 5,
    upvoteCount: 6,
    text: "Une experience inoubliable! La vue depuis le Sphinx est a couper le souffle.",
    translatedFrom: "French",
  },
];

export const contentBlocks: ContentBlockData[] = [
  {
    id: "leistungen",
    title: "Leistungen",
    paragraphs: [
      "Jungfraujoch Ticket ab Interlaken und zuruck.",
      "Sitzplatzreservation.",
      "Zugang Aussichtsplattform Sphinx, Plateau und Eispalast.",
    ],
  },
  {
    id: "hoehepunkte",
    title: "Hohepunkte",
    paragraphs: [
      "Fahre mit der spektakularen Jungfraubahn durch das Massiv des Eiger und Monch zum Top of Europe.",
      "Buche deine garantierte Sitzplatzreservation gleich mit und reise ohne Warteschlange aufs Jungfraujoch.",
      "Besuche die Aussichtsplattform Sphinx mit Blick uber den Aletschgletscher.",
    ],
  },
  {
    id: "ticket-jungfraujoch",
    title: "Ticket Jungfraujoch ab Interlaken",
    paragraphs: [
      "Ab Interlaken Ost kannst du mit deinem Jungfraujoch Ticket zwischen zwei Routen auswahlen - entweder uber Lauterbrunnen oder uber Grindelwald.",
      "Uber Grindelwald fahrst du ab Grindelwald Terminal mit der Seilbahn Eiger Express zur Station Eigergletscher.",
      "Uber Lauterbrunnen bringt dich die Zahnradbahn via Wengen zur Kleinen Scheidegg.",
    ],
  },
  {
    id: "praktische-informationen",
    title: "Praktische Informationen",
    paragraphs: [
      "Hunde benotigen ein eigenes Ticket zwischen Eigergletscher und Jungfraujoch sowie retour.",
      "Mit Rollstuhl oder Kinderwagen ist eine Anreise mit der 3S-Bahn Eiger Express ab Grindelwald Terminal anzuraten.",
      "Eine ca. 45-minutige Wanderung fuhrt dich zwischen Marz und Oktober vom Jungfraujoch uber den Gletscher zur Monchsjochhutte auf 3657 m u. M.",
    ],
  },
  {
    id: "wichtige-informationen",
    title: "Wichtige Informationen",
    paragraphs: [
      "Finde dich mindestens 10 min vor der reservierten Zeit am Bahnhof ein.",
      "Ziehe warme Kleider an, auch im Sommer.",
    ],
  },
];

export const productBreadcrumbs = [
  { label: "Region Bern", href: "#" },
  { label: "Interlaken", href: "#" },
  { label: "Jungfraujoch", href: "#" },
] as const;

export const productInfoBadges = [
  {
    icon: "trophy",
    title: "Bestseller",
    subtitle: "Jungfraujoch",
  },
  {
    icon: "fire",
    title: "Beliebt",
    subtitle: "Familien",
  },
] as const;

export const productInfoCards = [
  {
    icon: "clock",
    title: "Derzeit geschlossen",
    subtitle: "Offnet morgen 08:15",
  },
  {
    icon: "cloud",
    title: "Leicht bewolkt",
    subtitle: "-17 / 14",
  },
  {
    icon: "map-pin",
    title: "2 h von Zurich",
    subtitle: "Interlaken Ost",
  },
  {
    icon: "star",
    title: "Sehr beliebt",
    subtitle: "202 Bewertungen",
  },
] as const;
