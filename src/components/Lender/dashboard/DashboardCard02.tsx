import React from "react";
// import Icon from "../../images/icon-02.svg";
import Icon from "../../../images/icon-02.svg";
import FomatNumber from "../../FomatNumber/fomatNumber";

function DashboardCard02({tienlaiTinchap, tienlaiTraGop}:any) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 02" />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Tiền Lãi</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Tín Chấp
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">
          <FomatNumber number={tienlaiTinchap}/>
          </div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">
            VND
          </div>
        </div>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Vay Lãi
        </div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">
          <FomatNumber number={tienlaiTraGop}/>
          </div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">
            VND
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard02;
