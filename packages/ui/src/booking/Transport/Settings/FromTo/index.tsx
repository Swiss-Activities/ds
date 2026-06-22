import { useShallow } from "zustand/react/shallow";
import { useTransportStoreLocal } from "../../store";
import {
  SegmentedControl,
  segmentedControlListStyles,
  segmentedControlTriggerStyles,
} from "@swiss-activities/ui";
import { cn } from "../../../utils/css/cn";
import { useI18n } from "../../../utils/i18n/useI18n";
import { dataLayerSend } from "../../../utils/thirdParty/dataLayerSend";

type FromToProps = {
  displayOnly?: boolean;
};

export const FromTo = ({ displayOnly = false }: FromToProps) => {
  const { t } = useI18n();
  const { direction, setDirection } = useTransportStoreLocal(
    useShallow((state) => ({
      direction: state.direction,
      setDirection: state.setDirection,
    }))
  );

  if (displayOnly) {
    const triggerActiveStyles = "border-primary text-gray-900";
    return (
      <div className={cn(segmentedControlListStyles, "rounded-full")}>
        <span
          className={cn(
            segmentedControlTriggerStyles,
            "rounded-full px-3 py-0.5",
            direction === "from" && triggerActiveStyles
          )}
        >
          {t("Transport.departure")}
        </span>
        <span
          className={cn(
            segmentedControlTriggerStyles,
            "rounded-full px-3 py-0.5",
            direction === "to" && triggerActiveStyles
          )}
        >
          {t("Transport.arrival")}
        </span>
      </div>
    );
  }

  return (
    <SegmentedControl<"from" | "to">
      value={direction}
      onChange={(value) => {
        setDirection(value);
        dataLayerSend({
          data: {
            event: "transport_select_direction",
            transport_direction: value,
          },
          noActivities: true,
          timeout: 0,
        });
      }}
      size="sm"
      options={[
        { value: "from", label: t("Transport.departure") },
        { value: "to", label: t("Transport.arrival") },
      ]}
    />
  );
};
