import React, { useState,useEffect } from "react";
import DddMortgage from "../../components/Lender/Mortgage/DddMortgage";
import TableMortgage from "../../components/Lender/Mortgage/TableMortgage";
import SearchMortgage from "../../components/Lender/Mortgage/SearchMortgage";
import { useAppDispatch } from "../../app/hooks";
import { listMortgage } from "../../features/mortgage/mortgage";
import MortgageCard from "../../components/Lender/Mortgage/MortgageCard02";
import BreadcrumbComponent from "../../components/Breadcrumb";

function Mortgage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const dispatch = useAppDispatch()
  const [ laiPhiDaThu, setLaiPhiDaThu] = useState(0)
  const [ tongTien, setTongTien] = useState(0)
  const [tienChoVay, setTienChoVay] = useState(0)
  const [tienKhachNo,setTienKhachNo] = useState(0)
  const [tienLai,setTienLai] = useState(0)
  useEffect(() => {
    dispatch(listMortgage())
    .then( async({payload}) =>{
      const data = await payload.reduce((total:any, item:any) => item.da_thanh_toan+ total ,0)
      const daTT = await payload.reduce((total:any, item:any) => item.da_thanh_toan + total ,0)
      const tongHD = await payload.reduce((total:any, item:any) => item.tong_hd + total ,0)
      const tongKV = await payload.reduce((total:any, item:any) => item.khoan_vay + total ,0)
      setLaiPhiDaThu(data)
      setTienChoVay(tongKV)
      setTienKhachNo(tongHD - daTT)
      setTongTien(tongHD)
      setTienLai(tongHD - tongKV)
    })
  }, []); 
  return (
    <div>
      {/* Cards */}
      <BreadcrumbComponent />
      <div className="grid grid-cols-12 gap-5 md:flex md:justify-center">
        <MortgageCard tien={tienChoVay} label="Tiền cho vay"/>
        <MortgageCard tien={tienLai} label="Lãi dự kiến"/>
        <MortgageCard tien={tienKhachNo} label="Tiền Khách Nợ"/>
        <MortgageCard tien={laiPhiDaThu} label="Tiền đã thu"/>
        <MortgageCard tien={tongTien} label="Tổng tiền"/>
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
