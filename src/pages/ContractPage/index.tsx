import React, { useState } from 'react'
import { Input, Select, DatePicker, Form, message } from 'antd';
import { useNavigate } from 'react-router-dom';
import Banner from './../HomePage/Banner';
import Swal from 'sweetalert2'
const Option = Select;
const { RangePicker } = DatePicker;
import { createMenuLoan } from '../../api/menuLoan';
import Solution from './../HomePage/Solution';
import { AddressValue } from '../../ultils/address';
const ContractPage = () => {
    const [type, setType] = useState(1)
    //checked đồng ý điều khoản
    const { TextArea } = Input;

    //navigate chuyển trang khi thêm thành công
    const navigate = useNavigate();

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    //onFinish kiểm tra đăng ký và thêm dữ liệu
    const onFinish = (values: any) => {
        createMenuLoan(values);
        console.log(values)
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Đơn đăng ký đã được ghi nhận',
            text: "Vui lòng nghe máy khi có nhân viên tư vấn liên lạc trong vòng 15 phút tới.",
            showConfirmButton: false,
            timer: 3000,
            width: 700,
        })
        setTimeout(() => { navigate('/') }, 3000)
    }
    return (
        <>
            <Banner />
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
                                name="ho_ten"
                                rules={[{ required: true, message: 'Vui lòng nhập họ tên' }]}
                            >
                                <Input placeholder='Họ Và Tên' />
                            </Form.Item>
                            <Form.Item
                                name="dien_thoai"
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
                                name="dia_chi"
                                rules={[{ required: true, message: 'Vui lòng nhập địa chỉ' }]}
                            >
                                <Select placeholder="Tỉnh/Thành Phố">
                                    {
                                        AddressValue?.map((item: any) => (
                                            <Option value={item.name}>{item.name}</Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>

                            <Form.Item name="tien_vay" rules={[{ required: true, message: 'Vui lòng nhập số tiền muốn vay' }]} label="Số tiền muốn vay ">
                                <Input type='number' placeholder="1.000.000 VNĐ" />
                            </Form.Item>
                            <Form.Item name="ghi_chu" label="Ghi chú:">
                                <TextArea rows={4} />
                            </Form.Item>

                            <div className=" mx-auto button w-36 h-10 bg-orange-500  cursor-pointer select-none hover:translate-y-2  hover:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] active:border-b-[0px] transition-all duration-150 [box-shadow:0_4px_0_0_#1b6ff8,0_10px_0_0_#1b70f841] rounded-full  border-[1px] border-orange-400">
                                <button><span className=" pl-8 p-1 flex flex-col justify-center items-center h-full text-white font-bold text-lg ">Xác Nhận</span></button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
            <hr />
            <Solution />
        </>
    )
}

export default ContractPage