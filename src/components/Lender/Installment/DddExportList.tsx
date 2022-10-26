import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Input } from "antd";

function DddExportList() {
  const { TextArea } = Input;
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
    <div className="mb-3 mt-5 flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="flex px-5 pt-5">
        <div className=""></div>
        <div className="pr-2">
          <Button type="primary" onClick={showModal}>
            Thêm mới
          </Button>
          <Modal
            title="Thêm Mới Hợp Đồng"
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <form action="">
              <div className="flex">
                <Input
                  type="text"
                  placeholder="Tên Khách hàng"
                  style={{ marginRight: 10 }}
                />
                <Input type="text" placeholder="Mã HĐ" />
              </div>
              <div className="flex pt-2">
                <Input
                  type="number"
                  placeholder="CMND/CCCD"
                  style={{ marginRight: 10 }}
                />
                <Input type="number" placeholder="SĐT" />
              </div>
              <div className="pt-2">
                <TextArea rows={2} placeholder="Địa Chỉ" />
              </div>
              <div className="flex pt-2">
                <Input
                  type="number"
                  placeholder="Tiền Đưa Khách"
                  style={{ marginRight: 10 }}
                />
                <Input type="number" placeholder="Tiền Khách Phải Đóng" />
              </div>
              <div className="flex pt-2">
                <Input
                  type="number"
                  placeholder="Vay Trong Vòng "
                  style={{ marginRight: 10 }}
                />
                <Input type="number" placeholder="Số Ngày Đóng 1 lần" />
              </div>
              <div className="pt-2">
                <Input type="number" placeholder="Ngày Bốc" />
              </div>
              <div className="pt-2">
                <TextArea rows={1} placeholder="Ghi Chú" />
              </div>
            </form>
          </Modal>
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
