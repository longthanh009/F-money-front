import React from "react";

function TableDebitCus() {
  return (
    <div className="col-span-full  bg-white shadow-lg  rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Giao Dịch Mới Nhất</h2>
      </header>
      <div className="p-3">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            {/* Table header */}
            <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
              <tr>
                <th className="p-2">
                  <div className="font-semibold text-left">STT</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Tên Khách Hàng
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Gói Vay</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Địa Chỉ</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Số Điện Thoại</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">CCCD/CMND</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Số tiền Cần Vay
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Đơn giá</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Trạng Thái</div>
                </th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody className="text-sm font-medium divide-y divide-slate-100">
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">1</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Nguyễn Văn A</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">7 Kỳ</div>
                </td>
                <td className="p-2">
                  <div className="text-center">204 Trần Duy Hưng</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">0386300092</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">09733219000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">10.000.000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">13.000.00</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">Đang Chờ</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableDebitCus;
