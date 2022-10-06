
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Lender/Dashboard'
import SiginPage from '../pages/Signin'
import SignupPage from '../pages/Signup'


import Website_Layout from '../pages/Layout/Website_Layout'
import HomePage from '../pages/HomePage'
const RoutePage = () => {
    return (
        <div>
            <Routes>
                <Route path='/signin' element={<SiginPage/>}></Route>
                <Route path='/register' element={<SignupPage/>}></Route>
                <Route path="/" element={<Dashboard />} />


                <Route path='/client' element={<Website_Layout />}>
                    <Route index element={<HomePage />} />
                  
                   
                </Route>
            </Routes>
        </div>
    )
}

export default RoutePage