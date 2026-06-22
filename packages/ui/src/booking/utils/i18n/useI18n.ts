import { useLocale, useTranslations } from "next-intl";
import i18n from "../../data/i18n";

export const useI18n = () => {
  const t = useTranslations();
  const locale = i18n.formatLocaleForUrlReverse(useLocale());
  const isRtl = locale === "ar_AE";

  return { t, locale, isRtl };
};
