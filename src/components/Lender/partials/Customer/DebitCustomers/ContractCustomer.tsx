import { Button } from 'antd'
import React, { useState } from 'react'

const ContractCustomer = () => {
    const [modal, setShowModal] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    return (
    <>
         <div className="basis-full max-w-full mt-2">
                <Button
                  className="mr-2"
                  onClick={showModal}
                  type="primary"
                  style={{ background: "#00c5dc", borderColor: "#00c5dc" }}
                >
                  Thêm mới
                </Button>
                <Button
                  className="mr-2"
                  onClick={showModal}
                  type="primary"
                  style={{ background: "#34bfa3", borderColor: "#34bfa3" }}
                >
                  Xuất Excel
                </Button>
                <button
                className="px-3 py-[5px] text-purple-100 bg-[#2a85e0] rounded-[3px]"
                type="button"
                onClick={() => setShowModal(true)}
                >
                Xem hợp đồng
                </button>
                <a href="" style={{ float: "right" }}>
                  <span className="text-base">
                    {" "}
                    Kiểm tra đang vay tại các cơ sở tín dụng{" "}
                  </span>
                </a>
              </div>
    </>
  )
}

export default ContractCustomer