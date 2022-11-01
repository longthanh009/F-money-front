import React from 'react'
import { UserOutlined, EditOutlined } from '@ant-design/icons';
import { Input, Button } from 'antd';
import { Link } from 'react-router-dom';
const SiginPage = () => {
	return (
		<div className='bg-gray-300 flex items-center justify-center h-[100vh]'>
			<div className='flex w-[900px] mx-auto bg-[white] py-[60px] shadow-lg'>
				<div className='w-[100%] px-[30px] md:w-[50%]'>
					<div className="logo">
						<img className='mx-auto' src="https://res.cloudinary.com/df4kjrav4/image/upload/v1664807518/Rectangle_36_e9z7jl.png" alt="" width="300px" />
					</div>
					<h1 className='text-[18px] text-center mt-[50px] mb-[20px]'>Đăng nhập vào hệ thông</h1>
					<div>
						<form action="">
							<div>
								<Input size="large" placeholder="Tên đăng nhập" prefix={<UserOutlined />} />
							</div>
							<div className='mt-[20px] mb-[20px]'>
								<Input type='password' size="large" placeholder="Mật khẩu" prefix={<EditOutlined />} />
							</div>
							<div className='flex justify-between mb-[40px]'>
								<label htmlFor="">
									<input type="checkbox" id='checkboxGn'/>
									<label className='ml-[5px]' htmlFor="checkboxGn">Ghi nhớ</label>
								</label>
								<Link to ="" className='text-black hover:text-red-500'>Quên mật khẩu</Link>
							</div>
							<Button className='w-[100%] rounded bg-orange-500 text-[20px]' type="primary" danger>Đăng Nhập</Button>
						</form>
						<p className='text-center mt-[5px]'>Bạn chưa có tài khoản ? <span className='text-red-700'><a href="/register">Đăng ký ngay</a></span></p>
					</div>
				</div>
				<div className='hidden w-[50%] md:block'>
					<div className='px-[20px]'>
						<h2 className='text-[19px] text-center text-orange-500 mb-[20px]'>Chào mừng bạn đã đến với F-MONEY
							nơi cung cấp các nhà cho vay vốn uy tín hàng đầu</h2>
						<img className='w-full' src="https://res.cloudinary.com/df4kjrav4/image/upload/v1660550665/cld-sample.jpg" alt="" />
						<p className='text-center mt-[30px]'>© Copyright 2022 F-Money - Website hỗ trợ vay vốn đầu tư hàng đầu thế Giới</p>
					</div>
				</div>
			</div>
		</div>

	)
}

export default SiginPage