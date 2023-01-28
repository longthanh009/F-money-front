import React, { useEffect, useState } from 'react'
import { Button, Tabs, Image, Space } from 'antd';
import Banner from './Banner'
import Solution from './Solution';
import Service from './Service';
import Search from './Search_Page'
import News_Pages from './News_Pages';
import Suport_Page from '../SuportPage/Suport_Page';

const index = () => {

  const [random, setRandom] = useState<number>();
  
  return (
    < div>
      {/**Banner */}
      <Banner />
      <Service />
      <br />
      <hr />
      {/**Content */}
      <div className="overflow-x-auto">
        <div className="min-w-screen  flex items-center justify-center font-sans overflow-hidden">
          <div className="w-full p-6">
            {/**Tìm kiềm Lender */}
            <Search />
            <hr />
            {/**Tin Tức */}
            <News_Pages />
            <hr />

          </div>
        </div>
      </div>

      {/**Giải pháp */}
      <Solution />
      {/**Hỗ trợ*/}
      <Suport_Page />
    </div>

  )

}


export default index