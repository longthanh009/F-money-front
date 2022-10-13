import React from "react";
import Icon from "../../../../images/icon-01.svg";

function AccountHolder() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <h2 className="text-lg text-center font-semibold text-slate-800 mb-2">
          Chủ Tài Khoản
        </h2>
        <div className="items-start text-center">
          <p>CÔNG TY CỔ PHẦN TẬP ĐOÀN TIMA</p>
        </div>
      </div>
    </div>
  );
}

export default AccountHolder;
