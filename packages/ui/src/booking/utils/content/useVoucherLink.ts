import { useMemo } from "react";
import { useI18n } from "../i18n/useI18n";

export const useVoucherLink = () => {
  const { locale } = useI18n();

  const voucherLink = useMemo(() => {
    const links: Record<string, string> = {
      de_CH:
        "https://shop.e-guma.ch/swiss-activities/de/gutscheine/38315/wertgutschein",
      en_CH:
        "https://shop.e-guma.ch/swiss-activities/en/gift-vouchers/38315/swiss-activities-voucher",
      fr_CH:
        "https://shop.e-guma.ch/swiss-activities/fr/bons-cadeaux/38315/swiss-activities-bon-cadeau",
      it_CH:
        "https://shop.e-guma.ch/swiss-activities/it/buoni/38315/swiss-activities-buono",
    };

    if (!links?.[locale]) return links["en_CH"];

    return links[locale];
  }, [locale]);

  return { voucherLink };
};

export const useVoucherLinkAlt = () => {
  const { locale } = useI18n();

  const voucherLink = useMemo(() => {
    const links: Record<string, string> = {
      de_CH:
        "https://shop.e-guma.ch/swiss-activities/de/gutscheine?promocode=2024discount",
      en_CH:
        "https://shop.e-guma.ch/swiss-activities/en/gift-vouchers?promocode=2024discount",
      fr_CH:
        "https://shop.e-guma.ch/swiss-activities/fr/bons-cadeaux?promocode=2024discount",
      it_CH:
        "https://shop.e-guma.ch/swiss-activities/it/buoni?promocode=2024discount",
    };

    if (!links?.[locale]) return links["en_CH"];

    return links[locale];
  }, [locale]);

  return { voucherLink };
};
