import React from "react";
import FomatNumber from "../../FomatNumber/fomatNumber";

function DashboardCard06({ tragop, tienlaiTraGop }: any) {
  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200">
      <header className="px-5 py-4 border-b border-slate-100">
        <h2 className="font-semibold text-slate-800">Biểu Đồ Cột</h2>
      </header>

      <div className="flex flex-col items-center w-full max-w-screen-md p-6 pb-6 bg-white rounded-lg sm:p-8">
        <h2 className="text-xl font-bold">Lãi Xuất Theo Tuần</h2>
        <span className="text-sm font-semibold text-gray-500">2022</span>
        <div className="-mx-2 md:flex">
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 leading-tight">
                    Tiền Cho vay
                  </h4>
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                    <FomatNumber number={tragop} />
                  </h3>
                  <p className="text-xs text-green-500 leading-tight">
                    ▲ 57.1%
                  </p>
                </div>
                <div className="absolute bottom-0 inset-x-0">
                  <canvas id="chart1" height="70"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 leading-tight">
                    Nợ Xấu
                  </h4>
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                    11,427
                  </h3>
                  <p className="text-xs text-red-500 leading-tight">▼ 42.8%</p>
                </div>
                <div className="absolute bottom-0 inset-x-0">
                  <canvas id="chart2" height="70"></canvas>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-2">
            <div className="rounded-lg shadow-sm mb-4">
              <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
                <div className="px-3 pt-8 pb-10 text-center relative z-10">
                  <h4 className="text-sm uppercase text-gray-500 leading-tight">
                    Tiền Lãi
                  </h4>
                  <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
                    <FomatNumber number={tienlaiTraGop} />
                  </h3>
                  <p className="text-xs text-green-500 leading-tight">▲ 8.2%</p>
                </div>
                <div className="absolute bottom-0 inset-x-0">
                  <canvas id="chart3" height="70"></canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div
    //   className="flex flex-col sm:col-span-6 bg-white shadow-lg rounded-sm border border-slate-200 "
    //   style={{ height: "auto" }}
    // >
    //   <header className="px-5 py-4 border-b border-slate-100">
    //     <h2 className="font-semibold text-slate-800">Lãi Xuất Theo Tuần</h2>
    //   </header>
    //   <div className="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
    //     <div className="w-full max-w-3xl">
    //       <div className="-mx-2 md:flex">
    //         <div className="w-full md:w-1/3 px-2">
    //           <div className="rounded-lg shadow-sm mb-4">
    //             <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
    //               <div className="px-3 pt-8 pb-10 text-center relative z-10">
    //                 <h4 className="text-sm uppercase text-gray-500 leading-tight">
    //                   Tiền Cho vay
    //                 </h4>
    //                 <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
    //                   <FomatNumber number={tragop} />
    //                 </h3>
    //                 <p className="text-xs text-green-500 leading-tight">
    //                   ▲ 57.1%
    //                 </p>
    //               </div>
    //               <div className="absolute bottom-0 inset-x-0">
    //                 <canvas id="chart1" height="70"></canvas>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full md:w-1/3 px-2">
    //           <div className="rounded-lg shadow-sm mb-4">
    //             <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
    //               <div className="px-3 pt-8 pb-10 text-center relative z-10">
    //                 <h4 className="text-sm uppercase text-gray-500 leading-tight">
    //                   Nợ Xấu
    //                 </h4>
    //                 <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
    //                   11,427
    //                 </h3>
    //                 <p className="text-xs text-red-500 leading-tight">
    //                   ▼ 42.8%
    //                 </p>
    //               </div>
    //               <div className="absolute bottom-0 inset-x-0">
    //                 <canvas id="chart2" height="70"></canvas>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="w-full md:w-1/3 px-2">
    //           <div className="rounded-lg shadow-sm mb-4">
    //             <div className="rounded-lg bg-white shadow-lg md:shadow-xl relative overflow-hidden">
    //               <div className="px-3 pt-8 pb-10 text-center relative z-10">
    //                 <h4 className="text-sm uppercase text-gray-500 leading-tight">
    //                   Tiền Lãi
    //                 </h4>
    //                 <h3 className="text-3xl text-gray-700 font-semibold leading-tight my-3">
    //                   <FomatNumber number={tienlaiTraGop} />
    //                 </h3>
    //                 <p className="text-xs text-green-500 leading-tight">
    //                   ▲ 8.2%
    //                 </p>
    //               </div>
    //               <div className="absolute bottom-0 inset-x-0">
    //                 <canvas id="chart3" height="70"></canvas>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex items-end justify-end fixed bottom-0 right-0 mb-4 mr-4 z-10">
    //     <div>
    //       <a
    //         title="Buy me a beer"
    //         href="https://zalo.me/0386300092"
    //         target="_blank"
    //         className="block w-16 h-16 rounded-full transition-all shadow hover:shadow-lg transform hover:scale-110 hover:rotate-12"
    //       >
    //         <img
    //           className="object-cover object-center w-full h-full rounded-full"
    //           src="./src/assets/zalo-icon.png"
    //         />
    //       </a>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DashboardCard06;
