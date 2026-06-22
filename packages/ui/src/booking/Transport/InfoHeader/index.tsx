import { useMemo } from "react";
import { useShallow } from "zustand/react/shallow";
import { EditButton as Button } from "../../Edit/Button";
import { useProductsTicketCategories } from "../Tickets/hooks";
import { useTransportStore } from "../store";
import { useBookingStore } from "../../store";
import { I } from "../../components/I";
import { Button as ButtonIcon } from "@swiss-activities/ui";
import { cn } from "../../utils/css/cn";
import { useI18n } from "../../utils/i18n/useI18n";

export const InfoHeader = () => {
  const { t } = useI18n();
  const { offer, reservation, isInlineCheckout, isRebook } = useBookingStore(
    useShallow((state) => ({
      offer: state.offer,
      reservation: state.reservation,
      isInlineCheckout: state.isInlineCheckout,
      isRebook: state.isRebook,
    }))
  );
  const {
    active,
    setActive,
    ticketsAudiences,
    selectedProductId,
    selectedUpgradeIds,
    tripType,
    visitedSteps,
  } = useTransportStore(
    useShallow((state) => ({
      active: state.active,
      setActive: state.setActive,
      ticketsAudiences: state.ticketsAudiences,
      selectedProductId: state.selectedProductId,
      selectedUpgradeIds: state.selectedUpgradeIds,
      tripType: state.tripType,
      visitedSteps: state.visitedSteps,
    }))
  );
  const { products } = useProductsTicketCategories();

  const shouldShowTickets = visitedSteps.products === true;
  const shouldShowProducts = visitedSteps.personalized === true;

  const ticketDisplayString = useMemo(() => {
    const entries = Object.entries(ticketsAudiences).filter(
      ([_, count]) => count > 0
    );

    if (entries.length === 0) return "";

    const parts = entries.map(([audience, count]) => {
      const ticket = offer?.ticketCategories?.find(
        (t: any) => t.audience === audience
      );
      const label = ticket?.label?.audience || audience;

      return `${count} ${label}`;
    });

    return parts.join(", ");
  }, [ticketsAudiences, offer]);

  const productDisplayString = useMemo(() => {
    if (!selectedProductId || !products?.length) return "";

    const selectedProduct = products.find((p) => p.id === selectedProductId);
    if (!selectedProduct) return "";

    const colonIndex = selectedProduct.title.indexOf(":");
    const mainTitle =
      colonIndex > -1
        ? selectedProduct.title.substring(0, colonIndex)
        : selectedProduct.title;

    const selectedUpgrades = products.filter((p) =>
      selectedUpgradeIds.includes(p.id)
    );

    let result = mainTitle;

    if (selectedUpgrades.length > 0) {
      const upgradeNames = selectedUpgrades.map((p) => {
        const colonIndex = p.title.indexOf(":");
        return colonIndex > -1 ? p.title.substring(0, colonIndex) : p.title;
      });
      result = `${mainTitle} + ${upgradeNames.join(", ")}`;
    }

    if (tripType === "roundTrip") {
      result = `${result}, ${t("Transport.roundTrip")}`;
    }

    return result;
  }, [selectedProductId, selectedUpgradeIds, products, tripType, t]);

  return (
    <div className="mt-2">
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
      {!reservation &&
        ((ticketDisplayString && shouldShowTickets) ||
          (productDisplayString && shouldShowProducts)) && (
          <div className="-mx-4 -mb-1 mt-4 border-b-0 border-e-0 border-s-0 border-t border-solid border-gray-200 pe-5 ps-4 pt-2.5">
            {ticketDisplayString && shouldShowTickets ? (
              <Button
                icon={<I icon="user" />}
                selected={ticketDisplayString}
                onClick={() => setActive("tickets")}
                active="tickets"
              />
            ) : null}
            {productDisplayString && shouldShowProducts ? (
              <Button
                icon={<I icon="ticket" />}
                selected={productDisplayString}
                onClick={() => setActive("products")}
                active="products"
              />
            ) : null}
          </div>
        )}
    </div>
  );
};
