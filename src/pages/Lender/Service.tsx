import React, { useState } from "react";

import Sidebar from "../../components/Lender/Sidebar";
import Header from "../../components/Lender/Header";
import ServicePack12 from "../../components/Lender/Service/ServicePack12";
import ServicePack24 from "../../components/Lender/Service/ServicePack24";
import ServicePack36 from "../../components/Lender/Service/ServicePack36";
import Pay1 from "../../components/Lender/Service/Pay1";
import AccountHolder from "../../components/Lender/Service/AccountHolder";
import Content from "../../components/Lender/Service/Content";
import Bank from "../../components/Lender/Service/Bank";
import WelcomeService from "../../components/Lender/Service/WelcomeService";

function Service() {
  return (
    <div>
      <div>
        <h1 className="text-l text-gray-500">Lender/Dịch Vụ</h1>
        <WelcomeService />
        <h2>1. Thanh Toán Tiền Mặt</h2>
        <Pay1 />
        <h2>2. Thanh Toán Chuyển Khoản Ngân Hàng</h2>
        <div className="grid grid-cols-12 gap-6">
          <Bank />

          <AccountHolder />

          <Content />
        </div>
        <h2>3. Các Gói dịch vụ</h2>
        <div className="grid grid-cols-12 gap-6">
          <ServicePack12 />

          <ServicePack24 />

          <ServicePack36 />
        </div>
      </div>
    </div>
  );
}
export default Service;
