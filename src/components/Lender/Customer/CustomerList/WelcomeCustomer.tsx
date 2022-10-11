import React from "react";

function WelcomeCustomer() {
  return (
    <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="md:text-xl text-slate-800 font-bold mb-1">
          Danh Sách Khách hàng
        </h1>
        <div className="container-fluid w-full flex flex-wrap text-center justify-between px-6">
          <p>Tổng Số: 60</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCustomer;
