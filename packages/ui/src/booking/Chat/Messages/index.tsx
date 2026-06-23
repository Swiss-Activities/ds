import { Fragment } from "react";
import Markdown from "react-markdown";
import { Skeleton, Text } from "@swiss-activities/ui";
import { useChatStore } from "../store";
import { I } from "../../components/I";
import { StaticImage } from "../../components/StaticImage";
import { cn } from "../../utils/css/cn";
import { useHydration } from "../../utils/ui/useHydration";
import { useI18n } from "../../utils/i18n/useI18n";
import { useMessagesStore } from "../../store/messages";

const Bot = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-[28px] w-[28px]">
        <StaticImage
          src="/assets/chat/ai.png"
          className="h-[28px] w-[28px] rounded-full border border-solid border-gray-200"
          public
          fill
        />
      </div>
      <Text bold black>
        Housibot
      </Text>
    </div>
  );
};

const RatingDisplay = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center gap-1 py-1">
      {[...Array(5)].map((_, i) => {
        const color = i < rating ? "#ffc107" : "#e4e5e9";
        return (
          <I key={i} icon="star-sharp-solid" className="text-sm" color={color} fill={color} />
        );
      })}
      <Text size="xs" className="ms-1 text-white">
        ({rating}/5)
      </Text>
    </div>
  );
};

const InitialMessage = () => {
  const { t } = useI18n();
  const type = useChatStore((state) => state.type);

  return (
    <div className="w-full space-y-1">
      <Bot />
      <Text>{type === "review" ? t("chat.welcomeReview") : t("chat.welcome")}</Text>
    </div>
  );
};

export const Messages = () => {
  const isHydrated = useHydration();
  const { getCurrentConversation } = useMessagesStore();
  const currentConversationId = useMessagesStore((state) => state.currentConversationId);
  const isConversationPending = useChatStore((state) => state.isConversationPending);

  const currentConversation = isHydrated ? getCurrentConversation() : null;
  const currentMessages = currentConversation?.messages || [];
  const isPending = currentConversationId ? isConversationPending(currentConversationId) : false;

  return (
    <div className="mx-auto grid max-w-[600px] grid-cols-1 flex-col gap-6">
      <InitialMessage />
      {isHydrated &&
        currentMessages.map((message, index, arr) => {
          const isLast = index === arr.length - 1;

          return (
            <Fragment key={index}>
              <div
                id={`chat-message-${index}`}
                className={cn("w-full", {
                  "ms-auto max-w-max rounded-2xl bg-blue px-2.5 py-1.5 text-white":
                    message.sender === "user",
                })}
              >
                <div className="w-full space-y-1">
                  {message.sender === "bot" ? (
                    <>
                      <Bot />
                      <div className="prose-sa">
                        <Markdown
                          components={{
                            a: ({ href, children, ...props }) => (
                              <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                                {children}
                              </a>
                            ),
                          }}
                        >
                          {message.message}
                        </Markdown>
                      </div>
                    </>
                  ) : (
                    <div>
                      <Text className={cn({ "text-white": message.sender === "user" })}>
                        {message.message}
                      </Text>
                      {message.rating && <RatingDisplay rating={message.rating} />}
                    </div>
                  )}
                </div>
              </div>
              {message.sender === "user" && isLast && isPending ? (
                <div className="space-y-1">
                  <Bot />
                  <Skeleton
                    loading={true}
                    amount={2}
                    className="!mt-2"
                    classNameItems="w-full !h-8"
                  />
                </div>
              ) : null}
            </Fragment>
          );
        })}
    </div>
  );
};
