import { MouseEvent } from "react";
import { PlusIcon, Trash2 } from "lucide-react";
import { Loader, Text } from "@swiss-activities/ui";
import { useChatStore } from "../store";
import { Button, ButtonProps } from "../../ui/Button";
import { getLocalizedTimeAgo } from "../../utils/dates/getLocalizedTimeAgo";
import { useI18n } from "../../utils/i18n/useI18n";
import { useMessagesStore } from "../../store/messages";

const NewChat = (props: ButtonProps) => {
  const { t } = useI18n();
  const { createNewConversation } = useMessagesStore();

  const handleCreateNew = () => createNewConversation();

  return (
    <Button
      id="chat-new-header"
      variant="secondary"
      className="w-max"
      onClick={handleCreateNew}
      {...props}
    >
      <PlusIcon className="h-4" />
      {t("chat.newChat")}
    </Button>
  );
};

export const Chats = () => {
  const { locale, t } = useI18n();
  const { setCurrentConversation, deleteConversation, setChatsOpen } = useMessagesStore();
  const conversations = useMessagesStore((state) => state.conversations);
  const isConversationPending = useChatStore((state) => state.isConversationPending);

  const defaultConversations = conversations.filter((conv) => conv.type !== "review");

  const sortedConversations = [...defaultConversations].sort(
    (a, b) => new Date(b.lastMessageAt).getTime() - new Date(a.lastMessageAt).getTime()
  );

  const handleSelectConversation = (conversationId: string) => {
    setCurrentConversation(conversationId);
    setChatsOpen(false);
  };

  const handleDeleteConversation = (e: MouseEvent, conversationId: string) => {
    e.stopPropagation();
    deleteConversation(conversationId);
  };

  if (sortedConversations.length === 0) {
    return (
      <div className="flex h-full flex-col space-y-4">
        <Text size="md" bold>
          {t("chat.noChatsYet")}
        </Text>
        <NewChat />
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-[600px] space-y-4">
        <Text size="md" bold>
          {t("chat.chats")}
        </Text>
        <div className="space-y-2">
          {sortedConversations.map((conversation) => {
            const lastBotMessage = conversation.messages.slice(-1)[0];
            const preview = lastBotMessage?.message;
            const isPending = isConversationPending(conversation.id);

            return (
              <div
                key={conversation.id}
                id={`chat-${conversation.id}`}
                className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-center justify-center gap-2 rounded-lg bg-gray-100 p-1"
              >
                <Button
                  variant="secondary"
                  className="h-auto w-full flex-col items-start justify-start !bg-white px-3 py-2 shadow-sm"
                  onClick={() => handleSelectConversation(conversation.id)}
                >
                  <Text
                    size="sm"
                    className="line-clamp-1 max-w-full overflow-hidden text-ellipsis text-left"
                  >
                    {preview}
                  </Text>
                  <Text size="xs" className="whitespace-nowrap text-gray-500">
                    {getLocalizedTimeAgo(conversation.lastMessageAt, locale)}
                  </Text>
                </Button>
                {isPending ? (
                  <div className="flex size-10 shrink-0 items-center justify-center">
                    <Loader size="base" />
                  </div>
                ) : (
                  <Button
                    id={`chat-delete-${conversation.id}`}
                    size="icon"
                    variant="ghost"
                    className="shrink-0 text-primary transition-opacity sm:opacity-0 sm:group-hover:opacity-100"
                    onClick={(e) => handleDeleteConversation(e, conversation.id)}
                  >
                    <Trash2 className="m-auto size-4 text-red-600" />
                  </Button>
                )}
              </div>
            );
          })}
        </div>
        <NewChat id="new-chat" />
      </div>
    </div>
  );
};
