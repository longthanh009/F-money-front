import React from "react";
import Icon from "../../../../images/icon-01.svg";

function Bank() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <h2 className="text-lg text-center font-semibold text-slate-800 mb-2">
          Ngân Hàng
        </h2>
        <div className="items-start text-center">
          <p>BIDV - CN Thái Hà 26810000289402</p>
          <p>Sacombank - CN Đống Đa 020066678688</p>
        </div>
      </div>
    </div>
  );
}

export default Bank;
