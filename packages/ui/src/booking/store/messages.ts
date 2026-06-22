import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ChatType } from "../stubs";
import { TActivity } from "../types/activity";

export type Message = {
  sessionId: string;
  message: string;
  messageType: "text-only";
  humanHandoff: boolean;
  auditError: boolean;
  auditErrorReason: string;
  sender: "bot" | "user";
  activityIds: string[];
  carousel?: { data: TActivity[] };
  rating?: number;
};

export type Conversation = {
  id: string;
  messages: Message[];
  createdAt: string;
  lastMessageAt: string;
  title?: string;
  type: ChatType;
};

export type MessagesStore = {
  conversations: Conversation[];
  currentConversationId: string | null;
  isChatsOpen: boolean;
  addMessage: (message: Message) => void;
  clearCurrentConversation: () => void;
  clearAllConversations: () => void;
  removeMessage: (index: number) => void;
  setCurrentConversation: (conversationId: string | null) => void;
  createNewConversation: (type?: ChatType) => string;
  deleteConversation: (conversationId: string) => void;
  getCurrentConversation: () => Conversation | null;
  getConversationById: (conversationId: string) => Conversation | null;
  cleanupEmptyConversations: () => void;
  setChatsOpen: (isOpen: boolean) => void;
  toggleChats: () => void;
};

const generateConversationId = (): string => {
  return `conv-${Math.random().toString(36).substr(2, 9)}`;
};

export const useMessagesStore = create<MessagesStore>()(
  persist(
    (set, get) => ({
      conversations: [],
      currentConversationId: null,
      isChatsOpen: false,

      addMessage: (message) => {
        const { currentConversationId, conversations } = get();
        const targetConversationId = message.sessionId || currentConversationId;

        if (!targetConversationId) {
          const newConversationId = generateConversationId();

          const newConversation: Conversation = {
            id: newConversationId,
            messages: [message],
            createdAt: new Date().toISOString(),
            lastMessageAt: new Date().toISOString(),
            type: "default",
          };

          set({
            conversations: [...conversations, newConversation],
            currentConversationId: newConversationId,
          });
          return;
        }

        set((state) => ({
          conversations: state.conversations.map((conv) =>
            conv.id === targetConversationId
              ? {
                  ...conv,
                  messages: [...conv.messages, message],
                  lastMessageAt: new Date().toISOString(),
                }
              : conv
          ),
        }));
      },

      clearCurrentConversation: () => {
        const { currentConversationId } = get();
        if (!currentConversationId) return;

        set((state) => ({
          conversations: state.conversations.map((conv) =>
            conv.id === currentConversationId ? { ...conv, messages: [] } : conv
          ),
        }));
      },

      clearAllConversations: () =>
        set({
          conversations: [],
          currentConversationId: null,
        }),

      removeMessage: (index) => {
        const { currentConversationId } = get();
        if (!currentConversationId) return;

        set((state) => ({
          conversations: state.conversations.map((conv) =>
            conv.id === currentConversationId
              ? {
                  ...conv,
                  messages: conv.messages.filter((_, i) => i !== index),
                }
              : conv
          ),
        }));
      },

      setCurrentConversation: (conversationId) =>
        set({ currentConversationId: conversationId }),

      createNewConversation: (type = "default") => {
        const newConversationId = generateConversationId();
        const newConversation: Conversation = {
          id: newConversationId,
          messages: [],
          createdAt: new Date().toISOString(),
          lastMessageAt: new Date().toISOString(),
          type,
        };

        set((state) => ({
          conversations: [...state.conversations, newConversation],
          currentConversationId: newConversationId,
          isChatsOpen: false,
        }));

        return newConversationId;
      },

      deleteConversation: (conversationId) => {
        const { currentConversationId } = get();

        set((state) => {
          const newConversations = state.conversations.filter(
            (conv) => conv.id !== conversationId
          );
          const newCurrentId =
            currentConversationId === conversationId
              ? newConversations[0]?.id || null
              : currentConversationId;

          return {
            conversations: newConversations,
            currentConversationId: newCurrentId,
          };
        });
      },

      getCurrentConversation: () => {
        const { conversations, currentConversationId } = get();
        return (
          conversations.find((conv) => conv.id === currentConversationId) ||
          null
        );
      },

      getConversationById: (conversationId) => {
        const { conversations } = get();
        return conversations.find((conv) => conv.id === conversationId) || null;
      },

      cleanupEmptyConversations: () => {
        const { conversations, currentConversationId } = get();
        const newConversations = conversations.filter(
          (conv) => conv.messages.length > 0
        );

        const newCurrentId =
          newConversations.find((conv) => conv.id === currentConversationId)
            ?.id ||
          newConversations[0]?.id ||
          null;

        set({
          conversations: newConversations,
          currentConversationId: newCurrentId,
        });
      },

      setChatsOpen: (isOpen) => {
        if (isOpen) {
          get().cleanupEmptyConversations();
        }
        set({ isChatsOpen: isOpen });
      },

      toggleChats: () => {
        const { isChatsOpen } = get();
        if (!isChatsOpen) {
          get().cleanupEmptyConversations();
        }
        set((state) => ({ isChatsOpen: !state.isChatsOpen }));
      },
    }),
    {
      name: "chatMessages",
      version: 3,
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.cleanupEmptyConversations();
        }
      },
    }
  )
);
