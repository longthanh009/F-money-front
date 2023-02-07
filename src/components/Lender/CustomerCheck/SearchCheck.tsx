import { SearchOutlined } from "@ant-design/icons";
import { Button, Form, Input, InputNumber } from "antd";
import Col from "antd/es/grid/col";
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
      <Col span={12}>
        <Form.Item
          name="cccd"
          label="Nhập Chứng Minh Nhân Dân"
          labelCol={{ span: 14 }}
          rules={[
            {
              required: true,
              message: "Không để trống, 12 ký tự",
            },
          ]}
        >
          <InputNumber
            onChange={(e) => handleCheckCustomer(e)}
            style={{ width: "100%" }}
            prefix={<SearchOutlined />}
          />
        </Form.Item>
      </Col>
    </div>
  );
}
export default SearchCheck;
