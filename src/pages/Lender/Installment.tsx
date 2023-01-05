import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import BreadcrumbComponent from "../../components/Breadcrumb";
import DddExportList from "../../components/Lender/Installment/DddExportList";
import SearchInstallment from "../../components/Lender/Installment/SearchInstallment";
import TableInstallment from "../../components/Lender/Installment/TableInstallment";
import MortgageCard from "../../components/Lender/Mortgage/MortgageCard02";
import { getContract } from "../../features/contract/contractSlice";

function Installment() {
  const dispatch = useAppDispatch();
  const [laiPhiDaThu, setLaiPhiDaThu] = useState(0);
  const [tongTien, setTongTien] = useState(0);
  const [tienChoVay, setTienChoVay] = useState(0);
  const [tienKhachNo, setTienKhachNo] = useState(0);
  const [tienLai, setTienLai] = useState(0);
  useEffect(() => {
    dispatch(getContract()).then(async ({ payload }) => {
      const daTT = await payload.reduce(
        (total: any, item: any) => item.da_thanh_toan + total,
        0
      );
      const tongHD = await payload.reduce(
        (total: any, item: any) => item.tong_hd + total,
        0
      );
      const tongKV = await payload.reduce(
        (total: any, item: any) => item.khoan_vay + total,
        0
      );
      setLaiPhiDaThu(daTT);
      setTienChoVay(tongKV);
      setTienKhachNo(tongHD - daTT);
      setTongTien(tongHD);
      setTienLai(tongHD - tongKV);
    });
  }, []);
  return (
    <>
      <div>
        {/* Cards */}
        <BreadcrumbComponent />
        <div className="grid grid-cols-12 gap-5 md:flex md:justify-center">
          <MortgageCard tien={tienChoVay} label="Tiền cho vay" />
          <MortgageCard tien={tienLai} label="Lãi dự kiến" />
          <MortgageCard tien={tongTien} label="Tổng tiền" />
          <MortgageCard tien={laiPhiDaThu} label="Tiền đã thu" />
          <MortgageCard tien={tienKhachNo} label="Tiền khách nợ" />
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
        <div></div>
      </div>
    </>
  );
}

export default Installment;
