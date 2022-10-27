import React from "react";
import { FcSalesPerformance } from "react-icons/fc";
import { FcOvertime } from "react-icons/fc";
import { GiAnchor } from "react-icons/gi";

function TableMortgage() {
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
                  <div className="font-semibold text-center">Mã HĐ</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Tên Khách Hàng
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Tài Sản</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">VNĐ</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Ngày Vay</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Lãi Phí Đã Đóng
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Nợ cũ</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Lãi Phí Đến Hôm Nay
                  </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Tình Trạng </div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">
                    Ngày Phải Đóng Lãi Phí{" "}
                  </div>
                </th>
                <td></td>
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
                  <div className="text-center">KH-01</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Anh Duy</div>
                </td>
                <td className="p-2">
                  <div className="text-center">10,000,000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">2%</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">22/3/2022</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">500.000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">400,000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">400,000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">Đang vay</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">hôm nay</div>
                </td>
                <td className="flex pt-5">
                  <div className="items-center text-gray-500 pl-5 relative group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                      Đóng tiền
                    </span>
                    <FcSalesPerformance />
                  </div>
                  <div className="items-center text-gray-500 pl-5 relative group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                      Hẹn
                    </span>
                    <FcOvertime />
                  </div>
                  <div className="items-center text-gray-500 pl-5 relative group mr-3">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                      Đóng HĐ
                    </span>
                    <GiAnchor />
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TableMortgage;
