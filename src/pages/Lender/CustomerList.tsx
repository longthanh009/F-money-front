import React, { useState } from "react";

import WelcomeCustomer from "../../components/Lender/Customer/CustomerList/WelcomeCustomer";
import TableCustomer from "../../components/Lender/Customer/CustomerList/TableCustomer";
import Search from "../../components/Lender/Customer/CustomerList/SearchLender";
import NextPage from "../../components/Lender/Customer/CustomerList/NextPage";

function CustomerList() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div>
        <h1 className="text-l text-gray-500">Lender/Danh sách Khách hàng</h1>
        {/* Welcome banner */}
        <WelcomeCustomer />
        <Search />
        <TableCustomer />
      </div>
      <NextPage />
    </div>
  );
}

export default CustomerList;
