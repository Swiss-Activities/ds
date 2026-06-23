import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../../Card";
import { Availabilities } from "../Availabilities";
import { useAvailabilities } from "../Availabilities/hooks";
import { useBookingStore } from "../../store";
import { Text } from "@swiss-activities/ui";
import { Usps } from "../../components/Usps";
import type { TActivity } from "../../types/activity";
import type { TOfferBooking } from "../../types/offerBooking";
import { Button } from "@swiss-activities/ui";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";
import { useDataLayer } from "../../utils/thirdParty/dataLayerSend";
import { useOffersCapi } from "../../query/offers/getOffersCapi";

export const Offer = (offer: TOfferBooking) => {
  const { dataLayer } = useDataLayer();
  const { t } = useI18n();
  const { data } = useOffersCapi();
  const {
    activity,
    availability,
    offer: selectedOffer,
    setOffer,
    setTickets,
    tickets,
  } = useBookingStore(
    useShallow((state) => ({
      availability: state.availability,
      activity: state.activity,
      offer: state.offer,
      setOffer: state.setOffer,
      setTickets: state.setTickets,
      tickets: state.tickets,
    }))
  );
  const { setAvailability } = useAvailabilities();

  const handleClick = () => {
    if (offer?.availabilities?.length === 1) {
      setAvailability(offer?.availabilities[0]);
    }
    setOffer(offer);

    const mappedTickets: Record<string, number> = {};
    const selectedTicketCategories = selectedOffer?.ticketCategories;
    const offerTicketCategories = offer?.ticketCategories;

    Object.entries(tickets).forEach(([key, value]) => {
      const hash = selectedTicketCategories?.find(
        (e) => `${e.ticketCategoryId}` === `${key}`
      )?.ticketCategoryHash;
      const updatedTicketCategoryId = offerTicketCategories?.find(
        (e) => `${e.ticketCategoryHash}` === `${hash}`
      )?.ticketCategoryId;

      if (!updatedTicketCategoryId) return;

      mappedTickets[updatedTicketCategoryId] = value;
    });

    setTickets(mappedTickets);

    dataLayer({
      obj: {
        event: "select_offer",
      },
    });
  };

  const capiOffer = data?.find(
    (o) => `${offer?.contentApiOfferId}` === `${o.id}`
  );

  const price = useMemo(() => {
    let price = offer?.startingPrice?.formatted;

    if (!offer?.availabilities) {
      return price;
    }

    if (offer?.availabilities.length === 1) {
      return price;
    }

    const offerAvailability = offer?.availabilities.find(
      (a) => a.availabilityId === availability?.availabilityId
    );

    if (offerAvailability) {
      price = offerAvailability.startingPrice?.formatted;
    }

    return price;
  }, [availability, offer]);

  return (
    <Card
      className={cn({
        "outline-primary": offer?.offerId === selectedOffer?.offerId,
      })}
    >
      <Button
        variant="block"
        onClick={handleClick}
        id={`offer-${offer?.offerId}`}
        className="w-full flex-col items-stretch p-0"
      >
        <div className="flex">
          <div
            className={cn(
              "me-2 flex h-5 w-5 shrink-0 items-center justify-center rounded rounded-full border border-solid text-white transition duration-100 ease-in",
              {
                "border-primary bg-primary":
                  offer?.offerId === selectedOffer?.offerId,
                "border-gray-400": offer?.offerId !== selectedOffer?.offerId,
              }
            )}
          >
            {offer?.offerId === selectedOffer?.offerId && (
              <span className="h-4 w-4 rounded-full border-2 border-solid border-white" />
            )}
          </div>
          <div className="flex flex-col text-left">
            <Text black className="relative -top-px">
              {offer?.offerLabel || ""}
            </Text>
            {capiOffer && capiOffer?.description && (
              <Text size="sm2" className="mt-1">
                {capiOffer.description}
              </Text>
            )}
            <Usps
              className="mt-2"
              activity={
                {
                  ...activity,
                  summary: {
                    ...activity?.summary,
                    durationInHours: offer.durationInHours,
                    validities: offer.validities,
                    openingHours:
                      offer.availabilities?.length === 1
                        ? offer.availabilities?.[0]?.openingHours
                        : null,
                  },
                } as TActivity
              }
              type="xs"
              usps={["duration", "openingHours", "validity"]}
            />
          </div>
        </div>
        <div className="mt-1 flex">
          <Text size="md2" className="ms-auto">
            {`${t("filter.card.from")} ${price}`}
          </Text>
        </div>
      </Button>
      {offer?.availabilities && offer?.offerId === selectedOffer?.offerId && (
        <Availabilities {...{ offer }} />
      )}
    </Card>
  );
};
