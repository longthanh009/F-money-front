
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import CustomerList from '../pages/Lender/CustomerList'
import LayoutDashboard from '../layouts/LayoutDashboard'
import AdminLender from '../pages/AdminLender'
import Dashboard from '../pages/Lender/Dashboard'
import SiginPage from '../pages/Signin'
import SignupPage from '../pages/Signup'
import AdminContractPage from '../pages/AdminContract'
const RoutePage = () => {
    return (
        <div>
            <Routes>
                <Route path="/lender/customer/list" element={<CustomerList />} />
                <Route path='/signin' element={<SiginPage />}></Route>
                <Route path='/register' element={<SignupPage />}></Route>
                <Route path="/" element={<LayoutDashboard />} >
                    <Route index element={<Dashboard />} />
                </Route>
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