import { useEffect, useRef, useState } from "react";
import { Input } from 'antd';
import { useAppDispatch } from "../../../app/hooks";
import { getContract, searchNameContract } from "../../../features/contract/contractSlice";
import { SearchOutlined } from "@ant-design/icons";


function SearchInstallment() {
  const dispatch = useAppDispatch();
  const searchRef = useRef(null);

  const searchName = (keyword: string) => {
    dispatch(getContract())
    if (searchRef.current) {
        clearTimeout(searchRef.current)
    };
    searchRef.current = setTimeout(() => {
        dispatch(searchNameContract(keyword))
    }, 1000)
};
  return (
    <div className="mb-3 mt-5 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96 pr-10">
            <select
              id="small"
              className="block  md:h-9 rounded  p-[5px] w-full text-sm text-gray-500 bg-gray-50 border border-gray-300 "
            >
              <option selected>Thời Gian</option>
              <option value="UA">40 ngày</option>
              <option value="UB">50 ngày</option>
              <option value="UC">60 ngày</option>
              <option value="UD">100 ngày</option>
            </select>
          </div>
          <div className="mb-3 xl:w-96 pr-10">
          <Input onChange={(e) => searchName(e.target.value)} placeholder="Tên khách hàng" prefix={<SearchOutlined />} />
          </div>
          <div className="mb-3 xl:w-96 pr-10">
            <input
              type="search"
              className="
              md:h-9
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleSearch"
              placeholder="Từ ngày..."
            />
          </div>
          <div className="mb-3 xl:w-96 pr-10">
            <input
              type="search"
              className="
              md:h-9
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              id="exampleSearch"
              placeholder="Đến ngày..."
            />
          </div>
          <div className="mb-3 xl:w-96 pr-10 ">
            <select
              id="small"
              className="block md:h-9 rounded p-[5px] w-full text-sm text-gray-500 bg-gray-50 border border-gray-300 "
            >
              <option selected className="text-xs">
                Trạng Thái
              </option>
              <option value="UA">Hợp Đồng Đang Vay</option>
              <option value="UB">Hợp Đồng Đúng Hạn</option>
              <option value="UC">Hợ Đồng Chậm Chả Lãi</option>
              <option value="UD">Hợp Đồng Quá Hạn</option>
              <option value="UE">Hợp Đồng Nợ Xấu</option>
              <option value="UF">Hợp Đồng Đã Kết Thúc</option>
              <option value="US">Hợp Đồng Đã Đã Xóa</option>
              <option value="UX">Hợp Đồng Ngay Mai Đóng</option>
            </select>
          </div>
          <div className="mb-3 xl:w-96 pr-10">
            <button className="flex md:h-9 cursor-pointer justify-center  bg-blue-600 p-2  rounded-md text-white">
              Tìm Kiếm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SearchInstallment;
