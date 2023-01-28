import React, { useEffect, useState } from 'react'
import { Input, Button, Select, DatePicker, Form, message } from 'antd';
import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import useSWR from 'swr';
import { getAll, login } from '../../features/auth/authSlice';
import { updateUser } from '../../api/user';
import moment from 'moment';
import Swal from 'sweetalert2';
import useLender from '../../hook/usersHomePage';
import { logout } from '../../api/auth';

const Option = Select;
const { RangePicker } = DatePicker;

const Passwword = () => {
    const [type, setType] = useState(1)
    const [form] = Form.useForm()

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
    }, [])



    const onFinish = async (values: any) => {
        values._id = id
        const user = {
            username: data.username,
            password: values.passwordOld
        }

        const { payload } = await dispatch(login(user));
        if (payload.error) {
            Swal.fire({
                icon: 'error',
                title: "Mật khẩu sai"
            })
        } else {
            if (values.password === values.repasswords) {
                updateUser({ _id: id, password: values.password });
                Swal.fire({
                    icon: 'success',
                    title: 'Đổi mật khẩu thành công',
                    showConfirmButton: false,
                    timer: 1500
                })
                setTimeout(() => { navigate('/') }, 2000)

            } else {
                Swal.fire({
                    icon: 'error',
                    title: "Mật khẩu không khớp"
                })
            }

        }

    };

    return (
        <div className='bg-gray-100 flex px-72 pt-8 pb-8 min-h-[85vh]'>
            <div className='w-[700px] mx-auto bg-[white] py-[30px] shadow-lg px-[100px]'>
                <h1 className='text-[30px]  mb-[10px] font-bold'>Đổi tài khoản mật khẩu</h1>
                <div>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                        form={form}
                    >

                        Mật khẩu cũ: <Form.Item
                            name="passwordOld"

                            rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' },
                            { min: 5, message: "Vui lòng nhập lớn hơn 5 kí tự" }]}
                        >
                            <Input.Password placeholder='Mật khẩu cũ' />
                        </Form.Item>

                        Mật khẩu mới: <Form.Item
                            name="password"

                            rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}
                        >
                            <Input.Password placeholder="Mật khẩu mới" />
                        </Form.Item>
                        Xác nhận mật khẩu: <Form.Item
                            name="repasswords"

                            rules={[{ required: true, message: 'Vui lòng nhập lại mật khẩu' }]}
                        >
                            <Input.Password placeholder="Xác nhận mật khẩu mới" />
                        </Form.Item>
                        <Form.Item wrapperCol={{ offset: 4, span: 16 }}>
                            <div className=" mx-auto p-1 button w-40 h-10 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                                <button className="flex flex-col mx-auto items-center h-full text-white font-bold text-lg"> Xác nhận </button>
                            </div>
                        </Form.Item>

                    </Form>
                </div>
            </div>

        </div>
    )
}

export default Passwword