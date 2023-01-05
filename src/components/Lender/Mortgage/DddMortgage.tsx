import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";
import ModalInstallmentAdd from "./modalMortgage";
import { useAppSelector } from "../../../app/hooks";
import { getTokenUser } from "../../../ultils/formatDate";

function DddMortgage() {
  const { TextArea } = Input;
  const [isModalOpen, setIsModalOpen] = useState(false);
  //có api của mortgage nhập vô đây
  const inforUser = getTokenUser();
  const contracts = useAppSelector((state) => state.contract.value);
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
    <div className="mb-3 mt-5 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="flex px-5 pt-5">
        <div className=""></div>
        <div className="pr-2">
          <Button type="primary" onClick={showModal}>
            Thêm mới
          </Button>
          <ModalInstallmentAdd
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            handleOk={handleOk}
            handleCancel={handleCancel}
          />
        </div>
        <div className="mb-3 xl:w-96 pr-10 text-left">
          <a href={`http://localhost:9000/api/contractMortgageExcel?id=${inforUser.id}`}
          className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-[5px] px-4 rounded inline-flex items-center">
            <svg className="fill-current w-4 h-4 mr-2" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
            <span>Xuất Excel</span>
          </a>
        </div>
      </div>
    </div>
  );
}
export default DddMortgage;
