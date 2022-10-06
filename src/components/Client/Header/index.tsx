import React, { useState } from 'react'

const Header_Client = () => {
  const [isACtive,setActive] = useState(false)
  const onToggle = ()=>{
    setActive(!isACtive)
  }
    // document.getElementById('nav-toggle').onclick = function(){
    // document.getElementById("nav-content").classList.toggle("hidden");
  return (
    <div className="bg-black font-sans leading-normal tracking-normal">
      <nav className="flex items-center justify-between flex-wrap bg-black p-4 w-full z-10">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a className="text-white no-underline hover:text-white hover:no-underline" href="#">
            <img src="./src/assets/image/logo1.png" alt="" width={200} />
          </a>
        </div>
        <div onClick={()=> onToggle()} className="block lg:hidden">
          <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>

        <div className={isACtive?"":"w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block pt-6 lg:pt-0"} id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <a className="text-lg inline-block text-gray-400 no-underline hover:-translate-y-1 hover:scale-110 hover:text-gray-100" href="#">Trang chủ</a>
            </li>
            <li className="mr-3">
              <a className="text-lg inline-block text-gray-400 no-underline hover:-translate-y-1 hover:scale-110 hover:text-gray-100 py-2 px-6" href="#">Hợp đồng</a>
            </li>
            <li className="mr-3">
              <a className="text-lg inline-block text-gray-400 no-underline hover:-translate-y-1 hover:scale-110 hover:text-gray-100 py-2 px-6" href="#">Lịch sử hợp đồng</a>
            </li>
            <li className="mr-3">
              <a className="text-lg inline-block text-gray-400 no-underline hover:-translate-y-1 hover:scale-110 hover:text-gray-100 py-2 px-6" href="#">Hỗ trợ</a>
            </li>
            <li className="mr-3">
              <a className="text-lg inline-block text-gray-100 no-underline hover:-translate-y-1 hover:scale-110 hover:text-gray-100 py-2 px-6" href="#"><button className='bg-orange-500 p-2'>Đăng Nhập</button></a>
            </li>
          </ul>
        </div>
      </nav>
      
    </div>

  )
}

export default Header_Client