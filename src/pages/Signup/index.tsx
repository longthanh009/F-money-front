import React, { useState } from 'react'
import { Input, Button, Select, message } from 'antd';
import { Checkbox, Form } from 'antd';
import { register } from './../../api/auth';
import { UploadOutlined } from '@ant-design/icons';
import { Space, Upload } from 'antd';
import { useNavigate } from 'react-router-dom';
const Option = Select;


const SignupPage = () => {
    const [type, setType] = useState(1)
    const navigate = useNavigate();
    const onChaneType = (e: any) => {
        setType(parseInt(e))
    }
    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const onFinish = (values: any) => {
        if (values.password === values.repassword) {
            register(values)
                .then(() => {
                    message.success({ content: "Thành công" })
                    navigate('/signin');
                })
                .catch(({ response }) => message.error({ content: response.data.message })
                )
        } else {
            message.error({ content: "Mật khẩu không khớp" });
        }
        console.log(values);

    };

    return (
        <div className='bg-gray-300 flex items-center justify-center min-h-[100vh]'>
            <div className='w-[700px] mx-auto bg-[white] py-[60px] shadow-lg px-[100px]'>
                <div className="logo">
                    <img className='mx-auto' src="https://res.cloudinary.com/df4kjrav4/image/upload/v1664807518/Rectangle_36_e9z7jl.png" alt="" width="300px" />
                </div>
                <h1 className='text-[22px] text-center mt-[40px] mb-[10px] font-bold'>ĐĂNG KÝ TẠO TÀI KHOẢN</h1>
                <p className='text-center text-[16px] italic'>Nhập đầy đủ thông tin để khởi tạo tài khoản của bạn</p>
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
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập email' }, 
                            { type: 'email', message: 'Vui lòng nhập đúng định dạng email' }]}
                        >
                            <Input placeholder='Email' />
                        </Form.Item>

                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập tài khoản' }]}
                        >
                            <Input placeholder="Tài khoản" />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }, 
                            {min:5, message: "Vui lòng nhập lớn hơn 5 kí tự"}]}
                        >
                            <Input.Password placeholder='Mật khẩu' />
                        </Form.Item>

                        <Form.Item
                            name="repassword"
                            rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}
                        >
                            <Input.Password placeholder="Xác nhận mật khẩu" />
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

                        <Form.Item name="role" rules={[{ required: true, message: 'Vui lòng chọn đối tượng' }]}>
                            <Select
                                placeholder="Vui lòng chọn đối tượng"
                                onChange={onChaneType}
                                allowClear
                            >
                                <Option value="userCustomer">Người đi vay</Option>
                                <Option value="userLender">Người cho Vay</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.role !== currentValues.role}
                        >
                            {({ getFieldValue }) =>
                                getFieldValue('role') === 'userLender' ? (
                                    <>
                                        <Form.Item
                                            name="CCCD"
                                            rules={[{ required: true, message: 'Vui lòng nhập cccd' }]}
                                        >
                                            <Input placeholder="CCCD" />
                                        </Form.Item>

                                        <p style={{ fontSize: "12px", fontStyle: "italic" }}>* Vui lòng tải lên hình ảnh CCCD/CMND</p>

                                        <div style={{ width: '100%', display: 'flex', textAlign: 'center', marginBottom: 20 }}>
                                            <Space direction="vertical" style={{ width: '49%', padding: 5 }} size="large">
                                                <Upload
                                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                    listType="picture"
                                                    maxCount={1}
                                                >
                                                    <Button icon={<UploadOutlined />}>Upload (Mặt trước)</Button>
                                                </Upload>
                                            </Space>

                                            <Space direction="vertical" style={{ width: '49%', padding: 5 }} size="large">
                                                <Upload
                                                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
                                                    listType="picture"
                                                    maxCount={1}
                                                    multiple
                                                >
                                                    <Button icon={<UploadOutlined />}>Upload (Mặt sau)</Button>
                                                </Upload>
                                            </Space>
                                        </div>
                                    </>
                                ) : null
                            }
                        </Form.Item>
                        <div className='flex justify-between'>
                            <p>
                                <input type="checkbox" />
                                <label htmlFor=""> Tôi đồng ý với <a className='text-red-600 italic inline-block font-bold hover:text-red-600 ml-[5px]'> Điều khoản sử dụng </a></label>
                            </p>
                            <p>
                                Bạn đã có tài khoản?
                                <a href='/signin' className='text-red-600 font-bold hover:text-red-600'> Đăng nhập ngay </a>
                            </p>
                        </div>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button className='w-[200px]' type="primary" htmlType="submit">
                                Đăng Ký Ngay
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage