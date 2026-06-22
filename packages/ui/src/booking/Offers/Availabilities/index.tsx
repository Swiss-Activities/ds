import type { MouseEvent } from "react";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../../Card";
import { useAvailabilities } from "./hooks";
import { Title } from "../../Title";
import { useBookingStore } from "../../store";
import { Text } from "@swiss-activities/ui";
import { TOfferBooking } from "../../types/offerBooking";
import { Button } from "@swiss-activities/ui";
import { toISO } from "../../utils/dates/toISO";
import { useI18n } from "../../utils/i18n/useI18n";

type AvailabilitiesProps = {
  card?: boolean;
  offer: TOfferBooking;
};

export const Availabilities = ({ card, offer }: AvailabilitiesProps) => {
  const { t } = useI18n();
  const { availability } = useBookingStore(
    useShallow((state) => ({
      availability: state.availability,
    }))
  );
  const { setAvailability } = useAvailabilities();

  if (
    offer?.availabilities.length === 1 &&
    offer?.availabilities.every((e) => e?.isAllDay)
  ) {
    return null;
  }

  const content = (
    <div className="grid w-full grid-cols-4 gap-2 lg:grid-cols-5">
      {offer?.availabilities.map((a) => (
        <Button
          id={`availability-${a?.availabilityId}`}
          variant={
            availability?.availabilityId === a.availabilityId
              ? "default"
              : "secondary"
          }
          key={a.availabilityId}
          onClick={(e: MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();
            setAvailability(a);
          }}
          size="sm"
          className="availability flex h-auto w-full flex-col p-1.5"
        >
          {toISO(a.startsAt, {
            time: true,
          })}
          <span className="block w-full !text-[10px] opacity-75">
            {a.capacity} {t("activity.widget.free")}
          </span>
        </Button>
      ))}
    </div>
  );

  if (card) {
    return (
      <div>
        <Title>{t("activity.widget.offerTimeSelect")}</Title>
        <Card>{content}</Card>
      </div>
    );
  }

  return (
    <div className="mt-2 flex w-full flex-col items-start">
      <Text className="mb-1">{t("activity.widget.offerTimeSelect")}</Text>
      {content}
    </div>
  );
};
