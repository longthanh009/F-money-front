import React, { useState } from "react";
import Installment01 from "../../components/Lender/Installment/DashboardCard01";
import Installment02 from "../../components/Lender/Installment/DashboardCard02";
import Installment03 from "../../components/Lender/Installment/DashboardCard03";
import Installment04 from "../../components/Lender/Installment/DashboardCard04";
import Installment05 from "../../components/Lender/Installment/DashboardCard05";
import DddExportList from "../../components/Lender/Installment/DddExportList";
import SearchInstallment from "../../components/Lender/Installment/SearchInstallment";
import TableInstallment from "../../components/Lender/Installment/TableInstallment";

function Installment() {
  return (
    <>
      <div>
        {/* Cards */}
        <div className="text-gray-500 mb-3">Lender/Trả Góp</div>
        <div className="grid grid-cols-12 gap-5 md:flex md:justify-center">

          {/* Line chart (Acme Plus) */}
          <Installment01 />
          {/* Line chart (Acme Advanced) */}
          <Installment02 />
          {/* Line chart (Acme Professional) */}
          <Installment03 />
          <Installment04 />
          <Installment05 />
        </div>
        <div>
          <SearchInstallment />
        </div>
        <div>
          <DddExportList />
        </div>
        <div>
          <TableInstallment />
        </div>
        <div>
          
        </div>
      </div>
    </>
  );
}

export default Installment;
