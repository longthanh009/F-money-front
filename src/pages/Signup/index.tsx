import React, { useState } from 'react'
import { Input, Button, Select, message, DatePicker, Checkbox, Form } from 'antd';
import { register } from './../../api/auth';
import { UploadOutlined } from '@ant-design/icons';
import { Space, Upload } from 'antd';
import { useNavigate } from 'react-router-dom';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { AddressValue } from '../../ultils/address';

const Option = Select;
const { RangePicker } = DatePicker;

const SignupPage = () => {
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

        //kiểm tra mật khẩu đã khớp chưa
        if (values.password === values.repassword) {

            //kiểm tra lại checked
            if (checked == true) {
                register(values)
                    .then(() => {
                        //Swal thông báo thành công
                        Swal.fire({
                            icon: 'success',
                            title: 'Đăng Ký Thành Công',
                            text: 'Vui lòng đăng nhập',
                            showConfirmButton: false,
                            timer: 1500
                        })
                        setTimeout(() => { navigate('/signin') }, 2000)
                    })
                    //kiểm tra các trường giữ liệu có tồn tại chưa
                    .catch(({ response }) =>
                        Swal.fire({
                            icon: 'warning',
                            title: response.data.message,
                        })
                        // message.error({ content: response.data.message })
                    )
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Bạn chưa đồng ý với điều khoản sử dụng',
                })
            }
        }
        //thông báo lỗi khi mật khẩu nhập lại không khớp
        else {
            //Swal thông báo lỗi
            Swal.fire({
                icon: 'error',
                title: 'Mật khẩu không khớp',
                text: 'Vui lòng nhập lại mật khẩu',
            })
        }
        console.log(values);
    };

    return (
        <div className='bg-gray-300 flex items-center justify-center min-h-[100vh]'>
            <div className='w-[700px] mx-auto bg-[white] py-[30px] shadow-lg px-[100px]'>
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

                        {/* <Form.Item name="birthDay"
                            rules={[{ required: true, type: "date", message: 'Vui lòng chọn ngày tháng năm sinh' }]}
                        >
                            <DatePicker placeholder="Ngày sinh" style={{ width: '100%' }} />
                        </Form.Item> */}

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

                        <div style={{ display: "flex" }}>
                            <Form.Item
                                name="password"
                                style={{ width: '50%' }}
                                rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' },
                                { min: 5, message: "Vui lòng nhập lớn hơn 5 kí tự" }]}
                            >
                                <Input.Password placeholder='Mật khẩu' />
                            </Form.Item>

                            <Form.Item
                                name="repassword"
                                style={{ width: '50%', paddingLeft: 5 }}
                                rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}
                            >
                                <Input.Password placeholder="Xác nhận mật khẩu" />
                            </Form.Item>
                        </div>

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
                            <Select placeholder="Tỉnh/Thành Phố">
                                {
                                    AddressValue?.map((item: any) => (
                                        <Option value={item.name}>{item.name}</Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>

                        <Form.Item name="role" rules={[{ required: true, message: 'Vui lòng chọn đối tượng' }]}>
                            <Select
                                placeholder="Vui lòng chọn đối tượng"
                                onChange={onChaneType}
                                allowClear
                            >
                                <Option value="0">Người đi vay</Option>
                                <Option value="1">Người cho Vay</Option>
                            </Select>
                        </Form.Item>
                        <Form.Item
                            noStyle
                            shouldUpdate={(prevValues, currentValues) => prevValues.role !== currentValues.role}
                        >
                            {({ getFieldValue }) =>
                                getFieldValue('role') === '1' ? (
                                    <>
                                        <Form.Item
                                            name="CCCD"
                                            rules={[{ required: true, message: 'Vui lòng nhập cccd' }]}
                                        >
                                            <Input placeholder="CCCD" />
                                        </Form.Item>

                                        <Form.Item
                                            name="money" display>
                                            <Input placeholder="1.000.000 VNĐ" disabled />
                                        </Form.Item>

                                        <p></p>
                                        {/* <p style={{ fontSize: "12px", fontStyle: "italic" }}>* Vui lòng tải lên hình ảnh CCCD/CMND</p> */}

                                        {/* <div style={{ width: '100%', display: 'flex', textAlign: 'center', marginBottom: 20 }}>
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
                                        </div> */}
                                    </>
                                ) : null
                            }
                        </Form.Item>
                        <div className='text-[12px]'>
                            <p>
                                <Checkbox onChange={onChange}>
                                    <label htmlFor=""> Tôi đồng ý với
                                        <a href='./src/assets/dieukhoansudung.pdf' className=' text-[12px] text-red-600 inline-block font-bold hover:text-red-500 ml-[4px]'>
                                            Điều khoản sử dụng </a>
                                    </label>
                                </Checkbox>
                            </p>
                        </div>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button className='w-[200px] font-bold' disabled={checked == false ? true : false} type="primary" htmlType="submit">
                                Đăng Ký
                            </Button>
                        </Form.Item>
                       
                        <div className='text-[12px]'>
                            <p className='italic'>
                                Bạn đã có tài khoản?
                                <Link to='/signin' className='text-red-600 font-bold hover:text-red-600'> Đăng Nhập </Link>
                            </p>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    )
}

export default SignupPage