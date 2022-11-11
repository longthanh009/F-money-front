import React from 'react'
import Banner from '../HomePage/Banner'
const Historic_ContractPage = () => {
    return (
        <>
            <Banner />
            <div className='p-4'>
                <h1 className='text-2xl p-2 font-bold'>Lịch Sử Hợp Đồng Vay Vốn</h1>
                <table className="min-w-full table-auto">
                    <thead className="justify-between">
                        <tr className="bg-gray-800">
                            <th className="px-8 py-2">
                                <span className="text-gray-300">STT</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Bên A (Bên Vay)</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Bên B (Bên Cho Vay)</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Ngày Kí Hợp Đồng</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300">Ngày Hết Hạn</span>
                            </th>
                            <th className="px-16 py-2">
                                <span className="text-gray-300"></span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        <tr className="bg-white border-4 border-gray-200">
                            <td className="px-4 py-2">
                                <p className=" text-center ml-2 font-semibold pr-2">1</p>
                            </td>
                            <td className='p-2'>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Họ tên:</p> <p>Nguyễn Văn A</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Sinh ngày:</p> <p>18/01/2000</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Điện thoại:</p> <p>0328749823</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Địa chỉ:</p> <p>Thanh Xuân - Hà Đông - Hà Nội</p></div>
                            </td>
                            <td className='p-2'>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Họ tên:</p> <p>Nguyễn Văn B</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Sinh ngày:</p> <p>18/01/1999</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Điện thoại:</p> <p>0328749823</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Địa chỉ:</p> <p>Thanh Lãm - Hà Đông - Hà Nội</p></div>
                            </td>
                            <td className="px-16 py-2">
                                <p className=" text-center ml-2 font-semibold pr-2">05/06/2020</p>
                            </td>
                            <td className="px-16 py-2">
                                <p className="text-center ml-2 font-semibold pr-2">05/09/2020</p>
                            </td>
                            <td className="px-16 py-2">
                                <a href="">
                                    <span className="text-green-500">
                                        Chi Tiết Hợp Đồng
                                    </span>
                                </a>
                            </td>
                        </tr>
                        <tr className="bg-white border-4 border-gray-200">
                            <td className="px-4 py-2">
                                <p className=" text-center ml-2 font-semibold pr-2">2</p>
                            </td>
                            <td className='p-2'>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Họ tên:</p> <p>Nguyễn Văn A</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Sinh ngày:</p> <p>18/01/2000</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Điện thoại:</p> <p>0328749823</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Địa chỉ:</p> <p>Thanh Xuân - Hà Đông - Hà Nội</p></div>
                            </td>
                            <td className='p-2'>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Họ tên:</p> <p>Nguyễn Văn B</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Sinh ngày:</p> <p>18/01/1999</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Điện thoại:</p> <p>0328749823</p></div>
                                <div className='flex'><p className="ml-2 font-semibold pr-2">Địa chỉ:</p> <p>Thanh Lãm - Hà Đông - Hà Nội</p></div>
                            </td>
                            <td className="px-16 py-2">
                                <p className=" text-center ml-2 font-semibold pr-2">05/06/2020</p>
                            </td>
                            <td className="px-16 py-2">
                                <p className="text-center ml-2 font-semibold pr-2">05/09/2020</p>
                            </td>
                            <td className="px-16 py-2">
                                <a href="">
                                    <span className="text-green-500">
                                        Chi Tiết Hợp Đồng
                                    </span>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </>

    )
}

export default Historic_ContractPage