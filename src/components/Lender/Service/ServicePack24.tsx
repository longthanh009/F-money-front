import React from "react";
// import Icon from "../../images/icon-02.svg";
import Icon from "../../../images/icon-02.svg";

function ServicePack24() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          {/* Icon */}
          <img src={Icon} width="32" height="32" alt="Icon 02" />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">
          GÓI 24 THÁNG
        </h2>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">
            3.600.000
          </div>
          <div className="text-sm font-semibold text-white px-1.5 bg-yellow-500 rounded-full">
            VND
          </div>
        </div>
        <div className="text-xs text-center pt-2 font-semibold text-slate-400 uppercase mb-1">
          (KM 6 THÁNG)
        </div>
      </div>
    </div>
  );
}

export default ServicePack24;
