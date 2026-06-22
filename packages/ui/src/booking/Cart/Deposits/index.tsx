import { useDeposits } from "./useDeposits";
import { Text } from "@swiss-activities/ui";
import { TReservation } from "../../types/reservation";
import { padRight } from "../../utils/data/padRight";
import { useI18n } from "../../utils/i18n/useI18n";

export type DepositsProps = {
  reservations: TReservation[];
};

export const Deposits = ({ reservations }: DepositsProps) => {
  const { t } = useI18n();

  const deposits = useDeposits({
    reservations,
  });

  if (!Object.values(deposits?.obj || {}).length) return null;

  return (
    <div className="col-span-2 mb-2">
      <Text size="xs">{t("activity.widget.taxes")}</Text>
      {Object.values(deposits?.obj || {}).map((item: any) => {
        return (
          <div className="grid grid-cols-[1fr,auto]" key={item.label}>
            <span className="text-[11px] font-medium">{`${item.amount} × ${item.label}`}</span>
            <Text size="xs" className="justify-self-end">
              {`${deposits?.currency} ${padRight(item.amount * item.value)}`}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
