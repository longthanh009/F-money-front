import React, { useState } from "react";

import WelcomeCustomer from "../../components/Lender/Customer/CustomerList/WelcomeCustomer";
import TableCustomer from "../../components/Lender/Customer/CustomerList/TableCustomer";
import Search from "../../components/Lender/Customer/CustomerList/SearchLender";
import NextPage from "../../components/Lender/Customer/CustomerList/NextPage";
import BreadcrumbComponent from "../../components/Breadcrumb";

function CustomerList() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div>
        <BreadcrumbComponent />
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
