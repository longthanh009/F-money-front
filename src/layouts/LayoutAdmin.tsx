import React from 'react'
import {Outlet} from 'react-router-dom'
import HeaderAdmin from '../components/HeaderAdmin'


const LayoutAdmin = () => {
    return (
        <>
            <HeaderAdmin />
            <main>
                <Outlet />
            </main>
        
        </>
    )
}

export default LayoutAdmin