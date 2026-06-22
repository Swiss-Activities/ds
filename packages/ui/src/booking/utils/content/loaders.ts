import cloneDeep from "lodash/cloneDeep";
import path from "path";
import i18n from "../../data/i18n";
import pagesData from "../../data/pages";
import { TActivity } from "../../types/activity";
import { TOverview } from "../../types/overview";
import { TPage } from "../../types/page";
import { TReview } from "../../types/reviews";
import { TStreams } from "../../types/streams";
import buildPagePathModule from "./buildPagePath";
import { getDataFolderPath } from "./getDataFolderPath";
import { pagePathToArray } from "../paths/pagePathToArray";

const {
  allLocales,
  allLocalesLowerDashes,
  mainLocalesLowerDashes,
  mainLocales,
  formatLocaleForUrlReverse,
  isPilot,
} = i18n;
const pages = pagesData.pages as Record<string, Record<string, string>>;
const { buildPagePath } = buildPagePathModule;

const isBuilding = process.env.NODE_ENV === "production";

const CACHE_DATA: Record<string, unknown> = {};
export const loadData = async (
  fs: typeof import("node:fs/promises"),
  name: string
) => {
  try {
    if (CACHE_DATA[name]) {
      return CACHE_DATA[name];
    }

    const data = await fs.readFile(
      path.join(getDataFolderPath(), name + ".json"),
      "utf8"
    );

    CACHE_DATA[name] = JSON.parse(data);

    return CACHE_DATA[name];
  } catch {
    return false;
  }
};

const CACHE_ACTIVITY_DATA: Record<string, TActivity> = {};
const loadActivity = async (
  fs: typeof import("node:fs/promises"),
  name: string
): Promise<TActivity | boolean> => {
  try {
    if (!isBuilding && CACHE_ACTIVITY_DATA[name]) {
      return CACHE_ACTIVITY_DATA[name];
    }

    const data = await fs.readFile(
      path.join(getDataFolderPath(), "activities", name + ".json"),
      "utf8"
    );

    const parsed = JSON.parse(data);

    if (!isBuilding) {
      CACHE_ACTIVITY_DATA[name] = parsed;
    }

    return parsed;
  } catch {
    return false;
  }
};

const CACHE_OVERVIEW_DATA: Record<string, TOverview> = {};
const loadOverview = async (
  fs: typeof import("node:fs/promises"),
  name: string
): Promise<TOverview> => {
  try {
    if (!isBuilding && CACHE_OVERVIEW_DATA[name]) {
      return CACHE_OVERVIEW_DATA[name];
    }

    const data = await fs.readFile(
      path.join(getDataFolderPath(), "overviews", name + ".json"),
      "utf8"
    );

    const parsed = JSON.parse(data);

    if (!isBuilding) {
      CACHE_OVERVIEW_DATA[name] = parsed;
    }

    return parsed;
  } catch {
    return false;
  }
};

export const getOverview = async (
  fs: typeof import("node:fs/promises"),
  path: string
): Promise<TOverview> => {
  return await loadOverview(fs, path.replaceAll("/", "_"));
};

export const getActivities = async (
  fs: typeof import("node:fs/promises"),
  locale: string
): Promise<TActivity[]> => {
  return (await loadData(fs, `activities-${locale}`)) as TActivity[];
};

export const getActivityDetails = async (
  fs: typeof import("node:fs/promises"),
  id?: string,
  locale?: string
): Promise<TActivity> => {
  return (await loadActivity(fs, `${id}-${locale}`)) as TActivity;
};

export const getMultipleActivityDetails = async (
  fs: typeof import("node:fs/promises"),
  activityIds: string | string[],
  locale: string
): Promise<TActivity[]> => {
  const data = (await loadData(fs, `activities-${locale}`)) as TActivity[];

  return data.filter((a) => activityIds.includes(a.id));
};

export const getListings = async (
  fs: typeof import("node:fs/promises"),
  locale: string
): Promise<TOverview[]> => {
  return (await loadData(fs, `listings-${locale}`)) as TOverview[];
};

export const getListingDetails = async (
  fs: typeof import("node:fs/promises"),
  listingId: string,
  locale: string
): Promise<TOverview> => {
  const listing = ((await loadData(fs, `listings-${locale}`)) as TOverview[]).find(
    (l: { id: string }) => l.id === listingId
  );
  if (!listing) {
    return null;
  }

  listing.activities = await Promise.all(
    listing.activities.map(async (a: { id: string }) => {
      return (await getMultipleActivityDetails(fs, [a.id], locale))[0];
    })
  );
  listing.child_activities = await Promise.all(
    listing.child_activities.map(async (a: { id: string }) => {
      return (await getMultipleActivityDetails(fs, [a.id], locale))[0];
    })
  );

  return listing;
};

export const getActivityTypes = async (
  fs: typeof import("node:fs/promises"),
  locale: string
) => {
  return await loadData(fs, `types-${locale}-graph`);
};

export const getActivityAttributes = async (
  fs: typeof import("node:fs/promises"),
  locale: string
) => {
  return await loadData(fs, `attributes-mapped-${locale}`);
};

export const getStreams = async (
  fs: typeof import("node:fs/promises"),
  locale: string
) => {
  return (await loadData(fs, `streams/streams-${locale}`)) as TStreams;
};

type TRawText = {
  key: string;
  value: string;
  translations: { locale: string; value: string }[];
};

type TText = Omit<TRawText, "translations">;

const TEXTS_CACHE: {
  raw: TRawText[];
  byLocale: Record<string, TText[]>;
} = {
  raw: [],
  byLocale: {},
};

const _loadTexts = async (fs: typeof import("node:fs/promises")) => {
  if (TEXTS_CACHE.raw.length) return;

  const texts = (await loadData(fs, "texts")) as TRawText[];

  for (const locale of allLocales) {
    TEXTS_CACHE.byLocale[locale] = _transformTexts(texts, locale);
  }

  TEXTS_CACHE.raw = texts;
};

const _transformTexts = (all: TRawText[], locale: string): TText[] => {
  const texts: TText[] = [];
  for (const text of cloneDeep(all)) {
    const translation = text.translations.find((t) => t.locale === locale);
    if (translation) text.value = translation.value;
    const { translations, ...rest } = text;

    texts.push({ ...rest });
  }

  return texts;
};

export const getText = async (
  fs: typeof import("node:fs/promises"),
  locale: string,
  key: string
) => {
  await _loadTexts(fs);

  const text = TEXTS_CACHE.byLocale[locale].find((t) => t.key === key);

  return text ? text.value : null;
};

export const getEmployees = async (
  fs: typeof import("node:fs/promises"),
  locale: string
) => {
  const data = (await loadData(fs, "employees")) as {
    aboutme?: string;
    translations?: { locale: string; aboutme: string }[];
    [key: string]: unknown;
  }[];

  const employees: object[] = [];
  for (const employee of data) {
    const translation = employee.translations?.find((t) => t.locale === locale);
    if (translation) {
      employee.aboutme = translation.aboutme;
    }
    delete employee.translations;

    employees.push(employee);
  }

  return employees;
};

export const getInternalLinks = async (
  fs: typeof import("node:fs/promises"),
  locale: string
) => {
  const data = await fs.readFile(
    path.join(getDataFolderPath(), `internal-links-${locale}.json`),
    "utf8"
  );

  return JSON.parse(data);
};

export const getPageUrls = (type: string) => {
  const page: Record<string, string> = {};
  for (const locale of allLocales) {
    page[locale] = buildPagePath(locale, pages[type][locale]);
  }

  return page;
};

export const getPageUrl = (type: string, locale: string) => {
  return getPageUrls(type)[locale];
};

export const getPages = async (fs: typeof import("node:fs/promises")) => {
  const pages: TPage[] = [];
  for (const locale of allLocales) {
    const localePages = (await loadData(fs, `pages-${locale}`)) as
      | TPage[]
      | false;
    if (localePages) {
      pages.push(...localePages);
    }
  }
  return pages;
};

export const getPagesLocale = async (
  fs: typeof import("node:fs/promises"),
  locale: string
) => {
  return (await loadData(fs, `pages-${locale}`)) as TPage[];
};

export const getPathsToBuild = async (
  fs: typeof import("node:fs/promises")
) => {
  const paths = (await loadData(fs, "paths-build")) as string[];
  if (!isPilot) return paths;
  return paths.filter(
    (p) =>
      !allLocalesLowerDashes.includes(p[0]) ||
      mainLocalesLowerDashes.includes(p[0])
  );
};

export const getMenu = async (
  fs: typeof import("node:fs/promises"),
  locale: string
) => {
  return await loadData(fs, `menu-${locale}`);
};

const TRANSLATIONS_CACHE: Record<string, unknown> = {};
export const getParams = async (
  fs: typeof import("node:fs/promises"),
  locale: string
) => {
  const activities = (await loadData(fs, "activities-de_CH")) as TActivity[];
  let activitiesAmount = activities.length;
  if (activitiesAmount % 1000 > 900) {
    activitiesAmount = Math.ceil(activitiesAmount / 1000) * 1000;
  } else {
    activitiesAmount = Math.floor(activitiesAmount / 100) * 100;
  }

  const params: {
    [key: string]: unknown;
  } = {};

  if (!TRANSLATIONS_CACHE?.[locale]) {
    let loc = locale;

    if (locale !== "de_CH") {
      loc =
        "crowdin_version/" +
        (locale.includes("_") ? locale.split("_")[0] : locale.split("-")[0]);

      locale = formatLocaleForUrlReverse(locale);
    }

    const translations = await fs.readFile(
      path.join(".", "public", "locales", loc, "common.json"),
      "utf8"
    );
    TRANSLATIONS_CACHE[locale] = JSON.parse(translations);
  }
  params.translations = TRANSLATIONS_CACHE[locale];

  const menu = await getMenu(fs, locale);
  const internalLinks = await getInternalLinks(fs, locale);

  return {
    ...params,
    activitiesAmount,
    menu,
    internalLinks,
  };
};

export const getReviews = async (
  fs: typeof import("node:fs/promises"),
  locale?: string
): Promise<{
  reviews: TReview[];
}> => {
  if (process.env.USE_REVIEWS_V2 === "true" && locale) {
    return (await loadData(fs, `reviews_full_v2-${locale}`)) as {
      reviews: TReview[];
    };
  }
  return (await loadData(fs, "reviews_full")) as { reviews: TReview[] };
};

// Static paths

export const getStaticPaths = async (
  fs: typeof import("node:fs/promises"),
  locale: string,
  type: string
) => {
  if (isPilot && !mainLocales.includes(locale)) {
    return { paths: [], fallback: false };
  }

  const pages = await getPagesLocale(fs, locale);

  const paths: object[] = [];
  for (const page of pages) {
    if (page.type === type) {
      paths.push({
        params: {
          path: pagePathToArray(page.path, true),
        },
      });
    }
  }

  return {
    paths: paths,
    fallback: false,
  };
};
