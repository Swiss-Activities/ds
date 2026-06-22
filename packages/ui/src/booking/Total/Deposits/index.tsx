import { useDeposits } from "../hooks";
import { Text } from "@swiss-activities/ui";
import { padRight } from "../../utils/data/padRight";
import { useI18n } from "../../utils/i18n/useI18n";

export const Deposits = () => {
  const { t } = useI18n();
  const { deposits, currency } = useDeposits();

  if (!Object.values(deposits || {}).length) return null;

  return (
    <div className="col-span-2">
      <Text size="xs">{t("activity.widget.taxes")}</Text>
      {Object.values(deposits || {}).map((item) => {
        return (
          <div className="grid grid-cols-[1fr,auto]" key={item.label}>
            <span className="text-[11px] font-medium">{`${item.amount} × ${item.label}`}</span>
            <Text size="xs" className="justify-self-end">
              {`${currency} ${padRight(item.amount * item.value)}`}
            </Text>
          </div>
        );
      })}
    </div>
  );
};
