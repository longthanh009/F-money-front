import React, { useState } from "react";

import Sidebar from "../../components/Lender/Sidebar";
import Header from "../../components/Lender/Header";
import NextPage from "../../components/Lender/Customer/CustomerList/NextPage";
import WelCusChec from "../../components/Lender/CustomerCheck/WelCusChec";
import SearchCheck from "../../components/Lender/CustomerCheck/SearchCheck";
import TableCustomerCheck from "../../components/Lender/CustomerCheck/TableCustomerCheck";

function CustomerCheck() {
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
            <h1 className="text-l text-gray-500">
              Lender/Check Thông Tin Khách Hàng
            </h1>
            {/* Welcome banner */}
            <WelCusChec />

            <div className="grid grid-cols-12 gap-6"></div>
            <SearchCheck />
            <TableCustomerCheck />
          </div>
          <NextPage />
        </main>
      </div>
    </div>
  );
}

export default CustomerCheck;
