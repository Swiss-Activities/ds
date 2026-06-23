import { useEffect, useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../../Card";
import { CategoryTypeSelector } from "../../CategoryTypeSelector";
import { PriceDisplay } from "../../PriceDisplay";
import { useBookingStore } from "../../store";
import { Text } from "@swiss-activities/ui";
import { Usps } from "../../components/Usps";
import type { TActivity } from "../../types/activity";
import type { TOfferBooking } from "../../types/offerBooking";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";
import { useDataLayer } from "../../utils/thirdParty/dataLayerSend";

export const Offer = (
  offer: TOfferBooking & {
    uniqueId?: string;
    forceCategoryType?: "1st_class" | "2nd_class";
    categoryTypeLabel?: string;
    showCategoryTypeSelector?: boolean;
  }
) => {
  const { dataLayer } = useDataLayer();
  const { t } = useI18n();
  const {
    uniqueId,
    forceCategoryType,
    categoryTypeLabel,
    showCategoryTypeSelector = false,
  } = offer;
  const {
    activity,
    offer: selectedOffer,
    setOffer,
    ticketSelections,
    ticketSelectionsMetadata,
    setTicketSelection,
    categoryType,
    setCategoryType,
  } = useBookingStore(
    useShallow((state) => ({
      activity: state.activity,
      offer: state.offer,
      setOffer: state.setOffer,
      ticketSelections: state.ticketSelections,
      ticketSelectionsMetadata: state.ticketSelectionsMetadata,
      setTicketSelection: state.setTicketSelection,
      categoryType: state.categoryType,
      setCategoryType: state.setCategoryType,
    }))
  );

  const handleClick = () => {
    setOffer(offer);

    useBookingStore.setState({
      ticketSelections: {},
      ticketSelectionsMetadata: {},
      ticketClassSelections: {},
      categoryType: forceCategoryType || null,
      hasAutoSelectedTicket: false,
    });

    Object.entries(ticketSelections).forEach(([key, oldTicketCategoryId]) => {
      const metadata = ticketSelectionsMetadata[key];

      if (!metadata) return;

      const matchingTicket = offer?.ticketCategories.find((ticket) => {
        const audienceMatch = ticket.audience === metadata.audience;
        const discountMatch =
          (ticket.discountType || null) === (metadata.discountType || null);
        const categoryMatch =
          (ticket.categoryTypeKey || null) ===
          (metadata.categoryTypeKey || null);

        return audienceMatch && discountMatch && categoryMatch;
      });

      if (matchingTicket) {
        setTicketSelection(key, matchingTicket.ticketCategoryId, {
          audience: matchingTicket.audience,
          discountType: matchingTicket.discountType || null,
          categoryTypeKey: matchingTicket.categoryTypeKey || null,
        });
      }
    });

    dataLayer({
      obj: {
        event: "select_offer",
      },
    });
  };

  const activeCategoryType = forceCategoryType || categoryType;

  const price = useMemo(() => {
    if (!offer?.ticketCategories) return offer?.startingPrice?.amount;

    const adultNonDiscountTickets = offer.ticketCategories.filter(
      (ticket) => ticket.audience === "adults" && !ticket.discountType
    );

    if (adultNonDiscountTickets.length === 0) {
      return offer?.startingPrice?.amount;
    }

    let ticketsToConsider = adultNonDiscountTickets;

    if (activeCategoryType) {
      ticketsToConsider = adultNonDiscountTickets.filter(
        (ticket) => ticket.categoryTypeKey === activeCategoryType
      );

      if (ticketsToConsider.length === 0) {
        ticketsToConsider = adultNonDiscountTickets;
      }
    }

    const cheapestTicket = ticketsToConsider.reduce((lowest, current) => {
      return parseFloat(current.price.amount) < parseFloat(lowest.price.amount)
        ? current
        : lowest;
    });

    return cheapestTicket.price.amount;
  }, [offer, activeCategoryType]);

  const showPrefix = offer?.ticketCategories?.every((t) => t.occupancy === 1);

  const isSelected =
    offer?.offerId === selectedOffer?.offerId &&
    (!forceCategoryType || forceCategoryType === categoryType);

  const categoryTypeOptions = useMemo(() => {
    if (!offer?.ticketCategories) return [];

    const typeMap = new Map<
      string,
      { label: string; typeKey: "1st_class" | "2nd_class"; minPrice: number }
    >();

    offer.ticketCategories.forEach((ticket) => {
      if (
        !ticket.categoryType ||
        ticket.audience !== "adults" ||
        ticket.discountType
      )
        return;

      const typeKey = ticket.categoryTypeKey as "1st_class" | "2nd_class";
      const price = parseFloat(ticket.price.amount);

      if (!typeMap.has(typeKey)) {
        typeMap.set(typeKey, {
          label: ticket.categoryType,
          typeKey,
          minPrice: price,
        });
      } else {
        const existing = typeMap.get(typeKey)!;
        if (price < existing.minPrice) {
          existing.minPrice = price;
        }
      }
    });

    return Array.from(typeMap.values())
      .sort((a, b) => {
        if (a.typeKey === "2nd_class" && b.typeKey === "1st_class") return -1;
        if (a.typeKey === "1st_class" && b.typeKey === "2nd_class") return 1;
        return a.label.localeCompare(b.label);
      })
      .map((item) => ({
        label: item.label,
        typeKey: item.typeKey,
        price: `ab CHF ${Math.round(item.minPrice)}`,
      }));
  }, [offer?.ticketCategories]);

  const hasMultipleCategoryTypes = categoryTypeOptions.length > 1;

  useEffect(() => {
    if (
      showCategoryTypeSelector &&
      !forceCategoryType &&
      isSelected &&
      categoryTypeOptions.length > 0 &&
      !categoryType &&
      setCategoryType
    ) {
      setCategoryType(categoryTypeOptions[0].typeKey);
    }
  }, [
    showCategoryTypeSelector,
    forceCategoryType,
    isSelected,
    categoryTypeOptions,
    categoryType,
    setCategoryType,
  ]);

  useEffect(() => {
    if (!showCategoryTypeSelector && !forceCategoryType) return;
    if (!isSelected || !activeCategoryType) return;

    Object.entries(ticketSelections).forEach(([key, oldTicketCategoryId]) => {
      const currentTicket = offer?.ticketCategories.find(
        (t) => t.ticketCategoryId === oldTicketCategoryId
      );

      if (!currentTicket) return;
      if (currentTicket.categoryTypeKey === activeCategoryType) return;

      const matchingTickets = offer?.ticketCategories.filter((ticket) => {
        const audienceMatch = ticket.audience === currentTicket.audience;
        const discountMatch =
          (ticket.discountType || null) ===
          (currentTicket.discountType || null);
        const categoryMatch = ticket.categoryTypeKey === activeCategoryType;

        return audienceMatch && discountMatch && categoryMatch;
      });

      if (matchingTickets && matchingTickets.length > 0) {
        const cheapestMatchingTicket = matchingTickets.reduce(
          (lowest, current) => {
            return parseFloat(current.price.amount) <
              parseFloat(lowest.price.amount)
              ? current
              : lowest;
          }
        );

        setTicketSelection(key, cheapestMatchingTicket.ticketCategoryId, {
          audience: cheapestMatchingTicket.audience,
          discountType: cheapestMatchingTicket.discountType || null,
          categoryTypeKey: cheapestMatchingTicket.categoryTypeKey || null,
        });
      }
    });
  }, [
    showCategoryTypeSelector,
    forceCategoryType,
    isSelected,
    activeCategoryType,
    ticketSelections,
    offer,
    setTicketSelection,
  ]);

  // @todo CAPI offers: restore the capiOffer lookup, the "hide offers without a
  // CAPI translation" gate, and the missing-translation log once the
  // /api/web/offers/{locale}/ proxy is wired in src/dev-server.ts.

  return (
    <Card
      className={cn("cursor-pointer", {
        "is-selected outline-primary": isSelected,
      })}
      onClick={handleClick}
      id={`offer-${uniqueId || offer?.offerId}`}
    >
      <div className="mb-4 flex items-center">
        <div
          className={cn(
            "me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-solid text-white transition duration-100 ease-in",
            {
              "border-primary bg-primary": isSelected,
              "border-gray-400": !isSelected,
            }
          )}
        >
          {isSelected && (
            <span className="h-4 w-4 rounded-full border-2 border-solid border-white" />
          )}
        </div>
        <div className="flex flex-col text-left">
          <p className="relative text-lg font-medium text-black">
            {offer?.offerLabel}
            {categoryTypeLabel && `, ${categoryTypeLabel}`}
          </p>
        </div>
      </div>
      <div className="-mx-4 mb-4 grid gap-4 border-b-0 border-l-0 border-r-0 border-t border-solid border-gray-200 px-4 pt-4 empty:hidden">
        {/* @todo CAPI offer description: restore capiOffer.description once the
            /api/web/offers/{locale}/ proxy is wired in src/dev-server.ts. */}
        {(offer?.durationInHours?.length ||
          offer?.validities?.length ||
          offer?.openingHours) && (
          <Usps
            activity={
              {
                ...activity,
                summary: {
                  ...activity?.summary,
                  durationInHours: offer.durationInHours,
                  validities: offer.validities,
                  openingHours: offer.openingHours,
                },
              } as TActivity
            }
            type="sm"
            usps={["duration", "openingHours", "validity"]}
          />
        )}
        {isSelected && showCategoryTypeSelector && hasMultipleCategoryTypes && (
          <div className="-mx-4 space-y-3" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center gap-2">
              <div className="h-px w-full bg-gray-200" />
              <Text
                size="sm"
                black
                className="font-medium uppercase text-gray-700"
              >
                {t("tickets.travelClass")}
              </Text>
              <div className="h-px w-full bg-gray-200" />
            </div>
            <CategoryTypeSelector
              className="px-4"
              options={categoryTypeOptions}
              selectedType={categoryType || null}
              onSelect={(type) => {
                if (setCategoryType) {
                  setCategoryType(type);
                }
              }}
            />
          </div>
        )}
      </div>
      <PriceDisplay
        price={Number(price)}
        from
        prefix={showPrefix}
        className="-mx-4 mt-1 border-b-0 border-l-0 border-r-0 border-t border-solid border-gray-200 px-4 pt-4"
      />
    </Card>
  );
};
