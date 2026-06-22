import { type ChangeEvent, useEffect, useMemo, useRef } from "react";
import { useShallow } from "zustand/react/shallow";
import { useAvailabilities } from "../Offers/Availabilities/hooks";
import { SelectableCard } from "../SelectableCard";
import { SelectableCardGrid } from "../SelectableCardGrid";
import { Title } from "../Title";
import { useBookingStore } from "../store";
import { Select } from "../components/Form/Select";
import type { TOfferBooking } from "../types/offerBooking";
import { cn } from "../utils/css/cn";
import { toISO } from "../utils/dates/toISO";
import { useI18n } from "../utils/i18n/useI18n";
import { useGetAvailabilitiesByQuantities } from "../query/activity/getAvailabilitiesByQuantities";

type AvailabilitiesProps = {
  offer: TOfferBooking;
};

export const Availabilities = ({ offer }: AvailabilitiesProps) => {
  const { t, locale } = useI18n();
  const { date, availability, ticketSelectionsMetadata } = useBookingStore(
    useShallow((state) => ({
      date: state.date,
      availability: state.availability,
      ticketSelectionsMetadata: state.ticketSelectionsMetadata,
    }))
  );
  const { setAvailability } = useAvailabilities();
  const containerRef = useRef<HTMLDivElement>(null);
  const prevDateRef = useRef<string | null>(null);

  const ticketAudiencesForQuery = useMemo(() => {
    const grouped: Record<
      string,
      {
        audience: string;
        discountType: string | null;
        categoryTypeKey: string | null;
        quantity: number;
      }
    > = {};

    Object.values(ticketSelectionsMetadata).forEach((metadata) => {
      const groupKey = `${metadata.audience}+${metadata.discountType}+${metadata.categoryTypeKey}`;

      if (!grouped[groupKey]) {
        grouped[groupKey] = {
          audience: metadata.audience,
          discountType: metadata.discountType,
          categoryTypeKey: metadata.categoryTypeKey,
          quantity: 0,
        };
      }
      grouped[groupKey].quantity += 1;
    });

    return Object.values(grouped).map((item) => {
      const obj: any = {
        audience: item.audience,
        quantity: item.quantity,
      };

      if (item.discountType) {
        obj.discountType = item.discountType;
      }

      if (item.categoryTypeKey) {
        obj.categoryType = item.categoryTypeKey;
      }

      return obj;
    });
  }, [ticketSelectionsMetadata]);

  const { isLoading } = useGetAvailabilitiesByQuantities(
    locale,
    offer?.offerId ? [offer.offerId] : [],
    ticketAudiencesForQuery,
    date,
    !!date && !!offer?.offerId
  );

  useEffect(() => {
    const dateChanged = prevDateRef.current !== date;

    if (
      !isLoading &&
      dateChanged &&
      offer?.availabilities &&
      offer.availabilities.length > 0
    ) {
      prevDateRef.current = date;

      requestAnimationFrame(() => {
        setTimeout(() => {
          const scrollContainer =
            containerRef.current?.closest(".scrollbar-chat");
          if (scrollContainer) {
            scrollContainer.scrollTo({
              top: scrollContainer.scrollHeight,
              behavior: "smooth",
            });
          }
        }, 150);
      });
    }
  }, [offer?.availabilities?.length, date, isLoading]);

  if (
    offer?.availabilities.length === 1 &&
    offer?.availabilities.every((e) => e?.isAllDay)
  ) {
    return null;
  }

  const hasMultipleAvailabilities = offer?.availabilities.length > 2;

  const hasDifferingPrices = useMemo(() => {
    if (!offer?.availabilities || offer.availabilities.length < 2) return false;
    const prices = offer.availabilities
      .map((a) => a.price?.amount)
      .filter(Boolean);
    if (prices.length < 2) return false;
    return new Set(prices).size > 1;
  }, [offer?.availabilities]);

  return (
    <div ref={containerRef}>
      <Title>{t("activity.widget.offerTimeSelect")}</Title>
      <div
        className={cn("availabilities", {
          "bg-white": hasMultipleAvailabilities,
        })}
      >
        {hasMultipleAvailabilities ? (
          <Select
            check
            name="availability"
            className="w-full"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              const selectedAvailability = offer?.availabilities.find(
                (a) => `${a.availabilityId}` === `${e.target.value}`
              );
              if (selectedAvailability) {
                setAvailability(selectedAvailability);
              }
            }}
            options={[
              {
                value: "",
                label: t("general.pleaseSelect"),
                disabled: true,
              },
              ...offer?.availabilities.map((a) => ({
                value: a.availabilityId.toString(),
                label: `${toISO(a.startsAt, { time: true })}${a.capacity ? ` - ${a.capacity} ${t("activity.widget.free")}` : ""}${hasDifferingPrices && a.price ? ` - ${a.price.currency} ${a.price.amount}` : ""}`,
              })),
            ]}
            selected={availability?.availabilityId?.toString()}
            advanced="desktop"
            unsorted
          />
        ) : (
          <SelectableCardGrid>
            {offer?.availabilities.map((a) => (
              <SelectableCard
                id={`availability-${a?.availabilityId}`}
                key={a.availabilityId}
                isSelected={availability?.availabilityId === a.availabilityId}
                onClick={() => setAvailability(a)}
                className="availability"
                card
                topText={
                  <>
                    {toISO(a.startsAt, { time: true })}
                    {hasDifferingPrices && a.price && (
                      <span className="text-muted ml-2 text-sm font-medium">
                        {a.price.currency} {a.price.amount}
                      </span>
                    )}
                  </>
                }
                bottomText={
                  a.capacity
                    ? `${a.capacity} ${t("activity.widget.free")}`
                    : t("activity.widget.free")
                }
              />
            ))}
          </SelectableCardGrid>
        )}
      </div>
    </div>
  );
};
