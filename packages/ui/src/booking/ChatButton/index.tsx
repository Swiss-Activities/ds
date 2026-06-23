"use client";

import { BotMessageSquareIcon } from "lucide-react";
import { Button } from "@swiss-activities/ui";
import { useI18n } from "../utils/i18n/useI18n";

type ChatButtonProps = {
  activity?: boolean;
  className?: string;
  iconOnly?: boolean;
  onClick?: () => void;
};

export const ChatButton = ({
  activity = false,
  className,
  iconOnly = false,
  onClick,
}: ChatButtonProps) => {
  const { t } = useI18n();
  const label = t(activity ? "general.questionsChatActivity" : "general.questionsChatBooking");

  if (iconOnly) {
    return (
      <Button
        type="transparent"
        onClick={onClick}
        aria-label={label}
        icon={<BotMessageSquareIcon size={16} />}
        className={className}
      />
    );
  }

  return (
    <Button type="transparent" onClick={onClick} className={className}>
      <BotMessageSquareIcon size={16} className="relative top-0.5 me-1.5 inline" />
      <span className="relative -top-px">{label}</span>
    </Button>
  );
};
