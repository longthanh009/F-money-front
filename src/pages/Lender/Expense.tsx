import React, { useState } from "react";

import Sidebar from "../../components/Lender/Sidebar";
import Header from "../../components/Lender/Header";
import NextPage from "../../components/Lender/Customer/CustomerList/NextPage";
import WelcomeExpense from "../../components/Lender/Expense/WelcomeExpense";
import SearchExpense from "../../components/Lender/Expense/SearchExpense";
import TableExpense from "../../components/Lender/Expense/TableExpense";

function Expense() {
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
            <WelcomeExpense />

            <div className="grid grid-cols-12 gap-6"></div>
            <SearchExpense />
            <TableExpense />
          </div>
          <NextPage />
        </main>
      </div>
    </div>
  );
}

export default Expense;
