import ChatDisplay from "./ChatDisplay";
import Image from "next/image";
import React from "react";
import TourControls from "./TourControls";
import TourSearchInput from "./TourSearchInput";
import { useChatStore } from "../../store/chatStore";
import { useTourStore } from "../../store/tourStore";

type TourBoxProps = {
  currentTourStepText: string;
  filteredTourStepsLength: number;
  tourPosition: { top: number; left: number } | null;
};

const TourBox: React.FC<TourBoxProps> = ({
  currentTourStepText,
  filteredTourStepsLength,
  tourPosition,
}) => {
  const { currentStepIndex, searchTerm, setTourActive, setSearchTerm } =
    useTourStore();
  const { chatMessages, addChatMessage } = useChatStore();

  const handleSendMessage = async () => {
    if (searchTerm.length > 2) {
      try {
        const response = await fetch("/api/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            systemMessage: `You are a helpful assistant. the user is asking about the tour steps, here are the details of the tour steps:
             ${currentTourStepText}`,
            message: searchTerm,
            chatHistory: chatMessages,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("OpenAI API response:", data);
        addChatMessage({ sender: "user", text: searchTerm });
        addChatMessage({ sender: "ai", text: data.response });
      } catch (error) {
        console.error("Error calling OpenAI API:", error);
        addChatMessage({ sender: "user", text: searchTerm });
        addChatMessage({
          sender: "ai",
          text: "Error: Could not get a response.",
        });
      }
    }
    setSearchTerm("");
  };

  const handleClose = () => {
    setTourActive(false);
  };
  return (
    <div
      className="absolute w-[300px] bg-white border
       border-gray-300 rounded-lg shadow-md  z-[1000] 
       font-sans text-sm text-gray-800"
      style={{
        top: tourPosition?.top || "auto",
        left: tourPosition?.left || "auto",
        bottom: tourPosition ? "auto" : "20px",
        right: tourPosition ? "auto" : "20px",
      }}
    >
      <div className="flex justify-between items-center mb-2.5 bg-gradient-to-br from-amber-700 to-yellow-200 p-2 rounded-t-lg">
        <h3 className="m-0 text-base">
          Step {currentStepIndex + 1} of {filteredTourStepsLength}
        </h3>
        <div>
          <button title="Close Tour" type="button" onClick={handleClose}>
            <Image src="/icons/close.svg" alt="send" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="mb-3">{currentTourStepText}</p>

        {chatMessages.length > 0 && <ChatDisplay />}

        <div className="flex items-center mb-2.5 justify-between gap-5">
          <TourSearchInput />
          <button
            type="button"
            title="Send Message"
            onClick={handleSendMessage}
            disabled={searchTerm.length <= 2}
          >
            <Image
              src="/icons/send-message.svg"
              alt="send"
              width={20}
              height={20}
              className={`dark:text-white rotate-90 rtl:-rotate-90 ${
                searchTerm.length <= 2
                  ? "  cursor-not-allowed"
                  : "  cursor-pointer"
              }`}
            />
          </button>
        </div>
      </div>
      <TourControls filteredTourStepsLength={filteredTourStepsLength} />
    </div>
  );
};

export default TourBox;
