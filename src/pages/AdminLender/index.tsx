import React, { useState, useEffect, createRef, useRef } from 'react'
import { Button, Modal, Select, Form, Input, DatePicker, Upload, Table, Space, Checkbox, Dropdown } from 'antd';
import BreadcrumbComponent from '../../components/Breadcrumb';
import TextArea from 'antd/lib/input/TextArea';
import { LoadingOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { deleteMany, getAll, newUser, removeMultipleUser, removeUser, searchNameUser, addMuiltipleValues, sortStatusCustomer, updateUse, sortRoleCustomer } from '../../features/customer/customerSlice';
import Swal from 'sweetalert2'
import { ColumnsType } from 'antd/lib/table';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { formatDate } from '../../ultils/formatDate';
import type { FormInstance } from 'antd/es/form';
import ImageUpload from '../../components/upload';
import ImageUpload2 from '../../components/upload/upload2';
import { AddressValue } from '../../ultils/address';

const AdminLender = () => {
    interface customerType {
        _id?: string,
        name?: string,
        user?: string,
        email?: string,
        password?: string,
        phone?: number,
        role?: boolean,
        status?: boolean,
        address?: string,
        username?: string
    }
    const dispatch = useAppDispatch();
    const customers: customerType[] = useAppSelector(state => state.customer.values)

    const [userDetail, setUserDetail] = useState<customerType>()

    const [image1, setImage1] = useState<any[]>([]);
    const [image2, setImage2] = useState<any[]>([]);

    const check = useAppSelector(state => state.customer.check)
    const [user, setUser] = useState<any>();
    const [type, setType] = useState<any>("")
    const [title, setTitle] = useState<any>("")
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { Option } = Select;
    const [selectionType, setSelectionType] = useState<'checkbox' | 'radio'>('checkbox');
    const [form] = Form.useForm<any>();
    const [imageUrl, setImageUrl] = useState<string>();
    const formRef = createRef<FormInstance>()
    const searchRef = useRef<any>(null);

    const showModal = (type: any, title: any) => {
        setOpen(true)
        setType(type)
        setTitle(title)
        if (type == "news") {
            setUser(undefined)
        }
    }
    const handleCancel = () => {
        setOpen(false);
        setUser(undefined)
        form.resetFields();
        setUserDetail({})
    };
    useEffect(() => {
        dispatch(getAll())
    }, [])
    const hanleSort = async (event: any) => {
        if (parseInt(event) == 3) {
            dispatch(getAll())
        } else {
            dispatch(sortRoleCustomer(parseInt(event)))
        }
    }
    const onChaneType = (e: any) => {
        setType(parseInt(e))
    }
    const onFinish = async (values: any) => {

        values.imagePrev = values.avatarList?.fileList;
        values.imageBack = values.avatarList2?.fileList;
        delete values?.avatarList;
        delete values?.avatarList2;
        if (values.imagePrev) {
            values.imagePrev = values.imagePrev[0].url
        }
        if (values.imageBack) {
            values.imageBack = values.imageBack[0].url
        }

        const { payload } = await dispatch(newUser(values))
        if (payload.error) {
            Swal.fire({
                icon: 'error',
                text: payload.error,
                showConfirmButton: false,
                timer: 1500
            })
        } else {
            handleCancel();
            Swal.fire({
                icon: 'success',
                text: "Thêm mới thành công",
                showConfirmButton: false,
                timer: 1500
            })
            form.resetFields();
        }
    };
    const getCustumer = async (id: any) => {
        showModal("update", "Thông tin khách hàng")
        const user = customers.find(r => r._id == id)
        !!user && setUserDetail(user)
        const updateUser = async () => {
            dispatch(updateUse(id.target))
        }
    }
    const handlerRemoveCustumer = (id: any) => {
        Swal.fire({
            title: 'Bạn có chắc muốn xoá người dùng này ?',
            showCancelButton: true,
            confirmButtonText: 'Có',
            cancelButtonText: 'Không',
            showLoaderOnConfirm: true,
            preConfirm: async () => {
                await dispatch(removeUser(id))
                handleCancel();
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    }
    const [isChecked, setisChecked] = useState<any>([]);
    const HandlerOngetMany = (e: any) => {
        dispatch(addMuiltipleValues(e.target))
        // const {value ,checked} = e.target;
        // if (checked) {
        //     setisChecked([...isChecked, value]);
        // }
        // else{
        //     setisChecked(isChecked.filter((e:any) => e !== value))
        // }
    }
    const HandlerOnRemoveMany = async () => {
        if (check.length !== 0) {
            Swal.fire({
                title: 'Bạn có chắc muốn xoá người dùng này ?',
                showCancelButton: true,
                confirmButtonText: 'Có',
                cancelButtonText: 'Không',
                showLoaderOnConfirm: true,
                preConfirm: async () => {
                    dispatch(deleteMany({ params: { id: check } }))
                    dispatch(removeMultipleUser(check))
                    handleCancel();
                    // navigate(0)
                },
                allowOutsideClick: () => !Swal.isLoading()
            })
            // const responce = await deletelManyUser({
            //     params: {id: isChecked}
            // });          
        }
        else {
            alert("please Select at least one check box !");
        }
    }
    const columns: ColumnsType<ColumnsType> = [
        // {
        //     title: <div className="actions-user">
        //         <button className='text-red-600 text-lg' onClick={HandlerOnRemoveMany}><AiFillDelete /></button>
        //     </div>,
        //     render: (text, object, index) => <input type="checkbox" value={text._id} onChange={(e) => HandlerOngetMany(e)} />
        // },
        {
            title: "STT",
            dataIndex: "index",
            key: "index",
            render: (text, object, index) => <div>{index + 1}</div>,
        },
        {
            title: "Tên khách hàng",
            dataIndex: "name",
            key: "ten_khach_hang",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "khoan_vay",
        },
        {
            title: "Điện thoại",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Ngày tạo",
            dataIndex: "createdAt",
            render: (item: any) => {
                return (
                    <div>
                        {formatDate(item)}
                    </div>
                );
            },
        },
        {
            title: "Trạng thái",
            render: (values, record, index) => <div>{values.status ? <div style={{ color: '#61bd4f' }}>Đang hoạt động</div> : <div style={{ color: 'red' }}>Khóa</div>}</div>,
        },
        {
            title: "Action",
            key: "action",
            render: (item: any) => {
                return (
                    <Space size="middle">
                        <button onClick={() => { getCustumer(item._id);; }}><AiFillEdit /></button>
                        <button className='text-red-600' onClick={() => handlerRemoveCustumer(item._id)}><AiFillDelete /></button>
                    </Space>
                );
            },
        },
    ];
    const searchName = (keyword: string) => {
        dispatch(getAll())
        if (searchRef.current) {
            clearTimeout(searchRef.current)
        };
        searchRef.current = setTimeout(() => {
            dispatch(searchNameUser(keyword))
        }, 1000)
    };
    const hanlderSortStatus = async (e: any) => {
        if (e == 0) {
            dispatch(getAll())
        }
        else {
            await dispatch(getAll())
            dispatch(sortStatusCustomer(JSON.parse(e) as boolean))
        }
    }
    return (
        <div>
            <BreadcrumbComponent />
            <h1 className='text-[25px]'>Danh sách khách hàng ({customers ? customers.length : ""})</h1>
            <div className='flex items-center space-x-1'>
                <div className='modal-news'>
                    <Button type="primary" className='flex items-center' onClick={() => showModal("news", "Thêm mới khách hàng")}> &#10010; Thêm mới</Button>
                </div>
                <div className='search w-[300px]'>
                    <form>
                        <Input onChange={(e) => searchName(e.target.value)} placeholder="Tìm kiếm..." prefix={<SearchOutlined />} />
                    </form>
                </div>
                <div className='search-select'>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Trạng thái"
                        onChange={hanlderSortStatus}
                        optionFilterProp="children"
                        filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA!.children as unknown as string)
                                .toLowerCase()
                                .localeCompare((optionB!.children as unknown as string).toLowerCase())
                        }
                    >
                        <Option value="0">ALL</Option>
                        <Option value="true">Hoạt động</Option>
                        <Option value="false">Khoá</Option>
                    </Select>

                </div>
                <div className="search-role">
                    <Select
                        onChange={hanleSort}
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Loại khách hàng"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA!.children as unknown as string)
                                .toLowerCase()
                                .localeCompare((optionB!.children as unknown as string).toLowerCase())
                        }
                    >
                        <Option value="3">All</Option>
                        <Option value="2">Quản trị</Option>
                        <Option value="1">Lender</Option>
                        <Option value="0">Người vay</Option>
                    </Select>
                </div>

            </div>
            <div className='content mt-[10px]'>
                <div className="overflow-x-auto">
                    <Table columns={columns} dataSource={customers}  pagination={{ defaultPageSize: 5}}/>
                </div>
            </div>
            <Modal open={open} style={{ top: 20 }} title={title} onCancel={handleCancel} width={700}
                footer={[]}
            >
                <div>
                    <Form layout="vertical" autoComplete="on" onFinish={onFinish} form={form}
                        ref={formRef}
                    >
                        <div className="flex space-x-[10px]">
                            <Form.Item
                                name="name"
                                label="Họ Tên" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}>
                                <Input placeholder="Họ tên" />
                            </Form.Item>
                            <Form.Item
                                initialValue={userDetail?.email}
                                name="email"
                                label="Email" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng nhập email' }, {
                                    type: 'email',
                                    message: 'Không đúng định dạng email',
                                }]}>
                                <Input placeholder="Email" />
                            </Form.Item>
                        </div>


                        {/* <Form.Item initialValue={userDetail?.address} name="address" label="Địa chỉ (Nơi ở)" className=''>
                            <TextArea rows={2} placeholder="" />
                        </Form.Item> */}

                        <div className="flex space-x-[10px]">
                            <Form.Item label="Địa chỉ"
                                name="address" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng chọn địa chỉ' }]}
                            >
                                <Select placeholder="Tỉnh/Thành Phố">
                                    {
                                        AddressValue?.map((item: any) => (
                                            <Option value={item.name}>{item.name}</Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item
                                initialValue={userDetail?.phone}
                                name="phone" label="Số điện thoại" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' },
                                {
                                    pattern: new RegExp(/((9|3|7|8|5)+([0-9]{8})\b)/g),
                                    message: "Số điện thoại không đúng định dạng!"
                                }]
                                }
                            >
                                <Input placeholder="Số điện thoại" />
                            </Form.Item>
                        </div>


                        <div className="flex space-x-[10px]">
                            <Form.Item
                                initialValue={userDetail?.username}
                                name="username" label="Tên đăng nhập" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng điền tên đăng nhập' }]}>
                                <Input placeholder="Tên đăng nhập" />
                            </Form.Item>
                            <Form.Item
                                initialValue={userDetail?.password}
                                name="password" label="Mật khẩu" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu đăng nhập' }]}>
                                <Input placeholder="Mật khẩu" />
                            </Form.Item>
                        </div>
                        <div>

                            <Form.Item name="role" label="Vai trò" rules={[{ required: true, message: 'Vui lòng chọn đối tượng' }]}>
                                <Select
                                    placeholder="Vui lòng chọn đối tượng"
                                    onChange={onChaneType}
                                    allowClear
                                >
                                    <Option value="0">Customer</Option>
                                    <Option value="1">Lender</Option>
                                    <Option value="2">Admin</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item
                                noStyle
                                shouldUpdate={(prevValues, currentValues) => prevValues.role !== currentValues.role}
                            >
                                {({ getFieldValue }) =>
                                    getFieldValue('role') === '1' || getFieldValue('role') === '2' ? (
                                        <>
                                            <Form.Item label="CCCD/CMND"
                                                name="CCCD"
                                                rules={[{ required: true, message: 'Vui lòng nhập CMND/CCCD' },
                                                {
                                                    pattern: new RegExp(/[0-9]{9}/g),
                                                    message: "Số CMND/CCCD không đúng định dạng!"
                                                }
                                                ]}
                                            >
                                                <Input placeholder="CCCD" />
                                            </Form.Item>

                                            <p></p>
                                            <p style={{ fontSize: "12px", fontStyle: "italic" }}>* Vui lòng tải lên hình ảnh CCCD/CMND</p>
                                            <div style={{ width: '100%', display: 'flex', textAlign: 'center', marginBottom: 10 }}>
                                                <Space direction="vertical" style={{ width: '50%', padding: 5 }} size="large">
                                                    <ImageUpload imageList={image1} key={1} limit={1} />
                                                </Space>

                                                <Space direction="vertical" style={{ width: '50%', padding: 5 }} size="large">
                                                    <ImageUpload2 imageList={image2} key={1} limit={1} />
                                                </Space>
                                            </div>



                                            <p style={{ fontSize: "12px", fontStyle: "italic" }}>* Bạn được sử dụng miễn phí 7 ngày / Sau 7 ngày phí đăng kí tài khoản là:</p>
                                            <Form.Item
                                                name="money" >
                                                <Input placeholder="1.000.000 VNĐ" disabled />
                                            </Form.Item>

                                        </>
                                    ) : null
                                }
                            </Form.Item>


                            <Form.Item name="status" label="Trạng thái" className=''>
                                <Select defaultValue={userDetail?.status}>
                                    <Option value={false}>Khoá</Option>
                                    <Option value={true}>Hoạt động</Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <Form.Item className='flex justify-end'>
                            <Button key="back" onClick={handleCancel} className="mr-[10px]">
                                Trở lại
                            </Button>
                            <Button key="submit" htmlType="submit" type="primary" >
                                Lưu
                            </Button>
                            {/* <Button key="submit" htmlType="submit" type="primary" onClick={() => updateUser()}>
                                Lưu
                            </Button> */}
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default AdminLender