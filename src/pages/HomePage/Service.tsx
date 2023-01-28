import React from 'react'
import { Button, Tabs, Image, Space } from 'antd';
import { Link } from 'react-router-dom';
const Service = () => {
    return (
        <div>
            <div className='bg-slate-50 p-4 pt-16' >
                <h1 className='text-center text-3xl font-bold text-orange-600'>Dịch vụ nổi bật</h1>
                <p className='text-center text-lg'>Khám phá dịch vụ cầm cố, vay vốn uy tín hoàn toàn mới đang được giao dịch nhiều nhất trên cả nước tại F-Money</p>
            </div>
            <Tabs
                data-aos="fade-up"
                data-aos-duration="2000"
                className='text-center items-center p-4 ' defaultActiveKey="1">
                <Tabs.TabPane tab="Vay Trả Góp" className='grid grid-cols-2 w-auto' key="1">
                    <div className=' text-left pb-8'>
                        <strong className=' text-xl font-bold'>GÓI VAY TRẢ GÓP</strong>
                        <div className='flex pt-4 pl-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Cung cấp thông tin, giấy tờ cá nhân hợp pháp. <br /> Trả lãi hàng tháng</p></div>
                        <div className='flex px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Quy trình nhanh chóng, Thủ tục dễ dàng</p></div>
                        <div className='flex px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Nhận tiền ngay</p></div>
                        <div className='flex px-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Lãi xuất thấp</p>

                        </div>
                        <div className="mx-auto button pb-100 w-32 h-8 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                            <Link to="/contractPage"><span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">Vay Ngay</span></Link>
                        </div>
                    </div>
                    <img src="./src/assets/image/client_homepage/dichvu_4.jpeg" alt="" width={400} className="pl-4" />
                </Tabs.TabPane>
                <Tabs.TabPane className='grid grid-cols-2 w-auto' tab="Vay Thế Chấp" key="2">
                    <div className=' text-left p-8'>
                        <strong className=' text-xl font-bold'>GÓI VAY THẾ CHẤP TÀI SẢN</strong>
                        <div className='flex pt-4 pl-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Thế chấp tài sản thuộc quyền sở hữu của các nhân</p></div>
                        <div className='flex px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Đảm bảo, bảo mật, lưu trữ tài sản</p></div>
                        <div className='flex px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Thủ tục đơn giản, đầy đủ, nhanh chóng</p></div>
                        <div className='flex px-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Khoản vay cao theo thế chấp</p></div>
                        <div className='flex px-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Chi phí vay hợp lý</p></div>
                        <div className="mx-auto button pb-100 w-32 h-8 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                            <Link to="/contractPage"><span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">Vay Ngay</span></Link>
                        </div>
                    </div>
                    <img src="./src/assets/image/client_homepage/dichvu_3.png" alt="" width={350} className="pl-4" />
                </Tabs.TabPane>

                <Tabs.TabPane className='grid grid-cols-2 w-full' tab="Vay Đăng Ký Xe Máy" key="3">
                    <div className=' text-left p-8'>
                        <strong className=' text-xl font-bold'>GÓI VAY ĐĂNG KÝ XE MÁY</strong>
                        <div className='flex pt-4 pl-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Vay bằng đăng ký xe máy, không thế chấp xe, <br /> vừa có tiền vừa có xe đi</p></div>
                        <div className='flex px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>15 phút có tiền</p></div>
                        <div className='flex px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Khoản vay lên đến 30 triệu</p></div>
                        <div className='flex px-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Chi phí vay hợp lý</p></div>
                        <div className="mx-auto button pb-100 w-32 h-8 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                            <Link to="/contractPage"><span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">Vay Ngay</span></Link>
                        </div>
                    </div>
                    <img src="./src/assets/image/client_homepage/dichvu_1.jpg" alt="" width={350} className="pl-4" />
                </Tabs.TabPane>
                <Tabs.TabPane className='grid grid-cols-2 w-auto' tab="Vay Đăng Ký Ô-tô" key="4">
                    <div className=' text-left p-8'>
                        <strong className=' text-xl font-bold'>GÓI VAY ĐĂNG KÝ OTO</strong>
                        <div className='flex pt-4 pl-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Khoản vay lên đến 1 tỷ. Chỉ cần đăng ký xe ô-tô</p></div>
                        <div className='flex px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Vừa có đủ tiền vừa có xe đi</p></div>
                        <div className='flex px-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>15 phút có tiền</p></div>
                        <div className='flex px-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                            <p className='text-lg pl-4'>Chi phí vay thấp</p></div>
                        <div className="mx-auto button pb-100 w-32 h-8 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                            <Link to="/contractPage"><span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">Vay Ngay</span></Link>
                        </div>
                    </div>
                    <img src="./src/assets/image/client_homepage/dichvu_2.png" alt="" width={300} className="pl-4" />
                </Tabs.TabPane>

            </Tabs>
        </div>
    )
}

export default Service