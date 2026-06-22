import { SegmentedControl } from "@swiss-activities/ui";
import { useI18n } from "../utils/i18n/useI18n";

export type ClassPickerProps = {
  value: "1st_class" | "2nd_class";
  onChange: (value: "1st_class" | "2nd_class") => void;
  has1stClass?: boolean;
  has2ndClass?: boolean;
  className?: string;
};

export const ClassPicker = ({
  value,
  onChange,
  has1stClass = true,
  has2ndClass = true,
  className,
}: ClassPickerProps) => {
  const { t } = useI18n();

  return (
    <SegmentedControl
      value={value}
      onChange={onChange}
      options={[
        {
          value: "2nd_class",
          label: t("Transport.class.second"),
          disabled: !has2ndClass,
        },
        {
          value: "1st_class",
          label: t("Transport.class.first"),
          disabled: !has1stClass,
        },
      ]}
      className={className}
      variant="rounded"
    />
  );
};
