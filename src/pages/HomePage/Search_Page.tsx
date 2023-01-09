import { Button, Modal, Select, Input, Col, Row, } from 'antd';
import React, { useState } from 'react';
import { SearchOutlined } from '@ant-design/icons';
const { Search } = Input;
const onSearch = (value) => console.log(value);
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';
import useLender from './../../hook/usersHomePage';
import { formatDate } from './../../ultils/formatDate';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
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
    const { inforUser, isLogin } = useAppSelector(state => state.auth)
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
    const data = DataType?.data.users.filter((item: any) => item.role == "1")

    console.log(data);
    
    // Convert địa chị thành mảng
    let dataFilterWait = data?.map((item: any) =>
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

        // {
        //     title: <strong>Ngày sinh</strong>,
        //     width: '15%',
        //     render: (birthDay) => { return <span className="">{formatDate(birthDay)}</span> }
        // },
        {
            title: <strong>Số điện thoại</strong>,
            dataIndex: 'phone',
            width: '20%',
            render: (phone) => { return <span className="">{phone}</span> }
        },
        {
            title: <strong>Email</strong>,
            dataIndex: 'email',
            width: '30%',
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
                data.map((current: any) => {
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
        <div className='py-8'>
            <div data-aos="fade-up"
                data-aos-duration="2000">
                <h1 className='title text-center text-3xl lg:text-2xl md:text-xl ms:text-lg text-orange-600 font-bold'>Vay tiền ở đâu nhanh và an toàn?</h1>
                <p className='xl:text-lg lg: text-base md:text-sm ms:text-xs italic text-center'>Khi cần gấp một khoản tiền, hầu hết chúng ta đều chú trọng yếu tố nhanh chóng, tiện lợi mà xem nhẹ mức độ uy tín, sự minh bạch của nguồn vay, dễ dàng gặp phải tình huống “tiền mất, tật mang".  Vay tiền online không khó, nhưng muốn an toàn và nhanh chóng thì bạn phải tìm đến ngay <span className='font-bold text-lg text-orange-600'>F-Money</span>.</p>

                <div className='mx-auto py-4 xl:w-1/2 lg:w-96 md:w-72  sm:w-72 lg:text-sm xl:text-xs'>
                    <Search
                        placeholder="Tìm Kiếm Các Nhà Cho Vay Vốn Uy Tín Gần Bạn"
                        onSearch={onSearch} onClick={showModal}
                    />
                </div>
                <div className="mx-auto button w-64 h-10 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                    <Link to="/contractPage"><span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">Tạo yêu cầu vay vốn</span></Link>
                </div>

            </div>
            {isLogin ? (
                <Modal className='' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width="1000px">
                    <div className='pb-4'>
                        <h1 className='text-2xl font-bold text-center p-4 text-orange-600'>Tìm Kiếm Các Nhà Cho Vay Vốn Uy Tín Hàng Đầu Tại F-Money</h1>
                        <span className='font-bold text-base'>Tỉnh/Thành Phố: </span>
                        <Select
                            mode="multiple"
                            placeholder="Khu vực của bạn?"
                            value={selectedItems}
                            onChange={(e) => { setSelectedItems(e), handleFilter(e) }}
                            style={{ width: '35%' }}
                            options={filteredOptions.map((item: any) => ({
                                value: item,
                                label: item,
                            }))}
                        />
                    </div>
                    <Table columns={columns} dataSource={dataTable.length == 0 ? data : dataTable} onChange={onChange} />
                </Modal>
            ) : (
                <Modal className='' open={isModalOpen} onOk={handleOk} onCancel={handleCancel} width="1000px">
                    <div className='text-center'>
                        <h1 className='text-3xl p-2 font-bold'>Cảm ơn bạn đã ghé thăm F-money</h1>
                        <hr />
                        <p className='text-xl p-2'>Vui Lòng Đăng nhập để có thể tìm kiếm các nhà cho vay vốn uy tín gần bạn</p>
                        <div className="flex ">
                            <div className=" mx-auto button w-32 h-8 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                                <Link to="/signin">
                                    <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                                        Đăng nhập
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Modal>
            )}

        </ div>
    );

};

export default App;