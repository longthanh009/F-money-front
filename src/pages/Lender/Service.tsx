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
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
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
        </main>
      </div>
    </div>
  );
}
export default Service;
