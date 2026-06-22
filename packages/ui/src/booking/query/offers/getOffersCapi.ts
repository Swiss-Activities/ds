import { useQuery } from "@tanstack/react-query";
import { useI18n } from "../../utils/i18n/useI18n";
import { axiosApiInstance } from "../axios";

type TCapiOffer = {
  id: string;
  label: string;
  description: string;
};

let OFFERS_CACHE: Record<string, TCapiOffer[]> = {};

const getOffersCapi = async (locale: string) => {
  const url = `/offers/${locale}/`;

  return axiosApiInstance.get<TCapiOffer[]>(url).then((response) => response.data);
};

export const useOffersCapi = () => {
  const { locale } = useI18n();

  return useQuery({
    queryKey: ["get", "api/offers"],
    queryFn: () => getOffersCapi(locale),
    staleTime: Infinity,
  });
};

export async function getOffers(locale: string): Promise<TCapiOffer[]>;
export async function getOffers(
  locale: string,
  id: string | number
): Promise<TCapiOffer | undefined>;
export async function getOffers(
  locale: string,
  id: string | number | false = false
): Promise<TCapiOffer[] | TCapiOffer | undefined> {
  if (OFFERS_CACHE?.[locale]) {
    if (!id) return OFFERS_CACHE[locale];
    return OFFERS_CACHE[locale].find((o) => Number(o.id) === Number(id));
  }

  return axiosApiInstance(`/offers/${locale}/`).then((response) => {
    const offers = response.data as TCapiOffer[];
    OFFERS_CACHE[locale] = offers;
    if (!id) return offers;
    return offers.find((o) => Number(o.id) === Number(id));
  });
}
