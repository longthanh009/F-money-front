import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerList from '../pages/Lender/CustomerList'
import LayoutDashboard from '../layouts/LayoutDashboard'
import AdminLender from '../pages/AdminLender'
import Dashboard from '../pages/Lender/Dashboard'
import Capital_Lender from '../pages/CapitalLender'
import SiginPage from '../pages/Signin'
import SignupPage from '../pages/Signup'
import AdminContractPage from '../pages/AdminContract'


import Website_Layout from '../layouts/LayoutWebsite'
import HomePage from '../pages/HomePage'
import SuportPage from '../pages/SuportPage'
import ContractPage from '../pages/ContractPage'

import DebitCustomers from '../pages/Lender/DebitCustomers'

const RoutePage = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path='/client' element={<Website_Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path='suport' element={<SuportPage />} />
                    <Route path='contract' element={<ContractPage />} />
                </Route>

                <Route path="/lender" element={<LayoutDashboard />} >
                    <Route index element={<Dashboard />} />
                    <Route path="customer/list" element={<CustomerList />} />
                    <Route path="customer/debitCustomer" element={<DebitCustomers />} />
                    <Route path='capital' element={<Capital_Lender />} />
                </Route>

                <Route path='/signin' element={<SiginPage />}></Route>
                <Route path='/register' element={<SignupPage />}></Route>

                <Route path="/admin" element={<LayoutDashboard />} >
                    <Route index element={<Dashboard />} />
                    <Route path='customer' element={<AdminLender />} />
                    <Route path='contract' element={<AdminContractPage />} />
                </Route>
            </Routes>
        </div>
    )
}

export default RoutePage