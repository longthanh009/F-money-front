import { Switch, Table, Input } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import Filter from './Filter';
interface DataType {
    key: React.Key;
    name: string;
    age: number;
    phone: string;
    email: string;
    interest: string;
    address: string;
}

const columns: ColumnsType<DataType> = [
    {
        title: 'STT',
        width: 30,
        dataIndex: 'key',
        key: 'key',
        fixed: 'left',
    },
    {
        title: 'Họ tên',
        width: 100,
        dataIndex: 'name',
        key: 'name',
        fixed: 'left',
    },
    {
        title: 'Tuổi',
        width: 50,
        dataIndex: 'age',
        key: 'age',
        fixed: 'left',
    },
    {
        title: 'Số điện thoại',
        dataIndex: 'phone',
        key: 'phone',
        width: 80,
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
        width: 100,
    },
    {
        title: 'Lãi Xuất',
        dataIndex: 'interest',
        key: 'interest',
        width: 50,
    },

    {
        title: 'Địa chỉ',
        dataIndex: 'address',
        key: '3',
        width: 80,
    },


    {
        title: 'Chi tiết',
        key: 'operation',
        fixed: 'right',
        width: 30,
        render: () => <a>Chi tiết</a>,
    },
];

const data: DataType[] = [];
for (let i = 0; i < 100; i++) {
    data.push({
        key: i + 1,
        name: `Nguyễn Văn Trăm ${i}`,
        age: 32,
        phone: `0326869406`,
        email: `tramnvph14967@gmail.com`,
        interest: `5%`,
        address: `Hà Nội ${i}`,
    });
}
const List_Lender = () => {
    const [fixedTop, setFixedTop] = useState(true);

    return (
        <>
        <h1 className='text-[28px] font-bold text-lg text-orange-600 py-4'>DANH SÁCH CÁC NHÀ CHO VAY VỐN</h1>
        <Table
            columns={columns}
            dataSource={data}
            scroll={{ x: 1400 }}
            summary={() => (
                <Table.Summary fixed={fixedTop ? 'top' : 'bottom'}>
                    <Table.Summary.Row>
                        <Table.Summary.Cell index={0} colSpan={2}>
                            <Switch
                                checkedChildren="Fixed Top"
                                unCheckedChildren="Fixed Top"
                                checked={fixedTop}
                                onChange={() => {
                                    setFixedTop(!fixedTop);
                                }}
                            />
                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={4} colSpan={4}>

                        </Table.Summary.Cell>
                        <Table.Summary.Cell index={20} colSpan={2.5}>
                            <Filter />
                        </Table.Summary.Cell>
                    </Table.Summary.Row>
                </Table.Summary>
            )}
            sticky
        /></>
    )
}

export default List_Lender