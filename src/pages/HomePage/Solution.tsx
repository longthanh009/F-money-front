import React from 'react'

const Solution = () => {
    return (
        <>
            {/**Giải pháp đáng tin cậy */}
            <div className="flex flex-col p-12 bg-gray-100">
                <div className='text-center'>
                    <h2 className="mb-4 text-3xl font-bold text-orange-600">F-MONEY - GIẢI PHÁP TÀI CHÍNH ĐÁNG TIN CẬY</h2>
                    <p className='text-base'>Trải nghiệm dịch vụ hỗ trợ, tìm kiếm các nhà cho vay vốn hoàn toàn mới với hệ thống giao dịch trên toàn quốc.</p>
                </div>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <div className="bg-white p-4 shadow-lg flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:scale-105">
                        <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-red-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                            </svg></span>
                        <strong className="mt-2 text-lg text-gray-900 font-semibold">700+ Giao dịch toàn quốc</strong>
                    </div>
                    <div className="bg-white p-4 shadow-lg flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:scale-105">
                        <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-red-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 15.75l-2.489-2.489m0 0a3.375 3.375 0 10-4.773-4.773 3.375 3.375 0 004.774 4.774zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg></span>
                        <strong className="mt-2 text-lg text-gray-900 font-semibold">Tìm Kiếm giao dịch nhanh</strong>
                    </div>


                    <div className="bg-white p-4 shadow-lg flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:scale-105">
                        <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-red-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg></span>
                        <strong className="mt-2 text-lg text-gray-900 font-semibold">Hợp đồng minh bạch</strong>
                    </div>
                    <div className="bg-white p-4 shadow-lg flex flex-col items-center text-center group md:lg:xl:border-r md:lg:xl:border-b hover:scale-105">
                        <span className="p-5 rounded-full bg-orange-500 text-white shadow-lg shadow-red-200">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z" />
                            </svg></span>
                        <strong className="mt-2 text-lg text-gray-900 font-semibold">Bảo mật thông tin</strong>
                    </div>

                </div>
            </div>
            {/**Banner */}
            <div>
                <img src="https://www.vaytiennongnhanhtphcm.com/wp-content/uploads/2021/10/home-web-banner-2.jpg" alt="" />
            </div>


        </>
    )
}

export default Solution