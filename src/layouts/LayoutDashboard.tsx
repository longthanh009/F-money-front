import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Lender/Header";
import Sidebar from "../components/Lender/Sidebar";
const LayoutDashboard = () => {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <Outlet></Outlet>
          </div>
        </main>
      </div>
    </div>
  );
};

export default LayoutDashboard;
