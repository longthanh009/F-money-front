import React from 'react'

const List_capital = () => {
    return (
        <section className="container mx-auto p-6 font-mono">
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
                <div className="w-full overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="text-sm tracking-wide text-left text-gray-900 bg-gray-100 uppercase text-center">
                                <th className="px-2 py-1">STT</th>
                                <th className="px-4 py-3">Tên khách hàng</th>
                                <th className="px-4 py-3">Loại vốn</th>
                                <th className="px-4 py-3">Số tiền</th>
                                <th className="px-4 py-3">Góp ngày</th>
                                <th className="px-4 py-3">Lãi phí</th>
                                <th className="px-4 py-3">Ngày đóng lãi phí</th>
                                <th className="px-4 py-3">Trạng thái</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" loading="lazy" />
                                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-black">Nguyễn Văn Trăm</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-ms border">Trả góp</td>
                                <td className="px-4 py-3 text-ms font-semibold border">2000 VNĐ</td>
                                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                                <td className="px-4 py-3 text-sm border">5%</td>
                                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                                <td className="px-4 py-3 text-xs border">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                                </td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" loading="lazy" />
                                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-black">Nguyễn Văn Trăm</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-ms border">Trả góp</td>
                                <td className="px-4 py-3 text-ms font-semibold border">2000 VNĐ</td>
                                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                                <td className="px-4 py-3 text-sm border">5%</td>
                                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                                <td className="px-4 py-3 text-xs border">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                                </td>
                            </tr>
                            <tr className="text-gray-700">
                                <td className="px-4 py-3 text-ms font-semibold border">22</td>
                                <td className="px-4 py-3 border">
                                    <div className="flex items-center text-sm">
                                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                                            <img className="object-cover w-full h-full rounded-full" src="https://images.pexels.com/photos/5212324/pexels-photo-5212324.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" loading="lazy" />
                                            <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
                                        </div>
                                        <div>
                                            <p className="font-semibold text-black">Nguyễn Văn Trăm</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-ms border">Trả góp</td>
                                <td className="px-4 py-3 text-ms font-semibold border">2000 VNĐ</td>
                                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                                <td className="px-4 py-3 text-sm border">5%</td>
                                <td className="px-4 py-3 text-sm border">6/4/2000</td>
                                <td className="px-4 py-3 text-xs border">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"> Acceptable </span>
                                </td>
                            </tr>
                        </tbody>
                    </table>


                    {/**Phân Trang */}
                    <div className="flex items-center justify-center  bg-gray-100">
                        <div className="flex flex-col items-center mb-8 px-4 mx-auto mt-8">
                            <div className="font-sans flex justify-end space-x-1 select-none">

                                <a href="#" className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-orange-500 hover:text-white" style={{ transition: 'all 0.2s ease' }}>
                                    Previous
                                </a>
                                <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-orange-500 hover:text-white" style={{ transition: 'all 0.2s ease' }}>
                                    1
                                </a>
                                <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-orange-500 hover:text-white" style={{ transition: 'all 0.2s ease' }}>
                                    2
                                </a>
                                <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-orange-500 hover:text-white" style={{ transition: 'all 0.2s ease' }}>
                                    3
                                </a>

                                <a href="#" className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-orange-500 hover:text-white" style={{ transition: 'all 0.2s ease' }}>
                                    Next
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default List_capital