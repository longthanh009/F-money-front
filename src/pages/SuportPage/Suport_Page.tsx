import React from 'react'

const Suport_Page = () => {
    return (
        <div className="relative sm:pt-0">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:gap-20">
                <div className="content text-center">
                    <p className="text-[10px] lg:text-[15px] xl:text-[20px] font-bold leading-tight mt-5 sm:mt-0 text-orange-600 ">
                        BẠN ĐĂNG CẦN VAY VỐN ? BẠN ĐANG CÓ NHỮNG THẮC MẮC VỀ CÁC KHOẢN VAY, HỒ SƠ VÀ LÃI SUẤT VAY ?
                    </p>
                    <p className="italic mt-5 text-[6px] lg:text-[10px] xl:text-[12px] ">
                        F-Money sẽ hỗ trợ giúp bạn giải đáp những thắc mắc của bạn.
                        <br />
                        Chúng tôi sẽ giúp bạn tìm những nhà cho vay uy tín hàng đầu thế giới với những lãi xuất thấp, thủ tục đơn giản, bảo mật tuyệt đối thông tin của bạn, hỗ trợ vay vốn lên đến 100 triệu đồng !!!
                    </p>
                    <img style={{ boxShadow: "1px 2px 3px #999999" }} src="./src/assets/image/client_homepage/banner_5.jpg" alt="" />
                </div>
                <div className="relative sm:mt-0 mt-10 px-6 sm:px-0">
                    < div className="flex pb-16 items-center justify-start bg-white" >
                        <div className="mx-auto">
                            <div className='text-center p-4'>
                                <h1 className="text-4xl font-medium p-8">THÔNG TIN CẦN HỖ TRỢ</h1>
                                <hr />
                                <p className="mt-3">Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ với bạn một cách sớm nhất!</p>
                                <p className="italic">(Bảo mật tuyệt đối thông tin của khách hàng)</p>
                            </div>
                            <form action="https://api.web3forms.com/submit" className="mt-6 max-w-lg mx-auto">
                                <input type="hidden" name="access_key" defaultValue="YOUR_ACCESS_KEY_HERE" />
                                <div className="grid gap-6 sm:grid-cols-2 pb-6">
                                    <div className="relative z-0">
                                        <input type="text" name="name" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Họ Và Tên:</label>
                                    </div>
                                    <div className="relative z-0">
                                        <input type="text" name="number" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Ước tính khoản vay:</label>
                                    </div>
                                    <div className="relative z-0">
                                        <input type="text" name="email" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Email:</label>
                                    </div>
                                    <div className="relative z-0">
                                        <input type="text" name="phone" className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Số Điện thoại:</label>
                                    </div>

                                    <div className="relative z-0 col-span-2">
                                        <textarea name="message" rows={5} className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0" placeholder=" " defaultValue={""} />
                                        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">Lý do cần hỗ trợ: </label>
                                    </div>
                                </div>
                                <div className="mx-auto p-1 button w-40 h-10 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                                    <button type='submit' className="flex flex-col mx-auto items-center h-full text-white font-bold text-lg ">Đăng Ký Ngay </button>
                                </div>
                            </form>
                        </div>
                    </div >
                </div>

            </div>
        </div>
    )
}

export default Suport_Page