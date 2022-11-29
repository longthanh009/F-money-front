import React, { useState } from "react";
import SearchCheck from "../../components/Lender/CustomerCheck/SearchCheck";

function CustomerCheck() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div>
        <h1 className="text-l text-gray-500">
          Lender/Check Thông Tin Khách Hàng
        </h1>

        <SearchCheck />
      </div>
    </div>
  );
}

export default CustomerCheck;
