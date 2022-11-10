import React, { useState } from 'react'
import { Button, Tabs, Image, Space } from 'antd';
import Banner from './Banner'
import Solution from './Solution';
import { UserType } from '../../models/users';
import List_Lender from './List_Lender';
import Service from './Service';
import Suport_homepage from './Suport_homepage';
import Search from './Search_Page'


const index = () => {

  const [random, setRandom] = useState<number>();

  return (
    <>
      {/**Banner */}

      <Banner />

      <Service />

      <hr />
      {/**Content */}
      <div className="overflow-x-auto">
        <div className="min-w-screen  flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full lg:w-5/6 p-6">
            {/**Tìm kiềm Lender */}
            <Search />
            <hr />

            {/* Danh sách các nhà cho vay
            <List_Lender /> */}

          </div>
        </div>
      </div>


      {/**Giải pháp */}
      <Solution />

      <Suport_homepage />
    </>

  )

}


export default index