import type { ReactNode } from "react";
import { Badge as DSBadge } from "@swiss-activities/ui";
import type {
  BadgeSize,
  BadgeVariant,
} from "@swiss-activities/ui/badge/badge.types";
import type { TActivity } from "../../types/activity";
import { useI18n } from "../../utils/i18n/useI18n";

type BadgeProps = {
  activity?: TActivity;
  className?: string;
  size?: BadgeSize;
  type?: BadgeVariant;
  children?: ReactNode;
  text?: boolean;
};

export const Badge = ({
  activity,
  className = "",
  size = "default",
  type = "overlay",
  children = null,
  text = false,
}: BadgeProps) => {
  const { t } = useI18n();

  const variant: BadgeVariant = text ? "text" : type;

  return (activity?.summary?.highDemand && type === "demand") || children ? (
    <DSBadge size={size} variant={variant} className={className}>
      {type === "demand" && t("activity.highDemand")}
      {children ? children : ""}
    </DSBadge>
  ) : null;
};
