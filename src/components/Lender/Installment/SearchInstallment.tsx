import React, { useState,useRef } from "react";
import { DatePicker, Input, Select, Space } from 'antd';
import { useAppDispatch } from "../../../app/hooks";
import { getContractDate,searchNameContract,getContract } from "../../../features/contract/contractSlice";
import { SearchOutlined } from "@ant-design/icons";
function SearchInstallment() {
  const { RangePicker } = DatePicker;
  const dispatch = useAppDispatch();
  const searchRef = useRef(null);
  const handlerDate = async (e: any) => {
    let tu_ngay = new Date(e[0]._d).getTime();
    let den_ngay = new Date(e[1]._d).getTime();
    let objFind = {
      formdate: tu_ngay,
      todate: den_ngay
    }
    await dispatch(getContractDate(objFind))
  };
  const searchName = (keyword: string) => {
    dispatch(getContract())
    if (searchRef.current) {
        clearTimeout(searchRef.current)
    };
    searchRef.current = setTimeout(() => {
        dispatch(searchNameContract(keyword))
    }, 1000)
  }
  return (
    <div className="mb-3 mt-5 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <div className="flex space-x-[10px]">
          <div className="mb-3 xl:w-96">
          </div>
          <div className="mb-3 xl:w-96">
          <Input onChange={(e) => searchName(e.target.value)} placeholder="Tên khách hàng" prefix={<SearchOutlined />} />
          </div>
          <div className="mb-3 xl:w-96">
            <RangePicker onChange={(e) => {
              handlerDate(e);
              ;
            }} />
          </div>
          <div className="mb-3 xl:w-96 ">
            <Select
              defaultValue="status"
              style={{ width: 120 }}
              options={[
                {
                  value: 'status',
                  label: 'Trạng thái',
                },
                {
                  value: 'jack',
                  label: 'Jack',
                },
                {
                  value: 'lucy',
                  label: 'Lucy',
                }
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchInstallment;
