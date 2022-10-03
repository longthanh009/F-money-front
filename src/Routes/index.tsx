
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SiginPage from '../pages/Signin'

const RoutePage = () => {
    return (
        <div>
            <Routes>
                <Route path='/signin' element={<SiginPage/>}></Route>
            </Routes>
        </div>
    )
}

export default RoutePage