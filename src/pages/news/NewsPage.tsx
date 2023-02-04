import React, { useEffect, useState } from 'react'
import Banner from '../HomePage/Banner'
import { listBlog } from '../../api/Blog'
import { Link, NavLink } from 'react-router-dom'
type Props = {}

const NewsPage = (props: Props) => {
  const [blog, setBlog] = useState([])
  useEffect(() => {
    const getListBlog = async () => {
      const {data} = await listBlog();
      setBlog(data)
    }
    getListBlog();
  },[])
  return (
    <>
      <Banner />
      <div className="grid grid-cols-3 gap-4 p-5">
        <div className="col-span-2 shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-10">
            <h1 className="font-medium text-3xl not-italic">Tin tức</h1>
            {blog?.map((item:any, index) => (
              <div className="flex py-4 border-b" key={index}>
                  <img src="https://images.fpt.shop/unsafe/fit-in/300x200/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2023/1/28/638104939151232526_find-n2-flip-cover.jpeg" alt=""  width={300} height={200}/>
                  <div className="pl-5">
                    <div className="mb-[14px]">
                    <span className="text-[#0f71fb] mb-[10px] text-[16px]">Tin mới</span>
                    </div>
                      <a href={`/news/detailNew/${item.slug}`}><h3 className="text-[22px] leading-6 font-bold mb-[8px] overflow-hidden">{item.title}</h3></a>
                      <div className="mb-[14px]"><span className="text-[#555] text-xs overflow-hidden leading-5 ">{item.content}</span></div>
                      <div className="flex items-center">
                          <img src="https://images.fpt.shop/unsafe/30x30/filters:quality(90):fill(white)/fptshop.com.vn/Uploads/Originals/2022/10/25/638023103987185995_bao-nguyen.jpeg" width={30} height={30} alt="" /> <span className="px-2">Name</span><span>- 5 giờ trước</span>
                      </div>
                  </div>
              </div>
            ))}
        </div>
        <div className="col-span-1 shadow-[0_0px_10px_rgba(0,0,0,0.25)] p-10">
            <h1 className="font-medium text-lg not-italic border-b-2 pb-5 font-medium text-xl not-italic">Xem nhiều</h1>
            {blog?.map((item:any,index) => (
              <div className="flex items-center py-4 border-b" key={index}>
                  <span className="bg-[#cb1c22] flex-[0 0 40px] mr-[14px] w-10 h-10 table leading-10 font-bold text-center text-[#fff] rounded-[50%] text-[20px]">{index + 1}</span>
                  <span className="text-base">{item.title}</span>
              </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default NewsPage;