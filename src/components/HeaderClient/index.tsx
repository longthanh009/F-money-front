import React, { useState } from 'react'

const Header_Client = () => {
  const [isACtive, setActive] = useState(false)
  const onToggle = () => {
    setActive(!isACtive)
  }
  // document.getElementById('nav-toggle').onclick = function(){
  // document.getElementById("nav-content").classList.toggle("hidden");
  return (
    <>
      <div className="max-w-full mx-auto my-5 px-4 sm:px-6 ">
        <div className="flex flex-col-reverse md:flex-row min-w-full space-y-4 justify-center md:justify-between  md:space-x-10">
          <input id="search" className="flex px-4 leading-none focus:outline-none  border-b-2 hover:border-b-3 border-red-800  w-5/6 mt-12 mx-auto md:w-1/4 md:mt-0 md:mx-0 " type="text" placeholder=" Searsh.." /><a className="flex-1 md:self-start" href="/MarketPlace_AisModa/">
            <div className="flex justify-center ">
              <div className="flex justify-center items-center">
                <img src="./src/assets/image/logo.png" alt="" width={200} />
              </div>
            </div>
          </a>

          <div className="flex justify-around">
            <div  className="flex justify-end ">
              <div className=" whitespace-nowrap text-base px-4 font-semibold  text-gray-500 hover:text-gray-900">
                <img className="m-1 inline-block h-14 w-14 p-2 rounded-full ring-2 ring-white" src="https://tinypng.com/images/social/website.jpg" />
                Nguyễn Văn Trăm
              </div>
            </div>
           






          </div>
        </div>
      </div>


      <div className="font-sans leading-normal tracking-normal bg-black">
        <nav className="flex items-center flex-wrap p-2 w-full z-10 md:flex-row justify-center md:space-y-0 text-center">

          <div onClick={() => onToggle()} className="block lg:hidden xl:hidden md:hidden">
            <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
            </button>
          </div>

          <div className={isACtive ? "" : "w-full lg:flex xl:flex md:flex lg:items-center lg:w-auto hidden lg:block xl:block md:block pt-6 lg:pt-0 xl:pt-0 md:pt-0"} id="nav-content">
            <ul className="list-reset lg:flex xl:flex md:flex sm:text-left justify-end flex-1 items-center">
              <li className="mr-3">
                <a className="text-lg  font-semibold inline-block text-white no-underline hover:-translate-y-1 hover:scale-110 hover:text-orange-400 hover:underline decoration-1" href="#">Trang chủ</a>
              </li>
              <li className="mr-3">
                <a className="text-lg font-semibold inline-block text-white no-underline hover:-translate-y-1 hover:scale-110 hover:text-orange-400 py-2 px-6 hover:underline decoration-1" href="#">Hợp đồng</a>
              </li>
              <li className="mr-3">
                <a className="text-lg font-semibold inline-block text-white no-underline hover:-translate-y-1 hover:scale-110 hover:text-orange-400 py-2 px-6 hover:underline decoration-1" href="#">Lịch sử hợp đồng</a>
              </li>
              <li className="mr-3">
                <a className="text-lg font-semibold inline-block text-white no-underline hover:-translate-y-1 hover:scale-110 hover:text-orange-400 py-2 px-6 hover:underline decoration-1" href="#">Hỗ trợ</a>
              </li>
            </ul>
          </div>
        </nav>

      </div>
    </>


  )
}

export default Header_Client