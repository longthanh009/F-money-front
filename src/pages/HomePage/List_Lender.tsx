import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React from 'react';
import useLender from './../../hook/usersHomePage';
import { formatDate } from './../../ultils/formatDate';


interface DataType {
    key: React.Key;
    name: string;
    age: number;
    phone: string;
    email: string;
    birthDay: string;
    interest: string;
    address: string;
}

const List_Lender = () => {
    const { data: DataType, error } = useLender()
    // lọc dữ liệu role
    // const data =  DataType?.data.users.filter((item:any)=>item.role=="userLender")

    // Convert địa chị thành mảng
    let dataFilterWait = DataType?.data.users.map((item: any) =>
        item.address
    )

    // Dùng vòng lặp xóa phần tử trùng lặp
    let dataFilter: any = [];
    dataFilterWait?.forEach((item: any) => {
        // includes Xác trịnh giá trị của một mảng
        if (!dataFilter.includes(item)) {
            dataFilter.push(item);
        }
    });

    const columns: ColumnsType<DataType> = [
        // {
        //     title: <strong>STT</strong>,
        //     dataIndex: 'key',
        //     width: 30,
        //     render: (key) => { return <span className="">{key}</span> }
        // },
        {
            title: <strong>Họ và tên</strong>,
            dataIndex: 'name',
            width: '20%',
            render: (name) => { return <span className="">{name}</span> }
        },

        {
            title: <strong>Ngày sinh</strong>,
            dataIndex: 'birthDay',
            width: '15%',
            render: (birthDay) => { return <span className="">{formatDate(birthDay)}</span> }
        },
        {
            title: <strong>Số điện thoại</strong>,
            dataIndex: 'phone',
            width: '15%',
            render: (phone) => { return <span className="">{phone}</span> }
        },
        {
            title: <strong>Email</strong>,
            dataIndex: 'email',
            width: '25%',
            render: (email) => { return <span className="">{email}</span> }
        },
        {
            title: <strong>Địa chỉ</strong>,
            dataIndex: 'address',
            filters:
                dataFilter?.map((item: any) => {
                    return {
                        text: item,
                        value: item
                    }
                })
            ,
            onFilter: (value: string, record) => record.address.includes(value),
            filterSearch: true,
            width: '40%',
            render: (address) => {
                return <span className="">{address}</span>
            }
        },
    ];

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        // console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <>
            <Table  columns={columns} dataSource={DataType?.data?.users} onChange={onChange} />
        </>
    )
}

export default List_Lender