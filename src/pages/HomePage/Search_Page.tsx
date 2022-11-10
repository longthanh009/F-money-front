import { Button, Modal, Select } from 'antd';
import React, { useState } from 'react';
import List_Lender from './List_Lender';

import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import useLender from './../../hook/usersHomePage';
import { formatDate } from './../../ultils/formatDate';
const OPTIONS = ['Apples', 'Nails', 'Bananas', 'Helicopters'];

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
const App: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };



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

    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [dataTable, setDataTable] = useState<any[]>([]);
    const filteredOptions = dataFilter.filter(item => !selectedItems.includes(item));

    const columns: ColumnsType<DataType> = [
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
            width: '40%',
            render: (address) => {
                return <span className="">{address}</span>
            }
        },
    ];

    const handleFilter = (e: any) => {
        let newArr: any = []
        if (e.length > 0) {
            e.map((item: any, index: any) => {
                DataType?.data?.users.map((current: any) => {
                    if (current.address.includes(e[index])) {
                        newArr.push(current)
                    }
                })
            })
            setDataTable(newArr)
        } else {
            setDataTable([])
        }
        // console.log(newArr);
    }

    const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
        // console.log('params', pagination, filters, sorter, extra);
    };
    return (
        <div className='text-center p-8'>
            <div>
                <input placeholder='Tìm Kiếm Các Nhà Cho Vay Vốn Uy Tín Gần Bạn' className='px-4 w-1/2 h-8 border border-slate-400' onClick={showModal} type="text" />
            </div>


            <Modal className='text-center' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width="1000px">
                <div className='pb-4'>
                    <h1 className='text-xl font-bold'>Tìm Kiếm Các Nhà Cho Vay Vốn Uy Tín Hàng Đầu Tại F-Money</h1>
                    <Select
                        mode="multiple"
                        placeholder="Tìm Kiếm Các Nhà Cho Vay Vốn Uy Tín Gần Bạn"
                        value={selectedItems}
                        onChange={(e) => { setSelectedItems(e), handleFilter(e) }}
                        style={{ width: '50%' }}
                        options={filteredOptions.map(item => ({
                            value: item,
                            label: item,
                        }))}
                    />
                </div>
                <Table columns={columns} dataSource={dataTable.length == 0 ? DataType?.data?.users : dataTable} onChange={onChange} />
            </Modal>



        </ div>
    );
};

export default App;