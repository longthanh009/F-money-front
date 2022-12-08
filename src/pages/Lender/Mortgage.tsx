import React, { useState,useEffect } from "react";

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
import { useAppDispatch } from "../../app/hooks";
import { listMortgage } from "../../features/mortgage/mortgage";

function Mortgage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useAppDispatch()
  const [ laiPhiDaThu, setLaiPhiDaThu] = useState(0)
  const [ laiPhiDuKien, setLaiPhiDuKien] = useState(0)
  const [tienChoVay, setTienChoVay] = useState(0)
  const [tienKhachNo,setTienKhachNo] = useState(0)
  useEffect(() => {
    dispatch(listMortgage())
    .then( async({payload}) =>{
      const data = await payload.reduce((total:any, item:any) => item.da_thanh_toan+ total ,0)
      const daTT = await payload.reduce((total:any, item:any) => item.da_thanh_toan + total ,0)
      const tongHD = await payload.reduce((total:any, item:any) => item.tong_hd + total ,0)
      const tongKV = await payload.reduce((total:any, item:any) => item.khoan_vay + total ,0)
      setLaiPhiDaThu(data)
      setTienChoVay(tongHD)
      setTienKhachNo(tongHD - daTT)
      setLaiPhiDuKien(tongHD- tongKV)
    })
  }, []); 
  return (
    <div>
      {/* Cards */}
      <div className="text-gray-500 mb-3">Lender/Tín Chấp</div>
      <div className="grid grid-cols-12 gap-5 md:flex md:justify-center">
        <MortgageCard03 tienChoVay={tienChoVay}/>
        <MortgageCard02 tienKhachNo={tienKhachNo} />
        <MortgageCard04 laiPhiDuKien={laiPhiDuKien}/>
        <MortgageCard05 laiPhiDaThu={laiPhiDaThu} />
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
