import { ArrowLeftRight, Clock } from "lucide-react";
import { Card } from "../../../../Card";
import { Text } from "@swiss-activities/ui";
import { useI18n } from "../../../../utils/i18n/useI18n";

type TransferProps = {
  arrivalTime: string;
  departureTime: string;
};

export const Transfer = ({ arrivalTime, departureTime }: TransferProps) => {
  const { t } = useI18n();

  const arrival = new Date(arrivalTime);
  const departure = new Date(departureTime);
  const waitMinutes = Math.round(
    (departure.getTime() - arrival.getTime()) / 60000
  );

  return (
    <Card paddingNone className="p-3">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center gap-2">
          <ArrowLeftRight size={14} className="text-gray-600" />
          <Text size="sm" className="text-gray-700">
            {t("Transport.switch")}
          </Text>
        </div>
        <div className="flex items-center gap-1.5 text-gray-600">
          <Clock size={14} />
          <Text size="sm" className="text-gray-600">
            {waitMinutes} {t("Transport.duration.minutes")}
          </Text>
        </div>
      </div>
    </Card>
  );
};
