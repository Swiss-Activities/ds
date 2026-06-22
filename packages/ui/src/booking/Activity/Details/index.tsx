import { useMemo } from "react";
import { GemIcon } from "lucide-react";
import { DurationOrValidities } from "../../components/DurationOrValidities";
import { I } from "../../components/I";
import { Text } from "@swiss-activities/ui";
import { TActivity } from "../../types/activity";
import { toISO } from "../../utils/dates/toISO";
import { useI18n } from "../../utils/i18n/useI18n";

type DetailsProps = {
  activity: TActivity;
  reservation: any;
  dontDisplay?: (
    | "offer"
    | "date"
    | "time"
    | "validity"
    | "tickets"
    | "price"
  )[];
};

export const Details = ({
  reservation,
  activity,
  dontDisplay = [],
}: DetailsProps) => {
  const { t } = useI18n();
  const isTransport = reservation.ticketReservations[0]?.sbbOfferData?.title;
  const tickets = useMemo(() => {
    const map: Record<string, number> = {};
    for (const ticket of reservation?.ticketReservations || []) {
      const suffix = isTransport
        ? ` - ${t(ticket.ticketCategory?.categoryType === "1st_class" ? "Transport.class.first" : "Transport.class.second")}`
        : "";
      const key = `${ticket.ticketCategoryLabel || ticket.description}${suffix}`;
      map[key] = (map[key] || 0) + 1;
    }
    return map;
  }, [reservation?.ticketReservations, isTransport, t]);

  const time = () => {
    const resTime = toISO(reservation.startsAt, { time: true });

    return activity?.id === "1658"
      ? t("general.oneMonth")
      : resTime === "00:00"
        ? t("booking.fullDay")
        : resTime;
  };

  return (
    <>
      <div className="mt-3 flex flex-col space-y-1.5 lg:mt-0">
        {[
          {
            icon: (
              <span className="relative inline-block h-4 w-3">
                <GemIcon className="size-4" />
              </span>
            ),
            label: t("activity.widget.navTicket"),
            text: (
              <span className="flex flex-col">
                {Object.entries(tickets).map(([desc, count]) => (
                  <span key={desc}>{`${count} x ${desc}`}</span>
                ))}
              </span>
            ),
            condition: !dontDisplay.includes("tickets"),
          },
          {
            icon: <I icon="calendar-days" />,
            label: t("UI.date"),
            text: toISO(reservation.startsAt, { dateString: true }),
            condition: !dontDisplay.includes("date"),
          },
          {
            icon: <I icon="clock" />,
            label: t("activity.widget.time"),
            text: time(),
            condition: !reservation?.validity && !dontDisplay.includes("time"),
          },
          {
            icon: <I icon="hourglass" />,
            label: t("usps.validity.title"),
            text: (
              <DurationOrValidities
                activity={
                  {
                    summary: {
                      validities: [reservation?.validity],
                    },
                  } as TActivity
                }
                durations={[reservation?.validity]}
              />
            ),
            condition:
              reservation?.validity && !dontDisplay.includes("validity"),
          },
          {
            icon: <I icon="credit-card" />,
            label: t("filter.price"),
            text: reservation.totalPrice.formatted,
            condition: !dontDisplay.includes("price"),
          },
        ]
          .filter((item) => item.condition)
          .map((item, index) => {
            return (
              <Text
                key={`cart-${index}`}
                className="flex gap-4 !text-sm font-medium text-black"
              >
                <span className="flex min-w-[100px] items-start lg:min-w-[120px]">
                  <span className="flex items-center">
                    <span className="relative flex text-gray-500">
                      {item.icon}
                    </span>
                    <span className="ms-2 inline-block text-gray-700">
                      {item.label}
                    </span>
                  </span>
                </span>
                <span>{item.text}</span>
              </Text>
            );
          })}
      </div>
    </>
  );
};
