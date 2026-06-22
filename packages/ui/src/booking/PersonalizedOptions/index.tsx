import { useEffect } from "react";
import { useShallow } from "zustand/react/shallow";
import { Card } from "../Card";
import { Inputs } from "./Inputs";
import { usePersonalizedOptions } from "./hooks";
import { useTickets } from "../Tickets/hooks";
import { Title } from "../Title";
import { useBookingStore } from "../store";
import { Text } from "@swiss-activities/ui";
import { useI18n } from "../utils/i18n/useI18n";

export const PersonalizedOptions = () => {
  const { t } = useI18n();
  let guestCount = 0;
  const { flowType, offer, reservation } = useBookingStore(
    useShallow((state) => ({
      flowType: state.flowType,
      offer: state.offer,
      reservation: state.reservation,
    }))
  );
  const { tickets } = useTickets();
  const {
    personalizedOptions,
    personalizedOptionsValues,
    setPersonalizedOptionsValues,
  } = usePersonalizedOptions();

  useEffect(() => {
    if (!reservation) return;
    setPersonalizedOptionsValues(personalizedOptionsValues);
  }, [reservation]);

  if (!personalizedOptions?.length) return null;

  return (
    <div>
      <Title>{t("general.personalizeTickets")}</Title>
      <div className="space-y-6">
        {personalizedOptions?.some((e) => e.scope === "reservation") && (
          <Card className="space-y-3">
            <Inputs scope="reservation" id="reservation" />
          </Card>
        )}
        {personalizedOptions?.some((e) => e.scope === "guest") && (
          <div className="space-y-3">
            {Object.entries(tickets)
              .filter(([_, v]) => v !== 0)
              .map(([id, v]) => {
                return Array.from({ length: v as number }).map((_, index) => {
                  guestCount = guestCount + 1;
                  const ticketCategory = offer?.ticketCategories.find(
                    (e) => `${e.ticketCategoryId}` === `${Number(id)}`
                  );

                  return (
                    <Card key={`guest-${guestCount}`}>
                      <Text black bold className="mb-2.5">
                        {`${ticketCategory?.label?.audience} ${guestCount}${ticketCategory?.label?.discount || ticketCategory?.label?.ageRestriction ? ` (${ticketCategory?.label?.discount || ""}${ticketCategory?.label?.discount ? " / " : ""}${ticketCategory?.label?.ageRestriction})` : ""}`}
                      </Text>
                      <div className="space-y-3">
                        <Inputs
                          {...{ index, id, ticketCategory }}
                          scope="guest"
                        />
                      </div>
                    </Card>
                  );
                });
              })}
          </div>
        )}
      </div>
    </div>
  );
};
