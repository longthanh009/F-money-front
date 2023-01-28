import React, { useEffect, useState } from "react";
import FomatNumber from "../../FomatNumber/fomatNumber";
import Icon from "../../../images/icon-01.svg";

function DashboardCard01({tragop, tinchap,title}:any) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 01" />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">
          {title}
        </h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Vay tín chấp
        </div>
        <div className="flex items-start">
          <div className="text-[18px] font-bold text-slate-800 mr-2">
          <FomatNumber number={tinchap}/>
          </div>
          
        </div>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">
          Vay trả góp
        </div>
        <div className="flex items-start">
          <div className="text-[18px] font-bold text-slate-800 mr-2">
            <FomatNumber number={tragop}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardCard01;
