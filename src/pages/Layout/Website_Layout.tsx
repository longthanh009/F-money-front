import React from 'react'
import {Outlet} from 'react-router-dom'
import Header_Client from '../../components/HeaderClient'
import Footer_client from '../../components/FooterClient'

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