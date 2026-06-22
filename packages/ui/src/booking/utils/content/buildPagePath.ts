const { defaultLocale, formatLocaleForUrl } = require("../../data/i18n");

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
