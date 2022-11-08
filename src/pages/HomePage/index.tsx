import React, { useState } from 'react'
import { Button, Tabs, Image, Space } from 'antd';
import Banner from './Banner'
import Solution from './Solution';
import { UserType } from '../../models/users';
import List_Lender from './List_Lender';
import Service from './Service';
import Suport_homepage from './Suport_homepage';

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
      <Service />
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
      <Suport_homepage />
    </>

  )

}


export default index