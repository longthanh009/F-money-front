import React, { useState } from "react";

import Sidebar from "../../components/Lender/Sidebar";
import Header from "../../components/Lender/Header";
import NextPage from "../../components/Lender/Customer/CustomerList/NextPage";
import WelcomeIncome from "../../components/Lender/Income/WelcomeIncome";
import TableIncome from "../../components/Lender/Income/TableIncome";
import SearchIncome from "../../components/Lender/Income/SearchIncome";

function Income() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <h1 className="text-l text-gray-500">Lender/lịch Sử Chi Tiền</h1>
            {/* Welcome banner */}
            <WelcomeIncome />

            <div className="grid grid-cols-12 gap-6"></div>
            <SearchIncome />
            <TableIncome />
          </div>
          <NextPage />
        </main>
      </div>
    </div>
  );
}

export default Income;
