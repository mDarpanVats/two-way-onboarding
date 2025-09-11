import DashboardLayout from "../components/dashboard/DashboardLayout";
import ProfileCard from "../components/dashboard/ProfileCard";
import ProfitCustomerProjects from "../components/dashboard/ProfitCustomerProjects";
import SocialMediaCards from "../components/dashboard/SocialMediaCards";
import StatsCards from "../components/dashboard/StatsCards";
import TrafficChart from "../components/dashboard/TrafficChart";
import TrafficStats from "../components/dashboard/TrafficStats";
import WorldMap from "../components/dashboard/WorldMap";

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-gray-700">Dashboard</h1>
        <div className="bg-indigo-200 border px-4 py-2 rounded mb-2">
          <div
            id="notifications"
            className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4"
            role="alert"
          >
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline">
              {" "}
              You successfully read this important alert message.
            </span>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
              <svg
                className="fill-current h-6 w-6 text-green-500"
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.15a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.029a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.15 2.758 3.15a1.2 1.2 0 0 1 0 1.697z" />
              </svg>
            </span>
          </div>

          <StatsCards />

          <SocialMediaCards />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2">
            <TrafficChart />
            <TrafficStats />
          </div>

          <div className="lg:col-span-1 space-y-4">
            <ProfileCard />
            <ProfitCustomerProjects />
            <WorldMap />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
