import { create } from "zustand";

export type ChatType = "default" | "review";

export type ChatStore = {
  inputValue: string;
  setInputValue: (inputValue: ChatStore["inputValue"]) => void;
  type: ChatType;
  setType: (type: ChatType) => void;
  rating: number;
  setRating: (rating: number) => void;
  sentActivityIds: Set<string>;
  addSentActivityId: (activityId: string) => void;
  isActivityIdSent: (activityId: string) => boolean;
  pendingConversationIds: Set<string>;
  setPending: (conversationId: string, isPending: boolean) => void;
  isConversationPending: (conversationId: string) => boolean;
  reset: () => void;
};

export const useChatStore = create<ChatStore>((set, get) => ({
  inputValue: "",
  setInputValue: (inputValue) => set({ inputValue }),
  type: "default",
  setType: (type) => set({ type }),
  rating: 5,
  setRating: (rating) => set({ rating }),
  sentActivityIds: new Set(),
  addSentActivityId: (activityId) => {
    const { sentActivityIds } = get();
    const newSet = new Set(sentActivityIds);
    newSet.add(activityId);
    set({ sentActivityIds: newSet });
  },
  isActivityIdSent: (activityId) => {
    const { sentActivityIds } = get();
    return sentActivityIds.has(activityId);
  },
  pendingConversationIds: new Set(),
  setPending: (conversationId, isPending) => {
    const { pendingConversationIds } = get();
    const newSet = new Set(pendingConversationIds);
    if (isPending) {
      newSet.add(conversationId);
    } else {
      newSet.delete(conversationId);
    }
    set({ pendingConversationIds: newSet });
  },
  isConversationPending: (conversationId) => {
    return get().pendingConversationIds.has(conversationId);
  },
  reset: () => set({ type: "default", rating: 5 }),
}));
