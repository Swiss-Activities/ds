import { Header as DSHeader, Logo } from "@swiss-activities/ui";
import { PlusIcon, MessageSquareIcon } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { useChatStore } from "../store";
import { Button } from "../../ui/Button";
import { useMessagesStore } from "../../store/messages";
import { useI18n } from "../../utils/i18n/useI18n";

export const Header = () => {
  const { t } = useI18n();
  const { createNewConversation, toggleChats } = useMessagesStore();
  const isChatsOpen = useMessagesStore((state) => state.isChatsOpen);
  const { type } = useChatStore(useShallow((state) => ({ type: state.type })));

  const handleCreateNew = () => createNewConversation();

  return (
    <DSHeader className="!sticky !inset-x-auto">
      <DSHeader.Left>
        <Logo size="sm">Chat</Logo>
      </DSHeader.Left>
      {type !== "review" && (
        <DSHeader.Right>
          {!isChatsOpen && (
            <Button variant="ghostAlt" className="rounded-md" onClick={toggleChats}>
              <MessageSquareIcon className="h-4" />
              {t("chat.chats")}
            </Button>
          )}
          <Button
            id="chat-new-header"
            size="icon"
            variant="secondary"
            className="rounded-md"
            onClick={handleCreateNew}
          >
            <PlusIcon className="h-4" />
          </Button>
        </DSHeader.Right>
      )}
    </DSHeader>
  );
};
