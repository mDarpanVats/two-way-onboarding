interface ChatMessage {
  sender: 'user' | 'ai';
  text: string;
}

export function formatChatHistory(messages: ChatMessage[]): string {
  return messages.map(msg => `${msg.sender === 'user' ? 'Human' : 'AI'}: ${msg.text}`).join('\n');
}

