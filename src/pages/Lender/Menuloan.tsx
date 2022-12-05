import React, { useEffect, useState } from 'react'
import {Select, Form,Table, Space, Pagination, PaginationProps,} from 'antd';
import BreadcrumbComponent from '../../components/Breadcrumb';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { ColumnsType } from 'antd/lib/table';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { listMenuLoan } from '../../features/menuloan';



const MenuLoan = () => {
    const dispatch = useAppDispatch();
    const menuLoan = useAppSelector(state => state.menuLoan.values)
    const [current, setCurrent] = useState(3);
    const onChange: PaginationProps['onChange'] = (page) => {
        console.log(page);
        setCurrent(page);
      };
    useEffect(() => {
        dispatch(listMenuLoan())
    }, [])
    const columns: ColumnsType<ColumnsType> = [
        {
            title: "STT",
            dataIndex: "index",
            key: "index",
            render: (text, object, index) => <div>{index + 1}</div>,
        },
        {
            title: "Họ Và Tên",
            dataIndex: "ho_ten",
        },
        {
            title: "Điện Thoại",
            dataIndex: "dien_thoai",
        },
        {
            title: "Địa Chỉ",
            dataIndex: "dia_chi",     
        },
        {
            title: "Tiền Vay",
            dataIndex: "tien_vay",     
        },  
        {
            title: "Ghi Chú",
            dataIndex: "ghi_chu",     
        },  
    ];
    return (
        <div>
            <BreadcrumbComponent />
            <h1 className='text-[25px]'>Danh sách khách hàng</h1>
            <div className='flex items-center space-x-1'>
            </div>
            <div className='content mt-[10px]'>
                <div className="overflow-x-auto">
                    <Table columns={columns} dataSource={menuLoan} />
                </div>
            </div>
        </div>
    )
}

export default MenuLoan