import React from "react";

import Modal from "./modal";

import { useState } from "react";

function WelcomeCustomer() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };

  return (
    <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-2xl md:text-3xl text-slate-800 font-bold mb-1">
          Danh Sách Khách hàng
        </h1>
        <div className="container-fluid w-full flex flex-wrap text-center justify-between px-6">
          <p>Tổng Số: 60</p>
          <div>
            <div className="flex justify-center">
              <div
                className="flex  cursor-pointer justify-center  bg-blue-600 p-2  rounded-md text-white"
                onClick={clicked}
              >
                Thêm Khách Hàng
              </div>
            </div>

            {modalOn && <Modal setModalOn={setModalOn} setChoice={setChoice} />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeCustomer;
