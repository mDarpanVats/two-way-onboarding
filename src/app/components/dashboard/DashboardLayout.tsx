import Image from "next/image";
import React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 text-white flex flex-col">
        <div className="p-4 text-xl font-bold border-b border-gray-700">
          Admin
        </div>
        <nav className="flex-1 p-4">
          <ul>
            <li className="mb-2">
              <a
                href="#"
                className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
              >
                <span className="mr-2">📊</span> Dashboard
              </a>
            </li>
            <li id="ui-elements" className="mb-2">
              <h3 className="text-s uppercase text-gray-200 mb-2">
                UI ELEMENTS
              </h3>
              <ul className="bg-gray-700 p-2 rounded">
                <li className="mb-2 ">
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
                  >
                    <span className="mr-2">📦</span> Components
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
                  >
                    <span className="mr-2">📋</span> Tables
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
                  >
                    <span className="mr-2">📝</span> Forms
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <h3 className="text-s uppercase text-gray-200 mb-2">ICONS</h3>
              <ul className="bg-gray-700 p-2 rounded">
                <li className="mb-2">
                  <a
                    id="icons"
                    href="#"
                    className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
                  >
                    <span className="mr-2">⭐</span> Icons
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
                  >
                    <span className="mr-2">💡</span> Widgets
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
                  >
                    <span className="mr-2">📈</span> Charts
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
                  >
                    <span className="mr-2">🗺️</span> Maps
                  </a>
                </li>
              </ul>
            </li>
            <li className="mb-2">
              <h3 className="text-xs uppercase text-gray-400 mb-2">EXTRAS</h3>
              <ul>
                <li className="mb-2">
                  <a
                    href="#"
                    className="flex items-center py-2 px-4 rounded hover:bg-gray-700"
                  >
                    <span className="mr-2">📄</span> Pages
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </aside>

      <div className="flex-1 flex flex-col overflow-hidden">
        <header
          id="navbar-actions"
          className="flex items-center justify-between bg-white p-4 border-b border-gray-200"
        >
          <div className="flex items-center">
            <button
              type="button"
              title="hamburger-menu"
              id="hamburger-menu"
              className="text-gray-600 mr-4 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            <h2 className="text-lg font-semibold text-gray-600">Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <button title="button" className="text-gray-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </button>
            <button title="button" className="text-gray-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
            <button title="button" className="text-gray-600 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 13a2 2 0 01-2 2H6a2 2 0 01-2-2V7a2 2 0 012-2h12a2 2 0 012 2v14z"
                ></path>
              </svg>
            </button>
            <Image
              width={32}
              height={32}
              src="/avatar.png"
              alt="User Avatar"
              className="h-8 w-8 rounded-full"
            />
          </div>
        </header>
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
