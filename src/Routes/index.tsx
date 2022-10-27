import React from "react";
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

const RoutePage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/client" element={<Website_Layout />}>
          <Route index element={<HomePage />} />
          <Route path="suport" element={<SuportPage />} />
          <Route path="contract" element={<ContractPage />} />
        </Route>
        <Route path="/lender" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="installment/index" element={<Installment />} />
          <Route path="Mortgage/index" element={<Mortgage />} />
          <Route path="customer/list" element={<CustomerList />} />
          <Route path="customer/checkCustome" element={<CustomerCheck />} />
          <Route path="incomeAndExpense/expense" element={<Expense />} />
          <Route path="incomeAndExpense/income" element={<Income />} />
          <Route path="contact" element={<Service />} />

          <Route path="capital" element={<Capital_Lender />} />
        </Route>

        <Route path="/signin" element={<SiginPage />}></Route>
        <Route path="/register" element={<SignupPage />}></Route>

        <Route path="/admin" element={<LayoutDashboard />}>
          <Route index element={<Dashboard />} />
          <Route path="/admin" element={<LayoutAdmin />} />
          <Route index element={<AdminDashboard />} />
          <Route path="customer" element={<AdminLender />} />
          <Route path="contract" element={<AdminContractPage />} />
        </Route>
      </Routes>
    </div>
  );
};
export default RoutePage;
