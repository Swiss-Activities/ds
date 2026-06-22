import i18n from "../../data/i18n";

const { defaultLocale, formatLocaleForUrl } = i18n;

const buildPagePath = (
  locale: string,
  slug: string,
  prefix: string | false = false
) => {
  const path = [];
  if (locale !== defaultLocale) {
    path.push(formatLocaleForUrl(locale));
  }
  if (prefix) {
    path.push(prefix);
  }
  if (slug !== "") {
    path.push(slug);
  }

  return ("/" + path.join("/") + "/").replace("//", "/");
};
export default { buildPagePath };
