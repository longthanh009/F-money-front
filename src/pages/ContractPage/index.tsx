import React, { useState } from 'react'
import { Input, Select, DatePicker, Form} from 'antd';
import { useNavigate } from 'react-router-dom';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Banner from './../HomePage/Banner';
import Service from './../HomePage/Service';

const Option = Select;
const { RangePicker } = DatePicker;

const ContractPage = () => {
    const [type, setType] = useState(1)
    //checked đồng ý điều khoản
    const [checked, setChecked] = useState(false)
    const onChange = (e: CheckboxChangeEvent) => {
        setChecked(e.target.checked)
    };


    //navigate chuyển trang khi thêm thành công
    const navigate = useNavigate();

    const onChaneType = (e: any) => {
        setType(parseInt(e))
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    //onFinish kiểm tra đăng ký và thêm dữ liệu
    const onFinish = (values: any) => {
        setTimeout(() => { navigate('/signin') }, 2000)
    };

    return (
       <>
       <Banner />
       <Service />
        <div className='bg-gray-100 flex items-center justify-center p-8'>
            <div className='w-[700px] mx-auto bg-[white] py-[50px] shadow-lg px-[50px]'>
                <div>
                    <h1 className='text-3xl text-center mt-[10px] mb-[10px] font-bold'>TẠO YÊU CẦU ĐĂNG KÝ VAY VỐN</h1>
                    <p className='text-center text-[16px] italic'>Nhập đầy đủ và chính xác thông tin</p>
                </div>

                <div>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                        >
                            <Input placeholder='Họ Và Tên' />
                        </Form.Item>
                        <Form.Item
                            name="gender"
                            rules={[{ required: true, message: 'Please select gender!' }]}
                        >
                            <Select placeholder="Giới Tính">
                                <Option value="nam">Nam</Option>
                                <Option value="nu">Nữ</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="birthDay"
                            rules={[{ required: true, type: "date", message: 'Vui lòng chọn ngày tháng năm sinh' }]}
                        >
                            <DatePicker placeholder="Ngày sinh" style={{ width: '100%' }} />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập email' },
                            { type: 'email', message: 'Vui lòng nhập đúng định dạng email' }]}
                        >
                            <Input placeholder='Email' />
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' },
                            {
                                pattern: new RegExp(/((9|3|7|8|5)+([0-9]{8})\b)/g),
                                message: "Số điện thoại không đúng định dạng!"
                            }]
                            }
                        >
                            <Input placeholder="Số điện thoại" />
                        </Form.Item>

                        <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Vui lòng nhập chi tiết địa chỉ' }]}
                        >
                            <Input placeholder="Địa chỉ" />
                        </Form.Item>
                        <Form.Item
                            name="CCCD"
                            rules={[{ required: true, message: 'Vui lòng nhập cccd' }]}
                        >
                            <Input placeholder="CCCD" />
                        </Form.Item>

                        <Form.Item
                            name=""
                            rules={[{ required: true, message: 'Vui lòng chọn' }]}
                        >
                            <Select placeholder="Bạn muốn vay bằng:">
                                <Option value="male">Đăng ký xe máy</Option>
                                <Option value="female">Đăng ký ô tô</Option>
                                <Option value="other">Thế chấp</Option>
                                <Option value="other">Trả góp</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item name="money" rules={[{ required: true, message: 'Please select gender!' }]} label="Số tiền muốn vay ">
                            <Input type='number' placeholder="CCCD" />
                        </Form.Item>

                        <div className=" mx-auto button w-36 h-10 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                            <button><span className=" pl-8 p-1 flex flex-col justify-center items-center h-full text-white font-bold text-lg ">Xác Nhận</span></button>
                        </div>

                    </Form>
                </div>
            </div>
        </div>
       </>
    )
}

export default ContractPage