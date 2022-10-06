import React, { useState } from "react";

import Sidebar from "../../components/Lender/partials/Sidebar";
import Header from "../../components/Lender/partials/Header";
import Banner from "../../components/Lender/partials/Banner";
import WelcomeCustomer from "../../components/Lender/partials/Customer/WelcomeCustomer";
import TableCustomer from "../../components/Lender/partials/Customer/TableCustomer";
import Search from "../../components/Lender/partials/Customer/SearchLender";
import NextPage from "../../components/Lender/partials/Customer/NextPage";

function CustomerList() {
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
              Lender/Danh sách Khách hàng
            </h1>
            {/* Welcome banner */}
            <WelcomeCustomer />

            <div className="grid grid-cols-12 gap-6"></div>
            <Search />
            <TableCustomer />
          </div>
          <NextPage />
        </main>

      </div>
    </div>
  );
}

export default CustomerList;
