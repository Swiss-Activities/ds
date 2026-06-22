import { useMemo, useState } from "react";
import { useShallow } from "zustand/react/shallow";
import { Participant } from "../Participant";
import { SwissHalfFareCard } from "../SwissHalfFareCard";
import { useTickets } from "../hooks";
import { useBookingStore } from "../../store";
import { TOfferBooking } from "../../types/offerBooking";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";

type TicketProps = {
  item: TOfferBooking["ticketCategories"][number];
};

export const Single = ({ item }: TicketProps) => {
  const { availability } = useBookingStore(
    useShallow((state) => ({
      availability: state.availability,
    }))
  );
  const { ticketAmount: tickets } = useTickets();
  const capacity = availability?.capacity;

  if (
    capacity &&
    item.occupancy > capacity &&
    tickets <= (capacity as number)
  ) {
    return null;
  }

  return (
    <Participant ticket={item}>
      {item?.label?.discount?.includes("Swiss Half Fare") ? (
        <SwissHalfFareCard />
      ) : null}
    </Participant>
  );
};

const Group = () => {
  const { t } = useI18n();
  const { offer } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
    }))
  );
  const { filteredTickets } = useTickets();

  const groupedTickets = useMemo(() => {
    const groups: {
      [key: string]: TOfferBooking["ticketCategories"][number][];
    } = {};
    offer?.categoryTypes?.forEach((categoryType) => {
      if (!groups[categoryType]) {
        groups[categoryType] = [];
      }
    });

    filteredTickets?.map((item: any) => {
      if (item.categoryType) {
        groups[item.categoryType].push(item);
      }
    });

    return Object.fromEntries(
      Object.entries(groups).sort(([a], [b]) => {
        if (a.includes("2") && !b.includes("2")) return -1;
        if (!a.includes("2") && b.includes("2")) return 1;
        return 0;
      })
    );
  }, [filteredTickets, offer]);

  const [selected, setSelected] = useState(Object.keys(groupedTickets)[0]);

  return (
    <>
      <div
        className={cn(
          "my-4 grid grid-cols-2 rounded-lg border border-solid border-gray-200 bg-white p-1",
          {
            "grid-cols-1": Object.keys(groupedTickets).length === 1,
          }
        )}
      >
        {Object.keys(groupedTickets).map((item) => {
          const hasTickets = groupedTickets?.[item]?.length;
          return (
            <button
              key={item}
              className={cn(
                "relative h-8 cursor-pointer rounded border-none bg-white text-xs text-black transition duration-100 ease-in",
                {
                  "!bg-light font-semibold !text-primary": selected === item,
                  "!text-black": selected !== item,
                  "pointer-events-none !text-gray-400": !hasTickets,
                }
              )}
              onClick={() => {
                setSelected(item);
              }}
              disabled={!hasTickets}
            >
              <span className="relative flex select-none justify-center gap-1">
                {item}
                {hasTickets ? (
                  ""
                ) : (
                  <span className="lowercase"> ({t("general.soldOut")})</span>
                )}
              </span>
            </button>
          );
        })}
      </div>
      <div className="space-y-2">
        {(groupedTickets?.[selected] as object[])?.map((item: any) => (
          <Single {...{ item }} key={`ticketCat-${item?.ticketCategoryId}`} />
        ))}
      </div>
    </>
  );
};

export const TicketGroup = () => {
  const { filteredTickets } = useTickets();

  return (
    <div>
      {(filteredTickets || []).length >= 1 && (
        <div className="space-y-2">
          {[
            ...new Set(
              filteredTickets?.map((e) => e.categoryType).filter((e) => e)
            ),
          ].length >= 1 ? (
            <Group />
          ) : (
            filteredTickets?.map((item) => (
              <Single
                {...{ item }}
                key={`ticketCat-${item?.ticketCategoryId}`}
              />
            ))
          )}
        </div>
      )}
    </div>
  );
};
