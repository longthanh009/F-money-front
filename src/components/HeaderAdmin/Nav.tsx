import React from "react";

type Props = {};

const Nav = (props: Props) => {
  return <div>Nav</div>;
};

export default Nav;
// import React from 'react'

// const Nav = () => {
//     return (
//         <div className="fixed flex flex-col top-16 left-0 w-14 hover:w-64 md:w-64 bg-neutral-800 bg-black dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
//             <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
//                 <ul className="flex flex-col py-4 space-y-1">

//                     <li>
//                         <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-700 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-100 dark:hover:border-gray-800 pr-6">
//                             <span className="inline-flex justify-center items-center ml-4">
//                                 <svg className="w-5 h-5 " fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
//                             </span>
//                             <span className="ml-2 text-sm tracking-wide truncate text-white">Dashboard</span>
//                         </a>
//                     </li>
//                     <li className="px-5 hidden md:block">
//                         <div className="flex flex-row items-center h-8">
//                             <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Tài Khoản</div>
//                         </div>
//                     </li>
//                     <li>
//                         <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-700 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-100 dark:hover:border-gray-800 pr-6">
//                             <span className="inline-flex justify-center items-center ml-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
//                                 </svg>
//                             </span>
//                             <span className="ml-2 text-sm tracking-wide truncate text-white">Người Cho Vay</span>
//                             <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">100</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-700 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-100 dark:hover:border-gray-800 pr-6">
//                             <span className="inline-flex justify-center items-center ml-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
//                                     <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
//                                 </svg>

//                             </span>
//                             <span className="ml-2 text-sm tracking-wide truncate text-white">Người đi vay</span>
//                             <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">2000</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-700 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-100 dark:hover:border-gray-800 pr-6">
//                             <span className="inline-flex justify-center items-center ml-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
//                                 </svg>

//                             </span>
//                             <span className="ml-2 text-sm tracking-wide truncate text-white">Nhân viên</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-700 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-100 dark:hover:border-gray-800 pr-6">
//                             <span className="inline-flex justify-center items-center ml-4">
//                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>
//                             </span>
//                             <span className="ml-2 text-sm tracking-wide truncate text-white">Hỗ trợ</span>
//                             <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full">5000</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-700 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-100 dark:hover:border-gray-800 pr-6">
//                             <span className="inline-flex justify-center items-center ml-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
//                                 </svg>

//                             </span>
//                             <span className="ml-2 text-sm tracking-wide truncate text-white">Thống kê</span>
//                         </a>
//                     </li>
//                     <li className="px-5 hidden md:block">
//                         <div className="flex flex-row items-center mt-5 h-8">
//                             <div className="text-sm font-light tracking-wide uppercase text-white">Settings</div>
//                         </div>
//                     </li>

//                     <li>
//                         <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-700 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-100 dark:hover:border-gray-800 pr-6">
//                             <span className="inline-flex justify-center items-center ml-4">
//                                 <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
//                             </span>
//                             <span className="ml-2 text-sm tracking-wide truncate text-white">Thông báo</span>
//                             <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
//                         </a>
//                     </li>
//                     <li>
//                         <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-orange-700 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-100 dark:hover:border-gray-800 pr-6">
//                             <span className="inline-flex justify-center items-center ml-4">
//                                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
//                                     <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
//                                 </svg>

//                             </span>
//                             <span className="ml-2 text-sm tracking-wide truncate text-white">Cài đặt</span>
//                         </a>
//                     </li>
//                 </ul>
//                 <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs">© Copyright 2022 F-Money <br /> Hỗ trợ vay vốn đầu tư hàng đầu thế Giới</p>
//             </div>
//         </div>
//     )
// }

// export default Nav
