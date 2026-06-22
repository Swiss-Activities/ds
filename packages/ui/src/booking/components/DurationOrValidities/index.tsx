import type { TActivity } from "../../types/activity";
import { useI18n } from "../../utils/i18n/useI18n";
import { formatDurationOrValidities } from "./format";

type DurationProps = {
  activity: TActivity;
  title?: string;
  durations: string[];
};

export const DurationOrValidities = ({
  activity,
  title = "",
  durations,
}: DurationProps) => {
  const { t } = useI18n();

  if (!activity?.summary) return null;

  const prefix = title ? `${title}: ` : "";

  return prefix + formatDurationOrValidities(durations, t);
};
