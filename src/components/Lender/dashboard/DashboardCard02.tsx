import React from "react";
// import Icon from "../../images/icon-02.svg";
import Icon from "../../../images/icon-02.svg";
import FomatNumber from "../../FomatNumber/fomatNumber";

function DashboardCard02({ tinChap, traGop, title }: any) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 02" />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">{title}</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Vay Tín Chấp
        </div>
        <div className="flex items-start">
          <div className="text-[18px] font-bold text-slate-800 mr-2">
            {tinChap}
          </div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">
            Hợp đồng
          </div>
        </div>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Vay Trả Góp
        </div>
        <div className="flex items-start">
          <div className="text-[18px] font-bold text-slate-800 mr-2">
            {traGop}
          </div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">
            Hợp đồng
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard02;
