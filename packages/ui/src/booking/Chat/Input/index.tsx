import { FormEvent, KeyboardEvent } from "react";
import { ArrowRight } from "lucide-react";
import { useShallow } from "zustand/react/shallow";
import { useChatMutation } from "../query";
import { useChatStore } from "../store";
import { RatingUser } from "../../components/RatingUser";
import { Button } from "../../ui/Button";
import { Textarea } from "../../ui/Textarea";
import { useI18n } from "../../utils/i18n/useI18n";
import { useMessagesStore } from "../../store/messages";

export const Input = () => {
  const { t } = useI18n();

  const { type, inputValue, setInputValue, rating, setRating } = useChatStore(
    useShallow((state) => ({
      type: state.type,
      inputValue: state.inputValue,
      setInputValue: state.setInputValue,
      rating: state.rating,
      setRating: state.setRating,
    }))
  );

  const { getCurrentConversation } = useMessagesStore();
  const isChatsOpen = useMessagesStore((state) => state.isChatsOpen);
  const currentConversationId = useMessagesStore((state) => state.currentConversationId);
  const currentConversation = getCurrentConversation();
  const isConversationPending = useChatStore((state) => state.isConversationPending);

  const hasUserMessages =
    currentConversation?.messages?.some((message) => message.sender === "user") || false;

  const chatMutation = useChatMutation();
  const chatIsPending =
    !isChatsOpen && currentConversationId && isConversationPending(currentConversationId);

  const handleInput = (e: FormEvent<HTMLTextAreaElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (inputValue.trim() && !chatIsPending) {
        chatMutation.mutate({});
      }
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue.trim() && !chatIsPending) {
      chatMutation.mutate({});
    }
  };

  const showRating = type === "review" && !hasUserMessages;

  return (
    <div className="w-full pb-2 lg:pb-4">
      {showRating && (
        <div className="mb-2 px-6">
          <RatingUser initialRating={rating} onRating={setRating} />
        </div>
      )}
      <form className="relative w-full" onSubmit={handleSubmit}>
        <div className="mx-auto w-[calc(100%-1rem)] max-w-[calc(600px+1.5rem)] rounded-3xl border border-solid border-gray-200 bg-gray-50/90 p-2 backdrop-blur lg:w-[calc(100%-2rem)]">
          <Textarea
            className="scrollbar-chat !h-auto max-h-[350px] resize-none rounded-2xl border !border-b-0 border-solid border-gray-200 bg-white p-4 pb-8 pe-12 !text-base shadow focus:border-gray-200"
            placeholder={t("chat.typeMessage")}
            value={inputValue}
            onInput={handleInput}
            onKeyDown={handleKeyDown}
            id="chat-input"
          />
          <Button
            type="submit"
            size="icon"
            className="absolute end-4 top-4 rounded-xl"
            disabled={chatIsPending ? true : !inputValue.trim()}
            loading={!!chatIsPending}
          >
            <ArrowRight />
          </Button>
        </div>
      </form>
    </div>
  );
};
