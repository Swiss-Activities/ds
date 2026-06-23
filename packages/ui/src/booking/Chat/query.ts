import { useMutation } from "@tanstack/react-query";
import { useShallow } from "zustand/react/shallow";
import { useChatStore } from "./store";
import { useBookingStore } from "../store";
import { useMessagesStore } from "../store/messages";
import { useI18n } from "../utils/i18n/useI18n";
import { axiosApiInstanceWithCsrf } from "../query/axios";

type ChatResponse = {
  sessionId: string;
  message: string;
  messageType: "text-only";
  humanHandoff: boolean;
  auditError: boolean;
  auditErrorReason: string;
  sender: "bot";
  activityIds: string[];
};

type ChatMutationOptions = {
  message?: string;
  isSystemMessage?: boolean;
  activityId?: string;
  rating?: number;
};

const sendChatMessage = async (payload: Record<string, unknown>): Promise<ChatResponse> => {
  const response = await axiosApiInstanceWithCsrf.post("/chat/", payload);
  return response.data.output;
};

export const useChatMutation = () => {
  const { locale } = useI18n();
  const { addMessage, createNewConversation, setChatsOpen } = useMessagesStore();
  const currentConversationId = useMessagesStore((state) => state.currentConversationId);
  const isChatsOpen = useMessagesStore((state) => state.isChatsOpen);
  const { type, inputValue, setInputValue, isActivityIdSent, addSentActivityId, setPending } =
    useChatStore(
      useShallow((state) => ({
        type: state.type,
        inputValue: state.inputValue,
        setInputValue: state.setInputValue,
        isActivityIdSent: state.isActivityIdSent,
        addSentActivityId: state.addSentActivityId,
        setPending: state.setPending,
      }))
    );
  const { activity, availability, offer, tickets, personalizedOptionsValues, date } =
    useBookingStore(
      useShallow((state) => ({
        activity: state.activity,
        availability: state.availability,
        offer: state.offer,
        tickets: state.tickets,
        personalizedOptionsValues: state.personalizedOptionsValues,
        date: state.date,
      }))
    );

  return useMutation({
    mutationFn: async (options?: ChatMutationOptions) => {
      const message = options?.message || inputValue;
      const isSystemMessage = options?.isSystemMessage || false;
      const activityId = options?.activityId;
      const rating = options?.rating;

      if (isSystemMessage && activityId && isActivityIdSent(activityId)) {
        return {
          response: null,
          conversationId: currentConversationId || createNewConversation(type),
        };
      }

      let conversationId: string;
      if (isChatsOpen && !isSystemMessage) {
        conversationId = createNewConversation(type);
        setChatsOpen(false);
      } else {
        conversationId = currentConversationId || createNewConversation(type);
      }

      setPending(conversationId, true);

      if (!options?.message) {
        setInputValue("");
      }

      if (!isSystemMessage) {
        addMessage({
          sessionId: conversationId,
          message,
          messageType: "text-only",
          humanHandoff: false,
          auditError: false,
          auditErrorReason: "none",
          sender: "user",
          activityIds: [],
          ...(rating !== undefined && { rating }),
        });
      }

      const url = new URL(window.location.href);
      const bookingId = url.searchParams.get("bookingId");
      const bookingItemId = url.searchParams.get("bit");
      const isReview = type === "review";
      const hasBookingContext = Boolean(activity);

      // The web renderer has no Next __NEXT_DATA__; page + activity context comes
      // from window.__PAGE__ (the shell boot) and the booking store instead.
      const page = (
        window as unknown as { __PAGE__?: { request?: { type?: string; id?: string } } }
      ).__PAGE__;
      const isActivity = page?.request?.type === "detail-activity";
      const isChat = window.location.pathname.includes("/chat/");

      const payload = {
        message,
        sessionId: conversationId,
        pageUrl: window.location.href,
        locale,
        pagePath: window.location.pathname,
        pageTitle: document.title,
        referrer: document.referrer,
        saData: {},
        timestamp: new Date().toISOString(),
        isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        ),
        isActivity,
        isChat,
        ...(isActivity && page?.request?.id ? { activityCapiId: page.request.id } : {}),
        ...(bookingId && { bookingId }),
        ...(isReview && { isReview: true }),
        ...(hasBookingContext
          ? { bookingData: { date, activity, offer, availability, tickets, personalizedOptionsValues } }
          : {}),
        ...(rating !== undefined && { rating }),
        ...(bookingItemId && { bookingItemId }),
      };

      try {
        const response = await sendChatMessage(payload);

        if (isSystemMessage && activityId) {
          addSentActivityId(activityId);
        }

        addMessage({ ...response, sessionId: conversationId });

        return { response, conversationId };
      } finally {
        setPending(conversationId, false);
      }
    },
  });
};
