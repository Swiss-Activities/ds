import dayjs from "dayjs";
import "dayjs/locale/de";
import "dayjs/locale/en";
import "dayjs/locale/es";
import "dayjs/locale/fr";
import "dayjs/locale/it";
import "dayjs/locale/nl";
import "dayjs/locale/pt";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime);

export const getLocalizedTimeAgo = (
  date: string | number | Date | dayjs.Dayjs | null | undefined,
  locale: string
) => {
  const normalizedLocale = locale.toLowerCase().replace("_", "-");

  try {
    dayjs.locale(normalizedLocale);
  } catch (error) {
    dayjs.locale("en");
  }

  return dayjs(date).fromNow();
};
