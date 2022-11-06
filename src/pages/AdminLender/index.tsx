import React, { useState, useEffect } from 'react'
import { Button, Modal, Select, Form, Input, DatePicker, Upload } from 'antd';
import BreadcrumbComponent from '../../components/Breadcrumb';
import TextArea from 'antd/lib/input/TextArea';
import { LoadingOutlined, PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getAll, newUser } from '../../features/customer/customerSlice';
import Swal from 'sweetalert2'
import { getUser } from '../../api/user';

const AdminLender = () => {
    const dispatch = useAppDispatch();
    const customers = useAppSelector(state => state.customer.values)
    const [user, setUser] = useState();
    const [type, setType] = useState<any>("")
    const [title, setTitle] = useState<any>("")
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const [data, setData] = useState<any>({ name: "abc" });
    const { Option } = Select;
    const [form] = Form.useForm<any>();
    const [imageUrl, setImageUrl] = useState<string>();
    const showModal = (type: any, title: any) => {
        setOpen(true)
        setType(type)
        setTitle(title)
    }
    const handleOk = () => {
        // setLoading(true);
        // setTimeout(() => {
        //     setLoading(false);
        //     setOpen(false);
        // }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
        form.resetFields();
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    useEffect(() => {
        dispatch(getAll())
    }, [])
    const onFinish = async (values: any) => {
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
        const { data } = await getUser(id)
        setUser(data)
    }
    const handlerRemoveCustumer = (id :any) => {
        Swal.fire({
            title: 'Bạn có chắc muốn xoá người dùng này ?',
            showCancelButton: true,
            confirmButtonText: 'Có',
            cancelButtonText: 'Không',
            showLoaderOnConfirm: true,
            preConfirm: async() => {
            },
            allowOutsideClick: () => !Swal.isLoading()
        })
    }
    return (
        <div>
            <BreadcrumbComponent />
            <h1 className='text-[25px]'>Danh sách khách hàng ({customers ? customers.length : ""})</h1>
            <div className='flex items-center space-x-1'>
                <div className='modal-news'>
                    <Button className='flex items-center' onClick={() => showModal("news", "Thêm mới khách hàng")}> &#10010; Thêm mới</Button>
                </div>
                <div className='search w-[300px]'>
                    <form>
                        <Input placeholder="Tìm kiếm..." prefix={<SearchOutlined />} />
                    </form>
                </div>
                <div className='search-select'>
                    <Select
                        showSearch
                        style={{ width: 200 }}
                        placeholder="Trạng thái"
                        optionFilterProp="children"
                        filterOption={(input, option) => (option!.children as unknown as string).includes(input)}
                        filterSort={(optionA, optionB) =>
                            (optionA!.children as unknown as string)
                                .toLowerCase()
                                .localeCompare((optionB!.children as unknown as string).toLowerCase())
                        }
                    >
                        <Option value="1">ALL</Option>
                        <Option value="2">Hoạt động</Option>
                        <Option value="3">Khoá</Option>
                    </Select>

                </div>
                <div className="search-role">
                    <Select
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
                        <Option value="1">ALL</Option>
                        <Option value="2">Lender</Option>
                        <Option value="3">Người vay</Option>
                    </Select>
                </div>
            </div>
            <div className='content mt-[10px]'>
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                            <tr>
                                <th className="p-2">
                                    <div className="font-semibold text-left">STT</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Email</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Họ và tên</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Điện thoại</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Ngày tạo</div>
                                </th>
                                <th className="p-2">
                                    <div className="font-semibold text-center">Trạng thái</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm font-medium divide-y divide-slate-100">
                            {/* Row */}
                            {customers && customers.map((cus: any, index) => {
                                return <tr key={cus._id} onDoubleClick={() => { showModal("update", "Thông tin khách hàng"); getCustumer(cus._id) }}>
                                    <td className="p-2">
                                        <div className="flex items-center">
                                            <div className="text-slate-800">{index + 1}</div>
                                        </div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-center">{cus.email}</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-center">{cus.name}</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-center">0{cus.phone}</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-center">{cus.createdAt}</div>
                                    </td>
                                    <td className="p-2">
                                        <div className="text-center text-green-600">Hoạt động</div>
                                    </td>
                                </tr>
                            })}

                        </tbody>
                    </table>
                    <div className="flex flex-col justify-center items-end mt-[40px]">
                        {/* Help text */}
                        <span className="text-sm text-gray-700 dark:text-gray-400">
                            Showing <span className="font-semibold text-gray-900 dark:text-white">1</span> to <span className="font-semibold text-gray-900 dark:text-white">10</span> of <span className="font-semibold text-gray-900 dark:text-white">100</span> Entries
                        </span>
                        {/* Buttons */}
                        <div className="inline-flex mt-2 xs:mt-0">
                            <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Prev
                            </button>
                            <button className="py-2 px-4 text-sm font-medium text-white bg-gray-800 rounded-r border-0 border-l border-gray-700 hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={open} style={{ top: 20 }} title={title} onOk={handleOk} onCancel={handleCancel} width={700}
                footer={[]}
            >
                <div>
                    <Form layout="vertical" autoComplete="on" onFinish={onFinish} form={form}
                        initialValues={user}
                    >
                        <div className="flex space-x-[10px]">
                            <Form.Item
                                name="name"
                                label="Họ Tên" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="Email" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng nhập email' }, {
                                    type: 'email',
                                    message: 'Không đúng định dạng email',
                                }]}>
                                <Input />
                            </Form.Item>
                        </div>
                        <Form.Item name="address" label="Địa chỉ (Nơi ở)" className=''>
                            <TextArea rows={2} placeholder="" />
                        </Form.Item>
                        <Form.Item name="username" label="Tên đăng nhập" className=''
                            rules={[{ required: true, message: 'Vui lòng điền tên đăng nhập' }]}>
                            <Input />
                        </Form.Item>
                        {type == 'news' ? <div className="flex space-x-[10px]">
                            <Form.Item name="password" label="Mật khẩu" className='w-[50%]'
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu đăng nhập' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="confirmPassword" label="Xác nhận mật khẩu" className='w-[50%]'
                                rules={[{ required: true, message: 'Xác nhận mật khẩu' }]}>
                                <Input />
                            </Form.Item>
                        </div> : ""}
                        <div className="flex space-x-[10px]">
                            <Form.Item name="phone" label="Số điện thoại" className='w-[40%]'
                                rules={[{ required: true, message: 'Không bỏ trống số điện thoại' }, { max: 11, message: 'Nhập tối đa 11 ký tự số' }, { type: 'string', message: 'Vui lòng nhập ký tự số' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="birthday" label="Ngày sinh" className=''>
                                <DatePicker />
                            </Form.Item>
                            <Form.Item name="role" label="Vai trò" className='w-[100px]'
                                rules={[{ required: true, message: 'Vui lòng chọn vai trò' }]}>
                                <Select defaultValue={-1}>
                                    <Option value={-1}>Vai trò</Option>
                                    <Option value={0}>Customer</Option>
                                    <Option value={1}>Lender</Option>
                                    <Option value={2}>Quản trị</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item name="active" label="Trạng thái" className=''>
                                <Select defaultValue="0">
                                    <Option value="0">Khoá</Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <Form.Item name="avatar" label="Ảnh đại diện" className='w-[70%]'>
                            <Upload
                                name="avatar"
                                listType="picture-card"
                                className="avatar-uploader"
                                showUploadList={false}
                            >
                                {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                            </Upload>
                        </Form.Item>
                        <Form.Item className='flex justify-end'>
                            <Button key="back" onClick={handleCancel} className="mr-[10px]">
                                Trở lại
                            </Button>
                            {type == "update" ? <Button key="back" onClick={() => handlerRemoveCustumer(user._id ? user._id  : "")} className="mr-[10px]">
                                Xoá
                            </Button> : ""}
                            <Button key="submit" htmlType="submit" type="primary">
                                Lưu
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}

export default AdminLender