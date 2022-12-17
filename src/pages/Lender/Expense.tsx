import React, { useState } from "react";

import Sidebar from "../../components/Lender/Sidebar";
import Header from "../../components/Lender/Header";
import NextPage from "../../components/Lender/Customer/CustomerList/NextPage";
import WelcomeExpense from "../../components/Lender/Expense/WelcomeExpense";
import SearchExpense from "../../components/Lender/Expense/SearchExpense";
import TableExpense from "../../components/Lender/Expense/TableExpense";
import BreadcrumbComponent from "../../components/Breadcrumb";

function Expense() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (

        <div>
          <div >
          <BreadcrumbComponent />
            {/* Welcome banner */}
            <WelcomeExpense />

            <SearchExpense />
            <TableExpense />
          </div>
          <NextPage />
        </div>
  );
}

export default Expense;
