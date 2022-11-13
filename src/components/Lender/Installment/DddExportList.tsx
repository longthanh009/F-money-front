import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import ModalInstallmentAdd from "./modal";

function DddExportList() {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    console.log(11111111111)
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="mb-3 mt-5 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="flex px-5 pt-5">
        <div className=""></div>
        <div className="pr-2">
          <Button type="primary" onClick={showModal}>
            Thêm mới
          </Button>
          <ModalInstallmentAdd
            isModalOpen={isModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
        <div className="mb-3 xl:w-96 pr-10 text-left">
          <Button
            style={{ background: "green", color: "white" }}
            className="flex md:h-9 cursor-pointer justify-center  bg-green-600 p-2  rounded-md text-white"
          >
            Xuất Excel
          </Button>
        </div>
      </div>
    </div>
  );
}
export default DddExportList;
