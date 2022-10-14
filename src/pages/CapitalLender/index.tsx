import React from 'react'
import List_capital from './ListCapital'
import SearchCapital from './SearchCapital'



const Capital_Lender = () => {
    return (
        <>
            <h1 className='text-2xl font-bold text-orange-600'> Quản Lí Nguồn Vốn</h1>
            <hr />
            <SearchCapital />
            <hr />
            <List_capital />
        </>
    )
}

export default Capital_Lender