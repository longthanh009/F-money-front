import React, { useState } from 'react'
import { Button, Modal, DatePicker } from 'antd';
import BreadcrumbComponent from '../../components/Breadcrumb';
const { RangePicker } = DatePicker;
const AdminContractPage = () => {
    const [type, setType] = useState<any>("")
    const [title, setTitle] = useState<any>("")
    const [loading, setLoading] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);
    const [dates, setDates] = useState<any>(null);
    const [hackValue, setHackValue] = useState<any>(null);
    const [value, setValue] = useState<any>(null);
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
    const disabledDate = (current: any) => {
        if (!dates) {
            return false;
        }
        const tooLate = dates[0] && current.diff(dates[0], 'days') > 7;
        const tooEarly = dates[1] && dates[1].diff(current, 'days') > 7;
        return !!tooEarly || !!tooLate;
    };
    const onOpenChange = (open: any) => {
        if (open) {
            setHackValue([null, null]);
            setDates([null, null]);
        } else {
            setHackValue(null);
        }
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div>
            <BreadcrumbComponent />
            <div className='flex items-center space-x-1'>
                <div className='modal-news'>
                    <Button className='flex items-center' onClick={() => showModal("news", "Tạo hợp đồng")}> &#10010; Thêm mới</Button>
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
                        <option value="1">Loại hợp đồng</option>
                        <option value="US">Vay trả góp</option>
                        <option value="CA">Tín chấp</option>
                    </select>
                </div>
                <div className="export-excel-file bg-green-700">
                    <Button className='flex items-center'> &darr; Xuất Excel</Button>
                </div>
                <div className="search-date">
                    <RangePicker
                        value={hackValue || value}
                        disabledDate={disabledDate}
                        onCalendarChange={(val) => setDates(val)}
                        onChange={(val) => setValue(val)}
                        onOpenChange={onOpenChange}
                    />
                </div>
            </div>
            <div className='content mt-[10px]'>
                <div className="overflow-x-auto">
                    <div className="col-span-full  bg-white shadow-lg  rounded-sm border border-slate-200">
                        <header className="px-5 py-4 border-b border-slate-100">
                            <h2 className="font-semibold text-slate-800">Giao Dịch Mới Nhất</h2>
                        </header>
                        <div className="p-3">

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="table-auto w-full">
                                    {/* Table header */}
                                    <thead className="text-xs uppercase text-slate-400 bg-slate-50 rounded-sm">
                                        <tr>
                                            <th className="p-2">
                                                <div className="font-semibold text-left">STT</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Bên A</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Bên B</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Điện Thoại</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Giá trị hợp đồng</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Ngày Tạo </div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Loại hợp đồng</div>
                                            </th>
                                            <th className="p-2">
                                                <div className="font-semibold text-center">Đã thu</div>
                                            </th> <th className="p-2">
                                                <div className="font-semibold text-center">Còn lại</div>
                                            </th>
                                        </tr>
                                    </thead>
                                    {/* Table body */}
                                    <tbody className="text-sm font-medium divide-y divide-slate-100">
                                        {/* Row */}
                                        {/* <tr>
                                            <td className="p-2">
                                                <div className="flex items-center">
                                                    <div className="text-slate-800">1</div>
                                                </div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">Nguyễn Văn A</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-green-500">Cầu Giấy</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center">092673967</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-sky-500">371830999</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-sky-500">22/3/2022</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-sky-500">Đang Vay</div>
                                            </td>
                                            <td className="p-2">
                                                <div className="text-center text-sky-500">Link</div>
                                            </td>
                                        </tr> */}

                                    </tbody>
                                </table>

                            </div>
                        </div>
                    </div>
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

export default AdminContractPage