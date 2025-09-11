"use client";

import React, { useEffect, useRef, useState } from "react";

import TourBackdrop from "./TourBackdrop";
import TourBox from "./TourBox";
import { allTourSteps } from "../../data/tour-steps";
import { useChatStore } from "../../store/chatStore";
import { useTourStore } from "@/app/store/tourStore";

const UserTour: React.FC = () => {
  const tourActive = useTourStore((state) => state.tourActive);
  const currentStepIndex = useTourStore((state) => state.currentStepIndex);
  const setTourActive = useTourStore((state) => state.setTourActive);
  const setCurrentStepIndex = useTourStore(
    (state) => state.setCurrentStepIndex
  );
  const resetChatMessages = useChatStore((state) => state.resetChatMessages);

  const [tourPosition, setTourPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const [targetRect, setTargetRect] = useState<DOMRect | null>(null);
  const currentTargetElement = useRef<HTMLElement | null>(null);

  const currentTourStep = allTourSteps[currentStepIndex];

  useEffect(() => {
    const cleanupBorder = () => {
      if (currentTargetElement.current) {
        currentTargetElement.current.classList.remove(
          "border-2",
          "border-red-300",
          "box-border",
          "rounded"
        );
      }
    };

    if (currentTourStep?.targetSelector) {
      const targetElement = document.querySelector<HTMLElement>(
        currentTourStep.targetSelector
      );

      if (targetElement) {
        const rect = targetElement.getBoundingClientRect();
        setTargetRect(rect);
        currentTargetElement.current = targetElement;

        targetElement.classList.add(
          "border-2",
          "border-red-300",
          "box-border",
          "rounded"
        );

        setTourPosition({
          top: rect.top + window.scrollY + rect.height + 10,
          left: rect.left + window.scrollX,
        });
      } else {
        setTargetRect(null);
        setTourPosition(null);
        cleanupBorder();
      }
    } else {
      setTargetRect(null);
      setTourPosition(null);
      cleanupBorder();
    }

    return cleanupBorder;
  }, [currentTourStep]);

  if (!tourActive) {
    return null;
  }

  const handleClose = () => {
    setTourActive(false);
    resetChatMessages();
    setCurrentStepIndex(0);
  };

  return (
    <>
      <TourBackdrop targetRect={targetRect} onClose={handleClose} />

      <TourBox
        currentTourStepText={currentTourStep?.text || ""}
        filteredTourStepsLength={allTourSteps.length}
        tourPosition={tourPosition}
      />
    </>
  );
};

export default UserTour;
