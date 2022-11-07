import React, { useState } from 'react'
import { Button, Tabs, Image, Space } from 'antd';
import Banner from './Banner'
import Solution from './Solution';
import { UserType } from '../../models/users';
import List_Lender from './List_Lender';



type Props = {
  users: UserType[],
}

const index = (users: Props) => {
  console.log(users);
  const [random, setRandom] = useState<number>();
  return (
    <>
      {/**Banner */}
      <Banner />
      <h1 className='text-center text-3xl font-bold pt-16 text-orange-600'>Dịch Vụ Nổi Bật</h1>
      <p className='text-center text-lg'>Khám phá dịch vụ uy tín đang được tin dùng nhiều nhất trên cả nước</p>
      <Tabs className='text-center items-center p-4' defaultActiveKey="1">
        <Tabs.TabPane className='grid grid-cols-2 w-auto' tab="Vay đăng kí xe máy" key="1">
          <div className=' text-left'>
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
          </div>
          <img src="https://lh3.googleusercontent.com/p/AF1QipNRQ3v6wXcxlpaql-XmhSanPzrV8mxaReynZZjt=w768-h768-n-o-v1" alt="" width={400} className="pl-4" />
        </Tabs.TabPane>


        <Tabs.TabPane tab="Vay đăng kí ô tô" key="2">
          Content of Tab Pane 2
        </Tabs.TabPane>
        <Tabs.TabPane tab="Vay online" key="3">
          Content of Tab Pane 3
        </Tabs.TabPane>
      </Tabs>
      <br /><br />
      <hr />
      {/**Content */}
      <div className="overflow-x-auto">
        <div className="min-w-screen  flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6 p-6">
            {/**Danh sách các nhà cho vay */}
            <List_Lender />

          </div>
        </div>
      </div>

      {/**Giải pháp */}
      <Solution />
    </>

  )

}

export default index