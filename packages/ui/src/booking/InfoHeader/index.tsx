import { useEffect } from "react";
import dayjs from "dayjs";
import { useShallow } from "zustand/react/shallow";
import { useTime } from "../Calendar/hooks";
import { Cancellable } from "../Cancellable";
import { Card } from "../Card";
import { EditButton as Button } from "../Edit/Button";
import { InfoHeaderDropdown } from "./Dropdown";
import { InfoHeaderTitle } from "./Title";
import { useOriginalOffer } from "../OffersV2/hooks";
import { usePersonalizedOptions } from "../PersonalizedOptions/hooks";
import { useTickets } from "../Tickets/hooks";
import { useTotal } from "../Total/hooks";
import { useBookingStore } from "../store";
import { I } from "../components/I";
import { Rating } from "../components/Rating";
import { useSearchStore } from "../store/search";
import { TActivity } from "../types/activity";
import { Button as ButtonIcon } from "@swiss-activities/ui";
import { cn } from "../utils/css/cn";
import { niceDate } from "../utils/dates/niceDate";
import { useI18n } from "../utils/i18n/useI18n";
import { useGetActivityOffers } from "../query/activity/getActivityOffers";

export const InfoHeader = () => {
  const { t, locale } = useI18n();
  const {
    active,
    activity,
    availability,
    categoryType,
    dateBooking,
    flowType,
    isInlineCheckout,
    isRebook,
    markStepAsVisited,
    offer,
    reservation,
    setActive,
    ticketSelections,
    ticketsAudiences,
    visitedSteps,
  } = useBookingStore(
    useShallow((state) => ({
      active: state.active,
      activity: state.activity,
      availability: state.availability,
      categoryType: state.categoryType,
      dateBooking: state.date,
      flowType: state.flowType,
      isInlineCheckout: state.isInlineCheckout,
      isRebook: state.isRebook,
      markStepAsVisited: state.markStepAsVisited,
      offer: state.offer,
      reservation: state.reservation,
      setActive: state.setActive,
      ticketSelections: state.ticketSelections,
      ticketsAudiences: state.ticketsAudiences,
      visitedSteps: state.visitedSteps,
    }))
  );
  const { time } = useTime();
  const { total } = useTotal();
  const { ticketAmount, hasTickets } = useTickets();
  const { personalizedOptionsString, hasPersonalizedOptions } =
    usePersonalizedOptions();
  const [date] = useSearchStore((state) => [state.date]);
  const { originalOffer } = useOriginalOffer();

  const { data: offers } = useGetActivityOffers(
    activity as TActivity,
    { locale },
    flowType === "offers-date"
  );

  const hasCategoryTypes = offer?.ticketCategories?.some(
    (ticket) => ticket.categoryType
  );

  const showOfferButton =
    flowType === "offers-date"
      ? (offers && offers.length > 1) || hasCategoryTypes
      : true;

  const d = flowType === "offers-date" ? dateBooking : date;
  const ticketSelectionsCount = Object.keys(ticketSelections).length;
  const showPersonalizedForOffersDate =
    flowType === "offers-date" ? !!dateBooking && !!availability : true;

  const getAudiencesString = () => {
    if (!originalOffer) return "";

    return Object.entries(ticketsAudiences)
      .filter(([_, count]) => count > 0)
      .map(([audience, count]) => {
        const ticketCategory = originalOffer.ticketCategories.find(
          (ticket) => ticket.audience === audience
        );
        const label = ticketCategory?.label?.audience || audience;
        return `${count} ${label}`;
      })
      .join(", ");
  };

  const getCategoryTypeLabel = () => {
    if (!categoryType || !originalOffer) return "";

    const ticketWithCategoryType = originalOffer.ticketCategories.find(
      (ticket) => ticket.categoryTypeKey === categoryType
    );

    return ticketWithCategoryType?.categoryType || "";
  };

  const getOfferLabel = () => {
    const baseLabel = offer?.offerLabel || "";
    const categoryLabel = getCategoryTypeLabel();

    if (categoryLabel) {
      return `${baseLabel}, ${categoryLabel}`;
    }

    return baseLabel;
  };

  useEffect(() => {
    if (flowType === "offers-date" && active) {
      markStepAsVisited(
        active as "offers" | "tickets" | "date" | "personalized"
      );
    }
  }, [active, flowType, markStepAsVisited]);

  const shouldShowOfferButton = () => {
    if (flowType !== "offers-date") return true;
    return visitedSteps.tickets === true;
  };

  const shouldShowTicketsButton = () => {
    if (flowType !== "offers-date") return true;
    return visitedSteps.date === true;
  };

  const shouldShowDateButton = () => {
    if (flowType !== "offers-date") return true;
    if (!hasPersonalizedOptions) return true;
    return visitedSteps.personalized === true;
  };

  if (!activity) return null;

  return (
    <Card elevation="lg">
      <div className="flex items-center justify-between gap-4">
        <InfoHeaderTitle>{activity?.info?.title}</InfoHeaderTitle>
        <InfoHeaderDropdown />
      </div>
      <Rating {...{ activity }} type="sm" minRating={4} />
      {reservation && !isInlineCheckout && !isRebook && (
        <ButtonIcon
          onClick={() => setActive("trash")}
          variant="ghost"
          className={cn(
            "flex h-auto min-h-7 justify-between gap-2 border-none p-0 px-0 text-dark shadow-none hover:bg-transparent hover:[&_*]:no-underline",
            {
              underline: active === "trash",
            }
          )}
        >
          <I icon="trash-can" />
          {t("general.removeFromCart")}
        </ButtonIcon>
      )}
      <div className="mt-4 empty:hidden">
        {flowType === "offers-date" ? (
          <>
            {offer?.offerId && showOfferButton && shouldShowOfferButton() ? (
              <Button
                icon={<I icon="ticket" />}
                selected={getOfferLabel()}
                onClick={() => setActive("offers")}
                active="offers"
              />
            ) : null}
            {ticketSelectionsCount > 0 &&
            !isRebook &&
            shouldShowTicketsButton() ? (
              <Button
                icon={<I icon="user" />}
                selected={getAudiencesString()}
                onClick={() => setActive("tickets")}
                active="tickets"
              />
            ) : null}
            {d && shouldShowDateButton() ? (
              <Button
                icon={<I icon="calendar-days" />}
                selected={`${niceDate({
                  date: dayjs(d).toDate().toDateString(),
                  locale,
                })}${time ? `, ${time}` : ""}`}
                onClick={() => setActive("date")}
                active="date"
              />
            ) : null}
            {/* {hasPersonalizedOptions &&
            hasTickets &&
            showPersonalizedForOffersDate ? (
              <Button
                icon={<I icon="circle-info" />}
                selected={personalizedOptionsString()}
                onClick={() => setActive("personalized")}
                active="personalized"
              />
            ) : null} */}
          </>
        ) : (
          <>
            {d ? (
              <Button
                icon={<I icon="calendar-days" />}
                selected={`${niceDate({
                  date: dayjs(d).toDate().toDateString(),
                  locale,
                })}${time ? `, ${time}` : ""}`}
                onClick={() => setActive("date")}
                active="date"
              />
            ) : null}
            {offer?.offerId && showOfferButton ? (
              <Button
                icon={<I icon="ticket" />}
                selected={offer?.offerLabel}
                onClick={() => setActive("offers")}
                active="offers"
              />
            ) : null}
            {ticketAmount > 0 && !isRebook ? (
              <Button
                icon={<I icon="user" />}
                selected={`${ticketAmount} ${
                  ticketAmount === 1
                    ? t("general.ticket")
                    : t("general.tickets")
                }${
                  total
                    ? `, ${offer?.ticketCategories[0]?.price?.currency} ${total}`
                    : ""
                }`}
                onClick={() => setActive("tickets")}
                active="tickets"
              />
            ) : null}
            {hasPersonalizedOptions &&
            hasTickets &&
            showPersonalizedForOffersDate ? (
              <Button
                icon={<I icon="circle-info" />}
                selected={personalizedOptionsString()}
                onClick={() => setActive("personalized")}
                active="personalized"
              />
            ) : null}
          </>
        )}
      </div>
      <Cancellable className="-mx-2 -mb-2 mt-3 w-full" />
    </Card>
  );
};
