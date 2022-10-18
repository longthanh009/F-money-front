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
    <div>
      <div>
        <h1 className="text-l text-gray-500">Lender/lịch Sử Chi Tiền</h1>
        {/* Welcome banner */}
        <WelcomeIncome />
        <SearchIncome />
        <TableIncome />
      </div>
      <NextPage />
    </div>
  );
}

export default Income;
