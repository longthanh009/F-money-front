import React, { useEffect, useState } from 'react'
import { Input, Button, Select, DatePicker, Form, Checkbox } from 'antd';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import useSWR from 'swr';
import { getAll } from '../../features/auth/authSlice';
import { updateUser } from '../../api/user';
import moment from 'moment';
import Swal from 'sweetalert2';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

const Option = Select;
const { RangePicker } = DatePicker;

const accountClient = () => {
    const [type, setType] = useState(1)
    const [form] = Form.useForm()
    const [checked, setChecked] = useState(false)
    const onChange = (e: CheckboxChangeEvent) => {
        setChecked(e.target.checked)
    };
    const navigate = useNavigate();

    const onChaneType = (e: any) => {
        setType(parseInt(e))
    }

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    const dispatch = useAppDispatch()
    const { id } = useParams();
    const { users } = useAppSelector(state => state.auth)
    const data = users?.find((item: any) => item._id === id)
    // console.log("users", data);
    useEffect(() => {
        dispatch(getAll())
        form.setFieldsValue({
            ...data,
            birthDay: moment(data?.birthDay)
        })

    }, [])


    const onFinish = (values: any) => {
        values._id = id
        if (values.password === values.repassword) {
            if (checked == true) {
                values.birthDay = new Date(moment(values.birthDay).format())
                console.log(values);
                updateUser(values)
                Swal.fire({
                    icon: 'success',
                    title: 'Cập thật thành công',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Bạn chưa đồng ý với điều khoản sử dụng',
                })
            }
        } else {
            //Swal thông báo lỗi
            Swal.fire({
                icon: 'error',
                title: 'Mật khẩu không khớp',
                text: 'Vui lòng nhập lại mật khẩu',
            })
        }

    };

    return (
        <div className='bg-gray-100 flex px-72 pt-8 pb-8 min-h-[85vh]'>
            <div className='w-[700px] mx-auto bg-[white] py-[30px] shadow-lg px-[100px]'>
                <h1 className='text-[30px]  mb-[10px] font-bold'>Cài đặt thông tin</h1>
                <div>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        form={form}
                    >
                        Họ và Tên: <Form.Item
                            name="name"
                            rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                        >
                            <Input placeholder='Họ Và Tên' />
                        </Form.Item>

                        Ngày sinh:<Form.Item name="birthDay"
                            rules={[{ required: true, type: "date", message: 'Vui lòng chọn ngày tháng năm sinh' }]}
                        >
                            <DatePicker placeholder="Ngày sinh" style={{ width: '100%' }} />
                        </Form.Item>

                        Email: <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Vui lòng nhập email' },
                            { type: 'email', message: 'Vui lòng nhập đúng định dạng email' }]}
                        >
                            <Input placeholder='Email' />
                        </Form.Item>

                        Tài khoản: <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Vui lòng nhập tài khoản' }]}
                        >
                            <Input placeholder="Tài khoản" />
                        </Form.Item>

                        Số điện thoại: <Form.Item
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

                        Tỉnh/Thành Phố: <Form.Item
                            name="address"
                            rules={[{ required: true, message: 'Vui lòng nhập chi tiết địa chỉ' }]}
                        >
                            <Input placeholder="Địa chỉ" />
                        </Form.Item>

                        Mật khẩu: <div style={{ display: "flex" }}>
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
                        <div className='text-[12px]'>
                            <p>
                                <Checkbox onChange={onChange}>
                                    <label className='text-red-500' htmlFor=""> Xác nhận </label>
                                </Checkbox>
                            </p>
                        </div>
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                            <Button className='w-[200px] font-bold' disabled={checked == false ? true : false} type="primary" htmlType="submit">
                                Cập nhật
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
            </div>

        </div>
    )
}

export default accountClient