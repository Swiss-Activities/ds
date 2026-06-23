"use client";

import { BotMessageSquareIcon } from "lucide-react";
import { Button } from "@swiss-activities/ui";
import { Button as ButtonUI } from "../ui/Button";
import { useChat } from "../utils/env/useChat";
import { useI18n } from "../utils/i18n/useI18n";
import { openChat } from "../utils/thirdParty/openChat";

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
  const isChat = useChat();

  if (isChat) return null;

  const label = t(activity ? "general.questionsChatActivity" : "general.questionsChatBooking");

  const handleClick = () => {
    openChat();
    onClick?.();
  };

  if (iconOnly) {
    return (
      <ButtonUI
        size="icon"
        variant="outline"
        onClick={handleClick}
        aria-label={label}
        className={className}
      >
        <BotMessageSquareIcon size={16} className="relative" />
      </ButtonUI>
    );
  }

  return (
    <Button type="transparent" onClick={handleClick} className={className}>
      <BotMessageSquareIcon size={16} className="relative top-0.5 me-1.5 inline" />
      <span className="relative -top-px">{label}</span>
    </Button>
  );
};
