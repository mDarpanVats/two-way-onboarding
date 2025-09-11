import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface TourState {
  tourActive: boolean;
  currentStepIndex: number;
  searchTerm: string;
  setTourActive: (active: boolean) => void;
  setCurrentStepIndex: (index: number) => void;
  setSearchTerm: (term: string) => void;
}

export const useTourStore = create<TourState>()(
  immer((set) => ({
    tourActive: true,
    currentStepIndex: 0,
    searchTerm: '',
    setTourActive: (active) => set((state) => { state.tourActive = active; }),
    setCurrentStepIndex: (index) => set((state) => { state.currentStepIndex = index; }),
    setSearchTerm: (term) => set((state) => { state.searchTerm = term; }),
  }))
);
