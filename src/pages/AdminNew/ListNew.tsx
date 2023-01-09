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
import { listBlog, addBlog, removeBlogs, sortRoleBlog } from '../../features/blog/blog';

const l = () => {
    interface blogType {
        _id?: string,
        title?: string,
        thumbnail?: string,
        shortDescription?: string,
        content?: string,
        user?: object,
        slug?: string,
    }
    const dispatch = useAppDispatch();
    const blogs: blogType[] = useAppSelector(state => state.blogs.values)

    const [userDetail, setUserDetail] = useState<blogType>()

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
        dispatch(listBlog())
    }, [])
    const hanleSort = async (event: any) => {
        if (parseInt(event) == 3) {
            dispatch(listBlog())
        } else {
            dispatch(sortRoleBlog(parseInt(event)))
        }
    }
    const onFinish = async (values: any) => {
        const { payload } = await dispatch(addBlog(values))
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
        // const user = customers.find(r => r._id == id)
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
                await dispatch(removeBlogs(id))
                handleCancel();
            },
            allowOutsideClick: () => !Swal.isLoading()
        })   
    }
    const [isChecked, setisChecked] = useState<any>([]);
    const HandlerOngetMany = (e: any) => {
        dispatch(addMuiltipleValues(e.target))
        
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
                },
                allowOutsideClick: () => !Swal.isLoading()
            })
                
        }
        else {
            alert("please Select at least one check box !");
        }
    }
    const columns: ColumnsType<ColumnsType> = [
        {
            title: <div className="actions-user">
                <button className='text-red-600 text-lg' onClick={HandlerOnRemoveMany}><AiFillDelete /></button>
            </div>,
            render: (text, object, index) => <input type="checkbox" value={text._id} onChange={(e) => HandlerOngetMany(e)} />
        },
        {
            title: "STT",
            dataIndex: "index",
            key: "index",
            render: (text, object, index) => <div>{index + 1}</div>,
        },
        {
            title: "Tiêu Đề",
            dataIndex: "title",
            key: "title",
        },
        {
            title: "thumbnail",
            dataIndex: "thumbnail",
            key: "thumbnail",
        },
        {
            title: "content",
            dataIndex: "content",
            key: "content",
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
            <h1 className='text-[25px]'>Danh sách Blog ({blogs ? blogs.length : ""})</h1>
            <div className='flex items-center space-x-1'>
                <div className='modal-news'>
                    <Button type="primary" className='flex items-center' onClick={() => showModal("news", "Thêm mới khách hàng")}> &#10010; Thêm mới</Button>
                </div>
            </div>
            <div className='content mt-[10px]'>
                <div className="overflow-x-auto">
                    <Table columns={columns} dataSource={blogs} />
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
                                name="title"
                                label="Title" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng nhập tiêu đề' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                initialValue={userDetail}
                                name="thumbnail"
                                label="thumbnail" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng nhập thumbnail' }
                                ]}>
                                <Input />
                            </Form.Item>
                        </div>
                        <Form.Item initialValue={userDetail} name="content" label="content" className=''>
                            <TextArea rows={2} placeholder="Vui lòng nhập content" />
                        </Form.Item>
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

export default l