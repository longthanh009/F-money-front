import React, { useEffect, useState } from "react";
import { PaginationProps } from "antd";
import BreadcrumbComponent from "../../components/Breadcrumb";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ColumnsType } from "antd/lib/table";
import { listMenuLoan } from "../../features/menuloan";
import TableMenuLoan from "../../components/Lender/MenuLoan/TableMenuLoan";

const MenuLoan = () => {
  const dispatch = useAppDispatch();
  const menuLoan = useAppSelector((state) => state.menuLoan.values);

  useEffect(() => {
    dispatch(listMenuLoan());
  }, []);

  return (
    <div>
      <BreadcrumbComponent />
      <div className="col-span-full  bg-white shadow-lg  rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">
            Khách hàng cần vay tiền
          </h2>
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
                    <div className="font-semibold text-center">Họ và tên</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Điện thoại</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Địa chỉ</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Tiền vay</div>
                  </th>
                  <th className="p-2">
                    <div className="font-semibold text-center">Ghi chú</div>
                  </th>

                  <th className="p-2">
                    <div className="font-semibold text-center">Trạng thái</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="text-sm font-medium divide-y divide-slate-100">
                {/* Row */}
                {menuLoan?.map((item: any, index: number) => {
                  return <TableMenuLoan item={item} index={index} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuLoan;