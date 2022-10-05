
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Lender/Dashboard'
import SiginPage from '../pages/Signin'
import SignupPage from '../pages/Signup'
const RoutePage = () => {
    return (
        <div>
            <Routes>
                <Route path='/signin' element={<SiginPage/>}></Route>
                <Route path='/register' element={<SignupPage/>}></Route>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </div>
    )
}

export default RoutePage