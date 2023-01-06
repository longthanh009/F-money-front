import React, { useState, useEffect } from "react";
import WelcomeBanner from "../../components/Lender/dashboard/WelcomeBanner";
import DashboardCard01 from "../../components/Lender/dashboard/DashboardCard01";
import DashboardCard02 from "../../components/Lender/dashboard/DashboardCard02";
import DashboardCard03 from "../../components/Lender/dashboard/DashboardCard03";
import DashboardCard04 from "../../components/Lender/dashboard/DashboardCard04";
import DashboardCard05 from "../../components/Lender/dashboard/DashboardCard05";
import DashboardCard06 from "../../components/Lender/dashboard/DashboardCard06";
import { useAppDispatch } from "../../app/hooks";
import { listMortgage } from "../../features/mortgage/mortgage";
import { getContract } from "../../features/contract/contractSlice";
import BreadcrumbComponent from "../../components/Breadcrumb";

function Dashboard() {
  const dispatch = useAppDispatch()
  const [ tragop, setTragop] = useState(0)
  const [ tinchap, setTinchap] = useState(0)
  const [tienlaiTinchap, setTienlaiTinChap] = useState(0)
  const [tienlaiTraGop, setTienlaiTraGop] = useState(0)
  useEffect(() => {
    dispatch(listMortgage())
    .then(async({payload}) => {
      console.log(payload)
      const data = await payload.reduce((total:any, item:any) => item.khoan_vay + total ,0)
      const tongHD = await payload.reduce((total:any, item:any) => item.tong_hd + total ,0)
      const khoanVay = await payload.reduce((total:any, item:any) => item.khoan_vay + total ,0)
      setTienlaiTinChap(tongHD - khoanVay)
      setTinchap(data)
    })
  }, []); 
  useEffect(() => {
    dispatch(getContract())
    .then(async({payload}) =>{
      console.log(payload)
      const data = await payload.reduce((total:any, obj:any) => obj.khoan_vay + total,0)
      const tongHD = await payload.reduce((total:any, item:any) => item.tong_hd + total ,0)
      const khoanVay = await payload.reduce((total:any, item:any) => item.khoan_vay + total ,0)
      setTienlaiTraGop(tongHD - khoanVay)
      setTragop(data)
    })
  }, []);
  return (
    <>
      <div>
        <BreadcrumbComponent />
        {/* Welcome banner */}
        <WelcomeBanner />

        {/* Dashboard actions */}

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Line chart (Acme Plus) */}
          <DashboardCard01 tragop={tragop} tinchap={tinchap} />
          {/* Line chart (Acme Advanced) */}
          <DashboardCard02 tienlaiTinchap={tienlaiTinchap} tienlaiTraGop={tienlaiTraGop}/>
          {/* Line chart (Acme Professional) */}
          <DashboardCard03 />
          {/* Bar chart (Direct vs Indirect) */}
          <DashboardCard04 />
          {/* Doughnut chart (Top Countries) */}
          <DashboardCard05 tragop={tragop} tienlaiTraGop={tienlaiTraGop}/>
          {/* Table (Top Channels) */}
          <DashboardCard06 />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
