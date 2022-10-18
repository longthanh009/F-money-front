import React, { useState } from "react";

import WelcomeCustomer from "../../components/Lender/Customer/CustomerList/WelcomeCustomer";
import TableCustomer from "../../components/Lender/Customer/CustomerList/TableCustomer";
import Search from "../../components/Lender/Customer/CustomerList/SearchLender";
import NextPage from "../../components/Lender/Customer/CustomerList/NextPage";
import WelcomeMortgage from "../../components/Lender/Mortgage/WelcomeMortgage";

function Mortgage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div>
        <h1 className="text-l text-gray-500">Lender/Tín Chấp</h1>
        {/* Welcome banner */}
        <WelcomeMortgage />
        <Search />
        <TableCustomer />
      </div>
      <NextPage />
    </div>
  );
}

export default Mortgage;
