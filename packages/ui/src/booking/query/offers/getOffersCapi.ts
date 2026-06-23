import { useQuery } from "@tanstack/react-query";
import { useI18n } from "../../utils/i18n/useI18n";

type TCapiOffer = {
  id: string;
  label: string;
  description: string;
};

// @todo CAPI offers — /api/web/offers/{locale}/ 404s until the proxy is wired in
// src/dev-server.ts (contentapi2 + token). Short-circuit every CAPI offers
// lookup to empty so nothing fires the failing request; restore the axios
// fetches (offers list + per-id lookup, with the OFFERS_CACHE) once it exists.
const getOffersCapi = async (_locale: string): Promise<TCapiOffer[]> => [];

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
  _locale: string,
  id: string | number | false = false
): Promise<TCapiOffer[] | TCapiOffer | undefined> {
  return id ? undefined : [];
}
