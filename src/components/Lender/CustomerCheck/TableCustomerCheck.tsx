import React from "react";

function TableCustomerCheck() {
  return (
    <div className="col-span-full  bg-white shadow-lg  rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-blue-800">Nguyên Xuân Tài: 0773830999</h2>
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
                    Tên Cửa Hàng Vay
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Ngày Bắt Đầu </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Ngày Hết Hạn</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Số Tiền Vay</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                   Đã Trả
                  </div>
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
                  <div className="text-center">Anh Đô</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">10/2/2022</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10/3/2022</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">10.000.000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">8.000.000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">Nợ Xấu</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableCustomerCheck;
