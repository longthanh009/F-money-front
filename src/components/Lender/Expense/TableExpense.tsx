import React from "react";
import { BiPrinter } from "react-icons/bi";
import { MdOutlineDeleteForever } from "react-icons/md";

function TableExpense() {
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
                  <div className="font-semibold text-center">Ngày</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Khách Hàng</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Loại Phiếu</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Số Tiền</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Ghi Chú</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center"></div>
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
                  <div className="text-center">20:13 6/10/2022</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">Anh Duy</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Chi Khách</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-red-500">-5.000.000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">dv</div>
                </td>
                <td className="p-2 md:flex">
                  <div className="items-center text-black pl-5 relative group">
                    <span className="absolute top-0 hidden -mt-8 text-xs font-bold group-hover:block">
                      In Phiếu
                    </span>
                    <BiPrinter />
                  </div>
                  <div className="items-center text-black pl-5 relative group">
                    <span className="absolute top-0 hidden -mt-6 text-xs font-bold group-hover:block">
                      Xóa
                    </span>
                    <MdOutlineDeleteForever />
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

export default TableExpense;
