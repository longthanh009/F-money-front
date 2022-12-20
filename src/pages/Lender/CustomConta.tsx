import React, { useEffect, useState } from "react";
import { Select, Form, Table, Space, Pagination, PaginationProps } from "antd";
import BreadcrumbComponent from "../../components/Breadcrumb";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ColumnsType } from "antd/lib/table";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { listMenuLoan } from "../../features/menuloan";
import FomatNumber from "../../components/FomatNumber/fomatNumber";
import { GiAnchor } from "react-icons/gi";
import { FcSalesPerformance } from "react-icons/fc";

const CustomConta = () => {
  const dispatch = useAppDispatch();
  const menuLoan = useAppSelector((state) => state.menuLoan.values);
  const [current, setCurrent] = useState(3);
  const onChange: PaginationProps["onChange"] = (page) => {
    console.log(page);
    setCurrent(page);
  };
  useEffect(() => {
    dispatch(listMenuLoan());
  }, []);
  const columns: ColumnsType<ColumnsType> = [
    {
      title: "STT",
      dataIndex: "index",
      key: "index",
      render: (text, object, index) => <div>{index + 1}</div>,
    },
    {
      title: "Họ Và Tên",
      dataIndex: "ho_ten",
    },
    {
      title: "Điện Thoại",
      dataIndex: "dien_thoai",
    },
    {
      title: "Địa Chỉ",
      dataIndex: "dia_chi",
    },
    {
      title: "Tiền Vay",
      dataIndex: "tien_vay",
    },
    {
      title: "Ghi Chú",
      dataIndex: "ghi_chu",
    },
  ];
  return (
    <div>
      <BreadcrumbComponent />
      <div className="col-span-full  bg-white shadow-lg  rounded-sm border border-slate-200">
        <header className="px-5 py-4 border-b border-slate-100">
          <h2 className="font-semibold text-slate-800">
            Khách hàng của hàng đang liên hệ
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
                  return (
                    <tr key={index}>
                      <td className="p-2">
                        <div className="flex items-center">
                          <div className="text-slate-800">{index + 1}</div>
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">{item.ho_ten}</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-black">
                          {item.dien_thoai}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center">{item.dia_chi}</div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-gray-600">
                          <FomatNumber number={item.tien_vay} />
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-gray-600">
                          {item.ghi_chu}
                        </div>
                      </td>
                      <td className="p-2">
                        <div className="text-center text-gray-600">
                          Trạng Thái
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomConta;
