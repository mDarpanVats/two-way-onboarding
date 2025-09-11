import React, { useEffect, useRef, useState } from "react";

import { useChatStore } from "../../store/chatStore";

const ChatDisplay: React.FC = () => {
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatMessages = useChatStore((state) => state.chatMessages);
  const [isExpanded, setIsExpanded] = useState(true);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  if (isClosed) {
    return null;
  }

  return (
    <div className="border border-gray-300 rounded-md shadow-sm mb-2.5">
      <div className="flex justify-between items-center bg-gray-100 p-2.5 rounded-t-md">
        <h4 className="text-sm font-semibold">{"Chat"}</h4>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            {isExpanded ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            )}
          </button>
          <button
            type="button"
            title="Close Chat"
            onClick={() => setIsClosed(true)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`overflow-y-auto ${isExpanded ? "p-2.5 max-h-64" : "h-0"}`}
        ref={chatContainerRef}
      >
        {chatMessages.map((msg, index) => (
          <div
            key={index}
            className={`flex mb-1.25 ${
              msg.sender === "user" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-3 py-2 rounded-xl max-w-[80%] break-words ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatDisplay;
