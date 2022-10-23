import React from "react";

import { useState } from "react";

function WelCusChec() {
  const [modalOn, setModalOn] = useState(false);
  const [choice, setChoice] = useState(false);

  const clicked = () => {
    setModalOn(true);
  };

  return (
    <div className="relative bg-indigo-200 p-4 sm:p-6 rounded-sm overflow-hidden mb-8">
      {/* Content */}
      <div className="relative">
        <h1 className="text-s md:text-xl text-slate-800 font-bold mb-1">
          Kiểm Tra Khách Hàng Có Vay Ở Cửa Hàng Khác Trong Hệ Thống Hay Không ?
        </h1>
      </div>
    </div>
  );
}

export default WelCusChec;
