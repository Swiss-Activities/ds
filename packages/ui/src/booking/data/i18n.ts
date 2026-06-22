const formatLocaleForUrl = (locale: string) => {
  return locale.toLowerCase().replace("_", "-");
};

const formatLocaleForUrlReverse = (url: string) => {
  if (!url.includes("-")) return url;
  const split = url.split("-");
  return split[0] + "_" + split[1].toUpperCase();
};

const determineLocale = ({
  path,
  checkType = "startsWith",
  returnType = "default",
}: {
  path: string;
  checkType?: "includes" | "startsWith" | "endsWith";
  returnType?:
    | "default"
    | "underscoreUpper"
    | "dashUpper"
    | "dashLower"
    | "countryCode";
}) => {
  let locale = "de_CH";

  const localeMappings = {
    "/en-ch": "en_CH",
    "/fr-ch": "fr_CH",
    "/it-ch": "it_CH",
    "/cs-cz": "cs_CZ",
    "/da-dk": "da_DK",
    "/el-gr": "el_GR",
    "/es-es": "es_ES",
    "/hi-in": "hi_IN",
    "/id-id": "id_ID",
    "/ja-jp": "ja_JP",
    "/ko-kr": "ko_KR",
    "/ms-my": "ms_MY",
    "/nl-nl": "nl_NL",
    "/pl-pl": "pl_PL",
    "/pt-pt": "pt_PT",
    "/ru-ru": "ru_RU",
    "/sv-se": "sv_SE",
    "/th-th": "th_TH",
    "/zh-cn": "zh_CN",
    "/ar-ae": "ar_AE",
    "/nb-no": "nb_NO",
    "/hu-hu": "hu_HU",
    "/sk-sk": "sk_SK",
    "/ro-ro": "ro_RO",
    "/sq-al": "sq_AL",
    "/tr-tr": "tr_TR",
    "/vi-vn": "vi_VN",
    "/uk-ua": "uk_UA",
    "/hr-hr": "hr_HR",
  };

  const formatLocale = (localeCode: string) => {
    switch (returnType) {
      case "underscoreUpper":
        return localeCode;
      case "dashUpper":
        return localeCode.replace("_", "-");
      case "dashLower":
        return localeCode.replace("_", "-").toLowerCase();
      case "countryCode":
        return localeCode.split("_")[0];
      default:
        return localeCode;
    }
  };

  Object.entries(localeMappings).some(([key, value]) => {
    let matchFound = false;
    switch (checkType) {
      case "includes":
        matchFound = path.includes(key);
        break;
      case "startsWith":
        matchFound = path.startsWith(key);
        break;
      case "endsWith":
        matchFound = path.endsWith(key);
        break;
      default:
        matchFound = false;
    }
    if (matchFound) {
      locale = value;
      return true;
    }
    return false;
  });

  return formatLocale(locale);
};

const isPilot = process.env.NEXT_PUBLIC_IS_PILOT === "true";

const defaultLocale = "de_CH";
const mainLocales = ["de_CH", "en_CH", "fr_CH", "it_CH"];
const otherLocales = [
  "cs_CZ",
  "da_DK",
  "el_GR",
  "es_ES",
  "hi_IN",
  "id_ID",
  "ja_JP",
  "ko_KR",
  "ms_MY",
  "nl_NL",
  "pl_PL",
  "pt_PT",
  "ru_RU",
  "sv_SE",
  "th_TH",
  "zh_CN",
  "ar_AE",
  "nb_NO",
  "hu_HU",
  "sk_SK",
  "ro_RO",
  "sq_AL",
  "tr_TR",
  "vi_VN",
  "uk_UA",
  "hr_HR",
];
const exoticLocales = [
  "cs_CZ",
  "da_DK",
  "el_GR",
  "hi_IN",
  "id_ID",
  "ja_JP",
  "ko_KR",
  "ms_MY",
  "pl_PL",
  "ru_RU",
  "sv_SE",
  "th_TH",
  "zh_CN",
  "ar_AE",
  "nb_NO",
  "hu_HU",
  "sk_SK",
  "ro_RO",
  "sq_AL",
  "tr_TR",
  "vi_VN",
  "uk_UA",
  "hr_HR",
];

const locales = ["en_CH", "it_CH", "fr_CH", ...otherLocales];
const localesLowerDashes = locales.map((locale) =>
  locale.replace("_", "-").toLowerCase()
);

const allLocales = [defaultLocale, ...locales];
const allLocalesDashes = allLocales.map((locale) => locale.replace("_", "-"));
const allLocalesLowerDashes = allLocales.map((locale) =>
  locale.replace("_", "-").toLowerCase()
);

const mainLocalesDashes = mainLocales.map((locale) => locale.replace("_", "-"));
const mainLocalesLowerDashes = mainLocales.map((locale) =>
  locale.replace("_", "-").toLowerCase()
);
const otherLocalesDashes = otherLocales.map((locale) =>
  locale.replace("_", "-")
);

const allLocalesFormatted = allLocales.map((locale) => {
  return formatLocaleForUrl(locale);
});

const localesWithText = {
  de_CH: "Deutsch",
  en_CH: "English",
  fr_CH: "Français",
  it_CH: "Italiano",
  cs_CZ: "Čeština",
  da_DK: "Dansk",
  el_GR: "Ελληνικά",
  es_ES: "Español",
  hi_IN: "हिन्दी",
  id_ID: "Bahasa Indonesia",
  ja_JP: "日本語",
  ko_KR: "한국어",
  ms_MY: "Bahasa Melayu",
  nl_NL: "Nederlands",
  pl_PL: "Polski",
  pt_PT: "Português",
  ru_RU: "Русский",
  sv_SE: "Svenska",
  th_TH: "ภาษาไทย",
  zh_CN: "中文",
  ar_AE: "العربية",
  nb_NO: "Norsk bokmål",
  hu_HU: "Magyar",
  sk_SK: "Slovenčina",
  ro_RO: "Română",
  sq_AL: "Shqip",
  tr_TR: "Türkçe",
  vi_VN: "Tiếng Việt",
  uk_UA: "Українська",
  hr_HR: "Hrvatski",
};

const mapLocaleToAdyen = (locale: string) => {
  const adyenLocaleMap: Record<string, string> = {
    de_CH: "de-DE",
    fr_CH: "fr-FR",
    it_CH: "it-IT",
    en_CH: "en-US",
    cs_CZ: "cs-CZ",
    da_DK: "da-DK",
    el_GR: "el-GR",
    es_ES: "es-ES",
    hi_IN: "hi-IN",
    id_ID: "id-ID",
    ja_JP: "ja-JP",
    ko_KR: "ko-KR",
    ms_MY: "ms-MY",
    nl_NL: "nl-NL",
    pl_PL: "pl-PL",
    pt_PT: "pt-PT",
    ru_RU: "ru-RU",
    sv_SE: "sv-SE",
    th_TH: "th-TH",
    zh_CN: "zh-CN",
    de: "de-DE",
    fr: "fr-FR",
    it: "it-IT",
    en: "en-US",
    es: "es-ES",
    nl: "nl-NL",
    pt: "pt-PT",
    pl: "pl-PL",
    sv: "sv-SE",
    da: "da-DK",
    cs: "cs-CZ",
    el: "el-GR",
    hi: "hi-IN",
    id: "id-ID",
    ja: "ja-JP",
    ko: "ko-KR",
    ms: "ms-MY",
    ru: "ru-RU",
    th: "th-TH",
    zh: "zh-CN",
    ar_AE: "ar-AE",
    nb_NO: "nb-NO",
    hu_HU: "hu-HU",
    sk_SK: "sk-SK",
    ro_RO: "ro-RO",
    sq_AL: "sq-AL",
    tr_TR: "tr-TR",
    vi_VN: "vi-VN",
    uk_UA: "uk-UA",
    hr_HR: "hr-HR",
    ar: "ar-AE",
    nb: "nb-NO",
    hu: "hu-HU",
    sk: "sk-SK",
    ro: "ro-RO",
    sq: "sq-AL",
    tr: "tr-TR",
    vi: "vi-VN",
    uk: "uk-UA",
    hr: "hr-HR",
  };

  return adyenLocaleMap[locale] || "en-US";
};
export default {
  isPilot,
  allLocales,
  allLocalesDashes,
  allLocalesFormatted,
  allLocalesLowerDashes,
  defaultLocale,
  determineLocale,
  exoticLocales,
  formatLocaleForUrl,
  formatLocaleForUrlReverse,
  locales,
  localesLowerDashes,
  localesWithText,
  mainLocales,
  mainLocalesDashes,
  mainLocalesLowerDashes,
  mapLocaleToAdyen,
  otherLocales,
  otherLocalesDashes,
};
