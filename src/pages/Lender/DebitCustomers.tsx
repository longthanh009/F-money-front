import React, { useState } from "react";

import Sidebar from "../../components/Lender/partials/Sidebar";
import Header from "../../components/Lender/partials/Header";
import WelcomeCustomer from "../../components/Lender/partials/Customer/CustomerList/WelcomeCustomer";
import TableCustomer from "../../components/Lender/partials/Customer/CustomerList/TableCustomer";
import Search from "../../components/Lender/partials/Customer/CustomerList/SearchLender";
import NextPage from "../../components/Lender/partials/Customer/CustomerList/NextPage";
import SearchDebitCus from "../../components/Lender/partials/Customer/DebitCustomers/SearchDebitCus";
import TableDebitCus from "../../components/Lender/partials/Customer/DebitCustomers/TableDebitCus";

function DebitCustomers() {
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
              Lender/Danh Sách Khách Cần Vay
            </h1>
            {/* Welcome banner */}

            <div className="grid grid-cols-12 gap-6"></div>
            <SearchDebitCus />
            <TableDebitCus />
          </div>
          <NextPage />
        </main>
      </div>
    </div>
  );
}

export default DebitCustomers;
