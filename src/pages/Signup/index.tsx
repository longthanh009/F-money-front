import React, { useState } from 'react'
import { Input, Button, Select } from 'antd';
const SignupPage = () => {
    const [type, setType] = useState(1)
    const onChaneType = (e: any) => {
        setType(parseInt(e))
    }
    return (
        <div className='bg-gray-300 flex items-center justify-center min-h-[100vh]'>
            <div className='w-[700px] mx-auto bg-[white] py-[60px] shadow-lg px-[100px]'>
                <div className="logo">
                    <img className='mx-auto' src="https://res.cloudinary.com/df4kjrav4/image/upload/v1664807518/Rectangle_36_e9z7jl.png" alt="" width="300px" />
                </div>
                <h1 className='text-[22px] text-center mt-[40px] mb-[10px]'>Đăng ký tạo tài khoản</h1>
                <p className='text-center text-[18px]'>Nhập đầy đủ thông tin để khởi tạo tài khoản của bạn</p>
                <div>
                    <form action="">
                        <div className='mb-[20px]'>
                            <Input placeholder="Email" />
                            <label htmlFor=""></label>
                        </div>
                        <div className='mb-[20px]'>
                            <Input placeholder="Họ tên" />
                            <label htmlFor=""></label>
                        </div>
                        <div className='mb-[20px]'>
                            <Input placeholder="Tên đăng nhập" />
                            <label htmlFor=""></label>
                        </div>
                        <div className='mb-[20px]'>
                            <Input type='password' placeholder="Mật khẩu" />
                            <label htmlFor=""></label>
                        </div>
                        <div className='mb-[20px]'>
                            <Input type='password' placeholder="Xác nhận mật khẩu" />
                            <label htmlFor=""></label>
                        </div>
                        <div className='mb-[20px]'>
                            <Select onChange={(e) => onChaneType(e)} className='w-[100%]' defaultValue="1" style={{ width: 500 }}>
                                <option value="1">Người đi vay</option>
                                <option value="2">Người có nhu cầu cho vay</option>
                            </Select>
                        </div>
                        {type == 2 &&
                            <div>
                                <div className='mb-[20px]'>
                                    <Input type='password' placeholder="Điện thoại liên lạc" />
                                    <label htmlFor=""></label>
                                </div>
                                <div className='mb-[20px]'>
                                    <Input disabled type='text' placeholder="Code" />
                                    <label htmlFor=""></label>
                                </div>
                            </div>

                        }

                        <div className='flex justify-between'>
                            <p>
                                <input type="checkbox" />
                                <label htmlFor="">Tôi đồng ý với <a className='text-red-600 inline-block font-bold hover:text-red-600 ml-[5px]'>Điều khoản sử dụng</a></label>
                            </p>
                            <p>
                                Bạn đã có tài khoản ? <a className='text-red-600 font-bold hover:text-red-600'>Đăng nhập ngay</a>
                            </p>
                        </div>
                        <div className='flex justify-between'>
                            <Button className='w-[200px]' type="primary">Đăng ký ngay</Button>
                            <Button type="primary" danger>Huỷ</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage