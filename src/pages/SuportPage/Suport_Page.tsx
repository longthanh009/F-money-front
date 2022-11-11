import React from 'react'

const Suport_Page = () => {
    return (
        < div className="flex pb-16 items-center justify-start bg-white" >
            <div className="mx-auto w-full max-w-lg">
                <div className='text-center p-4'>
                    <h1 className="text-4xl font-medium">THÔNG TIN CẦN HỖ TRỢ</h1>
                    <hr />
                    <p className="mt-3">Hãy để lại thông tin của bạn, chúng tôi sẽ liên hệ với bạn một cách sớm nhất!</p>
                    <p className="italic">(Bảo mật tuyệt đối thông tin của khách hàng)</p>
                </div>
                <form action="https://api.web3forms.com/submit" className="mt-6">
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
    )
}

export default Suport_Page