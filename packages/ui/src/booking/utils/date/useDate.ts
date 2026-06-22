import dayjs from "dayjs";
import "dayjs/locale/de";
import "dayjs/locale/en";
import "dayjs/locale/fr";
import "dayjs/locale/it";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { useI18n } from "../i18n/useI18n";

dayjs.extend(utc);
dayjs.extend(timezone);

const TIMEZONE = "Europe/Zurich";

export const useDate = () => {
  const { locale } = useI18n();
  const dayjsLocale = locale.split("_")[0];

  const formatTime = (iso: string) => {
    return dayjs(iso).tz(TIMEZONE).format("HH:mm");
  };

  const formatDate = (iso: string, format: string = "dddd, D. MMMM YYYY") => {
    return dayjs(iso).tz(TIMEZONE).locale(dayjsLocale).format(format);
  };

  const formatDateShort = (iso: string) => {
    return dayjs(iso).tz(TIMEZONE).format("DD.MM.YYYY");
  };

  const getDateKey = (iso: string) => {
    return dayjs(iso).tz(TIMEZONE).format("YYYY-MM-DD");
  };

  const parseDate = (iso: string) => {
    return dayjs(iso).tz(TIMEZONE);
  };

  return {
    formatTime,
    formatDate,
    formatDateShort,
    getDateKey,
    parseDate,
  };
};
