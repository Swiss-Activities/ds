import { Deposits } from "../Deposits";
import type { CartStore } from "../store";
import { Text } from "@swiss-activities/ui";
import type { TReservation } from "../../types/reservation";
import { useI18n } from "../../utils/i18n/useI18n";

type SummaryProps = {
  cart: CartStore["cart"];
  className?: string;
  rebate?: boolean;
  serviceFee?: boolean;
  reservations: TReservation[];
};

export const Summary = ({
  cart,
  className,
  rebate = true,
  serviceFee = true,
  reservations,
}: SummaryProps) => {
  const { t } = useI18n();

  return (
    <div className={className}>
      <Deposits {...{ reservations }} />
      {serviceFee ? (
        <>
          <Text
            size="xs"
            className="col-span-2 mb-2 flex items-center justify-between"
          >
            {t("general.cartAmount")}
            <span>{`${cart.total.currency} ${(
              Number(cart.total.amount) -
              Number(cart?.customerServiceFee?.amount || "0.00") +
              Number(cart?.rebatesTotal?.amount || "0.00")
            ).toFixed(2)}`}</span>
          </Text>
          <Text
            size="xs"
            className="col-span-2 mb-2 flex items-center justify-between"
          >
            Service Fee
            <span>{cart?.customerServiceFee?.formatted}</span>
          </Text>
        </>
      ) : null}
      {rebate && cart?.rebateCodes?.length ? (
        <>
          <Text
            size="xs"
            className="col-span-2 mb-2 flex items-center justify-between"
          >
            {t("general.partSum")}
            <span>{`${cart.total.currency} ${(
              Number(cart.total.amount) -
              Number(cart?.customerServiceFee?.amount || "0.00") +
              Number(cart?.rebatesTotal?.amount || "0.00") +
              Number(cart?.customerServiceFee?.amount || "0.00")
            ).toFixed(2)}`}</span>
          </Text>
          <Text
            size="xs"
            className="col-span-2 mb-2 flex items-center justify-between"
          >
            {t("general.rebate")} ({cart.rebateCodes.join(", ")})
            <span>
              -{cart.total.currency}{" "}
              {Number(cart.rebatesTotal.amount).toFixed(2)}
            </span>
          </Text>
        </>
      ) : null}
      <div className="grid grid-cols-2">
        <Text className="truncate font-medium text-gray-700">
          <span className="text-gray-700">
            {t("activity.widget.totalPrice")}
          </span>
        </Text>
        <Text size="default" className="self-end justify-self-end font-semibold">
          {`${cart.total.currency} ${(
            Number(cart?.total?.amount || "0.00") -
            (!serviceFee
              ? Number(cart?.customerServiceFee?.amount || "0.00")
              : 0) +
            (!rebate ? Number(cart?.rebatesTotal?.amount || "0.00") : 0)
          ).toFixed(2)}`}
        </Text>
      </div>
    </div>
  );
};
