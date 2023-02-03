import { Pagination } from 'antd'
import { PaginationProps } from 'antd/es/pagination';
import React, { useState } from 'react'

const RenderTable = ({ }) => {
    const [current, setCurrent] = useState(3);
    const onChange: PaginationProps['onChange'] = (page) => {
        setCurrent(page);
    };
    return (
        <div>
            <Pagination current={current} onChange={onChange} total={50} />
        </div>
    )
}

export default RenderTable