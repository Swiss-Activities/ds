import { useShallow } from "zustand/react/shallow";
import { Title } from "../Title";
import { Deposits } from "./Deposits";
import { Tickets } from "./Tickets";
import { useTotal } from "./hooks";
import { useBookingStore } from "../store";
import { Text } from "@swiss-activities/ui";
import { Toast } from "../components/Toast";
import { useI18n } from "../utils/i18n/useI18n";

export const Total = () => {
  const { t } = useI18n();
  const { totalWithDeposits } = useTotal();
  const { error } = useBookingStore(
    useShallow((state) => ({
      error: state.error,
    }))
  );

  return (
    <div className="flex flex-col space-y-3">
      <Deposits />
      <Tickets />
      <div className="flex flex-wrap items-center justify-between">
        <Title className="mb-0">{t("activity.widget.totalPrice")}</Title>
        <Text className="ms-auto" size="default">
          CHF {totalWithDeposits}
        </Text>
        {error && (
          <Toast warning className="mt-4">
            {error}
          </Toast>
        )}
      </div>
    </div>
  );
};
