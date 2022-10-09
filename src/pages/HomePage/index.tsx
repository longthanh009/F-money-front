import React from 'react'
import { Button } from 'antd';


type Props = {}

const index = (props: Props) => {
  return (
    <>
      {/**Banner */}
      <section className="relative  bg-blueGray-50">
        <div className="relative pt-72 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: 'url("https://reviewtotnhat.net/wp-content/uploads/2021/08/shb_vay-online_banner.png")' }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black" />
          </div>

          <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: 'translateZ(0px)' }}>
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x={0} y={0}>
              <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </div>
        <section className="pb-10 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-2 py-3 flex-auto">
                    <div className="p-3 text-center inline-flex items-center justify-center mb-3 hover:scale-105">
                      <img className="rounded-full w-16 h-16" src="https://timo.vn/wp-content/uploads/2018/04/loans1.jpeg" />
                    </div>
                    <a href=""><h6 className="text-xl font-semibold hover:text-red-500">Vay Tín Chấp</h6></a>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Thủ tục nhanh gọn, không cần tài sản đảm bảo. <br />
                      Quy trình duyệt hồ sơ nhanh, dễ dàng được giải ngân.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-2 py-3 flex-auto">
                    <div className="p-3 text-center inline-flex items-center justify-center mb-3 hover:scale-105">
                      <img className="rounded-full w-16 h-16" src="https://lh6.googleusercontent.com/2iqJpK3bJDZR2PfZjOtNmnfeZyP0HhhhbGgv3p4zGU81T7i8VJF6-lbRTMmI5fPxWPtgoF8uaQVdgjtMIxpC6NMOMjzLOez2D77QIVdv9i94Ga_l330RKqY8-IqQcmzYyg" />
                    </div>
                    <a href=""> <h6 className="text-xl font-semibold hover:text-red-500">Vay Trả Góp</h6></a>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Nhanh gọn, tiện lợi, Thời gian trả nợ linh hoạt. <br />
                      Hạn mức 03 đến 60 tháng tùy vào số tiền vay.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-2 py-3 flex-auto">
                    <div className="p-3 text-center inline-flex items-center justify-center mb-3 hover:scale-105">
                      <img className="rounded-full w-16 h-16" src="https://camdo24h.company/media/images/thu-tuc-cam-xe-o-to%201.jpg" />
                    </div>
                    <a href=""><h6 className="text-xl font-semibold hover:text-red-500">Vay Cầm Đồ</h6></a>
                    <p className="mt-2 mb-4 text-blueGray-500">
                      Cầm cố tài sản với một số tiền nhất định <br />
                      Bảo đảm tài sản cầm cố trong thời gian nhất định <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div></section>
      </section>


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
      <div className='Solution'>
        {/**Giải pháp đáng tin cậy */}
        <div className="flex flex-col p-12 bg-gray-100">
          <div className='text-center'>
            <h2 className="mb-4 text-3xl font-bold text-orange-600">F-MONEY - GIẢI PHÁP TÀI CHÍNH ĐÁNG TIN CẬY</h2>
            <p className='text-base'>Trải nghiệm dịch vụ hỗ trợ, tìm kiếm các nhà cho vay vốn hoàn toàn mới với hệ thống giao dịch trên toàn quốc.</p>
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="bg-white p-4 shadow-lg flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:scale-105">
              <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-red-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg></span>
              <strong className="mt-2 text-lg text-gray-900 font-semibold">700+ Giao dịch toàn quốc</strong>
            </div>
            <div className="bg-white p-4 shadow-lg flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:scale-105">
              <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-red-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg></span>
              <strong className="mt-2 text-lg text-gray-900 font-semibold">Tìm Kiếm giao dịch nhanh</strong>
            </div>
            <div className="bg-white p-4 shadow-lg flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:scale-105">
              <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-red-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg></span>
              <strong className="mt-2 text-lg text-gray-900 font-semibold">Hợp đồng minh bạch</strong>
            </div>
            <div className="bg-white p-4 shadow-lg flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:scale-105">
              <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-red-200">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                </svg></span>
              <strong className="mt-2 text-lg text-gray-900 font-semibold">Bảo mật thông tin</strong>
            </div>

          </div>
        </div>
        {/**Banner */}
        <div>
          <img src="https://www.vaytiennongnhanhtphcm.com/wp-content/uploads/2021/10/home-web-banner-2.jpg" alt="" />
        </div>
      </div>
    </>

  )
}

export default index