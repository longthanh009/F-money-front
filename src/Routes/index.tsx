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
import ContractPage from "../pages/ContractPage";
import CustomerCheck from "../pages/Lender/CustomerCheck";
import Expense from "../pages/Lender/Expense";
import Income from "../pages/Lender/Income";
import Service from "../pages/Lender/Service";
import Installment from "../pages/Lender/Installment";
import Mortgage from "../pages/Lender/Mortgage";
{/**api user */ }
import { getUsers } from "../api/user";
import { login } from './../features/auth/authSlice';


const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Website_Layout />} >
          <Route index element={<HomePage />} />  {/**Trang chủ */}
          <Route path="suport" element={<SuportPage />} /> {/**Hỗ trợ */}
          <Route path="contract" element={<ContractPage />} /> {/**Lịch sử hợp đồng */}
        </Route>


        <Route path="/lender" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="installment/index" element={<Installment />} /> {/**Trả góp */}
          <Route path="Mortgage/index" element={<Mortgage />} /> {/**Tín chấp */}
          <Route path="customer/list" element={<CustomerList />} />  {/**Danh sách khách hàng */}
          <Route path="customer/checkCustome" element={<CustomerCheck />} /> {/**Check thông tin khách hàng */}
          <Route path="incomeAndExpense/expense" element={<Expense />} /> {/**Lịch sử chi tiêu */}
          <Route path="incomeAndExpense/income" element={<Income />} /> {/**Lịch sử thu tiền */}
          <Route path="contact" element={<Service />} /> {/**Dịch vụ thanh toán tiền */}
          <Route path="capital" element={<Capital_Lender />} /> {/**Quản lí nguồn vốn */}
        </Route>

        <Route path="/signin" element={<SiginPage />}></Route> {/**Đăng nhập */}
        <Route path="/register" element={<SignupPage />}> </Route> {/**Đăng ký */}

        <Route path="/admin" element={<LayoutDashboard />}>
          <Route index element={<AdminDashboard />} />
          <Route path="customer" element={<AdminLender />} /> {/**Danh sách khách hàng */}
          <Route path="contract" element={<AdminContractPage />} /> {/**Danh sách giao dịch */}
        </Route>
      </Routes>
    </div>
  );
};
export default RoutePage;
