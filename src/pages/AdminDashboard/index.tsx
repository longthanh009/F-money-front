import axios from 'axios';
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { getContract } from '../../features/contract/contractSlice';
import { getAll } from '../../features/customer/customerSlice';
import { listMortgage } from '../../features/mortgage/mortgage';


const AdminDashboard = () => {
  const dispath =  useAppDispatch()
  const contracts = useAppSelector((state) => state.contract.value);
  const contractsMg = useAppSelector((state) => state.mortgage.value);
  const [customer, setCustomer] = React.useState([])
  const [customers, setCustomers] = React.useState([])
  const [lender, setLender] = React.useState([])
  const [admin, setAdmin] = React.useState([])
  React.useEffect(() => {
    dispath(getAll()).then(({payload})=> {
      if (payload) {
        setCustomers(payload.users)
        setCustomer(payload.users.filter((user:any) => user.role == 0)) 
        setLender(payload.users.filter((user:any) => user.role == 1))
        setAdmin(payload.users.filter((user:any) => user.role == 2))
      }
    })
    dispath(listMortgage())
    dispath(getContract())
  },[])
  return (
    <div>
      <div className="h-full">

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
          <div className="bg-green-600 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width={30} height={30} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">{lender?.length}</p>
              <p>Người Cho Vay</p>
            </div>
          </div>
          <div className="bg-blue-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">

              <svg width={30} height={30} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>

            </div>
            <div className="text-right">
              <p className="text-2xl">{customer?.length}</p>
              <p>Người đi vay</p>
            </div>
          </div>
          <div className="bg-violet-600 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width={30} height={30} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">{contracts?.length + contractsMg?.length}</p>
              <p>Số Lượng Hợp Đồng</p>
            </div>
          </div>
          <div className="bg-orange-500 dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-blue-600 dark:border-gray-600 text-white font-medium group">
            <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
              <svg width={30} height={30} fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-blue-800 dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            </div>
            <div className="text-right">
              <p className="text-2xl">{admin?.length}</p>
              <p>Quản trị hệ thống</p>
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">
          {/* Social Traffic */}
          <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div className="rounded-t mb-0 px-0 border-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Danh sách người cho vay</h3>
                </div>
                <div className="relative w-full max-w-full flex-grow flex-1 text-right">
                  <button className="bg-blue-500 dark:bg-gray-100 text-white active:bg-blue-600 dark:text-gray-800 dark:active:text-gray-700 text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" type="button">All</button>
                </div>
              </div>
              <div className="block w-full overflow-x-auto">
                <table className="items-center w-full bg-transparent border-collapse">
                  <thead>
                    <tr>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">STT</th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Họ tên</th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Ngày tạo</th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">Trạng thái</th>
                      <th className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
                    </tr>
                  </thead>
                  <tbody>
                  {customer?.map((item:any,index) =>(
                    <tr key={index}className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 text-sm">{index + 1}</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">{item.name}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">{item.createdAt}</td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">{item.status ==true ? "Hoạt động" : "Khoá"}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                    
                    {/* <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 text-sm">2</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">Nguyễn Văn B</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">18/01/2002</td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">90%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div style={{ width: '90%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <a href=""> <td className="px-4 py-3 text-sm">Chi Tiết</td></a>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 text-sm">3</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">Nguyễn Văn C</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">18/01/2002</td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">60%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div style={{ width: '60%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <a href=""> <td className="px-4 py-3 text-sm">Chi Tiết</td></a>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                      <td className="px-4 py-3 text-sm">4</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">Nguyễn Văn D</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">18/01/2002</td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">80%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div style={{ width: '80%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <a href=""> <td className="px-4 py-3 text-sm">Chi Tiết</td></a>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400"> */}
                      {/* <td className="px-4 py-3 text-sm">5</td>
                      <td className="px-4 py-3">
                        <div className="flex items-center text-sm">
                          <div>
                            <p className="font-semibold">Nguyễn Văn E</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-sm">18/01/2002</td>
                      <td className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                        <div className="flex items-center">
                          <span className="mr-2">80%</span>
                          <div className="relative w-full">
                            <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
                              <div style={{ width: '80%' }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <a href=""> <td className="px-4 py-3 text-sm">Chi Tiết</td></a> */}
                    {/* </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* ./Social Traffic */}
          {/* Recent Activities */}
          <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
            <div className="rounded-t mb-0 px-0 border-0">
              <div className="flex flex-wrap items-center px-4 py-2">
                <div className="relative w-full max-w-full flex-grow flex-1">
                  <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Thống kê</h3>
                </div>

              </div>
              <div className="block w-full">
                <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Hôm nay
                </div>
                <ul className="my-1">
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                      <svg className="w-9 h-9 fill-current text-indigo-50" viewBox="0 0 36 36"><path d="M18 10c-4.4 0-8 3.1-8 7s3.6 7 8 7h.6l5.4 2v-4.4c1.2-1.2 2-2.8 2-4.6 0-3.9-3.6-7-8-7zm4 10.8v2.3L18.9 22H18c-3.3 0-6-2.2-6-5s2.7-5 6-5 6 2.2 6 5c0 2.2-2 3.8-2 3.8z" /></svg>
                    </div>

                    <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center">
                          <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style={{ outline: 'none' }}>Số lượt hỗ trợ</a>
                        </div>
                        <div className="self-center">
                          {contracts.length}
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <a className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" href="#0" style={{ outline: 'none' }}>
                            Chi Tiết<span><svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">

                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 fill-current text-indigo-50 p-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>


                    </div>
                    <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center">
                          <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style={{ outline: 'none' }}>Số khách đăng ký tài khoản</a>
                        </div>
                        <div className="self-center">
                          {customers?.length}
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <a className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" href="#0" style={{ outline: 'none' }}>
                            Chi Tiết<span><svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 fill-current text-indigo-50 p-1">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>
                    </div>
                    <div className="flex-grow flex items-center border-b border-gray-100 dark:border-gray-400 text-sm text-gray-600 dark:text-gray-100 py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center">
                          <a className="font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style={{ outline: 'none' }}>Số khách đăng ký cho vay</a>
                        </div>
                        <div className="self-center">
                          {lender?.length}
                        </div>
                        <div className="flex-shrink-0 ml-2">
                          <a className="flex items-center font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500" href="#0" style={{ outline: 'none' }}>
                            Chi Tiết<span><svg width={20} height={20} viewBox="0 0 20 20" fill="currentColor" className="transform transition-transform duration-500 ease-in-out"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg></span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
                <div className="px-4 bg-gray-100 dark:bg-gray-600 text-gray-500 dark:text-gray-100 align-middle border border-solid border-gray-200 dark:border-gray-500 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                  Hôm nay
                </div>
                <ul className="my-1">
                  <li className="flex px-4">
                    <div className="w-9 h-9 rounded-full flex-shrink-0 bg-indigo-500 my-2 mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-9 h-9 text-indigo-50 p-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>

                    </div>
                    <div className="flex-grow flex items-center border-gray-100 text-sm text-gray-600 dark:text-gray-50 py-2">
                      <div className="flex-grow flex justify-between items-center">
                        <div className="self-center">
                          <a className="text-xl font-bold font-medium text-gray-800 hover:text-gray-900 dark:text-gray-50 dark:hover:text-gray-100" href="#0" style={{ outline: 'none' }}>  Số Tiền Giải Ngân</a>
                        </div>
                        <div className="flex-shrink-0 ml-2 text-2xl font-semibold">
                          30000 VNĐ
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* ./Recent Activities */}
        </div>

      </div>

    </div>




  )
}

export default AdminDashboard