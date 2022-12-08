import React, { useState } from "react";

import WelcomeCustomer from "../../components/Lender/Customer/CustomerList/WelcomeCustomer";
import TableCustomer from "../../components/Lender/Customer/CustomerList/TableCustomer";
import Search from "../../components/Lender/Customer/CustomerList/SearchLender";
import NextPage from "../../components/Lender/Customer/CustomerList/NextPage";
import DddMortgage from "../../components/Lender/Mortgage/DddMortgage";
import TableMortgage from "../../components/Lender/Mortgage/TableMortgage";
import SearchMortgage from "../../components/Lender/Mortgage/SearchMortgage";
import MortgageCard05 from "../../components/Lender/Mortgage/MortgageCard05";
import MortgageCard04 from "../../components/Lender/Mortgage/MortgageCard04";
import MortgageCard03 from "../../components/Lender/Mortgage/MortgageCard03";
import MortgageCard02 from "../../components/Lender/Mortgage/MortgageCard02";
import MortgageCard01 from "../../components/Lender/Mortgage/MortgageCard01";
import Installment02 from "../../components/Lender/Installment/DashboardCard02";
import Installment03 from "../../components/Lender/Installment/DashboardCard03";
import Installment04 from "../../components/Lender/Installment/DashboardCard04";

function Mortgage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      {/* Cards */}
      <div className="text-gray-500 mb-3">Lender/Tín Chấp</div>
      <div className="grid grid-cols-12 gap-5 md:flex md:justify-center">
        <MortgageCard03 />
        <MortgageCard02 />
        <MortgageCard04 />
        <MortgageCard05 />
      </div>
      <div>
        <SearchMortgage />
      </div>
      <div>
        <DddMortgage />
      </div>
      <div>
        <TableMortgage />
      </div>
      <div></div>
    </div>
  );
}

export default Mortgage;
