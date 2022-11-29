import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
import React, { useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import { getCmndLenderList } from "../../../features/contract/contractSlice";

function SearchCheck() {
  const dispatch = useAppDispatch();
  const [checkcustomer, setCheckcustomer] = useState("");

  const handleCheckCustomer: any = async (keyword: number) => {
    if (keyword) {
      const cccdCustomer: any = await dispatch(getCmndLenderList(keyword));
      setCheckcustomer(cccdCustomer.payload.message);
    } else {
      setCheckcustomer("");
    }
  };
  return (
    <div className="">
      <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
        {/* Content */}
        <div className="relative">
          {checkcustomer ? (
            <h1 className="text-s md:text-xl text-slate-800 font-bold mb-1">
              {checkcustomer}
            </h1>
          ) : (
            <h1 className="text-s md:text-xl text-slate-800 font-bold mb-1">
              Kiểm Tra Khách Hàng Có Vay Ở Cửa Hàng Khác Trong Hệ Thống Hay
              Không?
            </h1>
          )}
        </div>
      </div>
      <Input
        onChange={(e) => handleCheckCustomer(e.target.value)}
        placeholder="Nhập Chứng Minh Nhân Dân"
        prefix={<SearchOutlined />}
      />
    </div>
  );
}
export default SearchCheck;
