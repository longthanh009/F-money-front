import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import CustomerList from "../pages/Lender/CustomerList";
import LayoutDashboard from "../layouts/LayoutDashboard";
import AdminLender from "../pages/AdminLender";
import Dashboard from "../pages/Lender/Dashboard";
import Capital_Lender from "../pages/CapitalLender";
import LayoutAdmin from "../layouts/LayoutAdmin";
import AdminDashboard from "../pages/AdminDashboard";
import SiginPage from "../pages/Signin";
import SignupPage from "../pages/Signup";
import AdminContractPage from "../pages/AdminContract";
import Website_Layout from "../layouts/LayoutWebsite";
import HomePage from "../pages/HomePage";
import SuportPage from "../pages/SuportPage";
import ContractPage from "./../pages/ContractPage/index";
import Historic_ContractPage from "../pages/Historic_ContractPage";
import CustomerCheck from "../pages/Lender/CustomerCheck";
import Expense from "../pages/Lender/Expense";
import Income from "../pages/Lender/Income";
import Service from "../pages/Lender/Service";
import Installment from "../pages/Lender/Installment";
import Mortgage from "../pages/Lender/Mortgage";
{
  /**api user */
}
import { login } from "./../features/auth/authSlice";
import AccountClient from "../pages/accountClient";
import Passwword from "../pages/accountClient/password";
import ServiceList from "../pages/AdminService/ServiceList";
import {
  PrivateRouterAdmin,
  PrivateRouterLender,
} from "../components/private/privateRouter";
import Test from "../models/Test";
import AdminSupport from "../pages/AdminSupport/AdminSupport";
import MenuLoan from "../pages/Lender/Menuloan";
import Rules from "../pages/Rules";
import CustomConta from "../pages/Lender/CustomConta";

const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Website_Layout />}>
          <Route index element={<HomePage />} /> {/**Trang chủ */}
          <Route path="accountClient/:id" element={<AccountClient />} />{" "}
          {/**Thông tin tài khoản */}
          <Route path="password/:id" element={<Passwword />} />{" "}
          {/**Đổi mật khẩu */}
          <Route path="suport" element={<SuportPage />} /> {/**Hỗ trợ */}
          <Route path="contractPage" element={<ContractPage />} />{" "}
          <Route path="rule" element={<Rules />} /> {/**Yêu cầu hợp đồng */}
          <Route
            path="historic_Contract"
            element={<Historic_ContractPage />}
          />{" "}
          {/**Lịch sử hợp đồng */}
        </Route>
        <Route
          path="/lender"
          element={
            <PrivateRouterLender>
              <LayoutDashboard />
            </PrivateRouterLender>
          }
        >
          <Route index element={<Dashboard />} />
          <Route path="installment/index" element={<Installment />} />{" "}
          {/**Trả góp */}
          <Route path="Mortgage/index" element={<Mortgage />} />{" "}
          {/**Tín chấp */}
          <Route path="customer/list" element={<CustomerList />} />{" "}
          {/**Danh sách khách hàng */}
          <Route
            path="customer/checkCustome"
            element={<CustomerCheck />}
          />{" "}
          {/**Check thông tin khách hàng */}
          <Route path="incomeAndExpense/expense" element={<Expense />} />{" "}
          {/**Lịch sử chi tiêu */}
          <Route path="incomeAndExpense/income" element={<Income />} />{" "}
          {/**Lịch sử thu tiền */}
          <Route path="contact" element={<Service />} />{" "}
          {/**Dịch vụ thanh toán tiền */}
          <Route path="capital" element={<Capital_Lender />} />{" "}
          {/**Quản lí nguồn vốn */}
          <Route path="menuLoan" element={<MenuLoan />} />{" "}
          {/**Yêu cầu vay tiền*/}
          <Route path="customerContact" element={<CustomConta />} />{" "}
          {/**Yêu cầu vay tiền*/}
        </Route>
        <Route path="/signin" element={<SiginPage />}></Route> {/**Đăng nhập */}
        <Route path="/register" element={<SignupPage />}>
          {" "}
        </Route>{" "}
        {/**Đăng ký */}
        <Route
          path="/admin"
          element={
            <PrivateRouterAdmin>
              <LayoutDashboard />
            </PrivateRouterAdmin>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="customer" element={<AdminLender />} />{" "}
          <Route path="installment/index" element={<Installment />} />{" "}
          {/**Trả góp */}
          <Route path="Mortgage/index" element={<Mortgage />} />{" "}
          {/**Tín chấp */}
          {/**Danh sách khách hàng */}
          <Route path="contract" element={<AdminContractPage />} />{" "}
          {/**Danh sách giao dịch */}
          <Route path="service" element={<ServiceList />} />{" "}
          {/**Danh sách dich vu */}
          <Route path="support" element={<AdminSupport />} />{" "}
          {/**Hỗ trợ khách hàng */}
        </Route>
      </Routes>
    </div>
  );
};
export default RoutePage;
