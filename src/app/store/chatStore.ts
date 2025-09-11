import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

interface ChatState {
  chatMessages: ChatMessage[];
  addChatMessage: (message: ChatMessage) => void;
  resetChatMessages: () => void;
}

export const useChatStore = create<ChatState>()(
  immer((set) => ({
    chatMessages: [],
    addChatMessage: (message) => set((state) => { state.chatMessages.push(message); }),
    resetChatMessages: () => set((state) => { state.chatMessages = []; }),
  }))
);
