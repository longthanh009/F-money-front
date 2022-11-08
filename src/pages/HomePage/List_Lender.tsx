import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import React from 'react';
import { UserType } from '../../models/users';

type Props = {
    users: UserType[],
  }


interface DataType {
    key: React.Key;
    name: string;
    age: number;
    phone: string;
    email: string;
    interest: string;
    address: string;
}


const List_Lender = (props: Props) => {
    console.log(props.users);
    
    const columns: ColumnsType<DataType> = [
        {
            title: <strong>STT</strong>,
            dataIndex: 'key',
            width: 30,
            render: text => <p>{text}</p>,
        },
        {
            title: <strong>Họ và tên</strong>,
            dataIndex: 'name',
            width: '20%',
        },
        {
            title: <strong>Tuổi</strong>,
            dataIndex: 'age',
            sorter: (a, b) => a.age - b.age,
            width: '10%',
        },
        {
            title: <strong>Số điện thoại</strong>,
            dataIndex: 'phone',
            width: '10%',
        },
        {
            title: <strong>Email</strong>,
            dataIndex: 'email',
            width: '20%',
        },
        {
            title: <strong>Lãi Xuất</strong>,
            dataIndex: 'interest',
            filters: [
                {
                    text: '5%',
                    value: '5%',
                },
                {
                    text: '2%',
                    value: '2%',
                },
            ],
            onFilter: (value: string, record) => record.interest.startsWith(value),
            filterSearch: true,
            width: '10%',
        },
        {
            title: <strong>Địa chỉ</strong>,
            dataIndex: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            onFilter: (value: string, record) => record.address.startsWith(value),
            filterSearch: true,
            width: '40%',
        },
    ];
    
    const data: DataType[] = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            phone: "0326869406",
            email: "tramnvph14967@gmail.com",
            interest: '2%',
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            phone: "0326869406",
            email: "tramnvph14967@gmail.com",
            interest: '4%',
            address: 'London No. 1 Lake Park',
        },
        {
            key: '3',
            name: 'Joe Black',
            age: 32,
            phone: "0326869406",
            email: "tramnvph14967@gmail.com",
            interest: '5%',
            address: 'Sidney No. 1 Lake Park',
        },
        {
            key: '4',
            name: 'Jim Red',
            age: 32,
            phone: "0326869406",
            email: "tramnvph14967@gmail.com",
            interest: '5%',
            address: 'London No. 2 Lake Park',
        },
    ];
    
    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
  return (


    <Table columns={columns} dataSource={data} onChange={onChange} />


  )
}

export default List_Lender