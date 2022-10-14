import React from 'react'
import { Button } from 'antd';
import Banner from './Banner'
import Solution from './Solution';

type Props = {}

const index = (props: Props) => {
  return (
    <>
      {/**Banner */}

      <Banner />

      {/**Content */}
      <div className="overflow-x-auto">
        <div className="min-w-screen  flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6 p-6">
            {/**Thống Kê */}
            <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-gray-500 dark:bg-gray-100 shadow-lg rounded-md flex items-center justify-between p-2   text-white font-medium group p-4">
                <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <svg width={30} height={30} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div className="text-right">
                  <p className="text-2xl">1,257</p>
                  <p className='text-base'>Số Người Cho Vay</p>
                </div>
              </div>
              <div className="bg-gray-500 dark:bg-gray-100 shadow-lg rounded-md flex items-center justify-between p-2   text-white font-medium group p-4">
                <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <svg width={30} height={30} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                </div>
                <div className="text-right">
                  <p className="text-2xl">1,257</p>
                  <p className='text-base'>Số Người Đi Vay</p>
                </div>
              </div>
              <div className="bg-gray-500 dark:bg-gray-100 shadow-lg rounded-md flex items-center justify-between p-2   text-white font-medium group p-4">
                <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <svg width={30} height={30} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                </div>
                <div className="text-right">
                  <p className="text-2xl">557</p>
                  <p className='text-base'>Orders</p>
                </div>
              </div>

              <div className="bg-gray-500 dark:bg-gray-100 shadow-lg rounded-md flex items-center justify-between p-2   text-white font-medium group p-4">
                <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                  <svg width={30} height={30} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="text-right">
                  <p className="text-2xl">$75,257</p>
                  <p className='text-base'> Số Tiền Giải Ngân</p>
                </div>
              </div>
            </div>
            {/**Danh sách các nhà cho vay */}
            <div className="bg-white shadow-md rounded my-2 border-separate border border-slate-900">
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2'>
                <div className='p-2'><h1 className='font-medium text-base sm:text-lg lg:text-xl'>DANH SÁCH CÁC NHÀ CHO VAY VỐN</h1></div>
                <div className='p-4 text-left sm:text-right lg:text-right'>
                  <select id="cars" className='text-base' >
                    <option className='text-sm sm:text-sm lg:text-base' value="Hà Nội">Mỹ Đức</option>
                    <option className='text-sm sm:text-sm lg:text-base' value="Hồ Chí Minh">Sơn Tây</option>
                    <option className='text-sm sm:text-sm lg:text-base' value="Hải Phòng">Gia Bình</option>
                    <option className='text-sm sm:text-sm lg:text-base' value="Bắc Giang">Thanh Lãm</option>
                    <option className='text-sm sm:text-sm lg:text-base' value="Hòa Bình">Hà Đông</option>
                  </select>
                  <select id="cars" className='text-base' >
                    <option className='text-sm sm:text-sm lg:text-base' value="Hà Nội">Hà Nội</option>
                    <option className='text-sm sm:text-sm lg:text-base' value="Hồ Chí Minh">Hồ Chí Minh</option>
                    <option className='text-sm sm:text-sm lg:text-base' value="Hải Phòng">Hải Phòng</option>
                    <option className='text-sm sm:text-sm lg:text-base' value="Bắc Giang">Bắc Giang</option>
                    <option className='text-sm sm:text-sm lg:text-base' value="Hòa Bình">Hòa Bình</option>
                  </select>

                </div>
              </div>
              <table className="min-w-max w-full border-separate border border-slate-500">
                <thead>
                  <tr className="bg-gray-100 text-gray-900 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">STT</th>
                    <th className="py-3 px-6 text-center">Họ Và Tên</th>
                    <th className="py-3 px-6 text-center">Số Điện thoại</th>
                    <th className="py-3 px-6 text-center">Lãi Xuất</th>
                    <th className="py-3 px-6 text-center">Địa Chỉ</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-gray-900 text-sm font-light">
                  <tr className="border-b border-black-200 hover:bg-gray-50">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span className="font-medium ">1</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2 px-4">
                          <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/8.jpg" />
                        </div>
                        <span className='font-medium'>Nguyễn Văn Trăm</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span className='font-medium'>0326869406</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-green-200 text-black-600 py-1 px-3 rounded-full text-xs font-medium">5%</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-green-200 text-black-600 py-1 px-3 rounded-full text-xs font-medium">Hà Nội</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-18">
                          <button className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-orange-500 transition duration-300 hover:text-gray-100">Chi Tiết</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-black-200 hover:bg-gray-50">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span className="font-medium ">2</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2 px-4">
                          <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/8.jpg" />
                        </div>
                        <span className='font-medium'>Nguyễn Văn Trăm</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span className='font-medium'>0326869406</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-green-200 text-black-600 py-1 px-3 rounded-full text-xs font-medium">5%</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-green-200 text-black-600 py-1 px-3 rounded-full text-xs font-medium">Hà Nội</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-18">
                          <button className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-orange-500 transition duration-300 hover:text-gray-100">Chi Tiết</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                  <tr className="border-b border-black-200 hover:bg-gray-50">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <span className="font-medium ">3</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2 px-4">
                          <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/8.jpg" />
                        </div>
                        <span className='font-medium'>Nguyễn Văn Trăm</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex items-center justify-center">
                        <span className='font-medium'>0326869406</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-green-200 text-black-600 py-1 px-3 rounded-full text-xs font-medium">5%</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <span className="bg-green-200 text-black-600 py-1 px-3 rounded-full text-xs font-medium">Hà Nội</span>
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <div className="w-18">
                          <button className="border-2 border-gray-600 text-black px-4 py-2 rounded-md text-1xl font-medium hover:bg-orange-500 transition duration-300 hover:text-gray-100">Chi Tiết</button>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/**Phân trang */}
              <div className="flex  p-4">
                <div className="flex flex-col items-center">
                  <div className="font-sans flex space-x-1 select-none">
                    <a href="#" className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-orange-500 transition duration-300 hover:text-gray-100" style={{ transition: 'all 0.2s ease' }}>
                      Previous
                    </a>
                    <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-orange-500 transition duration-300 hover:text-gray-100" style={{ transition: 'all 0.2s ease' }}>
                      1
                    </a>
                    <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-orange-500 transition duration-300 hover:text-gray-100" style={{ transition: 'all 0.2s ease' }}>
                      2
                    </a>
                    <a href="#" className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-orange-500 transition duration-300 hover:text-gray-100" style={{ transition: 'all 0.2s ease' }}>
                      3
                    </a>
                    <a href="#" className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-orange-500 transition duration-300 hover:text-gray-100" style={{ transition: 'all 0.2s ease' }}>
                      Next
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>



      {/**Giải pháp */}
     <Solution/>
    </>

  )
}

export default index