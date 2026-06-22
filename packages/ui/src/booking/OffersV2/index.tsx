import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { Offer } from "./Offer";
import { Title } from "../Title";
import { useBookingStore } from "../store";
import { Skeleton } from "@swiss-activities/ui";
import { TActivity } from "../types/activity";
import { TOfferBooking } from "../types/offerBooking";
import { useI18n } from "../utils/i18n/useI18n";
import { dataLayerSend } from "../utils/thirdParty/dataLayerSend";
import { useGetActivityOffers } from "../query/activity/getActivityOffers";
import { useOffersCapi } from "../query/offers/getOffersCapi";

type ExpandedOffer = {
  offer: TOfferBooking;
  forceCategoryType?: "1st_class" | "2nd_class";
  categoryTypeLabel?: string;
  uniqueId: string;
};

export const OffersV2 = () => {
  const { t, locale } = useI18n();
  const { activity } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
    }))
  );

  const { isRebook, offer, setOffer, setActive, setCategoryType } =
    useBookingStore(
      useShallow((state) => ({
        isRebook: state.isRebook,
        offer: state.offer,
        setOffer: state.setOffer,
        setActive: state.setActive,
        setCategoryType: state.setCategoryType,
      }))
    );

  const { data: offers, isLoading: isLoadingOffers } = useGetActivityOffers(
    activity as TActivity,
    {
      locale,
    }
  );

  const { isLoading: isLoadingOffersCapi } = useOffersCapi();

  const expandedOffers = useMemo<ExpandedOffer[]>(() => {
    if (!offers) return [];

    return offers.flatMap((offer) => {
      const categoryTypes = offer.ticketCategories
        ?.filter(
          (ticket) =>
            ticket.categoryType &&
            ticket.categoryTypeKey &&
            ticket.audience === "adults" &&
            !ticket.discountType
        )
        .reduce((acc, ticket) => {
          const typeKey = ticket.categoryTypeKey as "1st_class" | "2nd_class";
          if (!acc.has(typeKey)) {
            acc.set(typeKey, {
              label: ticket.categoryType!,
              typeKey,
            });
          }
          return acc;
        }, new Map<string, { label: string; typeKey: "1st_class" | "2nd_class" }>());

      const uniqueCategoryTypes = categoryTypes
        ? Array.from(categoryTypes.values()).sort((a, b) => {
            if (a.typeKey === "2nd_class" && b.typeKey === "1st_class")
              return -1;
            if (a.typeKey === "1st_class" && b.typeKey === "2nd_class")
              return 1;
            return a.label.localeCompare(b.label);
          })
        : [];

      if (uniqueCategoryTypes.length > 1) {
        return uniqueCategoryTypes.map((catType) => ({
          offer,
          forceCategoryType: catType.typeKey,
          categoryTypeLabel: catType.label,
          uniqueId: `${offer.offerId}-${catType.typeKey}`,
        }));
      }

      return [{ offer, uniqueId: String(offer.offerId) }];
    });
  }, [offers]);

  useEffect(() => {
    if (expandedOffers.length > 0 && !offer?.offerId) {
      const firstExpandedOffer = expandedOffers[0];
      setOffer(firstExpandedOffer.offer);

      if (firstExpandedOffer.forceCategoryType && setCategoryType) {
        setCategoryType(firstExpandedOffer.forceCategoryType);
      }

      dataLayerSend({ obj: { event: "select_offer" } });
    }
  }, [expandedOffers, offer, setOffer, setCategoryType]);

  useEffect(() => {
    if (expandedOffers.length === 1 && offer?.offerId) {
      setActive("tickets");
    }
  }, [expandedOffers, offer, setActive]);

  return (
    <div>
      <Title>{t("activity.widget.titleTicketOption")}</Title>
      <Skeleton loading={isLoadingOffers || isLoadingOffersCapi} />
      {expandedOffers.length > 0 && !isLoadingOffers && !isLoadingOffersCapi ? (
        <div className="space-y-3">
          {expandedOffers
            .sort((a, b) => a.offer.sequenceIndex - b.offer.sequenceIndex)
            .filter((expanded) =>
              isRebook ? expanded.offer.offerId === offer?.offerId : true
            )
            .map((expanded) => (
              <Offer
                {...expanded.offer}
                key={expanded.uniqueId}
                uniqueId={expanded.uniqueId}
                forceCategoryType={expanded.forceCategoryType}
                categoryTypeLabel={expanded.categoryTypeLabel}
                showCategoryTypeSelector={false}
              />
            ))}
        </div>
      ) : null}
    </div>
  );
};
