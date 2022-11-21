import { Button } from "antd";
import React, { useState } from "react";
import ModalAddLenderCustumer from "./modalAddCustommer";
function Search() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div className="mb-3 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <div className="flex justify-center">
          <div className="mb-3 xl:w-96 pr-10">
            <select
              id="small"
              className="block p-[5px] w-full text-sm text-gray-500 bg-gray-50 border border-gray-300 "
            >
              <option selected>Trạng thái</option>
              <option value="US">Đang Vay</option>
              <option value="CA">Kết Thúc</option>
            </select>
          </div>
          <div className="mb-3 xl:w-96 pr-10">
            <input
              type="search"
              className="
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
              placeholder="Tên Khách Hàng..."
            />
          </div>
          <div className="pr-2">
            <Button type="primary">Tìm Kiếm</Button>
          </div>
          <div className="pr-2">
            <Button type="primary" onClick={showModal}>
              Thêm mới
            </Button>
            <ModalAddLenderCustumer
              isModalOpen={isModalOpen}
              handleOk={handleOk}
              handleCancel={handleCancel}
              setIsModalOpen={setIsModalOpen}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Search;
