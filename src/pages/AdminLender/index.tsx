import React, { useState } from 'react'
import { Button, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import BreadcrumbComponent from '../../components/Breadcrumb';
import { useLocation, useParams } from 'react-router-dom';
const AdminLender = () => {
    const [type, setType] = useState<any>("")
    const [title, setTitle] = useState<any>("")
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false);
    const showModal = (type: any,title :any) => {
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

    return (
        <div>
            <BreadcrumbComponent />
            <div className='flex items-center space-x-1'>
                <div className='modal-news'>
                    <Button className='flex items-center' onClick={() => showModal("news","Thêm mới khách hàng")}> &#10010; Thêm mới</Button>

                </div>
                <div className='search w-[300px]'>
                    <form>
                        <div>
                            <div className="relative">
                                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </div>
                                <input type="search" id="default-search" className="focus:outline-none block p-[5px] pl-10 w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Tìm kiếm..." required />
                            </div>
                        </div>
                    </form>
                </div>
                <div className='search-select'>
                    <select id="small" className="block p-[5px] w-full text-sm text-gray-900 bg-gray-50 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option value="1">Trạng thái</option>
                        <option value="US">Hoạt động</option>
                        <option value="CA">Khoá</option>
                    </select>
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
                            <tr onDoubleClick={() => showModal("update","Thông tin khách hàng")}>
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
                        Submit
                    </Button>
                ]}
            >
                {type === "news" ?
                    <form action="">
                        <div className="mb-6">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
                            <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
                            <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
                            <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="base-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Base input</label>
                            <input type="text" id="base-input" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </form> : <div>

                    </div>
                }
            </Modal>
        </div>
    )
}

export default AdminLender