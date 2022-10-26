import React, { useState } from 'react'
import { Button, Modal, Select, Form, Input, DatePicker, Upload } from 'antd';
import BreadcrumbComponent from '../../components/Breadcrumb';
import TextArea from 'antd/lib/input/TextArea';
import { LoadingOutlined, PlusOutlined, SearchOutlined, UserOutlined } from '@ant-design/icons';
const AdminLender = () => {
    const [type, setType] = useState<any>("")
    const [title, setTitle] = useState<any>("")
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const { Option } = Select;
    const [form] = Form.useForm<{ name: string; age: number }>();
    const [imageUrl, setImageUrl] = useState<string>();
    const showModal = (type: any, title: any) => {
        setOpen(true)
        setType(type)
        setTitle(title)
    }
    const handleOk = () => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setOpen(false);
        }, 3000);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined /> : <PlusOutlined />}
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );
    return (
        <div>
            <BreadcrumbComponent />
            <h1 className='text-[25px]'>Danh sách khách hàng (0)</h1>
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
                            <tr onDoubleClick={() => showModal("update", "Thông tin khách hàng")}>
                                <td className="p-2">
                                    <div className="flex items-center">
                                        <div className="text-slate-800">1</div>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Vay Lãi</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">VL01</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Anh Đai</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">22/3/2021</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-600">Hoạt động</div>
                                </td>
                            </tr>
                            {/* Row */}
                            <tr>
                                <td className="p-2">
                                    <div className="flex items-center">
                                        <div className="text-slate-800">2</div>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Vay Lãi</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center ">VL02</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Anh Đai</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">22/5/2022</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-600">Khoá</div>
                                </td>

                            </tr>
                            {/* Row */}
                            <tr>
                                <td className="p-2">
                                    <div className="flex items-center">
                                        <div className="text-slate-800">3</div>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Tin Chấp</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">VL03</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Anh Đai</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">22/6/2021</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-600">Khoá</div>
                                </td>

                            </tr>
                            {/* Row */}
                            <tr>
                                <td className="p-2">
                                    <div className="flex items-center">
                                        <div className="text-slate-800">4</div>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Vay Lãi</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">VL01</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Anh Đai</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">22/11/2021</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-600">Hoạt động</div>
                                </td>

                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="flex items-center">
                                        <div className="text-slate-800">4</div>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Vay Lãi</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">VL01</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Anh Đai</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">22/11/2021</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-600">Hoạt động</div>
                                </td>

                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="flex items-center">
                                        <div className="text-slate-800">4</div>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Vay Lãi</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">VL01</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Anh Đai</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">22/11/2021</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-600">Hoạt động</div>
                                </td>

                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="flex items-center">
                                        <div className="text-slate-800">4</div>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Vay Lãi</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">VL01</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Anh Đai</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">22/11/2021</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-600">Hoạt động</div>
                                </td>

                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="flex items-center">
                                        <div className="text-slate-800">4</div>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Vay Lãi</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">VL01</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Anh Đai</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">22/11/2021</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-600">Hoạt động</div>
                                </td>

                            </tr>
                            <tr>
                                <td className="p-2">
                                    <div className="flex items-center">
                                        <div className="text-slate-800">4</div>
                                    </div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Vay Lãi</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">VL01</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">Anh Đai</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center">22/11/2021</div>
                                </td>
                                <td className="p-2">
                                    <div className="text-center text-green-600">Hoạt động</div>
                                </td>

                            </tr>
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
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Trở lại
                    </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
                        Lưu
                    </Button>
                ]}
            >
                    <div>
                        <Form layout="vertical" autoComplete="off">
                            <div className="flex space-x-[10px]">
                                <Form.Item name="name" label="Họ Tên" className='w-[50%]'>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="email" label="Email" className='w-[50%]'>
                                    <Input />
                                </Form.Item>
                            </div>
                            <Form.Item name="address" label="Địa chỉ (Nơi ở)" className=''>
                                <TextArea rows={2} placeholder="" />
                            </Form.Item>
                            {type =='news' ? <div className="flex space-x-[10px]">
                                <Form.Item name="password" label="Mật khẩu" className='w-[50%]'>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="confirmPassword" label="Xác nhận mật khẩu" className='w-[50%]'>
                                    <Input />
                                </Form.Item>
                            </div> : ""}
                            <div className="flex space-x-[10px]">
                                <Form.Item name="phone" label="Số điện thoại" className='w-[40%]'>
                                    <Input />
                                </Form.Item>
                                <Form.Item name="confirmPassword" label="Ngày sinh" className=''>
                                    <DatePicker />
                                </Form.Item>
                                <Form.Item name="role" label="Vai trò" className=''>
                                    <Select defaultValue="0">
                                        <Option value="0">Customer</Option>
                                        <Option value="1">Lender</Option>
                                        <Option value="3">Quản trị</Option>
                                    </Select>
                                </Form.Item>
                                <Form.Item name="role" label="Active" className=''>
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
                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"

                                >
                                    {imageUrl ? <img src={imageUrl} alt="avatar" style={{ width: '100%' }} /> : uploadButton}
                                </Upload>
                            </Form.Item>
                        </Form>
                    </div>
            </Modal>
        </div>
    )
}

export default AdminLender