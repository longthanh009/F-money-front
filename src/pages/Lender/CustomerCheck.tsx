import React, { useState } from "react";

import NextPage from "../../components/Lender/Customer/CustomerList/NextPage";
import WelCusChec from "../../components/Lender/CustomerCheck/WelCusChec";
import SearchCheck from "../../components/Lender/CustomerCheck/SearchCheck";
import TableCustomerCheck from "../../components/Lender/CustomerCheck/TableCustomerCheck";

function CustomerCheck() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div>
        <h1 className="text-l text-gray-500">
          Lender/Check Thông Tin Khách Hàng
        </h1>
        <WelCusChec />

        <SearchCheck />
        <TableCustomerCheck />
      </div>
      <NextPage />
    </div>
  );
}

export default CustomerCheck;
