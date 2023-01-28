import React from 'react'
import { createSp } from '../../api/supportCs';
import { Button, Checkbox, Form, Input } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { Navigate, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Suport_Page = () => {
    const Navigate = useNavigate();
    const onFinish = (values: any) => {
        createSp(values);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Yêu cầu hỗ trợ đã được ghi nhận',
            text: "Cảm ơn bạn đã liên hệ với chúng tôi, chúng tôi sẽ liên hệ sớm lại cho bạn.",
            showConfirmButton: false,
            width: 700,
            timer: 1500
        })
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

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
                            <Form
                                name="basic"

                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item

                                    name="ho_ten"
                                    rules={[{ required: true, message: 'Vui lòng nhật đầy đủ thông tin họ tên' }]}
                                >
                                    <Input placeholder='Họ và tên:' />
                                </Form.Item>

                                <Form.Item

                                    name="dien_thoai"
                                    rules={[{ required: true, message: 'Vui lòng nhật đầy đủ thông tin số điện thoại' }, {
                                        pattern: new RegExp(/((9|3|7|8|5)+([0-9]{8})\b)/g),
                                        message: "Số điện thoại không đúng định dạng!"
                                    }]}
                                >
                                    <Input placeholder='Số điện thoại:' />
                                </Form.Item>
                                <Form.Item

                                    name="email"
                                    rules={[{ required: true, message: 'Vui lòng nhật đầy đủ thông tin email' }, { type: 'email', message: 'Vui lòng nhập đúng định dạng email' }]}
                                >
                                    <Input placeholder='Email:' />
                                </Form.Item>

                                <Form.Item name="ghi_chu">
                                    <TextArea rows={4} placeholder="Lí do cần hỗ trợ:" />
                                </Form.Item>

                                <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
                                    <div className="mx-auto p-1 button w-20 h-10 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                                        <button type="primary" htmlType="submit" className="flex flex-col mx-auto items-center h-full text-white font-bold text-lg ">Gửi</button>
                                    </div>
                                </Form.Item>
                            </Form>
                        </div>
                    </div >
                </div>
            </div>

        </div>
    )
}

export default Suport_Page