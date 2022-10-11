import React from 'react';

function DashboardCard07() {
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
                  <div className="font-semibold text-center">Loại Hình</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Mã Hóa Đơn</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Người Giao Dịch</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Khách Hàng</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Ngày</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Chi</div>
                </th>
                <th className="p-2">
                  <div className="font-semibold text-center">Thu</div>
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
                  <div className="text-center">Vay Lãi</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">VL01</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Anh Đai</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">Anh Long đẹp trai</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">22/3/2021</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">2.000.000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">3.000.000</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">2</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Vay Lãi</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">VL02</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Anh Đai</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">Anh Tuyền</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">22/5/2022</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">3.000.000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">2.000.000</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">3</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Tin Chấp</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">VL03</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Anh Đai</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">Anh Duy</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">22/6/2021</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">3.000.000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">4.000.000</div>
                </td>
              </tr>
              {/* Row */}
              <tr>
                <td className="p-2">
                  <div className="flex items-center">
                    <div className="text-slate-800">4</div>
                  </div>
                </td>
                <td className="p-2">
                  <div className="text-center">Vay Lãi</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-green-500">VL01</div>
                </td>
                <td className="p-2">
                  <div className="text-center">Anh Đai</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">Anh Mạnh</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">22/11/2021</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">5.000.000</div>
                </td>
                <td className="p-2">
                  <div className="text-center text-sky-500">3.000.000</div>
                </td>
              </tr>
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
}

export default DashboardCard07;
