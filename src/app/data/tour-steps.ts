export type TourStep = {
  id: number;
  text: string;
  targetSelector?: string;
};

export const allTourSteps: TourStep[] = [
  {
    id: 1,
    text: "Welcome to the app! You can navigate to main features for creating dashbord here",
    targetSelector: "#hamburger-menu",
  },
  {
    id: 2,
    text: "Navbar gives you feature to search content and component, notifications, messages and profile.",
    targetSelector: "#navbar-actions",
  },
  {
    id: 3,
    text: "In the sidebar you can select components to add to your dashboard.",
    targetSelector: "#ui-elements",
  },
  {
    id: 4,
    text: "Icons let you add actionable icons to your components.",
    targetSelector: "#icons",
  },
  {
    id: 5,
    text: "You will be alerted when there your changes are saved.",
    targetSelector: "#notifications",
  },
  {
    id: 6,
    text: "You can see real-time response of your major cards and KPIs in the dashboard area.",
    targetSelector: "#dashboard-area",
  },
  { id: 7, text: "You have completed the tour! Enjoy using the application." },
];
