import { ChangeEvent, Fragment } from "react";
import { X } from "lucide-react";
import { Card } from "../Card";
import { ClassPicker } from "../ClassPicker";
import { Participant } from "../Participants";
import { PriceDisplay } from "../PriceDisplay";
import { Select } from "../components/Form/Select";
import { Button } from "@swiss-activities/ui";
import { Switch } from "../ui/Switch";
import { useI18n } from "../utils/i18n/useI18n";

export type TicketCategoryItem = {
  ticketCategoryId: number;
  minAge: number;
  maxAge?: number;
  occupancy: number;
  audience: string;
  discountType?: string;
  categoryType: string;
  label?: {
    formatted: string;
    audience: string;
    discount: string | null;
    ageRestriction: string;
    occupancy: string | null;
  };
  price?: {
    amount: string;
    currency: string;
    formatted: string;
  };
};

export type GroupedTicket = {
  audience: string;
  minAge: number;
  maxAge?: number;
  minPax?: number | null;
  maxPax?: number | null;
  priceDisplay?: {
    price: number;
    isTotal: boolean;
    useFrom: boolean;
    showPrefix: boolean;
  };
  children: TicketCategoryItem[];
};

export type TicketSelectorProps = {
  ticketCategories: GroupedTicket[];
  ticketsAudiences: Record<string, number>;
  ticketSelections: Record<string, number>;
  ticketClassSelections: Record<string, "1st_class" | "2nd_class">;
  showDiscountedTickets: boolean;
  onToggleDiscountedTickets: (value: boolean) => void;
  onIncrementAudience: (audience: string) => void;
  onDecrementAudience: (audience: string) => void;
  onRemoveParticipant?: (audience: string, index: number) => void;
  onSetTicketSelection: (key: string, ticketCategoryId: number) => void;
  hideClassPicker?: boolean;
  forceFrom?: boolean;
};

export const TicketSelector = ({
  ticketCategories,
  ticketsAudiences,
  ticketSelections,
  ticketClassSelections,
  showDiscountedTickets,
  onToggleDiscountedTickets,
  onIncrementAudience,
  onDecrementAudience,
  onRemoveParticipant,
  onSetTicketSelection,
  hideClassPicker = false,
  forceFrom = false,
}: TicketSelectorProps) => {
  const { t } = useI18n();

  const getCategoryKey = (ticket: any) =>
    ticket.categoryTypeKey || ticket.categoryType;

  const hasAnyDiscounts = ticketCategories.some((category) => {
    const uniqueDiscounts = new Set(
      category.children.map((t) => t.discountType || "null")
    );
    return uniqueDiscounts.size > 1;
  });

  const hasVariablePricing = ticketCategories.some((category) => {
    const pricesByCombo = new Map<string, Set<string>>();

    category.children.forEach((ticket) => {
      if (!ticket.price) return;
      const categoryKey = getCategoryKey(ticket);
      const comboKey = `${categoryKey}+${ticket.discountType || "null"}`;

      if (!pricesByCombo.has(comboKey)) {
        pricesByCombo.set(comboKey, new Set());
      }
      pricesByCombo.get(comboKey)?.add(ticket.price.amount);
    });

    return Array.from(pricesByCombo.values()).some((prices) => prices.size > 1);
  });

  return (
    <div className="space-y-2">
      {ticketCategories.map((ticketCategory) => {
        const amount = ticketsAudiences[ticketCategory.audience] || 0;
        const selectedClass =
          ticketClassSelections[ticketCategory.audience] || "2nd_class";

        const has1stClass = ticketCategory.children.some(
          (t) => getCategoryKey(t) === "1st_class"
        );
        const has2ndClass = ticketCategory.children.some(
          (t) => getCategoryKey(t) === "2nd_class"
        );
        const hasAnyClass = has1stClass || has2ndClass;

        const classFilteredTickets = hasAnyClass
          ? ticketCategory.children.filter(
              (ticket) => getCategoryKey(ticket) === selectedClass
            )
          : ticketCategory.children;

        const uniqueDiscounts = new Set(
          ticketCategory.children.map((t) => t.discountType || "null")
        );
        const hasMultipleDiscounts = uniqueDiscounts.size > 1;

        const shouldShowRows =
          (hasAnyClass && !hideClassPicker) ||
          (hasMultipleDiscounts && showDiscountedTickets);

        const nonDiscountedTickets = classFilteredTickets.filter(
          (ticket) =>
            !ticket.discountType &&
            ticket.price &&
            parseFloat(ticket.price.amount) > 0
        );

        const lowestPriceTicket =
          nonDiscountedTickets.length > 0
            ? nonDiscountedTickets.reduce((lowest, current) => {
                const currentPrice = parseFloat(current.price?.amount || "0");
                const lowestPrice = parseFloat(lowest.price?.amount || "0");
                return currentPrice < lowestPrice ? current : lowest;
              })
            : classFilteredTickets[0];

        return (
          <Card key={ticketCategory.audience}>
            <div className="space-y-3">
              <Participant
                title={
                  ticketCategory.children?.[0]?.label?.audience +
                    `${ticketCategory.children?.[0]?.label?.occupancy ? ` (${ticketCategory.children?.[0]?.label?.occupancy})` : ""}` ||
                  ""
                }
                subtitle={
                  ticketCategory.children?.[0]?.label?.ageRestriction || ""
                }
                amount={`${amount}`}
                onClickMinus={() =>
                  onDecrementAudience(ticketCategory.audience)
                }
                onClickPlus={() => onIncrementAudience(ticketCategory.audience)}
                minusDisabled={amount === 0}
                plusDisabled={
                  ticketCategory.maxPax
                    ? amount >= ticketCategory.maxPax
                    : false
                }
                size="lg"
              />

              {amount > 0 && shouldShowRows && (
                <div className="-mx-4 space-y-3 border-b-0 border-l-0 border-r-0 border-t border-solid border-gray-200 px-4 pt-3">
                  {Array.from({ length: amount }).map((_, index) => {
                    const key = `${ticketCategory.audience}-${index}`;
                    const ticketId = ticketSelections[key];

                    const currentTicket = ticketCategory.children.find(
                      (t) => t.ticketCategoryId === Number(ticketId)
                    );
                    const currentClass = currentTicket
                      ? getCategoryKey(currentTicket)
                      : selectedClass;

                    let currentClassTickets = ticketCategory.children.filter(
                      (t) => getCategoryKey(t) === currentClass
                    );

                    if (!showDiscountedTickets) {
                      currentClassTickets = currentClassTickets.filter(
                        (t) => !t.discountType
                      );
                    }

                    const hasMultipleDiscountsInClass =
                      currentClassTickets.length > 1;

                    return (
                      <Fragment key={key}>
                        {index > 0 && (
                          <div className="-mx-4 h-px w-[calc(100%+32px)] bg-gray-200" />
                        )}
                        <div className="flex items-center justify-between gap-x-4 gap-y-2">
                          <p className="whitespace-nowrap text-sm font-medium text-black">
                            {currentTicket?.label?.audience} {index + 1}
                          </p>
                          <div className="flex items-center gap-2">
                            {hasAnyClass && !hideClassPicker && (
                              <ClassPicker
                                value={currentClass}
                                has1stClass={has1stClass}
                                has2ndClass={has2ndClass}
                                onChange={(newClass) => {
                                  const newClassTickets =
                                    ticketCategory.children.filter(
                                      (t) => getCategoryKey(t) === newClass
                                    );

                                  const ticketsWithSameDiscount =
                                    newClassTickets.filter(
                                      (t) =>
                                        t.discountType ===
                                        currentTicket?.discountType
                                    );

                                  const equivalentTicket =
                                    ticketsWithSameDiscount.length > 0
                                      ? ticketsWithSameDiscount.reduce(
                                          (lowest, current) => {
                                            const currentPrice = parseFloat(
                                              current.price?.amount || "0"
                                            );
                                            const lowestPrice = parseFloat(
                                              lowest.price?.amount || "0"
                                            );
                                            return currentPrice < lowestPrice
                                              ? current
                                              : lowest;
                                          }
                                        )
                                      : newClassTickets.find(
                                          (t) => !t.discountType
                                        );

                                  if (equivalentTicket) {
                                    onSetTicketSelection(
                                      key,
                                      equivalentTicket.ticketCategoryId
                                    );
                                  }
                                }}
                              />
                            )}
                            {hasMultipleDiscountsInClass && (
                              <Select
                                className="h-[40px] w-full text-sm"
                                selected={`${ticketId}`}
                                onChange={(
                                  e: ChangeEvent<HTMLSelectElement>
                                ) => {
                                  onSetTicketSelection(
                                    key,
                                    Number(e.target.value)
                                  );
                                }}
                                options={(() => {
                                  const uniqueDiscountTickets = new Map<
                                    string,
                                    (typeof currentClassTickets)[0]
                                  >();

                                  currentClassTickets.forEach((ticket) => {
                                    const discountKey =
                                      ticket.discountType || "null";
                                    const existing =
                                      uniqueDiscountTickets.get(discountKey);

                                    const ticketPrice = parseFloat(
                                      ticket.price?.amount || "0"
                                    );
                                    const existingPrice = parseFloat(
                                      existing?.price?.amount || "0"
                                    );

                                    if (
                                      !existing ||
                                      ticketPrice < existingPrice
                                    ) {
                                      uniqueDiscountTickets.set(
                                        discountKey,
                                        ticket
                                      );
                                    }
                                  });

                                  return Array.from(
                                    uniqueDiscountTickets.values()
                                  )
                                    .map((ticket) => ({
                                      label:
                                        hasVariablePricing || !ticket.price
                                          ? ticket.label?.discount ||
                                            t("tickets.discounts.noDiscount")
                                          : `${
                                              ticket.label?.discount ||
                                              t("tickets.discounts.noDiscount")
                                            } (${ticket.price.formatted})`,
                                      value: `${ticket.ticketCategoryId}`,
                                      discount: ticket.label?.discount,
                                    }))
                                    .sort((a, b) => {
                                      if (!a.discount && b.discount) return -1;
                                      if (a.discount && !b.discount) return 1;
                                      return a.label.localeCompare(b.label);
                                    });
                                })()}
                                unsorted
                                advanced="desktop"
                                advancedAlign="end"
                                advancedAutoWidth
                              />
                            )}
                            <Button
                              type="button"
                              variant="transparent"
                              size="icon"
                              className="-mr-2"
                              onClick={() => {
                                if (onRemoveParticipant) {
                                  onRemoveParticipant(
                                    ticketCategory.audience,
                                    index
                                  );
                                } else {
                                  onDecrementAudience(ticketCategory.audience);
                                }
                              }}
                              aria-label="Remove participant"
                            >
                              <X className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </Fragment>
                    );
                  })}
                </div>
              )}

              {(() => {
                let price: number;
                let isTotal: boolean;
                let useFrom: boolean;
                let showPrefix: boolean;

                if (ticketCategory.priceDisplay) {
                  price = ticketCategory.priceDisplay.price;
                  isTotal = ticketCategory.priceDisplay.isTotal;
                  useFrom = ticketCategory.priceDisplay.useFrom;
                  showPrefix = ticketCategory.priceDisplay.showPrefix;
                } else {
                  const defaultShowPrefix = ticketCategory.children.every(
                    (t) => t.occupancy === 1
                  );

                  const selectedTicketsForAudience = Object.entries(
                    ticketSelections
                  ).filter(([key]) =>
                    key.startsWith(`${ticketCategory.audience}-`)
                  );

                  if (selectedTicketsForAudience.length > 0) {
                    price = selectedTicketsForAudience.reduce(
                      (sum, [, ticketId]) => {
                        const ticket = ticketCategory.children.find(
                          (t) => t.ticketCategoryId === ticketId
                        );
                        return sum + parseFloat(ticket?.price?.amount || "0");
                      },
                      0
                    );
                    isTotal = true;
                  } else {
                    price = lowestPriceTicket?.price
                      ? Number(lowestPriceTicket.price.amount)
                      : 0;
                    isTotal = false;
                  }

                  useFrom = forceFrom || hasVariablePricing;
                  showPrefix = defaultShowPrefix || isTotal;
                }

                return (
                  <PriceDisplay
                    price={price}
                    from={useFrom}
                    total={isTotal}
                    prefix={showPrefix}
                    className="-mx-4 flex items-end justify-end space-y-3 border-b-0 border-l-0 border-r-0 border-t border-solid border-gray-200 px-4 pb-0.5 pt-4"
                  />
                );
              })()}
            </div>
          </Card>
        );
      })}
      {hasAnyDiscounts && (
        <label className="flex cursor-pointer items-center gap-4 pt-4">
          <Switch
            checked={showDiscountedTickets}
            onCheckedChange={onToggleDiscountedTickets}
          />
          <p className="text-base font-medium leading-none text-black">
            {t("tickets.showDiscounts")}
          </p>
        </label>
      )}
    </div>
  );
};
