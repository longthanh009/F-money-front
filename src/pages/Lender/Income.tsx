import React, { useState } from "react";

import Sidebar from "../../components/Lender/Sidebar";
import Header from "../../components/Lender/Header";
import NextPage from "../../components/Lender/Customer/CustomerList/NextPage";
import WelcomeIncome from "../../components/Lender/Income/WelcomeIncome";
import TableIncome from "../../components/Lender/Income/TableIncome";
import SearchIncome from "../../components/Lender/Income/SearchIncome";
import BreadcrumbComponent from "../../components/Breadcrumb";

function Income() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div>
        <BreadcrumbComponent />
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
