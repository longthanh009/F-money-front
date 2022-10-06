import React from 'react'
import {Outlet} from 'react-router-dom'
import Header_Client from '../../components/Client/Header'
import Footer_client from '../../components/Client/Footer'


const Website_Layout = () => {
    return (
        <>
            <Header_Client />
            <main>
                <Outlet />
            </main>
            <Footer_client />
        </>
    )
}

export default Website_Layout