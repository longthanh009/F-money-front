import React from "react";
import Icon from "../../../../images/icon-01.svg";

function Content() {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <h2 className="text-lg text-center font-semibold text-slate-800 mb-2">
          Nội Dung Chuyển Khoản
        </h2>
        <div className="items-start text-center">
          <p>Gia han TK: Ten_Dang_Nhap</p>
          <p>(Thay "Ten_Dang_Nhap" bằng tài khoản đăng nhập của bạn)</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
