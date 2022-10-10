import React from 'react'
import Nav from './Nav'
const HeaderAdmin = () => {
  return (
    <>
      <div className="fixed w-full flex items-center justify-between h-16 text-white z-10 bg-neutral-900">
        <div className="flex items-center justify-start md:justify-center pl-3 md:w-64 h-14 dark:bg-gray-800 border-none">
          <a href=""><img className="w-36 h-14 p-2 mr-2 rounded-md overflow-hidden" src="./src/assets/image/logo1.png" /></a>
        </div>
        <div className="flex justify-between items-center h-14 dark:bg-gray-800 header-right">
          <div className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
            <button className="outline-none focus:outline-none">
              <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <input type="search" placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
          </div>
          <ul className="flex items-center mt-2">

            <div className="whitespace-nowrap text-base p-4 font-semibold  text-gray-400 hover:text-white">
              <img className="m-4 inline-block h-8 w-8 rounded-full ring-2 ring-white" src="https://tinypng.com/images/social/website.jpg" />
              Nguyễn Văn Trăm
            </div>
            <li>
              <a href="#" className="flex items-center p-8 hover:text-blue-100">
                <span className="inline-flex mr-1">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>
                </span>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
      <Nav />
    </>
  )
}

export default HeaderAdmin